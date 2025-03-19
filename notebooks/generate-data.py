import csv
import random
from datetime import datetime, timedelta, date
import time
import json


NUM_Rows = 1000

OUTPUT_FILE = "created_projects.csv"

data_rows = []
def random_date(start_date, end_date):
    start_timestamp = time.mktime(start_date.timetuple())
    end_timestamp = time.mktime(end_date.timetuple())
    random_timestamp = random.uniform(start_timestamp, end_timestamp)
    return datetime.fromtimestamp(random_timestamp)

def getting_workload(budget, team_size):
    


for i in range(1, NUM_Rows + 1):
    name = f"Project{i}"
    team_size = random.randint(1, 10)
    budget = random.randint(50000, 10000000)
    workload = 150
    start_date = random_date(date.today(), date.today() + timedelta(days = 90))
    completion_time = start_date + timedelta(days = workload)