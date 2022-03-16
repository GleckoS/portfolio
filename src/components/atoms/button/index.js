
import React from "react"
import * as styled from './styled'

const Button = ({ as, link, text }) => {
    return (
        <styled.Button to={link} as={as}>
            <span />
            {text}
        </styled.Button>
    )
}

export default Button