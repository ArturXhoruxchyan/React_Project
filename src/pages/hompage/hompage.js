import "./hompage.css"
import React, { useState } from "react"

export default function Home() {
    const [count, setCount] = useState(false)
    const [nkar, setNkar] = useState(false)
    const [real, setReal] = useState(false)
    return <div>
        <div className="masin">
            <div className="as">
                <div className="animals" onClick={() => setCount((e) => !e)}></div>
                {count && <div className="real"><a className="a1" href="https://github.com/ArturXhoruxchyan/React_Project">Animals</a></div>}
                </div>
        

            <div className="as">
                <div className="animals1" onClick={() => setNkar((e) => !e)}></div>
                {nkar && <div className="real"><a className="a1" href="https://github.com/ArturXhoruxchyan/React_Project">Animalse</a></div>}
         </div>

         <div className="as">
                <div className="animals2" onClick={() => setReal((e) => !e)}></div>
                {real && <div className="real"><a className="a1" href="https://github.com/ArturXhoruxchyan/React_Project">Animalsee</a></div>}
         </div>
    </div>
    </div>
    }
