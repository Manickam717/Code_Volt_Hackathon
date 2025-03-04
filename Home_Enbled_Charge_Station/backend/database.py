from sqlalchemy import create_engine
from sqlalchemy import Column, Integer, String  ,Numeric
from sqlalchemy.orm import declarative_base
from credentials import user ,password ,db_name

engine = create_engine(f"mysql+pymysql://{user}:{password}@localhost/{db_name}")
Base = declarative_base()


class home_charge( Base ): 
    __tablename__ = "home_charge"
    id = Column(Integer, primary_key=True ,autoincrement=True)
    owner_nme = Column(String(255))
    owner_number = Column(String(255))
    lat = Column(Numeric(10, 6))
    lng = Column(Numeric(10, 6)) 
    num_port = Column(Integer) 


if __name__ == "__main__": 
    inp = input( "start_creating_tables(y/n) : ")
    if inp == "y" : 
        try:
            Base.metadata.create_all( engine )
            print( "Tables created succesfully")
        except Exception as e:
            print(f"db_creation : error occurred: {e}")

    



