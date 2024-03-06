import { useState } from 'react'
import Header from './components/Header'
import './App.css'
import { ways, differences } from './data'
import WayToTeach from './components/WayToTeach'
import Button from './components/button/Button'


function App() {
  const [contentType, setContentType] = useState(null)


  // let content = 'Нажми на кнопку'
  console.log('app component render')

  function handleClick(type){
    console.log('button clicked', type)
    setContentType(type)
    // content = type
  }

  let tabContent = null
  if (contentType){
    tabContent = <p>{differences[contentType]}</p>
  } else {
    tabContent = <p>Нажми на кнопку</p>
  }


  return (
    <div>
    <Header />
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

    <section>
      <h3>Чем мы отличаемся от других</h3>
      <Button onClick={() => handleClick('way')}>button 1</Button>
      <Button onClick={() => handleClick('easy')}>button 2</Button>
      <Button onClick={() => handleClick('program')}>button 3</Button>
      <p>{contentType}</p>
      <p>{differences[contentType]}</p>
      {contentType ? <p>{differences[contentType]}</p> : <div>Нажми на кнопку</div>}

      {/* Еще один подход */}

      {!contentType && <p>Нажми на кнопку</p>}
      {contentType && <p>{differences[contentType]}</p>}

      {tabContent}
    </section>
    </div>
  )
}

export default App
