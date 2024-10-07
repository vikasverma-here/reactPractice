import { useState } from 'react'

import './App.css'

function App() {

  const [form, setForm] = useState(
    {
      name: 'Niki de Saint Phalle',
      artwork: {
        title: 'Blue Nana',
        city: 'Hamburg',
        image: 'https://i.imgur.com/Sd1AgUOm.jpg',
      }
    }
  )

  function handleChnage(e){
  setForm({
    ...form,
    name:e.target.value
  })
  }
  function handleChange(e){
    setForm({
      ...form.artwork,
     title:e.target.value
    })
  }

  return (
    <>
    <label >
      Name :
      <input type="text"  value={form.name} onChange={handleChnage} />
    </label>
    <label >
      title :
      <input type="text"  value={form.artwork.title} onChange={handleChange} />
    </label>
    <label >
      city :
      <input type="text"  value={form.artwork.city} onChange={handleChnage} />
    </label>
    <label >
      image :
      <input type="text"  value={form.artwork.image} onChange={handleChnage} />
    </label>

<p>
  <li>{form.name}</li>
  <li>{form.artwork.title}</li>
  <li>{form.artwork.city}</li>
  
</p>

<img 
        src={form.artwork.image} 
        alt={form.artwork.title}
      />
    </>
    
  )
}

export default App
