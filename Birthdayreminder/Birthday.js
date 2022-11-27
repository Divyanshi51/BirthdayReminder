import React from 'react'
import { useState } from 'react';
import data from './data'
import List from './List'
import "./Birthdayreminder.css"

export default function Birthday() {
  const [people, setpeople] = useState([]);
  const [btnText , setBtnText] = useState("Get Data");

  const fetchData = () => {
    if (people.length === 0) {
      setpeople(data)
      setBtnText("Clear All")
    }
    else if (people.length !== 0) {
      setpeople([])
      setBtnText("Get Data")
    }
  }

  return (
    <>
      <div className='container'>
        <h1>{people.length} Birthdays Today</h1>
        {people.map((person) => {
          return <List key={person.id} person={person} />
        })}
        <button className='btn' onClick={fetchData}>{btnText}</button>
      </div>
    </>
  )
}