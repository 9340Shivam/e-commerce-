import React from 'react'

const FrontPage = () => {
  return (
   <div className='ride '>
  <div id="carouselExampleControlsNoTouching" className="carousel slide" data-bs-touch="false">
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img  src="https://t4.ftcdn.net/jpg/02/35/24/85/360_F_235248516_fd01wWZfv0ASe7XBsx2vot2wGXUtcNN8.jpg" alt="..."  className="d-block w-100 image"/>
      </div>
      <div className="carousel-item active">
        <img  src="https://www.shutterstock.com/image-vector/men-women-shopping-online-on-260nw-1293548662.jpg" className="d-block w-100 image" alt="..." />
      </div>
      <div className="carousel-item active">
        <img  src="https://as2.ftcdn.net/v2/jpg/04/99/06/71/1000_F_499067142_uemtOgaVymVUF8dztdGApB02hGENQ72t.jpg" className="d-block w-100 image" alt="..." />
      </div>
      <div className="carousel-item">
        <img src="https://img.pikbest.com/wp/202408/website-online-shopping-in-denmark-an-impressive-3d-render-for-social-media-and-websites_9737255.jpg!w700wp" className="d-block w-100 image" alt="..." />
      </div>
      <div className="carousel-item">
        <img src="https://png.pngtree.com/background/20230703/original/pngtree-online-shopping-in-3d-a-rendered-concept-featuring-a-red-background-picture-image_4126781.jpg" className="d-block w-100 image" alt="..." />
      </div>
      <div className="carousel-item">
        <img src="https://burst.shopifycdn.com/photos/black-friday-to-do-list.jpg?width=1000&format=pjpg&exif=0&iptc=0" className="d-block w-100 image" alt="..." />
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true" />
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true" />
      <span className="visually-hidden">Next</span>
    </button>
  </div>
</div>

  )
}

export default FrontPage
