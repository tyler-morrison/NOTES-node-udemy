# Javascript, JSON, & Databases

Well structured relational databases aim to repeat information as few times as possible. This is done by “normalizing” data or breaking it down into smaller and smaller parts. Afterward, we can stitch these pieces of data back together using ID numbers.

Javascript already has built in functionality to deal with data, we just need to apply the proper mental model. We can think of each table as an array. Then each item in the array is an object, each field a name, etc.

```javascript
[
  {
    ID: 1,
    Firstname: 'John',
    Lastname: 'Doe',
    Address: '555 Main St.'
  },
  {
    ID: 2,
    Firstname: 'Jane',
    Lastname: 'Doe',
    Address: '555 Main St.'
  },
]
```

# NoSQL & Documents

**NoSQL** = A variety of technologies that are alternatives to tables and SQL. One of those types is a *document* database. MongoDB is one of those.

A Document database is much like the example above, but decoupled from the actual table schema. In the past, the major concern with data was preventing repeats. Fewer repeated data sets meant hard drive space was optimized. However, a lot has changed since then and hard drive space is a much lower concern within modern servers.

Instead, what we’re more concerned with is how often we need to change software and structure, which could cause problems in a traditional SQL setting. Essentially we sacrifice a bit of hard drive space for an increase in flexibility.

# MongoDB

MongoDB is one of the most popular NoSQL software packages.
