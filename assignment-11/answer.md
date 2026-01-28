# Schema Design Fundamentals – Theory

## 1. What schema design is and what a database schema represents

Schema design is the process of planning and structuring how data will be stored, organized, and related inside a relational database. A database schema represents the overall blueprint or structure of the database. It defines tables, columns, data types, relationships between tables, constraints, and rules.

In simple words, a database schema is like a building blueprint that shows how different rooms (tables) are arranged and connected. For example, in an e-commerce system, the schema may define tables such as Customers, Orders, and Products, and explain how these tables are linked.

---

## 2. Why schema design is required before writing backend code

Schema design must be done before writing backend code because backend logic depends completely on how data is structured. A well-designed schema helps developers:

- Understand data flow clearly
- Write efficient queries
- Maintain clean and readable code
- Avoid frequent database changes later

If schema design is poor, backend developers may face constant errors, performance issues, and redesign problems. For example, if relationships are not properly defined, fetching customer orders becomes complex and inefficient.

---

## 3. How poor schema design impacts data consistency, maintenance, and scalability

Poor schema design can lead to:

- **Data inconsistency:** Duplicate or conflicting data appears in multiple places.
- **Difficult maintenance:** Changes become complex and risky.
- **Poor scalability:** The database struggles to handle growing data and users.

For example, storing customer details in multiple tables may cause mismatched records when updates are made.

---

## 4. What validations are in schema design and why databases enforce validations

Validations are rules that ensure correct, safe, and meaningful data entry.

Common validations include:

- **NOT NULL:** Ensures a value must be entered.
- **UNIQUE:** Prevents duplicate values.
- **PRIMARY KEY:** Uniquely identifies each row.
- **DEFAULT:** Sets a default value.

These validations help maintain data integrity and prevent invalid records.

---

## 5. The difference between a database schema and a database table

- **Database Schema:** The complete structure of the database including all tables, relationships, and constraints.
- **Database Table:** A single structure that stores records of one entity.

Example: The schema may contain Customers, Orders, and Products tables, while a table stores rows of customer data.

---

## 6. Why a table should represent only one entity

Each table should store data about a single entity to maintain clarity and reduce redundancy.

Example: A Customers table should only store customer data, not order or product details.

---

## 7. Why redundant or derived data should be avoided in table design

Redundant data causes:

- Storage waste
- Data mismatch
- Update anomalies

Derived data can be calculated when needed instead of storing it.

Example: Total price should be calculated from quantity and unit price instead of storing separately.

---

## 8. The importance of choosing correct data types while designing tables

Correct data types ensure:

- Efficient storage
- Faster queries
- Accurate validations

Example: Using INTEGER for age, TEXT for names, and DATE for birthdate improves performance and clarity.

---

## Conclusion

Schema design is the foundation of any relational database system. A strong schema ensures data accuracy, system efficiency, and long-term scalability.
