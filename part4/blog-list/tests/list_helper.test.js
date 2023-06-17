const listHelper = require('../utils/list_helper')

const listWithOneBlog = [
  {
    _id: '5a422aa71b54a676234d17f8',
    title: 'Go To Statement Considered Harmful',
    author: 'Edsger W. Dijkstra',
    url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
    likes: 5,
    __v: 0
  }
]

const listWithThreeBlogs = [
  {
    _id: '5a422aa71b54a676234d17f8',
    title: 'Go To Statement Considered Harmful',
    author: 'Edsger W. Dijkstra',
    url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
    likes: 5,
    __v: 0
  },
  {
    _id: '5a422aa71b54a676234d17f9',
    title: 'Ahoj',
    author: 'Milan',
    url: 'https://www.seznam.cz',
    likes: 6,
    __v: 0
  },
  {
    _id: '5a422aa71b54a676234d17f0',
    title: 'Noice',
    author: 'Dashik',
    url: 'https://www.google.com',
    likes: 100,
    __v: 0
  },
]

test('dummy returns one', () => {
  const blogs = []

  const result = listHelper.dummy(blogs)
  expect(result).toBe(1)
})

describe('total likes', () => {

  test('when list has only one blog, equals the likes of that', () => {
    const result = listHelper.totalLikes(listWithOneBlog)
    expect(result).toBe(5)
  })

  test('list with 3 blogs -> the like sum equals the likes of all of them', () => {
    const result = listHelper.totalLikes(listWithThreeBlogs)
    expect(result).toBe(111)
  })
})

describe('blogs report', () => {
  test('favorite blog out of the list of three blogs', () => {
    expect(listHelper.favoriteBlog(listWithThreeBlogs)).toEqual({
      title: 'Noice',
      author: 'Dashik',
      likes: 100
    })
  })
})