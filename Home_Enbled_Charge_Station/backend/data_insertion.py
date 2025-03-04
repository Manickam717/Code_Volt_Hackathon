from database import home_charge ,engine 
from sqlalchemy.orm import sessionmaker
import random 


data_list = [ 
    [12.845142, 80.152754] ,
    [12.841910, 80.155070] ,
    [12.840090, 80.152164] ,
    [12.843396, 80.155369] ,
    [12.841107, 80.152785] ,
    [12.839865, 80.154081],
    [12.845546, 80.148904],
    [12.837287, 80.156050],
    [12.837175, 80.153111],
    [12.837119, 80.156050],
    [12.839197, 80.156511],
    [12.833916, 80.159450],
    [12.842700, 80.155781],
    [12.842365, 80.158188],
    [12.842717, 80.159752],
    [12.845327, 80.153870],
    [12.842686, 80.151243],
    [12.838667, 80.156376],
]

Session = sessionmaker(bind=engine)
session = Session()


# Dummy names and phone numbers
names = ["Alice", "Bob", "Charlie", "David", "Eve", "Frank", "Grace", "Hank", "Ivy", "Jack"]

# Insert data into the database
for idx, (lat, lng) in enumerate(data_list):
    owner_nme = random.choice(names) + f" {idx}"
    owner_number = f"+91{random.randint(7000000000, 9999999999)}"
    num_port = random.randint(1, 5)  # Random number of charging ports
    
    home_charge_entry = home_charge(
        owner_nme=owner_nme,
        owner_number=owner_number,
        lat=lat,
        lng=lng,
        num_port=num_port
    )
    session.add(home_charge_entry)

session.commit()
session.close()

print("Data inserted successfully!")