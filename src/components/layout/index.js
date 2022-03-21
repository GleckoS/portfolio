import React from "react"
import styled from "styled-components"
import Logo from "../atoms/aside-logo"
import Aside from "../moleculas/aside"

const Layout = ({ children }) => {
    return (
        <AppWrapper>
            <Aside >
                <Logo name="Bohdan" title="Web Developer" />
            </Aside>
            {children}
        </AppWrapper>
    )
}

export default Layout

const AppWrapper = styled.div`
    display: grid;
    grid-template-columns: 130px 1fr;
`