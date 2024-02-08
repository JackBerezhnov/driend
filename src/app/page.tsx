'use client';

import Button from '@mui/material/Button';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import TextField from '@mui/material/TextField';
import React, { useState } from 'react';

async function getData() {
  const res = await fetch("https://catfact.ninja/breeds");

  if(!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function Home() {
  const [input, setInput] = useState('');


  const data = await getData();

  function handlePost() {
    console.log("Hello");
  }

  function handleInput(event: React.ChangeEvent<HTMLInputElement>) {
    event.preventDefault();
    console.log(event.target.value);
    setInput(event.target.value);
  }

  return (
    <div className="flex flex-col justify-center items-center text-center bg-gray-200 h-screen">
      <Navbar />
      <h1 className="text-black">Driend</h1>
      <TextField onChange={handleInput} id="outlined-basic" label="Put your text here" variant="outlined" className="bg-gray-200 text-white"/>
      <Button onClick={handlePost} variant="contained">Post</Button>
      <p>{data.data[0].breed}</p>
      <Footer />
    </div>
  );
}
