# Scalability

## General Notes
Web Hosts
- Go Daddy and friends

What kind of features to look for in a web hosting company
- secure traffic: usernames, passwords, and other PII
- available IP addresses within customer geographic region

VPSes Virtual private server
- opposed to shared web host, you get your own copy of the OS

## Vertical Scaling
Given a machine, the easiest way to handle more users is by using more CPU, RAM,
etc. Use money to improve the capacity of a single machine. Most servers have at
least multiple CPUs, cores, etc. Multiple cores can do multiple things at once.
Larger cores technology has made it easier to break up the compute and share it.

## Horizontal Scaling
Adding more machines to the system. We can use slower hardware and not need to
spend large amounts of money on a single machine. If we get an inbound HTTP request
we now need to figure out how to distribute it to one of our machines.

## Load Balancing and Caching
Load balancers help us distribute traffic and requests to multiple machines.
When a user visits a URL, instead of returning the IP address of a server, return
the address of the load balancer who will reroute to respective server IP addresses
Backend servers can now be private IPs.

Load balancer can decide which server to send a request to based on load, or how
busy the servers are.

Round Robin Load Balancing
- You can use a load balancer as a fancy DNS to just alternate between servers.
- If you have 3 servers just take turns with each one.
Downsides
- while the requests are evenly distributed, we don't know how large the request
are. You can also have slower machines which will get overloaded eventually
- users will potentially get a different server on repeated requests
- most likely lose access to caching on server
- sessions are specific to given machine

Another solution could be to dedicate servers to certain types of data. Have an
html server, PHP server, image server, etc. so the load balancer routes based on
the type of request. However when you get popular enough it'll be the same problem
since we don't have redundancy and a server may get overloaded with no backup.

## Shared Session State
TTL (Time to Live) is usually assigned when a user is assigned to a server so they
keep getting routed to the same server for a certain amount of time.

You can have shared state by treating the load balancer as a server as well. Put
some memory on it and store the user's cookies. If it goes down then we're stuck.

So what's the solution to stick sessions?
Cookies? how do you end up on the same backend server?
Store the ID of the server. Storing the private IP address is not a good practice.
Let's store a big random number instead of ID.

## RAID
Redundant array of independent disks. Assuming you have multiple hard drivers
(at least 2), it takes turn writing to multiple disks so you can write faster RAID0.
RAID1 writes to two places at once for redundancy. It's not that much slower.
RAID10, does both but needs at least 4 disks so it can write in parallel with two hard
drivers and has respective backups. RAID5 uses one hard drive as backup. RAID6
uses one more and two hard drivers can die before losing data.

Lots of examples of multiple hard drivers and power supplies that can die without
making the system fail. They can be replace while the machine is still on and
not lose any data.

## Load Balancing Tech
ELB, HAProxy, Barracuda, Cisco, etc.

## In-memory Caching
memcache, .html, mysql, etc are forms of caching. Caching can be bad if outdated
By storing a web page as an html file, they don't need to regenerate it. Then
you can store it on disk. It's raw bits and content at this point. Apache and
other things are very good at spitting this out. Static content can be fast.
The downside is that it needs to be stored somewhere and edited elsewhere.
Craigslist is a site where you read a lot. The price we pay is more disk space
for all of these html pages. If you want to change a post page, you now need to
update all of those html pages. That's why CL doesn't change the website much.

mysqlquery cache. You can enable caching for queries. One repeat queries the
second one is faster.

memcache is storing data on RAM. Server is always running. Data will be in RAM.
Maybe not all of it but indexes can be. Cache can be a key value store. RAM space
is finite. Cache can get so big that you can't keep it on the machine.

Caching is more useful when you have read heavy applications.

## Data Replication - Active:passive, Active:active
Replication follows a master - slave database. Slave's purpose is to receive a
copy from the master database. The upside is that you have backups. If you're
getting a lot of queries, you can load balance among the databases. Reading can
be expedited and the master database can focus on writing. Slaves are used for
redundancy and balancing read requests. Still have a single point of failure for
writes. You can have two masters that replicate on each other. Then copy themselves
to the slaves.

After talking about some of these ideas, we can come up with the following diagram

                        client network
                              |
                         load balancer
                          / / | \ \
                         web servers (reads go to replicas, write to primary)
                         \ | / /
                      DB load balancer       MySQL primary (primary to primary)
                         / | \
                    MySQL replicas

This is great but you still have a single load balancer in two points. Active:active
refers to using two load balancers working at the same time. Use "heartbeats" to
listen to each other and takes over all traffic. Active:passive means one load
balancer is on and the passive one takes over once the active one goes down.

## Partitioning
When you break up your database into multiple databases based on some sort of
directory. For example when you put half of users based on their last name. A-M
goes in one database, N-Z goes into another. Balance load on user information.

High availability means some kind of relationship between a pair or more of servers
that checks each other's heartbeats so when one goes down the other takes over.

Example
How to keep sticky sessions? Use load balancer, keep server big number id in
cookies.

If database is on each server, two web servers, then you don't share data across
both servers. You need a central shared database.

With a single shared database, you have a single point of failure. No redundancy.
We can attach replicas and a primary. Make two primary databases (write ops) and
replica databases that copy over data from primaries.

Use a load balancer between the servers and the databases. With many load balancers
you would want a switch to manage the two.

Even in all of this, it's all in the same hypothetical location. If the power goes
out, then it all goes down. You need multiple locations to make sure things are good.

You can do load balancing on the DNS level. Then distribute the request to multiple
locations.

## Security
What kind of internet do we want coming into the data center?
- we want TCP/IP 80, 443, port 22, SSL VPN?

What kind of traffic from load balancer to server?
- tcp 80.
- offload SSL at the load balancer. Then only unencrypted traffic.

Traffic between web server and databases/load balancer?
- sql queries
- tcp 3306

If you have firewall capabilities, then apply it to the switch and lock things
down to only these options. The reason you'd want to do this is because there's
no need for anything else. Apply the principle of least privilege. Don't "leave
the door open" for folks to take advantage of something.


## Review
vertical scaling: increasing the capacity of a given machine by upgrading the
hardware so it can handle more requests.

horizontal scaling: increasing the capacity of a system by adding more machines.
This can be cheaper and faster at times since the cloud can make this almost
unlimited for you.

caching: keeping things in some sort of memory so it's faster to fetch on repeated
requests. For example, mysql can cache the result of queries. There's memcache
which stores data in RAM for faster retrieval. You can also apply some LRU cache
where you keep the most recently used requests.

load balancing: the process of handling and distributing multiple requests to
either servers or databases. You can do round robin for a simple approach but
risk one server being overrun by potentially more heavy requests or its simply
a worse machine. You can split up servers to handle subsets of users based of
something. Similar with databases and this is called partitioning. A common example
is breaking up user records by last names.

Database replication: it's good to have multiple DBs so you have backups if one
crashed or fails. A common setup is having a primary-primary setup where you have
two DBs that handle writes and share data while the replicas are used for reads.
They get occasional copies from the primaries and don't process writes.

Database partitioning: break up your records based on some sort of category. For
example, you can store certain last names in one database and the rest in another.
