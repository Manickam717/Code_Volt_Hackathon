from langdetect import detect
from google import genai
import pycountry


class Language_translor: 

  def __init__(self):
    self.api_key = "AIzaSyDqKLbGrP2m8Y94oYkBhZfpDxKxhVi7oyc"
    self.model = "gemini-2.0-flash"
    self.max_output_tokens = 150
    self.__set_prompt_format() 
    self.client = genai.Client(api_key = self.api_key )
    self.max_cycles = 10
    
  def __set_prompt_format(self):
    self.prompt = """Below is an instruction that describes a task, paired with an input that provides further context.
Write a response that appropriately completes the request.

###Instruction:
Translate the given input text from the specified source language to the target language while maintaining accuracy and natural fluency.
###Source : {}
###Target : {}
###input : {}"""
  
  def translate(self ,source ,target ,inp ):
    response = None 
    cnt = 0 
    
    while( (response is None or self.detect_lang(response) != target) and cnt < self.max_cycles ):
      formated_prompt = self.prompt.format(source ,target ,inp)
      
      response = self.client.models.generate_content(
          model=self.model,
          contents = formated_prompt,
        ).text
      
      cnt = cnt + 1
    
    if cnt == self.max_cycles : 
      return None 

    return response 
      
      
  def detect_lang(self ,inp):
    lang_code = detect(inp)
    return pycountry.languages.get(alpha_2 = lang_code).name
