import './App.css'
import {type ChangeEvent, useState} from "react";

type WordType = {
    es: string
    ru: string
    show: boolean
}

export function App() {
    const [words, setWords] = useState<Array<WordType>>([
        {es: 'Buenos dias!', ru: 'Доброе утро!', show: false}
    ])

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
            setWords(prevState => ([...prevState, {es: esValue, ru: rusValue, show: false}]))
            setStep('ru')
            setRusValue('')
            setEsValue('')
        }
    }

    const onClickHandler = (index: number) => {
        setWords(words.map((l, i) => i === index ? {
            ...l,
            show: !l.show
        } : l))
    }

    return (
        <>
            <div>
                {words.map((el, index) => <div key={index} onClick={() => onClickHandler(index)}>{el.show ? el.ru : el.es}</div>)}
            </div>
            <input onChange={onChangeHandler} value={step === 'ru' ? rusValue : esValue}/>
            <button onClick={addWord}>Сохранить</button>
        </>
    )
}
