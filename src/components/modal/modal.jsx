import { createPortal} from 'react-dom'
import './modal.css'

export default function Modal({ children, open }){
    // return <dialog open={open}>{children}</dialog>
    return createPortal(
        <dialog open={open}>{children}</dialog>,
        document.getElementById('modal')
    )
}