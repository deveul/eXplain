import time
from flask import Flask, request
import psycopg2

app = Flask(__name__)
conn = psycopg2.connect("host=localhost dbname=db_explain user=postgres")
cur = conn.cursor()

@app.route('/all_territories')
def get_all_territories():
    cur.execute("SELECT * FROM territories WHERE kind='FRDEPA'")
    # app.logger.info(cur.fetchmany(10))
    return {
        'territories': cur.fetchmany(10)
    }


@app.route('/territory')
def get_current_territory():
    code = request.args.get('code', default='FRDEPA01')
    cur.execute("SELECT id FROM territories WHERE kind='{}' AND code='{}'::TEXT".format(code[:6], code[6:]))
    parent_id = list(cur.fetchone())[0]
    cur.execute("SELECT name from territories WHERE id={}".format(parent_id))
    parent_name = list(cur.fetchone())[0]
    cur.execute(
        "SELECT child_id FROM territory_parents where parent_id={}".format(parent_id))
    childs_id = list(cur.fetchall())
    for index, child_id in enumerate(childs_id):
        childs_id[index] = child_id[0]
    children = []
    for child_id in childs_id:
        cur.execute("SELECT name from territories WHERE id={}".format(child_id))
        children_name = list(cur.fetchone())[0]
        children.append(children_name)

    return {
        'territory': {
            'parent': parent_name,
            'children': children
        }
    }
