// Collection Functions (Arrays or Objects)
function myEach(collection, callback) {
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        callback(collection[i]);
      }
    } else {
      const values = Object.values(collection);
      for (let i = 0; i < values.length; i++) {
        callback(values[i]);
      }
    }
    return collection;
  }
  
  function myMap(collection, callback) {
    const result = [];
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        result.push(callback(collection[i], i));
      }
    } else {
      const keys = Object.keys(collection);
      for (let i = 0; i < keys.length; i++) {
        result.push(callback(collection[keys[i]], keys[i]));
      }
    }
    return result;
  }
  
  function myReduce(collection, callback, acc) {
    let values = Array.isArray(collection) ? collection.slice() : Object.values(collection);
    
    if (acc === undefined) {
      acc = values[0];
      values = values.slice(1);
    }
  
    for (let i = 0; i < values.length; i++) {
      acc = callback(acc, values[i], collection);
    }
    
    return acc;
  }
  
  function myFind(collection, predicate) {
    const values = Array.isArray(collection) ? collection : Object.values(collection);
    
    for (let i = 0; i < values.length; i++) {
      if (predicate(values[i])) {
        return values[i];
      }
    }
    
    return undefined;
  }
  
  function myFilter(collection, predicate) {
    const result = [];
    const values = Array.isArray(collection) ? collection : Object.values(collection);
    
    for (let i = 0; i < values.length; i++) {
      if (predicate(values[i])) {
        result.push(values[i]);
      }
    }
    
    return result;
  }
  
  function mySize(collection) {
    return Array.isArray(collection) ? collection.length : Object.keys(collection).length;
  }
  
  // Array Functions
  function myFirst(array, n) {
    if (n === undefined) {
      return array[0];
    }
    return array.slice(0, n);
  }
  
  function myLast(array, n) {
    if (n === undefined) {
      return array[array.length - 1];
    }
    return array.slice(-n);
  }
  
  // Bonus Functions
  function mySortBy(array, callback) {
    return array.slice().sort((a, b) => {
      const valA = callback(a);
      const valB = callback(b);
      if (valA < valB) return -1;
      if (valA > valB) return 1;
      return 0;
    });
  }
  
  function myFlatten(array, shallow, newArr = []) {
    if (shallow) {
      return newArr.concat(...array);
    }
    
    for (let i = 0; i < array.length; i++) {
      if (Array.isArray(array[i])) {
        myFlatten(array[i], false, newArr);
      } else {
        newArr.push(array[i]);
      }
    }
    
    return newArr;
  }
  
  // Object Functions
  function myKeys(object) {
    return Object.keys(object);
  }
  
  function myValues(object) {
    return Object.values(object);
  }
  
  // Helper Functions (used in tests)
  function arraysEqual(arrA, arrB) {
    if (arrA.length !== arrB.length) return false;
    for (let idx = 0; idx < arrA.length; idx++) {
      if (Array.isArray(arrA[idx]) && Array.isArray(arrB[idx])) {
        arraysEqual(arrA[idx], arrB[idx]);
      } else if (arrA[idx] !== arrB[idx]) {
        return false;
      }
    }
    return true;
  }
  
  function objectsEqual(objA, objB) {
    return JSON.stringify(objA) === JSON.stringify(objB);
  }
  
  // Export all functions if using in Node.js environment
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
      myEach,
      myMap,
      myReduce,
      myFind,
      myFilter,
      mySize,
      myFirst,
      myLast,
      mySortBy,
      myFlatten,
      myKeys,
      myValues,
      arraysEqual,
      objectsEqual
    };
  }