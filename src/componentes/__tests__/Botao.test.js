import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';
import Botao from '../../componentes/Botao/index.js';

test('exibe o texto passado como children', () => {
  const { getByText } = render(<Botao>Meu botão</Botao>);
  expect(getByText('Meu botão')).toBeInTheDocument();
});
