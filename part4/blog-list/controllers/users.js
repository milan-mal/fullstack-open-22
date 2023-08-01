const bcrypt = require('bcrypt')
const usersRouter = require('express').Router()
const User = require('../models/user')

usersRouter.get('/', async (req, res) => {
  const users = await User.find({})
  res.json(users)
})

usersRouter.post('/', async (req, res) => {
  const { username, password, name } = req.body

  if( !password ){
    return res.status(400).json({ error: 'password is missing' })
  } else if( password.length < 3){
    return res.status(400).json({ error: 'password shorter than 3 characters' })
  }

  const saltRounds = 10
  const passwordHash = await bcrypt.hash(password, saltRounds)

  const user = new User({
    username,
    passwordHash,
    name
  })

  const savedUser = await user.save()

  res.status(201).json(savedUser)
})

module.exports = usersRouter