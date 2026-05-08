from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
import db_helper
from sql_connection import get_sql_connection
import os

app = Flask(__name__)
CORS(app)  # allows frontend to talk to backend

BASE_DIR = os.path.dirname(os.path.abspath(__file__))   # /Project/backend
UI_DIR   = os.path.join(BASE_DIR, '..', 'ui')           # /Project/ui

# Keep one connection alive for the app session
connection = get_sql_connection()

# ─────────────────────────────────────────────
#  SERVE FRONTEND
# ─────────────────────────────────────────────

@app.route('/')
def home():
    return send_from_directory(UI_DIR, 'index.html')

@app.route('/<path:path>')
def static_files(path):
    return send_from_directory(UI_DIR, path)

# ─────────────────────────────────────────────
#  UOM ROUTES
# ─────────────────────────────────────────────

@app.route('/getUOM', methods=['GET'])
def get_uom():
    response = db_helper.get_all_uom(connection)
    return jsonify(response)


# ─────────────────────────────────────────────
#  PRODUCT ROUTES
# ─────────────────────────────────────────────

@app.route('/getProducts', methods=['GET'])
def get_products():
    response = db_helper.get_all_products(connection)
    return jsonify(response)


@app.route('/insertProduct', methods=['POST'])
def insert_product():
    request_payload = request.get_json()
    product_id = db_helper.insert_new_product(connection, request_payload)
    response = {
        'product_id': product_id,
        'message': 'Product added successfully'
    }
    return jsonify(response)


@app.route('/deleteProduct', methods=['POST'])
def delete_product():
    return_id = request.get_json()
    product_id = return_id['product_id']
    affected_rows = db_helper.delete_product(connection, product_id)
    response = {
        'affected_rows': affected_rows,
        'message': 'Product deleted successfully'
    }
    return jsonify(response)


# ─────────────────────────────────────────────
#  ORDER ROUTES
# ─────────────────────────────────────────────

@app.route('/getOrders', methods=['GET'])
def get_orders():
    response = db_helper.get_all_orders(connection)
    return jsonify(response)


@app.route('/insertOrder', methods=['POST'])
def insert_order():
    request_payload = request.get_json()
    order_id = db_helper.insert_new_order(connection, request_payload)
    response = {
        'order_id': order_id,
        'message': 'Order placed successfully'
    }
    return jsonify(response)


@app.route('/getOrderDetails', methods=['GET'])
def get_order_details():
    order_id = request.args.get('order_id')
    response = db_helper.get_order_details(connection, order_id)
    return jsonify(response)


# ─────────────────────────────────────────────
#  RUN
# ─────────────────────────────────────────────

if __name__ == '__main__':
    print('Starting Flask server on http://localhost:5000')
    app.run(host="0.0.0.0", port=5000, debug=True)