import { times } from 'ramda'

export const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)
export const getRandomItems = count => times(i => ({
  id: `${String.fromCharCode(i).repeat(3)}-${i}`,
  value: random(0, count)
}), count)
