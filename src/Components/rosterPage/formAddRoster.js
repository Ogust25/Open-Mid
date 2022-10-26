import React, { useState } from 'react';

export default function FormAddRoster({ onAdd }) {
  const [name, setName] = useState('');
  const [server, setServer] = useState('');
  const [role, setRole] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();

    if (!name) {
      alert('No name');
      return
    }
    if (!server) {
      alert('No server');
      return
    }
    if (!role) {
      alert('No role');
      return
    }

    onAdd({ name, server, role})

    setName('')
    setServer('')
    setRole('')
  }

  return (
    <form onSubmit={onSubmit} className='flex justify-end text-black'>
      <input value={name} onChange={(e) => setName(e.target.value)} className='rounded-xl mr-5 p-3' name="name" type="text" placeholder='Nom'></input>

      <input value={server} onChange={(e) => setServer(e.target.value)} className='rounded-xl mr-5 p-3' name="server" type="text" placeholder='Serveur'></input>

      <select value={role} onChange={(e) => setRole(e.target.value)} name='role' className='rounded-xl px-3 mr-5'>
        <option value='' disabled>Rôle</option>
        <option value='tank'>TANK</option>
        <option value='heal'>HEAL</option>
        <option value='dps'>DPS</option>
      </select>
      <input id='btnAddRoster' className='bg-button rounded-xl py-3 px-5 mr-3 hover:bg-buttonHover text-white' type='submit' value='Ajouter' />
    </form>
  )
}









/* import React from 'react'
import { useState } from "react";

export default function FormAddRoster() {
    
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setInputs(values => ({...values, [name]: value}))
    }
  
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log(inputs);
    }

  return (
    <form className='flex justify-end text-black' onSubmit={handleSubmit}>
      <input className='rounded-xl mr-5 p-3' name="name" value={inputs.name || ""} onChange={handleChange} type="text" placeholder='Nom'></input>
      <input className='rounded-xl mr-5 p-3' name="server" value={inputs.server || ""} onChange={handleChange} type="text" placeholder='Serveur'></input>
      <select name='role' value={inputs.role || ""} onChange={handleChange} className='rounded-xl px-3 mr-5'>
        <option value='' disabled>Rôle</option>
        <option value='tank'>TANK</option>
        <option value='heal'>HEAL</option>
        <option value='dps'>DPS</option>
      </select>
      <input id='btnAddRoster' className='bg-button rounded-xl py-3 px-5 mr-3 hover:bg-buttonHover text-white' type='submit' value='Ajouter' />
    </form>
  )
} */