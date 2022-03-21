
import React from "react"
import * as styled from './styled'
import { separator } from './../../../functions/separator'

const Logo = ({ name, title }) => {

    const nameDivided = separator(name)

    return (
        <styled.Logo>
            <b>{nameDivided[0]}</b>
            <span>{name}</span>
            <p>{title}</p>
        </styled.Logo>
    )
}

export default Logo