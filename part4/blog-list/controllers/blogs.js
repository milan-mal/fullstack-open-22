const blogRouter = require('express').Router()
const Blog = require('../models/blog')

blogRouter.get('/', async (request, response) => {
  const blogs = await Blog.find({})
  response.status(200).json(blogs)
})

blogRouter.post('/', async (request, response) => {
  const blogBody = request.body

  if( !blogBody.url || !blogBody.title ){
    response.status(400).end()
    return
  }

  const blog = new Blog({
    title: blogBody.title,
    author: blogBody.author,
    url: blogBody.url,
    likes: blogBody.likes || 0
  })

  const savedBlog = await blog.save()
  response.status(201).json(savedBlog)
})

blogRouter.delete('/:id', async (request, response) => {
  await Blog.findByIdAndRemove(request.params.id)
  response.status(204).end()
})

blogRouter.put('/:id', async (request, response) => {
  const updatedBlog = await Blog.findByIdAndUpdate(
    request.params.id,
    { likes: request.body.likes },
    { new: true }
  )

  response.status(200).json(updatedBlog)
})

module.exports = blogRouter