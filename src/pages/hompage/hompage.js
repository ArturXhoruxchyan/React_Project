import "./hompage.css"
import React, { useState } from "react"

export default function Home() {
    const [count, setCount] = useState(false)
    const [nkar, setNkar] = useState(false)
    const [real, setReal] = useState(false)
    const data = [
        {
            class: "animals",
            click: () => setCount((e) => !e),
            activ: count,
            id: 1,
            page:"https://www.dartmoorzoo.org.uk/animals/"
        },
        {
            class: "animals1",
            click: () => setNkar((e) => !e),
            activ: nkar,
            id: 2,
            page:"https://ideas.ted.com/how-do-animals-learn-how-to-be-well-animals-through-a-shared-culture/"
        },
        {
            class: "animals2",
            click: () => setReal((e) => !e),
            activ: real,
            id: 3,
            page:"https://theconversation.com/the-threat-to-the-worlds-largest-wild-animals-is-much-greater-than-we-thought-64063"
        },
    ]
    return <div>
        <div className="masin">
            {data?.map((e) => (
                <div className="as" id={e.id}>
                    <div className={e?.class} onClick={e?.click}></div>
                   { e?.activ && <div className="real"><a className="a1" href={e?.page}>Animals</a></div>}
                </div>
            ))}
        </div>
    </div>
}
