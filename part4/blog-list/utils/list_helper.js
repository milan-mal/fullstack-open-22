const dummy = (blogs) => {
  console.log('blogs', blogs)
  return 1
}

const totalLikes = (blogs) => {
  console.log('blogs', blogs)

  const likeArray = blogs.map(blog => blog.likes)
  console.log('likeArray', likeArray)

  const likeSum = (sum, likes) => {
    return sum + likes
  }

  return likeArray.reduce(likeSum)
}

module.exports = {
  dummy,
  totalLikes
}