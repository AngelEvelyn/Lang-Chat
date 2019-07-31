function toCamel(obj, whitelist) {
  const camelCasedObj = keysToCamel(obj);

  if (whitelist) {
    return whitelist.reduce((acc, key) => {
      if (Object.prototype.hasOwnProperty.call(camelCasedObj, key)) acc[key] = camelCasedObj[key];
      return acc;
    }, {});
  }

  return camelCasedObj;
}

function keysToCamel(obj) {
  // console.log('\nkeysToCamel invoked on:', obj);
  if (isObject(obj)) {
    const newObj = {};

    Object.keys(obj)
      .forEach((key) => {
        newObj[stringToCamel(key)] = keysToCamel(obj[key]);
      });

    return newObj;
  } if (isArray(obj)) {
    return obj.map(elem => keysToCamel(elem));
  }

  return obj;
}

function stringToCamel(s) {
  return s.replace(/([-_][a-z0-9])/ig, $1 => $1.toUpperCase()
    .replace('-', '')
    .replace('_', ''));
}

function isArray(a) {
  return Array.isArray(a);
}

function isObject(o) {
  return o === Object(o) && !isArray(o) && typeof o !== 'function';
}

module.exports = {
  toCamel,
};

// const t1 = {
//   best_chili: {
//     chili_ingredients: [
//       'beef',
//       'dried chilis',
//       'fresh tomatoes',
//       'cumin',
//       'onions',
//       'onion-powder',
//       'peppers',
//     ],
//     chili_steps: {
//       step_1: '',
//       step_2: '',
//     },
//   },
//   serves: 6,
//   pairs_with: [
//     {
//       'french-bread': {},
//     },
//     {
//       'rye-croutons': {},
//     },
//   ],
// };

// console.log(toCamel(t1, ['serves', 'pairsWith']));
