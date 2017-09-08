const {composeFilters} = require('../src');
const assert = require('assert');

describe('Compose and filter', () => {

  it('should compose and filter last element', () => {
    const isA = (x) => x === 'a';
    const isB = (x) => x === 'b';

    const filter = composeFilters(isA, isB);

    assert.deepEqual(
      filter(['a', 'b', 'c']),
      ['a', 'b'],
    );

  });

  it('should compose and filter first element', () => {
    const isA = (x) => x === 'a';
    const isB = (x) => x === 'b';

    const filter = composeFilters(isA, isB);

    assert.deepEqual(
      filter(['foo', 'a', 'b']),
      ['a', 'b'],
    );

  });

  it('should traverse array once', () => {
    let calls = 0;

    const arr = new Proxy(['a', 'b'], {
      get: function(target, name) {
        if (name !== 'length' && name != 'reduce') {
          calls = calls + 1;
        }

        return target[name];
      }
    });

    const isA = (x) => x === 'a';
    const isB = (x) => x === 'b';

    const filter = composeFilters(isA, isB);

    filter(arr);

    assert.equal(
      calls,
      2,
    );

  });
});
