import Button from './button/Button'
import Modal from './modal/modal'
import { useState } from 'react'

export default function EffectSection(){
    const [modal, setModal] = useState(false)
    function openModal(){
        setModal(true)
    }
    return (
        <section>
            <h3>Effect</h3>
            <Button onClick={openModal}>Открыть информацию</Button>
            <Modal open={modal}>
                <h3>Hello from Modal</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi deserunt ad nemo earum, veniam quisquam aperiam sint nisi eius. Laborum odio, quibusdam in pariatur optio cupiditate cumque omnis ea voluptates?</p>
            </Modal>
        
        
        </section>
    )
}