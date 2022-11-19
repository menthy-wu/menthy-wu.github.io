import { useRef } from "react";

const Cursor = ()=>
{
    return(<div ref={dot} className = "w-3 h-3 rounded-full backdrop-invert bg-white"/>)
}

export default Cursor;