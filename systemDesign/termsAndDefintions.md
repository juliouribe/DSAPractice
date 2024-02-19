# Terms and Definitions

### Performance vs Scalability
Performance: Fast for a single user. Ability to handle larger units of work.
Scalability: Fast for many users. A service is scalable if it increases in
performance in a manner proportional to resources added.

### Latency vs Throughput
Latency: the time it takes to perform an action or to produce some result.
Throughput: the number of actions or result per unit of time.
Generally aim for high throughput with okay latency.

### Availability vs Consistency (CAP Theorem)
Consistency: every read receives the most recent write or an error
Availability: every request receives a response, without guarantee that it contains
the most recent version of the information.
Partition Tolerance - The system continues to operate despite arbitrary partitioning
due to network failures.

CP: consistency and partition tolerance. Waiting for a response from the partitioned
node. CP is good if your business requires atomic reads and writes. I'm guessing
atomic here means super accurate and up to date.
AP: responses return the most readily available version of the data available on
any node, which might not be the latest. Writes may take some time to propagate
when the partition is resolve. Ap is a good choice if the business needs allow
for eventual consistency or when the system needs to continue working despite
external errors.

### Consistency Patterns
Weak consistency: when you lose connection you pick up where things are. You don't
get reads that were lost. For example video chat, realtime multiplayer games.

Eventual consistency: after a write, reads will eventually see it (typically
within milliseconds). Data is replicated asynchronously, email, DNS, etc.

Strong consistency: after a write, reads will see it. Data is replicated
synchronously. Examples include file systems, RBDMSes, and systems that need
transactions.

### Availability Patterns
#### Failover
active-passive: heartbeats are sent between two servers. They are the same but
only one is being used until it fails and the passive takes over.
active-active: both are serving requests. When one fails, it takes over all
traffic. Heartbeats sent between the two.

Disadvantages: fail-over adds more hardware and complexity. Potential for loss
of data if a system fails before any newly written data can be replicated to the
passive.

### Replication
Primary-replica and primary-primary. Primary will do writes and replica's only
receive copies. Replica's can only handle read requests.

### Availability
Can be described in multiple of 9s. Three 9's is 99.9% uptime. When considering
parallel and sequence components. You multiply them together for sequence and
you multiple the remainder sub 1 for parallel.

Seq:
Availability (Total) = Availability (Foo) * Availability (Bar)

Parallel:
Availability (Total) = 1 - (1 - Availability (Foo)) * (1 - Availability (Bar))


