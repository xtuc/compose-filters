# compose-filters

> https://twitter.com/alexandereardon/status/905955091638837251

### Example

```js
const {composeFilters} = require('compose-filters');

const isA = (x) => x === 'a';
const isB = (x) => x === 'b';

const filter = composeFilters(isA, isB);

assert.deepEqual(
  filter(['a', 'b', 'c']),
  ['a', 'b'],
);
```
