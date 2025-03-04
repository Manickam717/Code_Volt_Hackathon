from vector_db import VectorDB 
from responder import Responder 
from language import Language_translor 
from requirement_analyser import RequirementAnalyser
import os


class UserService : 

    def __init__(self ,business_name ):
        self.vector_db = VectorDB( 
            document_link = os.path.join("business_docs" ,business_name + ".pdf"),
            k = 5 ,
            min_similarity = 0.00 )
        self.translator_obj = Language_translor( )
        self.responder = Responder( )
        self.conversation = [ ]
        self.conv_window_size = 10 
        self.requir_analysr = RequirementAnalyser()

    def request(self ,user_query):
        assert isinstance(user_query ,str) ,"user_statement must be string"

        ##___________________checking if translation needed 
        source = self.translator_obj.detect_lang(user_query)
        if source != "English" :
            user_statement = self.translator_obj.translate(
                source = source ,
                target = "English",
                inp = user_query 
            )
            if user_statement is None :
                return "Given Language is not supported by the System" 
        
        print("user_statement : " ,user_query)
        
        ##___________________updating the conversation window
        self.conversation.append( {"role" : "user" ,"content" : user_query}  )
        self.conversation = self.conversation[ max( len(self.conversation) - self.conv_window_size , 0) : ]

         
        ##fethiching required datas from the vectordb and creating a response 
        if len(self.conversation) > 2:
            requirement = self.requir_analysr.respond(self.conversation)
        else:
            requirement = user_query

        relavent_chunks = self.vector_db.semantic_search(query = requirement)
        print(1)
        response = self.responder.respond(conversation = self.conversation ,vdb = relavent_chunks)
        print(2)

        print("response : " ,response)

        ##___________________updating the converstion
        self.conversation.append( {"role" : "system" ,"content" : response})

        ##___________________making translation if nesscary
        if source != "English" :
            response = self.translator_obj.translate(
                source = "English" ,
                target = source ,
                inp = response 
            )
        print("translated response :" ,response)
        
        return response