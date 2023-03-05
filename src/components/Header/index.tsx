import React from 'react';
import {Container, Titulo, User} from './styles';

type HeaderProps = {
  titulo: string;
  user: string;
};

export default function Header({titulo, user}: HeaderProps) {
  return (
    <Container>
      <Titulo>{titulo}</Titulo>
      <User>{user}</User>
    </Container>
  );
}
