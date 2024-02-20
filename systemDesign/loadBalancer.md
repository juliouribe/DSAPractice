# Load Balancers
A load balancer acts as a step between the client and servers to help manage
traffic for multiple servers. There are a few load balancing strategies that can
be used.

Round robin spreads the load evenly across servers but the main flaw is that eventually
a slower server will be overloaded and there's no good way to maintain session
information if you constantly swap servers.

Random will send users to a potentially different server. It's a very naive approach.

Layer 4 load balancing looks at the transport layer, IP address, port numbers, etc.
to balance the load. Does not have knowledge of the contents of the request.

Layer 7 load balancing has headers and requests info. It can use types of requests
when sending to different servers.

## Dynamic Load Balancing

Least connection: Checks which servers have the fewest connections open at the
time and sends traffic to those servers. This assumes all connections require
roughly equal processing power.
Weighted least connection: Gives administrators the ability to assign different
weights to each server, assuming that some servers can handle more connections
than others.
Weighted response time: Averages the response time of each server, and combines
that with the number of connections each server has open to determine where to
send traffic. By sending traffic to the servers with the quickest response time,
the algorithm ensures faster service for users.
Resource-based: Distributes load based on what resources each server has
available at the time. Specialized software (called an "agent") running on each
server measures that server's available CPU and memory, and the load balancer
queries the agent before distributing traffic to that server.

## Static Load Balancing

Round robin: Round robin load balancing distributes traffic to a list of servers
in rotation using the Domain Name System (DNS). An authoritative nameserver will
have a list of different A records for a domain and provides a different one in
response to each DNS query.
Weighted round robin: Allows an administrator to assign different weights to
each server. Servers deemed able to handle more traffic will receive slightly
more. Weighting can be configured within DNS records.
IP hash: Combines incoming traffic's source and destination IP addresses and
uses a mathematical function to convert it into a hash. Based on the hash, the
connection is assigned to a specific server.

## Reverse Proxy

Acts as a buffer between a web server and a client. Can block certain IPs and hide
information related to the private servers. Lets you still use private IPs and
have a single public IP. The value of a reverse proxy is available with a single
server. Only downsides are that they add complexity to the system and are a single
point of failure on their own.

