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

# Converting Tabular data
