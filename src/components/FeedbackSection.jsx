import Button from './button/Button'
import { useState } from 'react'

export default function FeedbackSection(){
    const [form, setForm] = useState({
        name: '',
        hasError: true,
        reason: 'help',
    })

    // const [name, setName] = useState('')
    // const [reason, setReason] = useState('help')
    // const [hasError, setHasError] = useState(false)

    function handleNameChange(event){
        // setName(event.target.value)
        // Проверка на ошибки
        // setHasError(event.target.value.trim().length == 0)
        // setForm({
        //     name: event.target.value,
        //     hasError: event.target.value.trim().length == 0,
        //     reason: form.reason,
        // })
        setForm((prev) => ({
            ...prev,
            name: event.target.value,
            hasError: event.target.value.trim().length == 0
        }))
    }


    return(
        <section>
            <h3>Обратная связь</h3>
            <form>
                <label htmlFor="name">Ваше имя</label>
                <input type="text" 
                        id="name" 
                        className="control" 
                        value={form.name}
                        style={{
                            border: form.hasError ? '1px solid red' : '1px solid black',
                        }}              
                        onChange={handleNameChange}
                />

                <label htmlFor="reason">Причина обращения</label>
                <select id="reason" 
                        className="control" 
                        value={form.reason}
                        onChange={(event) => setReason(event.target.value)}>
                    <option value="error">Ошибка</option>
                    <option value="help">Нужна помощь</option>
                    <option value="suggest">Проедложение</option>
                </select>
                <pre>
                    Name: {form.name}
                    <br />
                    Reason: {form.reason}
                </pre>
                <Button disabled={form.hasError} isActive={!form.hasError}>
                    Отправить
                </Button>
            </form>
        </section>
    )
}