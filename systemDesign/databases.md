# Databases
Relational Database Management Systems (RBDMSes) contain databases like SQL to
collect and store items.

## ACID
Atomicity: each transaction is all or nothing.
Consistency: any transaction will bring the database from one valid state to another
Isolation: concurrent or serial execution of the same transactions have the same result.
Durability: once a transaction has been committed, it will remain so.

There are many techniques to scale a relational database:
master-slave replication: master handles writes and slaves have a copy of master to handle reads.
A slave will get promoted to the master role in the case that the master goes down
or it will enter read only mode.
master-master replication: similar to previous but two masters so you have a back up.
federation: break up database by function to split up traffic. Better cache hits
due to localized traffic.
sharding: breaking up your database to handle subsets of data based on last name, geo-location, or other values.
denormalization: Switching to something like noSQL and having duplicate data across tables.
SQL tuning: tighten up the schema, use good indices, avoid expensive joins, and
tune query cache.

## NoSQL
NoSQL dbs use key value stores to store data. Data is denormalized and joins are
generally done in the application layer. Uses eventual consistency typically.
This includes key-value stores, document stores, wide column stores, and graph
databases

Basically Available: the system guarantees availability
Soft State: the state of the system may change over time even w/o input
Eventual consistency: the system will become consistent overtime given that it
doesn't receive input.

### Examples of NoSQL databases

Key-value store
Abstraction of hash tables to store data with O(1) reads and writes. Often
backed by memory or SSD. Good for rapidly changing data, such as in-memory cache
layer. Serves as a basis for more complex systems.

Document Store
Centered around documents (XML, JSON, binary, etc.), where a document stores all
information for a given object. Query based on the internal structure of the
document itself. Many key value stores include features for working with a value's
metadata blurring the lines between these two storage types.

Wide Column Store
A wide column store's basic unit of data is a column (name/value pair). A column
can be grouped in column families (analogous to a SQL table). Super column
families further group column families. You can access each column independently
with a row key, and columns with the same row key form a row. Each value
contains a timestamp for versioning and for conflict resolution.
Often used in very large data sets.

Graph Database
Each node is a record and each arc is a relationship between two nodes. They are
optimized to represent complex relationships with many foreign keys or
many-to-many relationships. Good for things like a social network. Accessed by
REST API's.

### Comparing the two

Reasons for SQL:
- Structured data
- Strict schema
- Relational data
- Need for complex joins
- Transactions
- Clear patterns for scaling
- More established: developers, community, code, tools, etc
- Lookups by index are very fast

Reasons for NoSQL:
- Semi-structured data
- Dynamic or flexible schema
- Non-relational data
- No need for complex joins
- Store many TB (or PB) of data
- Very data intensive workload
- Very high throughput for IOPS

Sample data well-suited for NoSQL:
- Rapid ingest of clickstream and log data
- Leaderboard or scoring data
- Temporary data, such as a shopping cart
- Frequently accessed ('hot') tables
- Metadata/lookup tables
