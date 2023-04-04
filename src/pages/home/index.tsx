import { Heading, Text } from '@ignite-ui/react'
import calendarPreview from '../../../public/image 1.png'
import Image from 'next/image'
import { Container, Hero, Preview } from './styles'
import { ClaimUsernameForm } from './components/ClaimUsernameForm'

export default function Home() {
  return (
    <Container>
      <Hero>
        <Heading size="4xl">Troca de turno</Heading>
        <Text size="xl">
          Conecte seu calendário e combine trocas de horário no seu trabalho.
        </Text>
        <ClaimUsernameForm />
      </Hero>

      <Preview>
        <Image
          src={calendarPreview}
          priority
          quality={100}
          height={400}
          alt="calendário simbolizando a aplicação em funcionamento"
        ></Image>
      </Preview>
    </Container>
  )
}
