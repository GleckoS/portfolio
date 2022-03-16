import * as React from "react"
import Button from "../components/atoms/button"
import Title from "../components/atoms/main-title"
import Paragraph from "../components/atoms/paragraph"
import TextZone from "../components/moleculas/text-zone"
import Hero from "../components/organizms/hero"

const IndexPage = () => {
  return (
    <main>
      <Hero>
        <TextZone>
          <Title />
          <Paragraph className='grey'/>
          <Button text={'some button text'} />
        </TextZone>
      </Hero>
    </main>
  )
}

export default IndexPage
