import { userAgent } from "next/server";
import { useEffect, useRef } from "react";

const Cursor = ()=>
{
    const dot = useRef(null);
    const cursorVisible = useRef(true);
    const cursorEnlarged = useRef(true);

    const requestRef = useRef(null);
    const endX = useRef(global.innerWidth/2);
    const endY = useRef(global.innerHeight/2);

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
        console.log("enter");
        toggleCursorSize();
    }
    const mosueLeaveEvent = ()=>
    {
        toggleCursorSize();

    }
    const mosueMoveEvent = e =>
    {
        cursorVisible.current = true;
        toggleCursorVisibility();

        endX.current = e.pageX;
        endY.current = e.screenY-65;

        dot.current.style.top = endY.current+"px";
        dot.current.style.left = endX.current+"px";
    }



    return(<div ref={dot} className = "cursor-dot"/>)
}

export default Cursor;