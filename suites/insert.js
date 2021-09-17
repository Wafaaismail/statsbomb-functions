import b from 'benny'
import { median, pluck, propEq, subtract } from 'ramda'
import { getRandomItems, random } from '../utils.js'

import * as main from '../index.js'
import * as naive from '../index.naive.js'

const itemsCount = 9999
const randomItems = getRandomItems(itemsCount)

const naiveList = naive.List({ initial: randomItems, sortKey: 'value' })
const mainList = main.List({ initial: randomItems, sortKey: 'value' })

// FIND START
b.suite(
  'Insert item into the start of the list',

  b.add('naive', () => {
    naiveList.insert({ value: 0 })
  }),

  b.add('main', () => {
    mainList.insert({ value: 0 })
  }),

  b.cycle(),
  b.complete(),
)

// FIND MIDDLE
b.suite(
  'Insert item into the middle of the list',

  b.add('naive', () => {
    naiveList.insert({ value: 5000 })
  }),

  b.add('main', () => {
    mainList.insert({ value: 5000 })
  }),

  b.cycle(),
  b.complete(),
)

// FIND END
b.suite(
  'Insert item into the end of the list',

  b.add('naive', () => {
    naiveList.insert({ value: itemsCount + 1 })
  }),

  b.add('main', () => {
    mainList.insert({ value: itemsCount + 1 })
  }),

  b.cycle(),
  b.complete(),
)
