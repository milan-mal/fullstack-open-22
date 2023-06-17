const dummy = (blogs) => {
  console.log('blogs', blogs)
  return 1
}

const totalLikes = (blogs) => {
  const likeArray = blogs.map(blog => blog.likes)

  const likeSum = (sum, likes) => {
    return sum + likes
  }

  return likeArray.reduce(likeSum)
}

const favoriteBlog = (blogs) => {
  if (blogs.length === 0) return null

  const favorite = blogs.reduce((maxLikesBlog, currentBlog) => {
    if (currentBlog.likes > maxLikesBlog.likes) return currentBlog
    else return maxLikesBlog
  })

  const { title, author, likes } = favorite
  return { title, author, likes }
}

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog
}