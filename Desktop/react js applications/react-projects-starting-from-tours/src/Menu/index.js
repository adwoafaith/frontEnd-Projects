import React, { useState } from 'react'
import './styles.css'
import menu from './data'

const Menu = () => {
    const [menuItems, setMenuItems] = useState(menu)
    
    const allCategory = ['all',...new Set(menu.map((item) => item.category))] ;
    console.log(allCategory)
    const [categorys, setCategory]   = useState(allCategory)
    
    const filterItems = (category) =>{
        if (category ==='all'){
            setMenuItems(menu)
            return;
        }
        const newMenu = menu.filter((item)=> item.category
        ===category)
        setMenuItems(newMenu)
    };

  return (
   <main className='main-menu'>
    <section className='menu-section'>
        <div className='menu-properties'>
            <h2 className='menu-title'> our menu</h2>
            <div className='filter-btn'>
                {categorys.map((category,index) =>{
                   return <button type='button' className='cat-button' key={index} onClick={() =>filterItems(category)}>
                    {category}
                   </button> 
                })}
            </div>
            {
                menu.map((items)=>{
                    const {id, title,imag,desc,price} = items;
                    return(
                        <article key={id} className='menu-items'>
                            <img src={imag} alt={title} className='pictures'/>
                            <div className='title-prices'>
                                <p className='my-titles'>{title}</p>
                                <h4 className='prices'>${price}</h4>
                            </div>
                                <p className='description'>{desc}</p>
                        </article>
                    )
                })
            }
        </div>
    </section>
   </main>
  )
}

export default Menu;