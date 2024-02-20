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


