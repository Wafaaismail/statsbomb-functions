import { pipe, always, applySpec, map, F } from "ramda";
import R from "ramda";

const getValue = (o, sortKey) => (sortKey ? o[sortKey] : o);

const sort = (list, sortKey) => {
  const a = [...list];
  if (a.length < 2) return a;
  const pivotIndex = Math.floor(list.length / 2);
  const pivot = a[pivotIndex];
  const [lo, hi] = a.reduce(
    (acc, val, i) => {
      if (val < pivot || (val === pivot && i != pivotIndex)) {
        acc[0].push(val);
      } else if (val > pivot) {
        acc[1].push(val);
      }
      return acc;
    },
    [[], []]
  );
  return [...quickSort(lo), pivot, ...quickSort(hi)];



};

const findIndex = (list, sortKey) => (value) => {
  var min = 0; 
  var max = list.length - 1; 
  var mid;
  while(min <= max) {
      mid = Math.floor((max + min) / 2);
      if (getValue(list[mid],sortKey) === value) {
          return mid;
      }
      else if (getValue(list[mid],sortKey) < value) {
          min = mid + 1;
      }
      else {
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
  let newList =[];
  for (let i = 0; i < list.length; i++) {
    const current = getValue(list[i], sortKey);
    if(current !== value){
      newList.push(current)
    }
  }
  return newList
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
List({ initial: [1, 2, 3, 4], initialOrder: true  }).remove(3)
// List({ initial: [4, 3, -1, 1, 2, 5, 0],initialOrder: true }).insert(9).items
// List({ initial: [1, 2, 3, 4], initialOrder: false }).insert(5)
//   .items;
// List({ initial: [1, 2, 3, 4] }).findIndex(3);

// console.log(List({ initial: [1, 2, 3, 4,5], initialOrder: true  }).findIndex(4))