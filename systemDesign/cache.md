# Cache
There are many types of cache and using cache can help improve page load times
as well as reduce the load on your servers. In a simple model, when a client
makes a request, it checks the cache first and if its not available it'll
query the server/database.

Client Caching
Caches can be located on client side (cookies, session, etc)j as well as server
side and in a distinct cache layer.

CDN Caching
CDNs are a type of cache. The datacenters that keep copies of data closer to users
for faster load time. Usually static data.

Web Server Caching
Web servers can also store cache so they don't need to contact app servers to
return responses.

Database Caching
Databases typically have some settings for caching requests. You can tweak these.

Application Caching
In-memory caches such as Memcached and Redis are key-value stores between your
application and your data storage. It's held in RAM so it is much faster than
typical databases where data is stored on disk. RAM is limited so LRU is used to
manage cold and hot entries.


