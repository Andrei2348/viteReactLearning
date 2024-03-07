import Button from './button/Button'
import { differences } from '../data'
import { useState } from 'react'

export default function DifferencesSection(){
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
        <section>
            <h3>Чем мы отличаемся от других</h3>
            <Button 
                isActive={contentType == 'way'}
                onClick={() => handleClick('way')}>button 1</Button>
            <Button
                isActive={contentType == 'easy'}
                onClick={() => handleClick('easy')}>button 2</Button>
            <Button
                isActive={contentType == 'program'}
                onClick={() => handleClick('program')}>button 3</Button>
            <p>{contentType}</p>
            <p>{differences[contentType]}</p>
            {contentType ? <p>{differences[contentType]}</p> : <div>Нажми на кнопку</div>}

            {/* Еще один подход */}
            {!contentType && <p>Нажми на кнопку</p>}
            {contentType && <p>{differences[contentType]}</p>}

            {/* И еще один подход */}
            {tabContent}
        </section>
    )
}