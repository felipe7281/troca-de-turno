import { Heading, Text } from '@ignite-ui/react'
import { Container, Hero, Preview } from './styles'

import previewImage from '../../../public/image 1.png'
import Image from 'next/image'
import { ClaimUsernameForm } from './components/ClaimUsernameForm'

export default function Home() {
  return (
    <Container>
      <Hero>
        <Heading size="4xl">Turnista</Heading>
        <Text size="xl">
          Personalize seu calendário de acordo com sua escala de trabalho.
        </Text>
        <ClaimUsernameForm />
      </Hero>

      <Preview>
        <Image
          src={previewImage}
          priority
          quality={100}
          height={400}
          alt="calendário simbolizando a aplicação em funcionamento"
        ></Image>
      </Preview>
    </Container>
  )
}
