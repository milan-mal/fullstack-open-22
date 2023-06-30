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

const mostBlogs = (blogs) => {
  if (blogs.length === 0) return null

  const authors = blogs.map(blog => blog.author)

  const authorCount = {}
  let maxBlogCount = 0
  let authorMax = null

  for ( const author of authors ) {
    authorCount[author] = ( authorCount[author] || 0 ) + 1
    if ( authorCount[author] > maxBlogCount ) {
      maxBlogCount = authorCount[author]
      authorMax = author
    }
  }

  return { 'author': authorMax, 'blogs': maxBlogCount }
}

const mostLikes = (blogs) => {
  if (blogs.length === 0) return null

  const authorLikeSum = ( authorLikes, currentBlog ) => {
    authorLikes[currentBlog.author] = ( authorLikes[currentBlog.author] || 0 ) + currentBlog.likes
    return authorLikes
  }

  const authorLikes = blogs.reduce( authorLikeSum, {} )

  let maxLikes = 0
  let topAuthor = ''

  for( const author in authorLikes ){
    if( authorLikes[author] > maxLikes ){
      maxLikes = authorLikes[author]
      topAuthor = author
    }
  }

  return { author: topAuthor, likes: maxLikes }
}

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs,
  mostLikes
}