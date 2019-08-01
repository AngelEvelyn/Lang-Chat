/**
 *
 * @param {Object} obj object or array
 * @param {[string]} whitelist optional array of keys, that if provided filters out this properties
 * from the root level of the original object. Has no effect if input is an array
 */
function toCamel(obj, whitelist) {
  if (Array.isArray(whitelist) && isObject(obj)) {
    const whitelistedObj = whitelist.reduce((acc, key) => {
      if (Object.prototype.hasOwnProperty.call(obj, key)) acc[key] = obj[key];
      return acc;
    }, {});

    return keysToCamel(whitelistedObj);
  }

  return keysToCamel(obj);
}

function keysToCamel(obj) {
  if (isObject(obj)) {
    const newObj = {};

    Object.keys(obj)
      .forEach((key) => {
        newObj[stringToCamel(key)] = keysToCamel(obj[key]);
      });

    return newObj;
  } if (Array.isArray(obj)) {
    return obj.map(elem => keysToCamel(elem));
  }

  return obj;
}

function stringToCamel(s) {
  return s.replace(/([-_][a-z0-9])/ig, $1 => $1.toUpperCase()
    .replace('-', '')
    .replace('_', ''));
}

function isObject(obj) {
  return obj === Object(obj) && !Array.isArray(obj) && typeof obj !== 'function';
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

// console.log(toCamel(t1, ['serves', 'pairs_with']));
