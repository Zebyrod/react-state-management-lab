// src/App.jsx
import { useState } from "react";
import './App.css';

const App = () => {
  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100);
  const [zombieFighters, setZombieFighters] = useState([
    {
      id: 1,
      name: 'Survivor',
      price: 12,
      strength: 6,
      agility: 4,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/0c2d6b.png',
    },
    {
      id: 2,
      name: 'Scavenger',
      price: 10,
      strength: 5,
      agility: 5,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/033a16.png',
    },
    {
      id: 3,
      name: 'Shadow',
      price: 18,
      strength: 7,
      agility: 8,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/262c36.png',
    },
    {
      id: 4,
      name: 'Tracker',
      price: 14,
      strength: 7,
      agility: 6,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/3c1e70.png',
    },
    {
      id: 5,
      name: 'Sharpshooter',
      price: 20,
      strength: 6,
      agility: 8,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/4b2900.png',
    },
    {
      id: 6,
      name: 'Medic',
      price: 15,
      strength: 5,
      agility: 7,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5a1e02.png',
    },
    {
      id: 7,
      name: 'Engineer',
      price: 16,
      strength: 6,
      agility: 5,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5e103e.png',
    },
    {
      id: 8,
      name: 'Brawler',
      price: 11,
      strength: 8,
      agility: 3,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/67060c.png',
    },
    {
      id: 9,
      name: 'Infiltrator',
      price: 17,
      strength: 5,
      agility: 9,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/ac3220.png',
    },
    {
      id: 10,
      name: 'Leader',
      price: 22,
      strength: 7,
      agility: 6,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/e41f26.png',
    },
  ]);

const handleAddFighter = (fighter) => {
  if (money >= fighter.price) {
    setMoney((prevMoney) => prevMoney - fighter.price); // This should check if the player has enough money and deduct the cost of the fighter from their total
    setZombieFighters((prevFighters) => 
    prevFighters.filter((zombieFighter) => zombieFighter.id !== fighter.id)
  ); // This will remove the selected fighter from the array preventing the user from selecting repeats
  setTeam((prevTeam) => [...prevTeam, fighter]); // This will add the selected fighter to the team
  } else {
    console.log('Not enough money!');
  }
};

// Using the handleAddFighter as a reference I want to now add in a function to handle removing a team member once they have been added

const handleRemoveFighter = (fighter) => {
  setTeam((prevTeam) => prevTeam.filter((member) => member.id !== fighter.id));
  setZombieFighters((prevFighters) => [...prevFighters, fighter]);
  setMoney((prevMoney) => prevMoney + fighter.price);
};

// Re read w3 schools doc on reduce method and used my google ai to assist with the syntax as I still find myself getting confused with arrow function syntax
// Here I want to take the fighters in my team and use the reduce method to only return their strength then total them all together
// 0 is at the end because I am starting with a total of 0 until a team member is added
const totalStrength = team.reduce((total, fighter) => total + fighter.strength, 0); 
// I am doing the same process as above but now for the agility stat of the team members
const totalAgility = team.reduce((total, fighter) => total + fighter.agility, 0);

  return (
    <>
    <h1>Zombie Fighters!</h1>
    <h2>Money: {money}</h2>
    <h3>Team Strength: {totalStrength}</h3>
    <h3>Team Agility: {totalAgility}</h3>
    <h3>Team:</h3>
    {team.length === 0 ? <p>Pick some team members!</p> : <p>Your Team:</p>}
    <ul>
        {team.map((fighter) => (
          <li key={fighter.id}>
            <p>{fighter.name}</p>
            <img src={fighter.img} alt={fighter.name} />
            {/* I am now adding a remove button that will call my handleRemoveFighter function using the fighter as the event for onClick */}
            <button onClick={() => handleRemoveFighter(fighter)}>Remove</button>
          </li>
        ))}
      </ul>
    
    <h3>Select Your Fighters:</h3>
    <ul>
      {zombieFighters.map((zombieFighter) => (
        <li key={zombieFighter.id}>
          <div>
            <p>{zombieFighter.name}</p>
            <img src={zombieFighter.img} alt={zombieFighter.name} />
            <p>Price: {zombieFighter.price}</p>
            <p>Strength: {zombieFighter.strength}</p>
            <p>Agility: {zombieFighter.agility}</p>
            <button onClick={() => handleAddFighter(zombieFighter)}>Add</button> 
            {/* This will call my AddFighter function and pass the zombieFighter selected as the argument */}
          </div>
        </li>
      ))}
    </ul> 
    </>
  );
}

export default App