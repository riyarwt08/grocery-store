import mysql.connector

def get_sql_connection():
    connection = mysql.connector.connect(
        host='localhost',
        user='root',        # change this to your MySQL username
        password='root123',        # change this to your MySQL password
        database='grocery_store'
    )
    return connection