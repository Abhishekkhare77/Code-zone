import React, { useState } from 'react'
const Contact = () => {
  const [name, setname] = useState('')
  const [email, setemail] = useState('')
  const [phone, setphone] = useState('')
  const [desc, setdesc] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { name,phone,email,desc };

    fetch('http://localhost:3000/api/postcontact', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.text())
      .then((data) => {
        console.log('Success:', data);
        alert("Thanks for contacting us")
        setdesc('')
        setname('')
        setphone('')
        setemail('')
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }
  const handleChange = (e) => {
    if (e.target.name == "name") {
      setname(e.target.value);
    }
    else if (e.target.name == "phone") {
      setphone(e.target.value);
    }
    else if (e.target.name == "email") {
      setemail(e.target.value);
    }
    else if (e.target.name == "desc") {
      setdesc(e.target.value);
    }
  }
  return (
    <div>
      <h1 className='text-center text-2xl text-green-200 m-2 p-2 font-bold'>Contact Us</h1>
      <form className='flex items-center flex-col my-2' onSubmit={handleSubmit}>
        <div className='flex flex-col p-3'>
          <label htmlFor="name">Name</label>
          <input type="text" id='name' value={name} onChange={handleChange} name='name' className='bg-white text-black p-2' />
        </div>
        <div className='flex flex-col p-3'>
          <label htmlFor="email">Email</label>
          <input type="email" id='email' name='email' value={email} onChange={handleChange} className='bg-white text-black p-2' />
        </div>
        <div className='flex flex-col p-3'>
          <label htmlFor="phone">Phone</label>
          <input type="number" id='phone' name='phone' value={phone} onChange={handleChange} className='bg-white text-black p-2' />
        </div>
        <div className='flex flex-col p-3'>
          <label htmlFor="desc">Description</label>
          <input type="text" id='desc' name='desc' value={desc} onChange={handleChange} className='bg-white text-black p-2' />
        </div>
        <button type="submit" className='p-2 my-3 text-center bg-blue-500 rounded hover:bg-blue-900 '>Submit</button>
      </form>
    </div>
  )
}

export default Contact
