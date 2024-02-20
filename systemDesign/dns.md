# Domain Name System (DNS)
A DNS translates a nice human readable URL into an IP address that points to the
server. When you enter google.com into the browser, the ISP DNS takes a look
and asks the root DNS server if it doesn't know. Then they put it in their
caches.

These mappings can be cached by client or browser using TTL (to to live).

Downsides, can cause latency. They can be targets for DDOS'ing preventing you
from accessing a site w/o knowing the explicit IP address.
