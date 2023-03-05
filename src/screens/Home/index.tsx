import React, {useCallback, useEffect, useState} from 'react';
import {Container, Button} from './styles';
import Header from '../../components/Header';

export function Home() {
  const [name, setName] = useState<string>('Gustavo');
  const [ola, setOla] = useState<string>('Olá,');

  useEffect(() => {
    setOla(name === 'Gustavo Souza' ? 'Bem vindo,' : 'Olá,');
  }, [name]);

  const handleChange = useCallback(() => {
    setName(name === 'Gustavo' ? 'Gustavo Souza' : 'Gustavo');
  }, [name]);

  return (
    <Container>
      <Header titulo={ola} user={name} />
      <Button title="Mudar nome" onPress={handleChange} />
    </Container>
  );
}
