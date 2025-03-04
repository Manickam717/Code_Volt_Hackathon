from google import genai
from datetime import datetime
import json

class Responder: 

  def __init__(self):
    self.api_key = "AIzaSyDqKLbGrP2m8Y94oYkBhZfpDxKxhVi7oyc"
    self.client = genai.Client(api_key = self.api_key )
    self.model = "gemini-2.0-flash"
    self.max_output_tokens = 1200
    self.__set_prompt_format() 
    
  def __set_prompt_format(self):
    self.prompt = f"""Below is an instruction that describes a task, paired with an input that provides further context.
Write a response that appropriately completes the request.

Date/Time(%Y-%m-%d %H:%M:%S):{datetime.now().strftime("%Y-%m-%d %H:%M:%S")}

###Instruction:
You are playing the role of a customer support in this conversation. Based on the recent conversation history, provide an appropriate 
response to the user's query using data retrieved from knowledge base.

Conversation:
{{}}

knowledge base:
{{}}"""
  
  def respond(self ,conversation:list ,vdb:str):
    formated_prompt = self.prompt.format( json.dumps(conversation) ,vdb)
    response = self.client.models.generate_content( 
        model = self.model , 
        contents = formated_prompt
    ).text
    return response 
    