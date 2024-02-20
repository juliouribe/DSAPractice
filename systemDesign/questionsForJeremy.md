# Questions for Jeremy
1. I was reading a blog where they recommended to denormalize a database at the
start and use NOSQL to remove all joins from the DB. Joins logic will be done in
the application code. I thought relational databases were great. With sharding,
caching, and other things can't you keep it scalable?
https://web.archive.org/web/20220602114024/https://www.lecloud.net/post/7994751381/scalability-for-dummies-part-2-database

2. Perhaps we walk through a system design of Metadata DB?

3. Do you define helper functions within functions or define them outside and
call them when you need them?

4. We used Redis and RabbitMQ at Ike and Nuro. How did we use them?


Unclear
- how to use Redis? As a datastore? caching? Example from Nuro? When I was working
on the carbench pipeline, I used GCP's datastore for a map of autonomy SW commit
to carbench commit. Could I have used Redis instead?
-
