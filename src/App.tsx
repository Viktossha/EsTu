import './App.css'
import {useState} from "react";

type WordType = {
    es: string
    ru: string
}

export function App() {
    const [words] = useState<Array<WordType>>([
        {es: 'Buenos dias!', ru: 'Доброе утро!'}
    ])

    const [showValue, setShowValue] = useState(false)

    return (
      <div onClick={() => setShowValue(!showValue)}>
          {words.map((el, index) => <div key={index}>{showValue ? el.ru : el.es}</div>)}
      </div>
  )
}
