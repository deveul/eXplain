import pandas as pd

f=pd.read_csv("territories.csv")
keep_col = ['id','code','name','kind']
new_f = f[keep_col]
new_f.to_csv("territories_simplified.csv", index=False)
f=pd.read_csv("territory_parents.csv")
keep_col = ['id','child_id','parent_id']
new_f = f[keep_col]
new_f.to_csv("territory_parents_simplified.csv", index=False)