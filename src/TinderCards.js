import React, { useEffect, useState } from 'react';
import TinderCard from 'react-tinder-card';
import database from './firebase';
import "./TinderCards.css";

function TinderCards() {
    const [people,setPeople] = useState([
    ]);

    useEffect(() => {
        database.collection("people").onSnapshot((snapshot) => setPeople(snapshot.docs.map((doc) =>doc.data())));
    },[]);

    return (
        <div className="Tinder__cardsContainer">
            { people.map((person)=>(
                <TinderCard key={person.name} className="swipe" preventSwipe={['up','down']}>
                    <div className="card" style={{ backgroundImage: `url(${person.url})`}}>
                        <h3>{person.name}</h3>
                    </div>
                </TinderCard>  
            ))} 
        </div>
    );
}

export default TinderCards;