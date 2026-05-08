from sql_connection import get_sql_connection

# ─────────────────────────────────────────────
#  UOM
# ─────────────────────────────────────────────

def get_all_uom(connection):
    cursor = connection.cursor()
    cursor.execute("SELECT * FROM uom")
    rows = cursor.fetchall()

    response = []
    for row in rows:
        response.append({
            'uom_id': row[0],
            'uom_name': row[1]
        })

    cursor.close()
    return response


# ─────────────────────────────────────────────
#  PRODUCTS
# ─────────────────────────────────────────────

def get_all_products(connection):
    cursor = connection.cursor()

    query = (
        "SELECT products.product_id, products.name, products.uom_id, "
        "products.price_per_unit, uom.uom_name "
        "FROM products INNER JOIN uom ON products.uom_id = uom.uom_id"
    )

    cursor.execute(query)
    rows = cursor.fetchall()

    response = []
    for row in rows:
        response.append({
            'product_id': row[0],
            'name': row[1],
            'uom_id': row[2],
            'price_per_unit': row[3],
            'uom_name': row[4]
        })

    cursor.close()
    return response


def insert_new_product(connection, product):
    cursor = connection.cursor()

    query = (
        "INSERT INTO products (name, uom_id, price_per_unit) "
        "VALUES (%s, %s, %s)"
    )

    data = (
        product['product_name'],
        product['uom_id'],
        product['price_per_unit']
    )

    cursor.execute(query, data)
    connection.commit()

    product_id = cursor.lastrowid
    cursor.close()
    return product_id


def delete_product(connection, product_id):
    cursor = connection.cursor()

    query = "DELETE FROM products WHERE product_id = %s"
    cursor.execute(query, (product_id,))

    connection.commit()
    affected_rows = cursor.rowcount

    cursor.close()
    return affected_rows


# ─────────────────────────────────────────────
#  ORDERS
# ─────────────────────────────────────────────

def get_all_orders(connection):
    cursor = connection.cursor()

    query = (
        "SELECT order_id, customer_name, total "
        "FROM orders ORDER BY order_id DESC"
    )

    cursor.execute(query)
    rows = cursor.fetchall()

    response = []
    for row in rows:
        response.append({
            'order_id': row[0],
            'customer_name': row[1],
            'total': float(row[2])
        })

    cursor.close()
    return response


def insert_new_order(connection, order):
    cursor = connection.cursor()

    # ✅ MATCHES YOUR DB (total column)
    query = (
        "INSERT INTO orders (customer_name, total) "
        "VALUES (%s, %s)"
    )

    data = (
        order['customer_name'],
        order['total']
    )

    cursor.execute(query, data)
    order_id = cursor.lastrowid

    # Insert order details
    order_details_query = (
        "INSERT INTO order_details "
        "(order_id, product_id, quantity, total_price) "
        "VALUES (%s, %s, %s, %s)"
    )

    for item in order['order_details']:
        cursor.execute(order_details_query, (
            order_id,
            int(item['product_id']),
            float(item['quantity']),
            float(item['total_price'])
        ))

    connection.commit()
    cursor.close()

    return order_id


def get_order_details(connection, order_id):
    cursor = connection.cursor()

    query = (
        "SELECT order_details.order_id, order_details.product_id, "
        "order_details.quantity, order_details.total_price, products.name "
        "FROM order_details INNER JOIN products "
        "ON order_details.product_id = products.product_id "
        "WHERE order_details.order_id = %s"
    )

    cursor.execute(query, (order_id,))
    rows = cursor.fetchall()

    response = []
    for row in rows:
        response.append({
            'order_id': row[0],
            'product_id': row[1],
            'quantity': float(row[2]),
            'total_price': float(row[3]),
            'product_name': row[4]
        })

    cursor.close()
    return response


# ─────────────────────────────────────────────
#  TEST
# ─────────────────────────────────────────────

if __name__ == '__main__':
    connection = get_sql_connection()

    print(get_all_products(connection))
    print(get_all_uom(connection))
    print(get_all_orders(connection))

    connection.close()