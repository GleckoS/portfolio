import React, { useEffect, useRef } from "react"
import { separator } from "../../../functions/separator"
import { addAnimation } from "../../../functions/addAnimation"
import gsap from "gsap"
import * as styled from './styled'

const string = "Hi, I'm Bohdan, web developer"

const Title = () => {

    const title = separator(string, 'main')

    const titleRef = useRef()
    useEffect(() => {
        const titleUtil = gsap.utils.selector(titleRef);
        gsap.to(titleUtil('span'), { stagger: .1, opacity: 1, y: 0, scale: 1, ease: 'bounce' })
    }, [])

    return (
        <styled.H1 aria-label={string} ref={titleRef}>
            {title.map(el => (
                <>
                    {el === 'br'
                        ? <br />
                        : <span
                            onMouseEnter={(el) => { addAnimation(el) }}
                            aria-hidden="true"
                            className={el === ' ' ? 'space' : ''}
                        >
                            {el}
                        </span>
                    }
                </>
            ))}
        </styled.H1>
    )
}

export default Title

