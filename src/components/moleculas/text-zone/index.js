import React from "react"
import * as styled from './styled'

const TextZone = ({ children }) => {
    return (
        <styled.Wrapper>
            {children}
        </styled.Wrapper>
    )
}

export default TextZone