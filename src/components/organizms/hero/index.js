import React from "react"
import * as styled from './styled'

const Hero = ({ children }) => {
    return (
        <styled.Section>
            {children}
        </styled.Section>
    )
}

export default Hero