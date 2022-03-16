import { rubberBand } from "../../../animations"
import styled from "styled-components"

export const H1 = styled.h1`
    position: relative;
    margin-bottom: 3rem;

    span{
        position: relative;
        opacity: 0;
        transform: translateY(10px) scale(0.8);
        font-weight: 600;
        letter-spacing: -3px;
        font-size: 100px;
        line-height: 90px;

        display: inline-block;
        transition: color .3s cubic-bezier(1, 1, 0, 0.4);

        :hover{
            color: #08fdd8;
        }

        &.animated{
            animation-name: ${rubberBand};
            animation-duration: 1s;
            animation-fill-mode: both;
            animation-iteration-count: 1;
        }

        &.space{
            width: 30px;
        }

        &.capital{
            color: var(--sub-active);

            &::after{
                content: "B";
                position: absolute;
                left: -5px;
                bottom: -5px;
                color: var(--active);
                z-index: -1;
            }
        }
    }

    &::before{
        content: '<h1>';
        font-family: 'La Belle Aurore',cursive;
        position: absolute;
        color: var(--text-after);
        top: 0;
        left: 0;
        margin-top: -30px;
        margin-left: -20px;
        font-size: 20px;
    }

    &::after{
        content: '</h1>';
        font-family: 'La Belle Aurore',cursive;
        position: absolute;
        color: var(--text-after);
        left: 0;
        bottom: 0;
        margin-bottom: -30px;
        margin-left: -20px;
        font-size: 20px;
    }
`