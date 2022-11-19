import { userAgent } from "next/server";
import { useEffect, useRef } from "react";

const Cursor = ()=>
{
    const dot = useRef(null);
    const cursorVisible = useRef(true);
    const cursorEnlarged = useRef(true);
    const endX = useRef(null);
    const endY = useRef(null);
    if (typeof window !== 'undefined') {
        endX.current = useRef(window.innerHeight/2);
        endY.current = useRef(window.innerHeight/2);
      }
    const _x = useRef(0);
    const _y = useRef(0);

    const requestRef = useRef(null);

    useEffect(()=>
    {
        document.addEventListener("mousedown", mosueDownEvent);
        document.addEventListener("mouseup", mosueUpEvent);
        document.addEventListener("mousemove", mosueMoveEvent);
        document.addEventListener("mouseenter", mosueEnterEvent);
        document.addEventListener("mouseleave", mosueLeaveEvent);

        return() =>
        {
            document.removeEventListener("mousedown", mosueDownEvent);
            document.removeEventListener("mouseup", mosueUpEvent);
            document.removeEventListener("mousemove", mosueMoveEvent);
            document.removeEventListener("mouseenter", mosueEnterEvent);
            document.removeEventListener("mouseleave", mosueLeaveEvent);

            cancelAnimationFrame(requestRef.current);
        }
    },[])
    const toggleCursorVisibility = () =>
    {
        if(cursorVisible.current)
        {
            dot.current.style.opacity = 1;

        }
        else
        {
            dot.current.style.opacity = 0;
        }
    }
    const toggleCursorSize = ()=>
    {
        if(cursorEnlarged.current)
        {
            dot.current.style.transform = "translate(-50%, -50%) scale(1.5)";

        }
        else
        {
            dot.current.style.transform = "translate(-50%, -50%) scale(1)";
        }
    }

    const mosueDownEvent = ()=>
    {

    }
    const mosueUpEvent = ()=>
    {

    }
    const mosueEnterEvent = ()=>
    {

    }
    const mosueLeaveEvent = ()=>
    {

    }
    const mosueMoveEvent = e =>
    {
        cursorVisible.current = true;
        toggleCursorVisibility();

        endX.current = e.pageX;
        endY.current = e.pageY;

        dot.current.style.top = endY.current+"px";
        dot.current.style.left = endX.current+"px";
    }



    return(<div ref={dot} className = "cursor-dot"/>)
}

export default Cursor;