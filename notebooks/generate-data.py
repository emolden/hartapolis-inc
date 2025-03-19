import csv
import random
from datetime import datetime, timedelta, date
import time
import json


NUM_Rows = 1000

OUTPUT_FILE = "created_projects.csv"

data_rows = []



def format_date (date):
    formatted_date = date.strftime("%Y-%m-%d")
    return formatted_date

def getting_workload(budget, team_size):
    if budget <= 5000000 and team_size <= 5:
        return random.randint(1, 20)
    elif budget <= 5000000 and team_size > 5:
        return random.randint(51, 100)
    elif budget > 5000000 and team_size <= 5:
        return random.randint(51, 100)
    elif budget > 5000000 and team_size > 5:
        return random.randint(130, 150)
    else: return 75


for i in range(1, NUM_Rows + 1):
    name = f"Project{i}"
    team_size = random.randint(1, 10)
    budget = random.randint(50000, 10000000)
    workload = getting_workload(budget, team_size)
    # start_date = format_date(date.today() + timedelta(days = random.randint(0, 90)))
    # completion_time = format_date(datetime.strptime(start_date, "%Y-%m-%d").date() + timedelta(days = workload))

    data_row = [
        name,
        team_size,
        budget,
        workload,
        # start_date,
        # completion_time
    ]

    data_rows.append(data_row)

print(data_rows)

with open(OUTPUT_FILE, "w", newline="") as file:
    writer = csv.writer(file)
    writer.writerow(
        ["project_name", "team_size", "budget", "workload"]
    )
    writer.writerows(data_rows)

print("Data generation complete.")