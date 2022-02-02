import React from 'react';
import './style.css';

//child
class Person extends React.Component{
render(){
return<li>{this.props.name} is {this.props.age} knows {this.props.skill}</li>
}
}


//parent
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
       <Person
        name={e.name} 
        age={e.age} 
        skill={e.skill}/>
            ))
  }

    </ul>
  );
}
