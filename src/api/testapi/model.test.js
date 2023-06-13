import { Testapi } from '.'

let testapi

beforeEach(async () => {
  testapi = await Testapi.create({ title: 'test', author: 'test', price: 'test', test: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = testapi.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(testapi.id)
    expect(view.title).toBe(testapi.title)
    expect(view.author).toBe(testapi.author)
    expect(view.price).toBe(testapi.price)
    expect(view.test).toBe(testapi.test)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = testapi.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(testapi.id)
    expect(view.title).toBe(testapi.title)
    expect(view.author).toBe(testapi.author)
    expect(view.price).toBe(testapi.price)
    expect(view.test).toBe(testapi.test)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
