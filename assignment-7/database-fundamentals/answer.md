# Database Fundamentals – Conceptual Understanding

## 1. Why is `db.json` not suitable as a database for real projects?

Using a simple file like `db.json` for storing data works only for very small demos or learning purposes. For real-world applications, it has several serious limitations:

### Limitations of file-based storage

**Performance**

* The entire file is usually read into memory and written back for every operation.
* As data grows, read/write operations become slow.

**Scalability**

* File-based storage does not scale well with large datasets or multiple users.
* It cannot efficiently handle thousands or millions of records.

**Concurrency**

* Multiple users accessing the file at the same time can cause conflicts.
* There is no proper locking or transaction handling, leading to data corruption.

**Reliability**

* If the server crashes while writing to the file, data may be lost or corrupted.
* No built-in backup, recovery, or crash protection mechanisms.

Because of these issues, `db.json` is not reliable, safe, or efficient for production-level applications.

---

## 2. What are the ideal characteristics of a database system (apart from just storage)?

A good database system provides much more than simple data storage. Key characteristics include:

### Performance

* Optimized query execution using indexing and caching.
* Fast read and write operations even with large datasets.

### Concurrency

* Supports multiple users accessing and modifying data simultaneously.
* Uses locking and transactions to avoid conflicts.

### Reliability

* Ensures data is not lost during crashes or failures.
* Provides backup and recovery mechanisms.

### Data Integrity

* Enforces rules such as primary keys, foreign keys, and constraints.
* Prevents invalid or duplicate data from being stored.

### Scalability

* Can handle increasing amounts of data and users.
* Supports vertical scaling (better hardware) and horizontal scaling (more servers).

### Fault Tolerance

* Continues to work even if some components fail.
* Replication and failover ensure high availability.

---

## 3. How many types of databases are there? What are their use cases or applications?

Broadly, databases can be classified into two main types:

### 1. Relational Databases (SQL Databases)

**Description:**

* Data is stored in tables with rows and columns.
* Uses structured schema and SQL for queries.

**Examples:**

* MySQL, PostgreSQL, Oracle, SQL Server

**Use Cases:**

* Banking and financial systems
* E-commerce applications (orders, payments, users)
* School and university management systems
* Applications where data consistency and relationships are important

---

### 2. Non-Relational Databases (NoSQL Databases)

**Description:**

* Data is stored in flexible formats such as documents, key-value pairs, or graphs.
* Schema is dynamic or schema-less.

**Types & Examples:**

* Document-based: MongoDB
* Key-value: Redis
* Column-based: Cassandra
* Graph-based: Neo4j

**Use Cases:**

* Social media platforms (posts, likes, comments)
* Real-time applications (chat apps, notifications)
* Big data and analytics
* Applications requiring high scalability and flexible data models

---

**Conclusion:**
Relational databases are best for structured data with strong consistency needs, while NoSQL databases are suitable for large-scale, flexible, and high-performance applications.
