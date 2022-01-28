import React from 'react';
import './style.css';

export default function App() {
  //const names = ['Ahmed', 'Aly', 'Abdo'];
  const persons=[
    { id:1,
     name:'Ahmed',
     age:30,
     skill:'react'},
    { id:2,
       name:'Aly',
       age:20,
       skill:'js'},
   ]
  return (
    <ul>

      {/*  <li>{names[0]}</li>
      <li>{names[1]}</li>
      <li>{names[2]}</li>*/}

  {persons.map(
       (e) => (
        <li>{e.name} is {e.age} knows {e.skill}</li>
            ))
  }

    </ul>
  );
}
