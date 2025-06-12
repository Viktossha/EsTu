import './App.css'
import {type ChangeEvent, useState} from "react";

type WordType = {
    es: string
    ru: string
}

export function App() {
    const [words, setWords] = useState<Array<WordType>>([
        {es: 'Buenos dias!', ru: 'Доброе утро!'}
    ])

    //если true - показать перевод на русский
    const [showValue, setShowValue] = useState(false)

    const [rusValue, setRusValue] = useState('')
    const [esValue, setEsValue] = useState('')
    const [step, setStep] = useState<'ru' | 'es'>('ru')


    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (step === 'ru') {
            setRusValue(e.currentTarget.value)
        } else {
            setEsValue(e.currentTarget.value)
        }
    }

    const addWord = () => {
        if (step === 'ru') {
            setStep('es')
        } else {
            setWords(prevState => ([...prevState, {es: esValue, ru: rusValue}]))
            setStep('ru')
            setRusValue('')
            setEsValue('')
        }
    }
    console.log(words)

    return (
        <>
            <div onClick={() => setShowValue(!showValue)}>
                {words.map((el, index) => <div key={index}>{showValue ? el.ru : el.es}</div>)}
            </div>
            <input onChange={onChangeHandler} value={step === 'ru' ? rusValue : esValue}/>
            <button onClick={addWord}>Сохранить</button>
        </>
    )
}
