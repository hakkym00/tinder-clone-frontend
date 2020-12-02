import React, {useState, useEffect} from 'react'
import TinderCard from 'react-tinder-card'
import Axios from 'axios'
import '../TinderCards.css'
function TinderCards() {
    const [people, setPeople] = useState([])
    const [error, setError] = useState('')
    // const [lastDirection, setLastDirection] = useState('')
    useEffect(() => {
        Axios.get('/api/cards')
        .then(res => (
            setPeople(res.data)
        )).catch(e => (
            setError(e.response ? e.response.data && e.response.data.message : e.message)            
            ))
        
    }, [])
    const Swiped = (direction, nameToDelete) => {
        console.log(`Removing ${nameToDelete}`)
        // setLastDirection(direction)
    }
    const outOfFrame = (name) => {
        console.log(`${name} left the screen`)
    }

    return (
        <div className='tinderCards'>
            <div className="tinderCards__cardCointainer">
               { people.map((person) => (
                    <TinderCard className='swipe' key={person.name} preventSwipe={["up", "down"]} 
                    onSwipe={(dir) => Swiped(dir, person.name)}
                    onCardLeftScreen={() => outOfFrame(person.name)}
                    >
                        <div className='card' style={{backgroundImage: `url(${person.image})`}}>
                            <h3> {person.name} </h3>
                        </div>

                    </TinderCard>
                ))
               }
            </div>
        </div>
    )
}

export default TinderCards
