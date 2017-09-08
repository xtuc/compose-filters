function filterIsTrue(el) {
  return (fn) => fn(el) === true;
}

function composeFilters(...fns) {

  return function filter(arr) {

    return arr.reduce(function(acc, el) {
      if (fns.find(filterIsTrue(el)) !== undefined) {
        acc.push(el);
      }

      return acc;
    }, []);
  };
}

module.exports = {composeFilters};
