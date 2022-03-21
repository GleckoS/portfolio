import React from "react"
import * as styled from './styled'

const Aside = ({ children }) => {
    return (
        <styled.Aside>
            {children}
        </styled.Aside>
    )
}

export default Aside