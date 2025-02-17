import React from 'react'

const News = () => {
  return (
    <div className='news'>
        <header className="news-header">Views & News</header>
        <div className="news-content">
            <div className="navbar">
                <div className="user"></div>
                <nav className="categories">Categories</nav>
            </div>
            <div className="news-section">
                  <div className="headline">Headline</div>
                  <div className="news-grid">News Grid</div>
              </div>  
              <div className="my-blogs">My Blogs</div>
        </div>  
    </div>
  )
}

export default News