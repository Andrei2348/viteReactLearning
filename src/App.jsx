import { useState } from 'react'
import Header from './components/Header'
import './App.css'

function WayToTeach() {
  return (
    <li>
      <p>
        <strong>Заголовок</strong>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia tempore veritatis illum corporis obcaecati architecto. Itaque dolorum vitae sunt maxime aliquid voluptates officia autem dolor, ex, eius commodi neque tempore.
      </p>
    </li>
  )
}



function App() {
  return (
    <div>
    <Header />
    <main>
      <h1>hello react!!!</h1>
    </main>
    <section>
      <h3>Наш подход к обучению</h3>
      <ul>
        <WayToTeach />
        <WayToTeach />
        <WayToTeach />
      </ul>
    </section>
    </div>
  )
}

export default App
