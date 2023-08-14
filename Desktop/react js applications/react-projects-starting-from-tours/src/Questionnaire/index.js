import React,{useState} from 'react'
import './styles.css'
import data from './data'
import { AiOutlineMinus } from  'react-icons/ai'
import { AiOutlinePlus } from 'react-icons/ai'

const  Questionnaires =() =>{
    const [question, setQuestions] = useState(data);
    const [showInfo, setShowInfo] = useState(false)
  return (
    <div className='Questionnaire'>        
        <h2 className='heading'>Questions and answers</h2>
      { 
          data.map((items)=>{
            const {title,id, info} = items;
            return(
            
                <article key={id} className='myBody'>
                    <div className='title-btn'>
                    {showInfo && <p>{info}</p>}
                    <header className='title'>
                            {title}
                    </header>
                    <div className='show-info'>
                    </div>
                            <button className='btn' onClick={() =>setShowInfo(!showInfo)}>
                                {showInfo?<AiOutlineMinus className='minus'/>:<AiOutlinePlus className='plus'/>}
                            </button>
                    </div>
                </article>
            )
            
        })
      }
    </div>
  )
}

export default Questionnaires;
