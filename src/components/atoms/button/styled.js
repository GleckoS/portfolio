import styled from "styled-components"
import { Link } from "gatsby"

export const Button = styled(Link)`
    margin-top: 30px;
    display: inline-block;
    border: 1px solid var(--active);
    border-radius: 1px;
    padding: 16px 48px;
    color: var(--active);
    text-transform: capitalize;
    overflow: hidden;
    position: relative;
    transition: color .2s linear .1s;
    cursor: pointer;

    span{
        position: absolute;
        width: 1px;
        left: -1px;
        top: 0;
        bottom: 0;
        transition: width .4s ease-in-out;
        background-color: var(--active);
        z-index: -1;
        transform: skewX(-12deg) translateX(-10px);
    }

    &:hover{
        color: var(--text-black);

        span{
            width: 110%;
        }
    }
` 