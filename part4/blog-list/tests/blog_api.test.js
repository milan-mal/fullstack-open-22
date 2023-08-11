const supertest = require('supertest')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const helper = require('./test_helper')
const app = require('../app')

const Blog = require('../models/blog')
const User = require('../models/user')

const api = supertest(app)

describe('blog tests', () => {
  beforeEach(async () => {
    await Blog.deleteMany()

    const blogObjects = helper.initialBlogs
      .map(blog => new Blog(blog))
    const promiseArray = blogObjects.map(blog => blog.save())
    await Promise.all(promiseArray)
  })

  test('getting all blogs returns data in JSON', async () => {
    await api
      .get('/api/blogs')
      .expect(200)
      .expect('Content-Type', /application\/json/)
  })

  test('getting all blogs returns the correct count', async () => {
    const response = await api.get('/api/blogs')
    expect(response.body).toHaveLength(helper.initialBlogs.length)
  })

  test('checking the name of the id property', async () => {
    const response = await api.get('/api/blogs')
    for( const blog in response.body) {
      expect(response.body[blog].id).toBeDefined()
    }
  })

  test('new blog is correctly to the DB added using POST', async () => {
    const newBlog = {
      title: 'new blog',
      author: 'Milan',
      url: 'https://www.example.com/',
      likes: 1
    }

    await api
      .post('/api/blogs')
      .send(newBlog)
      .expect(201)
      .expect('Content-Type', /application\/json/)

    const blogsAtEnd = await helper.blogsInDb()
    expect(blogsAtEnd).toHaveLength(helper.initialBlogs.length + 1)

    const titles = blogsAtEnd.map(blog => blog.title)
    expect(titles).toContain('new blog')
  })

  test('POSTing a new blog without likes defaults the value to a 0', async () => {
    const newBlog = {
      title: 'new blog without likes',
      author: 'Milan',
      url: 'https://www.netflix.com/'
    }

    const response = await api
      .post('/api/blogs')
      .send(newBlog)
      .expect(201)
      .expect('Content-Type', /application\/json/)

    expect(response.body.likes).toEqual(0)
  })

  test('POSTing a new blog without a title returns 400', async () => {
    const newBlog = {
      title: 'a blog without an url',
      author: 'Milan'
    }

    await api
      .post('/api/blogs')
      .send(newBlog)
      .expect(400)
  })

  test('POSTing a new blog without an url returns 400', async () => {
    const newBlog = {
      author: 'Milan',
      url: 'https://www.no-title.com',
    }

    await api
      .post('/api/blogs')
      .send(newBlog)
      .expect(400)
  })

  test('deleting a blog returns 204 and deletes it from the DB', async () => {
    const blogsAtStart = await helper.blogsInDb()
    const blogToDelete = blogsAtStart[0]

    await api
      .delete(`/api/blogs/${blogToDelete.id}`)

    const blogsAtEnd = await helper.blogsInDb()
    expect(blogsAtEnd).toHaveLength(helper.initialBlogs.length - 1)

    const titles = blogsAtEnd.map(blog => blog.title)
    expect(titles).not.toContain(blogToDelete.title)
  })

  test('updating a blog\'s like count returns 200 and makes the change in the DB', async () => {
    const blogsAtStart = await helper.blogsInDb()
    const blogToUpdate = blogsAtStart[0]
    const newLikes = { likes: 69 }

    const response = await api
      .put(`/api/blogs/${blogToUpdate.id}`)
      .send(newLikes)
      .expect(200)
      .expect('Content-Type', /application\/json/)

    expect(response.body.likes).toEqual(newLikes.likes)
  })
})

describe('user tests', () => {
  beforeEach(async () => {
    await User.deleteMany({})

    const passwordHash = await bcrypt.hash('tajneHeslo', 10)
    const user = new User({ username: 'defaultUser', passwordHash })

    await user.save()
  })

  test('user is SUCCESSfully added', async () => {
    const usersAtStart = await helper.usersInDb()

    const newUser = {
      name: 'MilanTest',
      username: 'miltest',
      password: 'hesloheslo'
    }

    await api
      .post('/api/users/')
      .send(newUser)
      .expect(201)
      .expect('Content-Type', /application\/json/)

    const usersAtEnd = await helper.usersInDb()
    expect(usersAtEnd).toHaveLength(usersAtStart.length + 1)

    const usernames = usersAtEnd.map(user => user.username)
    expect(usernames).toContain(newUser.username)
  })

  test('invalid user (no username) is not created', async() => {
    const newUser = {
      name: 'MilanTest',
      password: 'hesloheslo'
    }

    await api
      .post('/api/users/')
      .send(newUser)
      .expect(400)
      .expect('Content-Type', /application\/json/)
  })
})

afterAll(async () => {
  await mongoose.connection.close()
})