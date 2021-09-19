import { pipe, always, applySpec, map, F } from "ramda";
import TimSort from "timsort";
const getValue = (o, sortKey) => (sortKey ? o[sortKey] : o);

const sort = (list, sortKey) => {
  // var arr = [...list];
  TimSort.sort(list, (a,b)=>getValue(a,sortKey)-getValue(b,sortKey));
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

const insert = (list, sortKey, item) => {
  const value = getValue(item, sortKey);
  const len = list.length;
  const newList = [];
  let inserted = false;
  if (value >= getValue(list[len - 1], sortKey)) {
    list[len] = value;
    return list;
  }
  for (let i = 0; i < len; i++) {
    const current = getValue(list[i], sortKey);
    if (current > value && !inserted) {
      newList.push(value);
      inserted = true;
    }

    newList.push(current);
  }
  return newList;
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
  // console.log(`items`, items)
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
console.log(List({ initial: [2, 1, -6, 4], initialOrder: false }).items);
