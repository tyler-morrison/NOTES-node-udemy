# Objects & Object Literals

**Name/Value Pair** = A name which maps to a value. The name may be defined more than once, but only can have one value in any given *context*. Example: `Address  '100 Main St.'`. An object is nothing more than a sequence of name/value pairs that can be nested, if desired.

**Object Literals** = A shorthand for declaring objects...

```javascript
{
  street: 'Main',
  number: 100,
  occupant : {
    firstname: 'Tyler',
    lastname: 'Morrison'   
  }
}
```

*REMEMBER:* Object property methods can be called in both dot and bracket notation — `object.property` or `object[property]`. The bracket notation is particularly useful when you want to dynamically change the property.
