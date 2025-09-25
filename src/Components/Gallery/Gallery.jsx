import React from 'react'
import './Gallery.css'
import theme_pattern from '../../assets/theme_pattern.png'
import galleryData from '../../assets/galleryData'

const Gallery = () => {
  return (
    <div id='gallery' className='gallery'>
      <div className='gallery-title'>
        <h1>Gallery</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="gallery-container">
        {galleryData.map((gallery, index) => {
          return <img key={index} src={gallery.g_img} alt="" />
        })}
      </div>
      <div className="gallery-showmore">
        <p>Show More</p>
        <h1>⟶</h1>
      </div>
    </div>
  )
}

export default Gallery