from sentence_transformers import SentenceTransformer

class Encoder : 

  def __init__(self):
    self.encoder_link = "sentence-transformers/all-mpnet-base-v2"
    self.model = SentenceTransformer( self.encoder_link )

  def encode(self ,sentences:list ):
    assert isinstance(sentences ,list) ,"sentences provided must be a list" 
    return self.model.encode( sentences )
  
Encoder_obj = Encoder()
