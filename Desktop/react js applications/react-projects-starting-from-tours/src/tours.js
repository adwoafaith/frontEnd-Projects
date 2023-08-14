import React, { useEffect, useState } from 'react'
import './styles.css'
import Loading from './loading';
const url = 'https://course-api.com/react-tours-project'

const Tours = () => {
    const [loading, setLoading] = useState(true);
    const [tours, setTours] = useState([]);
    const [readMore, setReadMore] = useState(false)

    const HandleNotInterested = (id) => {
        let newTours = tours.filter((tour) => tour.id !== id);
        setTours(newTours);
    }
    //fetch the data from the url 
    const FetchData = async () => {
        try {
            setLoading(true)
            const response = await fetch(url)
            const tours = await response.json()
            setLoading(false)
            setTours(tours)
        } catch (error) {
            console.log(error)
        }
    };
    useEffect(() => {
        FetchData();
    }, [])

    if (loading) {
        return (
            <>
                <main>
                    <Loading />
                </main>


            </>

        )

    }
    if (tours.length === 0) {
        <main>
            <div>
                <h2> no tours left</h2>
                <button onClick={() => FetchData()}>refresh</button>
            </div>
        </main>
    }
    return (
        <>
            <div className='tour'>
                <h1>Our Tour</h1>
            </div>
            {

                tours.map((tour) => {
                    const { id, image, info, price, name } = tour
                    return (
                        <div key={id} className='item-container'>
                            <div className='my-image'>
                                <img src={image} alt={name} />

                            </div>
                            <span className='price' style={{ textAlign: 'right' }}>${price}</span>
                            <section>
                                <p className='info'>
                                    {readMore ? info : `${info.substring(0, 200)}...`}
                                    <button onClick={() => setReadMore(!readMore)} className='button'>
                                        {readMore ? 'show less' : 'show more'}
                                    </button>
                                </p>
                            </section>
                            <div>
                                <button className='not-interested' onClick={() => HandleNotInterested(id)}>not interested</button>
                            </div>
                        </div>
                    )
                })
            }

            <p>
                <b><button className='clear-button' onClick={() => setTours([])}>clear tour</button></b>
            </p>
        </>
    )

}

export default Tours;
