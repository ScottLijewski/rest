import { success, notFound } from '../../services/response/'
import { Testapi } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  Testapi.create(body)
    .then((testapi) => testapi.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  Testapi.find(query, select, cursor)
    .then((testapis) => testapis.map((testapi) => testapi.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Testapi.findById(params.id)
    .then(notFound(res))
    .then((testapi) => testapi ? testapi.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  Testapi.findById(params.id)
    .then(notFound(res))
    .then((testapi) => testapi ? Object.assign(testapi, body).save() : null)
    .then((testapi) => testapi ? testapi.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  Testapi.findById(params.id)
    .then(notFound(res))
    .then((testapi) => testapi ? testapi.remove() : null)
    .then(success(res, 204))
    .catch(next)
