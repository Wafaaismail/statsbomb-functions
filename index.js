import { pipe, always, applySpec, map, F } from "ramda";
import TimSort from "timsort";
const getValue = (o, sortKey) => (sortKey ? o[sortKey] : o);
const sort = (list, sortKey) => {
  // var arr = [...list];
  TimSort.sort(list, (a, b) => getValue(a, sortKey) - getValue(b, sortKey));
  return list;
};

const findIndex = (list, sortKey) => (value) => {
  var min = 0;
  var max = list.length - 1;
  var mid;
  while (min <= max) {
    mid = Math.floor((max + min) / 2);
    if (getValue(list[mid], sortKey) === value) {
      return mid;
    } else if (getValue(list[mid], sortKey) < value) {
      min = mid + 1;
    } else {
      max = mid - 1;
    }
  }
  return -1;
};

// const value = getValue(item, sortKey);
// const len = list.length;
// let i = 0;
//   while (i < len && getValue(list[i], sortKey) < value) {
//         i++;
//       }
//       list.splice(i, 0, value);
//       return list;
// }
const insert = (list, sortKey, item) => {
  const value = getValue(item, sortKey);
  const len = list.length;
  let inserted = false;
  if (value >= getValue(list[len - 1], sortKey)) {
    return [...list, value];
  } else if (value <= getValue(list[0], sortKey)) {
    return [value].concat(list);
  } else {
    const newList = [];
    for (let i = 0; i < len; i++) {
      const current = getValue(list[i], sortKey);
      if (current > value && !inserted) {
        newList.push(value);
        inserted = true;
      }
      newList.push(current);
    }
    return newList;
  }
};

const remove = (list, sortKey, value) => {
  let newList = [];
  for (let i = 0; i < list.length; i++) {
    const current = getValue(list[i], sortKey);
    if (current !== value) {
      newList.push(current);
    }
  }
  return newList;
};

export const List = ({ sortKey, initial, initialOrder }) => {
  const items = initialOrder ? initial : sort(initial, sortKey);
  return {
    items,
    findIndex: findIndex(items, sortKey),
    remove: (value) =>
      List({
        sortKey,
        initial: remove(items, sortKey, value),
        initialOrder: true,
      }),

    insert: (item) =>
      List({
        sortKey,
        initial: insert(items, sortKey, item),
        initialOrder: true,
      }),
  };
};
