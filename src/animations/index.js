import { keyframes } from "styled-components"

export const rubberBand = keyframes`
0% {
  transform: scale3d(1,1,1)
}
35% {
  transform: scale3d(1.25,.75,1)
}
45% {
  transform: scale3d(.75,1,1)
}
60% {
  transform: scale3d(1.2,.8,1)
}
75% {
  transform: scale3d(1.05,.95,1)
}
100% {
  transform: scale3d(1,1,1)
}
`