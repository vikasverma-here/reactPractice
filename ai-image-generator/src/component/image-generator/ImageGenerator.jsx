import React from 'react'
import './imageGenerator.css'
import def_img from '../assets/img.png'
function ImageGenerator() {
  return (
    <div className='ai-img-generator'>
      <div className="header">
        Ai Image <span>Generator</span>
        </div>
        <div className="img_loading">
          <div className="image">
            <img src={def_img} alt="" />
          </div>
        </div>
      <div className="search-box">
        <input type="text" className='input-search' placeholder='Descirbe what you want in image ' />
        <div className="generate-btn">
          Generate
        </div>
      </div>
    </div>
  )
}

export default ImageGenerator
