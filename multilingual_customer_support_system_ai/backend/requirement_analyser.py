from google import genai
import json

class RequirementAnalyser: 

  def __init__(self):
    self.api_key = "AIzaSyDqKLbGrP2m8Y94oYkBhZfpDxKxhVi7oyc"
    self.model = "gemini-2.0-flash"
    self.max_output_tokens = 150
    self.__set_prompt_format() 
    self.client = genai.Client(api_key = self.api_key )
    
  def __set_prompt_format(self):
     
    self.prompt = """Below is an instruction that describes a task, paired with an input that provides further context.
Write a response that appropriately completes the request.

###Instruction:
looking at most recenet conversation tell me what is the recurment of the user

###conversation:
{}"""
  
  def respond(self ,conversation:list ):
    formated_prompt = self.prompt.format( json.dumps(conversation))
    response = self.client.models.generate_content( 
    model = self.model , 
    contents = formated_prompt
    ).text
    return response 
    
      
  