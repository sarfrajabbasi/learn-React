import React from 'react'
import Person from "./Person";

// display the list of item
function NameListKey() {
     /*  const names = ['sarfraz','Clark','Diana'];
      const nameList =names.map((name)=><h1>{name + ' 😎'}</h1>)
      console.log('hello');
    return (
      <div>{nameList}</div>
    ) */

/* Q. how react handle the update?
    Ans. react just iterate over the both the lists at the same time and generates the mutation whenever there is a difference.(insert if does'nt match).
*/
  const persons = [
    {
      id: 1,
      name: "sarfraj",
      age: 23,
      skill: "React",
    },
    {
      id: 2,
      name: "abbett",
      age: 24,
      skill: "Angilar",
    },
    {
      id: 3,
      name: "jonglone",
      age: 21,
      skill: "React",
    },
    {
      id: 4,
      name: "jk.boobs",
      age: 54,
      skill: "net.",
    },
    {
      id: 5,
      name: "roollet",
      age: 56,
      skill: "vue",
    },
  ];
  const PersonList = persons.map((person) => (
    <Person key={person.id} person={person}></Person>
  ));

  return <div>{PersonList}</div>;
}

export default  NameListKey