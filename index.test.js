import { List } from './index.js'

describe('List', () => {
  it('should create list', () => {
    const list = List({ initial: [1, 2, 3, 4], initialOrder: true })
    const expected = [1, 2, 3, 4];
    const actual = list.items

    expect(actual).toEqual(expected)
  })

  it('should sort initial list items', () => {
    const list = List({ initial: [4, 3, -1, 1, 2, 5, 0] })
    const expected = [-1, 0, 1, 2, 3, 4, 5];
    const actual = list.items

    expect(actual).toEqual(expected)
  })

  it('should sort initial list items', () => {
    const list = List({ initial: [100, -100, 10, 9, 200, -300] })
    const expected = [-300, -100, 9, 10, 100, 200];
    const actual = list.items

    expect(actual).toEqual(expected)
  })

  it('should sort initial list items', () => {
    const list = List({ initial: [1, 2, 3, 4, 5] })
    const expected = [1, 2, 3, 4, 5];
    const actual = list.items

    expect(actual).toEqual(expected)
  })

  it('should insert b into list a end', () => {
    const list = List({ initial: [1, 2, 3, 4], initialOrder: true  })
    const expected = [1, 2, 3, 4, 5];
    const actual = list.insert(5).items

    expect(actual).toEqual(expected)
  })

  it('should insert b into list a mid', () => {
    const list = List({ initial: [1, 2, 3, 5,7,9], initialOrder: true  })
    const expected = [1, 2, 3, 5,6,7,9];
    const actual = list.insert(6).items

    expect(actual).toEqual(expected)
  })

  it('should insert b into list a start ', () => {
    const list = List({ initial: [4, 5, 6, 7], initialOrder: true  })
    const expected = [2, 4, 5,6,7];
    const actual = list.insert(2).items

    expect(actual).toEqual(expected)
  })

  it('should remove b from list a last', () => {
    const list = List({ initial: [1, 2, 3, 4], initialOrder: true  })
    const expected = [1, 2, 3];
    const actual = list.remove(4).items

    expect(actual).toEqual(expected)
  })

  it('should remove b from list a mid', () => {
    const list = List({ initial: [1, 2, 3, 4], initialOrder: true  })
    const expected = [1, 2, 4];
    const actual = list.remove(3).items

    expect(actual).toEqual(expected)
  })
  it('should remove b from list a first', () => {
    const list = List({ initial: [1, 2, 3, 4], initialOrder: true  })
    const expected = [ 2, 3,4];
    const actual = list.remove(1).items

    expect(actual).toEqual(expected)
  })


  it('should findIndex of b at list a mid', () => {
    const list = List({ initial: [1, 2, 3, 4], initialOrder: true  })
    const expected = 2;
    const actual = list.findIndex(3)

    expect(actual).toEqual(expected)
  })
  it('should findIndex of b at list a last', () => {
    const list = List({ initial: [1, 2, 3, 4], initialOrder: true  })
    const expected = 3;
    const actual = list.findIndex(4)

    expect(actual).toEqual(expected)
  })
  it('should findIndex of b at list a start', () => {
    const list = List({ initial: [1, 2, 3, 4], initialOrder: true  })
    const expected = 0;
    const actual = list.findIndex(1)

    expect(actual).toEqual(expected)
  })


})
