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

## Session Affinity

## In-memory Caching

## Data Replication - Active:passive, Active:active

## Partitioning

## Data Center Redundancy

## Security
