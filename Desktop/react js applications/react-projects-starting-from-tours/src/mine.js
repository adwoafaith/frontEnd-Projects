import './styles.css'
const url = 'https://course-api.com/react-tours-project'
function App() {
    const [loading, setLoading] = useState(true)
    const [tours, setTours] = useState([])

    const removeTour = (id) => {
        const newTours = tours.filter((tour) => tour.id !== id);
        setTours(newTours)
    }

    const fetchTours = async () => {
        setLoading(true)
        try {
            const response = await fetch(url);
            const tours = await response.json()
            setLoading(false)
            setTours(tours)
        } catch (error) {
            setLoading(false)
            console.log(error);
        }
    }

    useEffect(() => {
        fetchTours();
    }, [])

    if (loading) {
        return (
            <main>
                <Loading />
            </main>
        )
    }
    if (tours.length == 0) {
        return (
            <main>
                <div>
                    <h2>no tours left</h2>
                    <button onClick={() => fetchTours()}>refresh</button>
                </div>
            </main>
        )
    }
    return (
        <>
            <tours tours={tours} removeTour={removeTour} />
        </>
    )

}



<section className='title'>
    <h2>our tours</h2>
    <div>
        {
            tours.map((tour) => {
                return <Tour key={tour.id}{...tour} removeTour={removeTour}></Tour>
            })
        }
    </div>
</section>


import React, { useState } from 'react'

const Tour = ({ id, image, info, price, name, removeTour }) => {
    const [readMore, setReadMore] = useState(false)
    return (
        <article className='single-tour'>
            <span className='my-image'>
            <img src={image} alt={name} height={300} width={400} />

            </span>
            <footer>
                <h4>{name}</h4>
                <h4 className='tour-price'>${price}</h4>
                <p>{
                    readMore ? info : `${info.substring(0, 200)}...`}
                    <button onClick={() => setReadMore(!readMore)}>
                        {readMore ? 'show less' : 'read more'}
                    </button>
                </p>
                <p>
                    <button onClick={() => removeTour(id)} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded align-center">
                        not interested
                    </button>
                </p>

            </footer>
        </article>
    )
}

export default Tour;
