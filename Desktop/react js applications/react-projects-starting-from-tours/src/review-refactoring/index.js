import React, { useState } from 'react'
import './styles.css'
import data from './data'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi'
import { FaQuoteRight } from 'react-icons/fa'
import { RxSlash } from 'react-icons/rx'
const Reviews2 = () => {
    const [index,setIndex]      = useState(0)
    const [loading,setLoading]  = useState(true)
    
    const previewsBtn = () =>{
         return setIndex(index-1)
    }

    const nextBtn = () => {
        return setIndex(index + 1)
    }
    const {name,title,image,quote} = data[index]
  return (
    <section className='review-refactoring'>
        <div className='review-heading'>
            <RxSlash/>
            <span> reviews</span>
        </div>
        <div className='review-image'>
            <img src={image} alt={name}/>
        </div>
        <div className='review-name'>
          {name}
        </div>
        <div className='review-title'>
            {title}
        </div>
        <div className='review-quote'>
        {quote}
        </div>
        <button className='left-arrow' onClick={previewsBtn}>
        <FiChevronLeft/>
        </button>
          <button className='right-arrow' onClick={nextBtn}>
              <FiChevronRight />
          </button>
          <FaQuoteRight/>
    </section>
  )
}

export default Reviews2;