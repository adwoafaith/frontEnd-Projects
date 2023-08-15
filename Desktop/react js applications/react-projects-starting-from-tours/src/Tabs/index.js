import React, { useEffect, useState } from 'react'
import { LiaAngleDoubleRightSolid } from 'react-icons/lia'
const url = 'https://course-api.com/react-tabs-project';

const Tabs = () => {
  const [isLoading,setIsLoading] = useState(true);
  const [job, setJOb]            = useState([])
  const [indexs, setIndex]        = useState(1)

  const fetchData = async() =>{
    setIsLoading(true)
    const response = await fetch(url);
    const data = await response.json();
    console.log(data)
    setJOb(data);
    setIsLoading(false);

  }
  useEffect(()=>{
    fetchData();

  },[])
 if (isLoading){
  return(
    <div className='loading-tabs'>
      Loading...
    </div>
  )
 }

const { company, dates, duties, title } =job[indexs];
  return (
    <section className='tabs-section'>
      <div className='experience'>
        <h2>experience</h2>
      </div>
      <div className='job-btn'>
        {
          job.map((item,index)=>{
            return(
              <button className='company-btn' key={item.id} onClick={()=>setIndex(index)}
              >
                {item.company}
              </button>
            );
          })
        }
      </div>
      <article className='job-info'>
        <h3>{title}</h3>
        <h4>{company}</h4>
        <p>{dates}</p>
        {duties.map((duty, index) => {
          return (
            <div key={index}>
              <LiaAngleDoubleRightSolid className='job-icon' />
              <p>{duty}</p>
            </div>
          )
        })}
      </article>
    </section>
  )
}

export default Tabs;
