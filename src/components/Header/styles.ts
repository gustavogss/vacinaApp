import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: 'row';
`;

export const Titulo = styled.Text`
  color: '#eee';
  font-size: 20;
  font-weight: 'normal';
  margin: 8;
`;

export const User = styled(Titulo)`
  color: '#ccc';
  font-weight: 'bold';
  margin-left: 5;
`;
