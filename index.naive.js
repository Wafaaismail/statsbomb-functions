import { pipe, always, applySpec } from 'ramda';

const getValue = (o, sortKey) => sortKey ? o[sortKey] : o

const sort = (list, sortKey) => {
  // SHOULD OPTIMIZE
  return list.sort((a, b) => getValue(a, sortKey) - getValue(b, sortKey));
};

const findIndex = (list, sortKey) => value => {
  // SHOULD OPTIMIZE
  return list.findIndex(i => getValue(i, sortKey) === value);
}

const insert = (list, sortKey, item) => {
  // SHOULD OPTIMIZE
  return [...list, item];
}

const remove = (list, sortKey, value) => {
  // SHOULD OPTIMIZE
  return list.filter(i => getValue(i) !== value);
}

export const List = ({ sortKey, initial, initialOrder}) => {
  const items = initialOrder ? initial : sort(initial, sortKey);
  return {
    items,
    findIndex: findIndex(items, sortKey),
    remove: value => List({
      sortKey,
      initial: remove(items, sortKey, value),
      initialOrder: true
    }),

    insert: item => List({
      sortKey,
      initial: insert(items, sortKey, item),
      // You should reverse this bool if your insertion preserve order
      initialOrder: true
    })
  }
}
