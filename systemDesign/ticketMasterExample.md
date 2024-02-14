# Ticketmaster Example Article
https://www.hellointerview.com/learn/system-design/answer-keys/ticketmaster

Functional requirements: are the "user should be able to..." statements.
Non-functional requires: are the system qualities such as "the system should..."

In an interview, it's good to start by listing your top 3 functional requirements.
Ask the interviewer if they're good with this and keep it to these top 3.

Things to consider when writing non-functional requirements
- CAP theorem: Does this system prioritize availability or consistency?
- read vs write ratio
- query access pattern. Do we get requests regularly or are there bursts of requests

## Functional Requirements
Core Requirements
1. Users should be able to view events
2. Users should be able to book tickets to events
3. Users should be able to search for events

Below the line (out of scope)
1. Users should be able to view their booked events
2. Admins or event coordinators should be able to add events
3. Popular events should have dynamic pricing

Non-Functional Requirements
Core Requirements
1. The system should prioritize availability for searching and viewing events,
but should prioritize consistency for booking events (no double booking)
2. The system should be scalable and able to handle high throughput in the form
of popular events.
3. The system is ready heavy, and thus needs to be able to support high read throughput

Below the Line (out of scope)
1. The system should protect user data and adhere to GDPR
2. The system should be fault tolerant
3. The system should provide secure transactions for purchases
4. The system should be well tested and easy to deploy (CI/CD pipelines)
5. The system should have regular backups


