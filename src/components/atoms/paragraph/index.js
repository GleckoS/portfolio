import React from "react"
import { parser } from "../../../functions/objParser"
import * as styled from './styled'

const obj = [
    {
        text: "A small gallery of recent projects chosen by me. I've done them all together with amazing people from companies around the globe. It's only a drop in the ocean compared to the entire list. Visit",
        type: 'text',
        link: ''
    },
    {
        text: "my work",
        type: 'link',
        link: '/blog/'
    },
    {
        text: " page",
        type: 'text',
        link: ''
    }
]

const obj1 = [
    {
        text: "Front End Developer / WordPress Expert",
        type: 'text'
    }
]

const Paragraph = ({ className }) => {
    return (
        <styled.P className={className}>
            {
                parser(obj1)
            }
        </styled.P>
    )
}

export default Paragraph