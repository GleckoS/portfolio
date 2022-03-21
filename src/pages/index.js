import React, { useEffect } from "react"
import Button from "../components/atoms/button"
import Title from "../components/atoms/main-title"
import Paragraph from "../components/atoms/paragraph"
import TextZone from "../components/moleculas/text-zone"
import Hero from "../components/organizms/hero"
import { heroCanvas } from './../functions/hero-canvas'

const IndexPage = () => {

  useEffect(() => {
    heroCanvas()
  }, [])

  return (
    <main>
      <canvas id="canvas" />
      <div id="hero">
        <Hero>
          <TextZone>
            <Title />
            <Paragraph className='grey' />
            <Button text={'some button text'} />
          </TextZone>
        </Hero>
      </div>
    </main>
  )
}

export default IndexPage
