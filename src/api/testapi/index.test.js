import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { Testapi } from '.'

const app = () => express(apiRoot, routes)

let testapi

beforeEach(async () => {
  testapi = await Testapi.create({})
})

test('POST /testapis 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ title: 'test', author: 'test', price: 'test', test: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.title).toEqual('test')
  expect(body.author).toEqual('test')
  expect(body.price).toEqual('test')
  expect(body.test).toEqual('test')
})

test('GET /testapis 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /testapis/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${testapi.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(testapi.id)
})

test('GET /testapis/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /testapis/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${testapi.id}`)
    .send({ title: 'test', author: 'test', price: 'test', test: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(testapi.id)
  expect(body.title).toEqual('test')
  expect(body.author).toEqual('test')
  expect(body.price).toEqual('test')
  expect(body.test).toEqual('test')
})

test('PUT /testapis/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ title: 'test', author: 'test', price: 'test', test: 'test' })
  expect(status).toBe(404)
})

test('DELETE /testapis/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${testapi.id}`)
  expect(status).toBe(204)
})

test('DELETE /testapis/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
