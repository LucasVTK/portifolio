import { ReactNode } from 'react'
import { P } from './styles'

export type Props = {
  children: ReactNode
  tipo?: 'principal' | 'secundario'
}

const Paragrafo = ({ children, tipo = 'principal' }: Props) => (
  <P tipo={tipo}> {children}</P>
)

export default Paragrafo
