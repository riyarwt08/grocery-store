from flask import Flask, request, jsonify
from flask_cors import CORS
import mysql.connector

app = Flask(__name__)
CORS(app)

# DATABASE CONNECTION

db = mysql.connector.connect(
    host="localhost",
    user="root",
    password="root123",
    database="freshly_grocery"
)

cursor = db.cursor()

# HOME ROUTE

@app.route('/')
def home():

    return "Freshly Grocery Backend Running"

# GET PRODUCTS API

@app.route('/products', methods=['GET'])
def get_products():

    cursor.execute("SELECT * FROM products")

    products = cursor.fetchall()

    product_list = []

    for product in products:

        product_data = {

            "product_id": product[0],
            "product_name": product[1],
            "category_id": product[2],
            "price": float(product[3]),
            "stock_quantity": product[4],
            "product_image": product[5]

        }

        product_list.append(product_data)

    return jsonify(product_list)

# PLACE ORDER API

@app.route('/place-order', methods=['POST'])
def place_order():

    data = request.json

    full_name = data['full_name']
    email = data['email']
    phone = data['phone']
    address = data['address']
    total_amount = data['total_amount']
    payment_method = data['payment_method']

    items = data['items']

    # INSERT CUSTOMER

    customer_query = """

    INSERT INTO customers
    (full_name, email, phone, address)

    VALUES (%s, %s, %s, %s)

    """

    customer_values = (

        full_name,
        email,
        phone,
        address

    )

    cursor.execute(
        customer_query,
        customer_values
    )

    db.commit()

    customer_id = cursor.lastrowid

    # INSERT ORDER

    order_query = """

    INSERT INTO orders
    (customer_id, total_amount,
    order_status, payment_method)

    VALUES (%s, %s, %s, %s)

    """

    order_values = (

        customer_id,
        total_amount,
        "Pending",
        payment_method

    )

    cursor.execute(
        order_query,
        order_values
    )

    db.commit()

    order_id = cursor.lastrowid

    # INSERT ORDER ITEMS

    for item in items:

        product_id = item['product_id']

        quantity = item['quantity']

        subtotal = (
            item['price']
            * quantity
        )

        order_item_query = """

        INSERT INTO order_items
        (order_id, product_id,
        quantity, subtotal)

        VALUES (%s, %s, %s, %s)

        """

        order_item_values = (

            order_id,
            product_id,
            quantity,
            subtotal

        )

        cursor.execute(
            order_item_query,
            order_item_values
        )

    db.commit()

    return jsonify({

        "message":
        "Order placed successfully"

    })

# RUN SERVER

if __name__ == '__main__':

    app.run(debug=True)