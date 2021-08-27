import psycopg2
import csv
conn = psycopg2.connect("host=localhost dbname=db_explain user=postgres")
cur = conn.cursor()
cur.execute("""
    CREATE TABLE IF NOT EXISTS territories(
    id integer PRIMARY KEY,
    code text,
    name text,
    kind character(6)
)
""")
with open('data_test_alternant/territories_simplified.csv', 'r') as f:
    next(f) # Skip the header row.
    cur.copy_expert("""COPY territories FROM STDIN WITH (FORMAT CSV)""", f)
cur.execute("""
    CREATE TABLE IF NOT EXISTS territory_parents(
    id integer PRIMARY KEY,
    child_id integer,
    parent_id integer
)
""")
with open('data_test_alternant/territory_parents_simplified.csv', 'r') as f:
    next(f)
    cur.copy_expert("""COPY territory_parents FROM STDIN WITH (FORMAT CSV)""", f)
conn.commit()