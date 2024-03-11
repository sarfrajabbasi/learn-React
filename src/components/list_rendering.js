// display the list of item

import React from "react";
import Person from "./Person";

function NameList() {
  //     const names = ['sarfraz','Clark','Diana'];
  //     const nameList =names.map((name)=><h1>{name + ' 😎'}</h1>)
  //     console.log('hello');
  //   return (
  //     <div>{nameList}</div>
  //   )

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
    <Person person={person}></Person>
  ));

  return <div>{PersonList}</div>;
}

export default  NameList