# Tinder
https://www.youtube.com/watch?v=tndzLznxq40

## Basic setup: profile login and viewing images

Use a Gateway service to handle authentication and act as a bridge to decuple
from the profile service. Once you are authorized using a TOKEN then you can
use other services. Using a gateway prevents you from duplicating logic for
communication between future services.

Add an image service using a file system based storage. You have a table with
the image info but not the actual file itself. The file is hosted elsewhere but
you have the image url. This allows you to use a CDN for retrieving files. This
creates a distributed file system.

## Communicating with other users

Client to server communication is HTTP. Peer to peer can be XMPP. Websockets use
XMPP on top of other protocols. To avoid overloading the gateway service, you
can create a sessions service that store user auth as well as connection info
between clients.

## Matching
Add a matcher service that acts as a source of truth of matching history. Handles
a single table for matches. There should be some communication between the sessions
service and matching service. You need to authenticate to know you've received
new matches. If you delete the app and redownload, you'll have to re-swipe but
your matches are still there.

## Recommendations
Hardest part is which users are close to me. Per user figure out which person is
close to me. Based on age, gender, and location you can configure matches. Why
not put indexes on all three? That's a bad idea since you it'll only use one index.

1. You can use a distributed database like cassandra.
2. Use sharding / horizontal partitioning. Partition on name
3. Use primary / replica database setup to avoid single point of failure.

With sharding, you can shard users based on their location. Easier to pull up
users similar to each other. Then you index based on age or another key factor.

Recommendation service pulls relevant people and communicates with the gateway.
