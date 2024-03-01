const now = new Date()

export default function Header(){
return (
    <header>
        <h3>Result university</h3>
        <span>Тут будет весело</span>
        <p>Время сейчас {now.toLocaleTimeString()}</p>
    </header>
    )
}