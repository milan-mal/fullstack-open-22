const Blog = require('../models/blog')
const User = require('../models/user')

const initialBlogs = [
  {
    title: 'initial blog',
    author: 'Milan',
    url: 'https://www.reddit.com/',
    likes: 0,
  },
  {
    title: 'initial blog 2',
    author: 'Milan',
    url: 'http://www.livesport.cz/',
    likes: 2,
  }
]

const blogsInDb = async () => {
  const blogs = await Blog.find({})
  return blogs.map(blog => blog.toJSON())
}

const usersInDb = async () => {
  const users = await User.find({})
  return users.map(user => user.toJSON())
}

module.exports = {
  initialBlogs,
  blogsInDb,
  usersInDb
}