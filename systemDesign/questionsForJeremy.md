# Questions for Jeremy

Meeting Notes:
- try to recreate Ike Machine. Setup some functional and non-functional requirements
- collaborative so not quite a mock interview
- we can try to remember as much and perhaps tweak things if Jeremy would have
done something different
- Focus on log upload, scenedb, and log management (storage) if we have time.

1. I was reading a blog where they recommended to denormalize a database at the
start and use NOSQL to remove all joins from the DB. Joins logic will be done in
the application code. I thought relational databases were great. With sharding,
caching, and other things can't you keep it scalable?
https://web.archive.org/web/20220602114024/https://www.lecloud.net/post/7994751381/scalability-for-dummies-part-2-database

1a. When does NoSQL become better due to the size of joins of a relational database?
Talk about the example of storing user IDs in a user column for friends opposed
to making it a join across user, friendships, and requests.

2. How often do you use helper functions defined within functions? I typically
define them outside of functions or within a class but I've been seeing a handful
of nested helper functions in DSA solutions. Helps reduce amount of variables
passed around but feels like a bad practice.

3. We used Redis at Ike and Nuro. How did we use them? I think this for memcache
 When I was working on the carbench pipeline, I used GCP's datastore for a map
 of autonomy SW commit to carbench commit. Could I have used Redis instead? Not
 large enough of a use case?

4. Did the Ike Machine use a CDN? What are common CDNs? Were we using AWS Cloudfront
to make logs more readily available? Perhaps we can talk a bit about warm vs
cold storage. I think we had a change where we made recent logs on prem and then
stored them in the cloud.

5. Dynamic file storage vs Blob. Blobs at Ike and the convention of having
URL links in database columns.

6. How does Docker and the cloud fit into system design? It seems like it allowed
for very easy horizontal scaling. How did Docker/cloud becoming popular change
system design? What are pitfalls that folks can fall into for relying too much
on the cloud? Costs and complexity but maybe some specific examples.

7. Seems like the first component a user's request interacts with tends to be
some sort of load balancer, reverse proxy, or gateway. Any tips on how to manage
a user's session (login creds) while using a load balancer. I've seen examples
of a session services interfacing with the gateway/load balancer.

8. With multiple load balancers I saw a lecture where they used a switch to manage
requests across a load balancer. This lecture is 10 years old. Would that still
be a problem or would a load balancer provider provide some redundancy in load balancers
that they offer.
