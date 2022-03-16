import React from "react"
import styled from "styled-components"

const Layout = ({ children }) => {
    return (
        <AppWrapper>
            <aside />
            {children}
        </AppWrapper>
    )
}

export default Layout

const AppWrapper = styled.div`
    display: grid;
    grid-template-columns: 130px 1fr;
`