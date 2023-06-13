import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Testapi, { schema } from './model'

const router = new Router()
const { title, author, price, test } = schema.tree

/**
 * @api {post} /testapis Create testapi
 * @apiName CreateTestapi
 * @apiGroup Testapi
 * @apiParam title Testapi's title.
 * @apiParam author Testapi's author.
 * @apiParam price Testapi's price.
 * @apiParam test Testapi's test.
 * @apiSuccess {Object} testapi Testapi's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Testapi not found.
 */
router.post('/',
  body({ title, author, price, test }),
  create)

/**
 * @api {get} /testapis Retrieve testapis
 * @apiName RetrieveTestapis
 * @apiGroup Testapi
 * @apiUse listParams
 * @apiSuccess {Object[]} testapis List of testapis.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /testapis/:id Retrieve testapi
 * @apiName RetrieveTestapi
 * @apiGroup Testapi
 * @apiSuccess {Object} testapi Testapi's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Testapi not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /testapis/:id Update testapi
 * @apiName UpdateTestapi
 * @apiGroup Testapi
 * @apiParam title Testapi's title.
 * @apiParam author Testapi's author.
 * @apiParam price Testapi's price.
 * @apiParam test Testapi's test.
 * @apiSuccess {Object} testapi Testapi's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Testapi not found.
 */
router.put('/:id',
  body({ title, author, price, test }),
  update)

/**
 * @api {delete} /testapis/:id Delete testapi
 * @apiName DeleteTestapi
 * @apiGroup Testapi
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Testapi not found.
 */
router.delete('/:id',
  destroy)

export default router
