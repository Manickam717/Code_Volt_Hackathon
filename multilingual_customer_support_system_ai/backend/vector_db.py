from langchain_community.document_loaders import PyPDFLoader 
from langchain_text_splitters import RecursiveCharacterTextSplitter 
from encoder import Encoder_obj
import numpy as np 
import os


class VectorDB : 

  def __init__(self ,document_link ,k ,min_similarity ):
    assert isinstance(document_link,str) ,"document link must be a string"
    
    if os.path.exists( document_link ):
      self.avl = True 
      self.text_splitter = RecursiveCharacterTextSplitter( separators = [ "\n\n" ,"." ] ,chunk_size = 500, chunk_overlap = 100)
      self.encoder = Encoder_obj
      self.__load_split_document(document_link)
      self.__encode_chunks()
      self.min_similarity = min_similarity
      self.k = k
    else:
      self.avl = False  
  
  def __load_split_document(self ,document_link):
    pages = PyPDFLoader(document_link).load_and_split()
    output = self.text_splitter.split_documents(pages)
    self.chunks = [ ]
    for out in output : 
      self.chunks.append( out.page_content )
  
  def __encode_chunks(self):
    self.embeddings = self.encoder.encode( self.chunks )
  
  def __cosine_similarity(self ,vector, vectors_list):
    assert isinstance(vector ,np.ndarray) and isinstance(vectors_list ,np.ndarray) ,"vector, vectors_list should np array"
    assert vector.shape[0] == vectors_list.shape[1] ,"embeddings size mismatch"
    dot_product = np.dot(vectors_list, vector)
    norm_vector = np.linalg.norm(vector)
    norm_vectors = np.linalg.norm(vectors_list, axis=1)
    similarity = dot_product / (norm_vectors * norm_vector)
    return similarity
  
  def semantic_search(self ,query):
    if not self.avl :
      return "No knowledge base available "
    query_embedding = self.encoder.encode( [query] )[0]
    similarity = self.__cosine_similarity( query_embedding ,self.embeddings )
    print("similaruty : " ,similarity)

    index_grt_min = np.where(similarity > self.min_similarity)[0]
    desc_sort = np.argsort( similarity[index_grt_min] )[ : : -1][ : self.k ]
     
    text = ""
    for ind in index_grt_min[desc_sort]:
      text = text + self.chunks[ind] + "\n\n"
    
    return text