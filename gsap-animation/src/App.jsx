import { useState } from 'react'
import './App.css'
function App() {
  return (
    <>
     <div className='cards'>
        <div className="card noise">
          <h3>card 1</h3>
          <p>hoaslshoahsoahsoasaoshosoa
              jhoashoahsoahsaohsoahsaoshaos
              haishoahsahoshaoshoahoshoahs
          </p>
        </div>
        <div className="card noise">
          <h3>card 2</h3>
          <p>hoaslshoahsoahsoasaoshosoa
              jhoashoahsoahsaohsoahsaoshaos
              haishoahsahoshaoshoahoshoahs
          </p>
        </div>
        {/* Poner un span y ponerle la imagen con blur ( verifica https://gitness.com/) */}
        <div className="card noise">
            <h3>card 3</h3>
            <p>hoaslshoahsoahsoasaoshosoa
              jhoashoahsoahsaohsoahsaoshaos
              haishoahsahoshaoshoahoshoahs
            </p>
        </div>
     </div>
    </>
  )
}

export default App
