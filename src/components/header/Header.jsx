const now = new Date()
import { useState } from 'react'
import classes from './header.module.css'

export default function Header(){
    const [now, setNow] = useState(new Date())
    setInterval(() => setNow(new Date()), 1000)

    return (
        <header>
            <h3>Result university</h3>
            <span>Тут будет весело</span>
            <p>Время сейчас {now.toLocaleTimeString()}</p>
        </header>
        )
    }