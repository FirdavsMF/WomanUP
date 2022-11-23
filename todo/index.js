const express = require('express')
const router = express.Router()
const TODO = require('../db/models/todo')

router.post('/', (req, res) => {
	const {username, value} = req.body
	const newTODO = new TODO({
		'username': username,
		'value': value
	})
	newTODO.save((err, saveTODO) => {
		if (err) return res.json(err)
		return res.json(saveTODO)
	})
})

router.get('/', (req, res, next) => {
	TODO.find()
	.then(data => res.json(data))
	.catch(next)
});

router.delete('/:id', (req, res, next) => {
	const {value} = req.body
	TODO.findOneAndUpdate({"_id": req.params.id}, {$set: {value: value, updated: Data.new()}})
	.then(data => res.json(data))
	.catch(next)
})

module.exports = require

