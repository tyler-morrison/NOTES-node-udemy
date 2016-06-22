## Modules and ES6

The whole concept of modules in JS was first added by Node; however, the JS standards now include this concept by default. Therefore, over time we will start to see more usage of ES6 modules replacing node modules.

### ES6 Modules
**greet.js**
```javascript
  export function greet() {
    console.log('Hello');
  };
```

**app.js**
```javascript
  import * as greetr from 'greet';
  greetr.greet(); // Hello
```
