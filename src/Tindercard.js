import React, { useEffect, useState } from 'react';
import TinderCard from 'react-tinder-card';
import './Tindercard.css';
import axios from './axios';



const Tindercard=()=>{
    const [people,setpeople]=useState([]);

    useEffect(() => {

        async function  fetchData(){
            const req=await axios.get('/tinder/cards');

            setpeople(req.data)

        }
fetchData()
      
       
    }, [])

    console.log(people);

    const swiped=(direction,nameToDelete)=>{
        // setLastDirection(direction);
    };

    const outOfFrame=(name)=>{
    }

    return (
        <>
        <div className="tindercard">
        <div className="tindercard__cardcontainer">
          {people.map(person=>(
          <TinderCard  className="swipe"  key={person.name} preventSwipe={['up','down']} onCardLeftScreen={()=>outOfFrame(person.name)}    onSwipe={(dir)=>swiped(dir,person.name)}   >
          <div className="card"   style={{backgroundImage:`url(${person.imgUrl})`}}>

          <h3> {person.name}  </h3>

          </div>

          </TinderCard>

      ))   }   
        </div>
     
            
        </div>



        </>
    )
}


export default Tindercard