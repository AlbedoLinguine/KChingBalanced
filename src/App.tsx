import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [enterSite, setEnterSite] = useState(false)

  return (
    <>
    {!enterSite && <>
    <h1>Balancing K'Ching</h1>
    <p>by clicking enter, you are not allowed to talk about any relationship with this site.</p>
      <button onClick={() => setEnterSite((enterSite) => !enterSite)}> Enter Site </button> </> }
    
    {enterSite && <>
      <p>Our Mission is to balance our K'Ching experience from any corruption found between student council,
        ridiculous laws, illegal operations, dangerous situations, etc. from escalating. Which is why we will use
        the information you provide us and attempt to take care of it <strong>free of charge</strong>.
      </p>
      <div className="columncss">
      <textarea className="textareacss"></textarea>
      <button className="submitbutton"> Submit </button>
      </div>
    </>}
    </>
  )
}

export default App
