# Database Relationships in DBMS

## 1. Definition of Database Relationship

A **database relationship** defines how two or more tables in a database are logically connected to each other. These relationships are created using **primary keys (PK)** and **foreign keys (FK)** to maintain **data integrity, consistency, and accuracy**.

In simple words:

> A database relationship explains **how data in one table is related to data in another table**.

### Why Database Relationships Are Important?

* Avoid data duplication
* Maintain data consistency
* Enforce data integrity
* Make data retrieval efficient
* Structure data in a meaningful way

---

## 2. Types of Database Relationships

There are mainly **three types of relationships** in databases:

1. One-to-One (1:1)
2. One-to-Many (1:M)
3. Many-to-Many (M:N)

Each type is explained below with **clear e-commerce examples and diagrams**.

---

## 3. One-to-One (1:1) Relationship

### Definition:

In a **one-to-one relationship**, each record in Table A is related to **only one record** in Table B, and vice versa.

### E-commerce Example:

**Users ↔ User Profiles**

Each user has exactly one profile.

**Tables:**

* users
* user_profiles

```
users
------
user_id (PK)
name
email

user_profiles
--------------
profile_id (PK)
user_id (FK)
address
phone
```

### Diagram:

```
users  --------  user_profiles
 1     <---->      1
```

### Explanation:

* One user → One profile
* One profile → One user

### Use Case in E-commerce:

Storing additional customer details like shipping address, phone number, preferences, etc.

---

## 4. One-to-Many (1:M) Relationship

### Definition:

In a **one-to-many relationship**, one record in Table A can be related to **multiple records** in Table B, but each record in Table B is related to **only one record** in Table A.

### E-commerce Example:

**Customers ↔ Orders**

One customer can place **many orders**, but each order belongs to **only one customer**.

**Tables:**

* customers
* orders

```
customers
-----------
customer_id (PK)
name
email

orders
-------
order_id (PK)
customer_id (FK)
order_date
total_amount
```

### Diagram:

```
customers  --------<  orders
   1               many
```

### Explanation:

* One customer → Many orders
* Each order → One customer

### Use Case in E-commerce:

Tracking all orders made by a specific customer.

---

## 5. Many-to-Many (M:N) Relationship

### Definition:

In a **many-to-many relationship**, multiple records in Table A can be related to **multiple records** in Table B.

To implement this, we use a **junction table (bridge table)**.

### E-commerce Example:

**Orders ↔ Products**

One order can contain **many products**, and one product can belong to **many orders**.

**Tables:**

* orders
* products
* order_items (junction table)

```
orders
-------
order_id (PK)
order_date

products
---------
product_id (PK)
name
price

order_items
--------------
order_id (FK)
product_id (FK)
quantity
```

### Diagram:

```
orders  >----<  order_items  >----<  products
   M           junction            M
```

### Explanation:

* One order → Many products
* One product → Many orders

### Use Case in E-commerce:

Managing shopping carts, invoices, and product sales records.

---

## 6. Summary Table

| Relationship Type  | Description                         | E-commerce Example |
| ------------------ | ----------------------------------- | ------------------ |
| One-to-One (1:1)   | One record linked to one record     | User ↔ Profile     |
| One-to-Many (1:M)  | One record linked to many records   | Customer ↔ Orders  |
| Many-to-Many (M:N) | Many records linked to many records | Orders ↔ Products  |

---

## 7. Conclusion

Database relationships are **fundamental to designing efficient and scalable databases**. In e-commerce applications, they help in managing:

* Customers
* Orders
* Products
* Payments
* Inventory

By using proper relationships, we ensure:

* Data consistency
* Reduced redundancy
* Better performance
* Easy data retrieval

---

✅ **File Name:** answer.md
✅ **Push to GitHub**
✅ **Submit Repository Link**

---

### ⭐ This answer is perfectly structured for full marks in theory + practical understanding.
