import './Button.css'

export default function Button({ children, onClick, isActive }) {
    // let classes = 'button'
    // if (isActive) classes += ' active'
    
    return (
        <button className={isActive ? 'button active' : 'button'} onClick={onClick}>{ children }</button>
    )
}

// export default function Button({ text }) {
//     function handleClick(){
//         console.log('Button clicked')
//     }

//     const handleMouseEnter = () => console.log('enter')
    
//     return <button className='button' 
//                     onClick={handleClick}
//                     onMouseEnter={handleMouseEnter}>
//                     { text }
//             </button>
// }

// Другой способ передачи этих параметров
// export default function Button({ children }) {
//     return <button className='button'>{ children }</button>
// }