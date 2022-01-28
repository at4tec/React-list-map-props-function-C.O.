import React from 'react';
import './style.css';

export default function App() {
  const names = ['Ahmed', 'Aly', 'Abdo'];
  return (
    <ul>

      {/*  <li>{names[0]}</li>
      <li>{names[1]}</li>
      <li>{names[2]}</li>*/}

  {names.map(
       (e) => (
        <li>{e}</li>
            ))
  }

    </ul>
  );
}
