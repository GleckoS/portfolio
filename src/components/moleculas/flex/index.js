import React from "react"
import * as styled from './styled'

const Flex = ({ className, children }) => {
    return (
        <styled.Flex className={className}>
            {children}
        </styled.Flex>
    )
}

export default Flex