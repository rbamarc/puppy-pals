import { puppyList } from './data'
import './App.css'
import { useState } from 'react'


function App() {
  
  const [puppies, setPuppies] = useState(puppyList)
  console.log(puppies)
  return (
    <>
      <div>
        {
          puppies.map((puppy) => {
            return <p key={puppy.id}>{puppy.name }</p>
          })
        }
      </div>
    </>
  )
}

export default App
