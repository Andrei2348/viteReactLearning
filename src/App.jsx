import { useState } from 'react'
import Header from './components/Header'
import './App.css'
import { ways } from './data'

function WayToTeach(props) {
  return (
    <li>
      <p>
        <strong>{props.title}</strong>
        {props.description}
      </p>
    </li>
  )
}



function App() {
  return (
    <div>
    {/* <Header /> */}
    <main>
      <h1>hello react!!!</h1>
    </main>
    <section>
      <h3>Наш подход к обучению</h3>
      <ul>
        <WayToTeach 
        title={ways[0].title}
        description={ways[0].description} />
        <WayToTeach { ... ways[1]} />
        <WayToTeach { ... ways[2]} />
        
      </ul>
    </section>
    </div>
  )
}

export default App
