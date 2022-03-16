import React, { useEffect, useRef } from "react"
import styled from "styled-components"
import { rubberBand } from "../../../animations"
import { separator } from "../../../functions/separator"
import { addAnimation } from "../../../functions/addAnimation"

const a = "Hi, I'm Bohdan, web developer"

const Title = () => {
    const title = separator(a)


    const titleRef = useRef()

    useEffect(() => {

    }, [])

    return (
        <H1 aria-label={a} ref={titleRef}>
            {title.map(el => (
                <>
                    {el === 'br'
                        ? <br />
                        : <span onMouseEnter={(el) => { addAnimation(el) }} aria-hidden="true">{el}</span>
                    }
                </>
            ))}
        </H1>
    )
}

export default Title


const H1 = styled.h1`
    position: relative;
    span{

        font-weight: 400;
        font-size: 10.3rem;
        line-height: 8.7rem;

        display: inline-block;
        transition: color .3s cubic-bezier(0.4, 0, 1, 1);
        
        :hover{
            color: #08fdd8;
        }

        &.animated{
            animation-name: ${rubberBand};
            animation-duration: 1s;
            animation-fill-mode: both;
            animation-iteration-count: 1;
        }
    }
`