# Content Delivery Networks
CDN's provide options for users to access static content from data centers that
are closer to them. If data is dynamic, it might be difficult to use but there
are options.

Serving content from CDNs can significantly improve performance in two ways:

Users receive content from data centers close to them
Your servers do not have to serve requests that the CDN fulfills

Push CDNs receive new content whenever changes occur on your server. You take
full responsibility for providing content, uploading directly to the CDN and
rewriting URLs to point to the CDN. You can configure when content expires and
when it is updated. Content is uploaded only when it is new or changed,
minimizing traffic, but maximizing storage. Works well with sites that don't
have a ton of traffic or content that isn't updated often.

Pull CDNs grab new content from your server when the first user requests the
content. You leave the content on your server and rewrite URLs to point to the
CDN. This results in a slower request until the content is cached on the CDN.

A time-to-live (TTL) determines how long content is cached. Pull CDNs minimize
storage space on the CDN, but can create redundant traffic if files expire and
are pulled before they have actually changed.

Sites with heavy traffic work well with pull CDNs, as traffic is spread out more
evenly with only recently-requested content remaining on the CDN.

