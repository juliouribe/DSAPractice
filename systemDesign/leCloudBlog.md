# Le Cloud Blog
https://web.archive.org/web/20221030091841/http://www.lecloud.net/tagged/scalability/chrono

## Part 1 - Clones

Every clone, server, contains exactly the same codebase and does not store any
user-related data, like sessions or profile pictures, on local disc or memory.

Sessions need to be stored in a centralized data store which is accessible to
all of your application servers, like Redis.

How do you handle deployments? A tool like Capistrano can handle this problem
for you to make sure all servers get upgraded to the latest version of changes.

## Part 2 - Database

Despite using sharding, master-slave dbs, read/write load balance, etc. Your db
will get slow eventually due to the massive joins.

Use a NOSQL database and denormalize your db. Then do joins in the application
logic layer.

## Part 3 - Caching

Memcache and using Redis. Never do file-based caching. There are two ways to
cache, an old and new one.

1. Cached Database Queries
Cache the query and the result of the query. Drawbacks are that you need to replace
entire queries when rows are updated.

2. Cached Objects
Store the object into cache instead of the query just like we store classes and
other programming objects in memory. Easier to dispose of and replace.

Examples to cache:
- user sessions (never use the database)
- fully rendered blog articles
- activity streams
- user friend relationships

## Part 4 - Asynchronism

Pre-render web pages with a cron job or something to speed up the process of loading
web pages, opposed to generating them on the fly. You can upload pre-rendered
HTML pages to AWS S3, cloudfront, or another Content Delivery Network.

The second async option involves dynamic rendering and using RabbitMQ to implement
async processing. If you try to do something time consuming. Try doing it asynchronously.
