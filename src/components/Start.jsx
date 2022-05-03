import { useRef } from "react"

export default function Start({setUsername}) {

  const inputRef = useRef();
  const handleClick = ()=>{
    inputRef.current.value && setUsername(inputRef.current.value);
  }
  return (
    <div className="start">
        <input placeholder="Entre com seu nome" className="startInput" ref={inputRef}/>
        <button className="startButton" onClick={handleClick}>Entrar</button>
    </div>
  )
}
