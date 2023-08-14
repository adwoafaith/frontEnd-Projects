import React, { useEffect, useState } from 'react'
import {LiaAngleDoubleRightSolid } from 'react-icons/lia'
const url = 'https://course-api.com/react-tabs-project';

const Tabs = () => {
  const [loadings, setLoadings] = useState(true)
  const [jobs, setJobs]       = useState([])
  const [value, setValue]     = useState(1) 
  
  const fetchJob = async() =>{
    setLoadings(true)
    const response = await fetch(url)
    const newJobs = await response.json();
    console.log(response)
    setJobs(newJobs);
    setLoadings(false);
  }
  useEffect(()=>{ 
  fetchJob()
  },[])
  
  if (loadings){
   return(
     <h1 className='loading'>loading...</h1>
   )
  }
  const {company,dates,duties,title} =jobs[value];
  return (
    <section className='tabs-section'>
      <h2>experience</h2>
      <article className='job-info'>
        <h3>{title}</h3>
        <h4>{company}</h4>
        <p>{dates}</p>
        {duties.map((duty,index)=>{
          return(
            <div key={index}>
              <LiaAngleDoubleRightSolid className='job-icon'/>
              <p>{duty}</p>
            </div>
          )
        })}
      </article>
    </section>
  )
}

export default Tabs;
