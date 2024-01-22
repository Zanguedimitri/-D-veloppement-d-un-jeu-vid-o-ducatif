import { useRef } from "react"

export function Start({setUsername}){
const inputref = useRef()
const handleClick = () => {
    inputref.current.value && setUsername(inputref.current.value)
};
    return <div className="start" >
        <input placeholder="enter your name" className="inputstart" ref={inputref} />
        <button className="bottonstart" onClick={handleClick} >Start</button>
    </div>
}