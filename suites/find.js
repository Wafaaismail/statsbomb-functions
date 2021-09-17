import b from 'benny'
import { median, pluck, propEq, subtract } from 'ramda'
import { getRandomItems, random } from '../utils.js'

import * as main from '../index.js'
import * as naive from '../index.naive.js'

const itemsCount = 9999
const randomItems = getRandomItems(itemsCount)

const values = pluck('value', randomItems).sort(subtract)
const nearStart = values[random(0, 50)]
const nearMiddle = values[Math.ceil(itemsCount / 2) + random(-25, 25)]
const nearEnd = values[itemsCount - random(0, 50)]

const naiveList = naive.List({ initial: randomItems, sortKey: 'value' })
const mainList = main.List({ initial: randomItems, sortKey: 'value' })

// FIND START
b.suite(
  'Find item at the start of the list',

  b.add('naive', () => {
    naiveList.findIndex(nearStart)
  }),

  b.add('main', () => {
    mainList.findIndex(nearStart)
  }),

  b.cycle(),
  b.complete(),
)

// FIND MIDDLE
b.suite(
  'Find item at the middle of the list',

  b.add('naive', () => {
    naiveList.findIndex(nearMiddle)
  }),

  b.add('main', () => {
    mainList.findIndex(nearMiddle)
  }),

  b.cycle(),
  b.complete(),
)

// FIND END
b.suite(
  'Find item at the end of the list',

  b.add('naive', () => {
    naiveList.findIndex(nearEnd)
  }),

  b.add('main', () => {
    mainList.findIndex(nearEnd)
  }),

  b.cycle(),
  b.complete(),
)
