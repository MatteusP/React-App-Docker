import React from 'react';
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react';
import CampoTexto from '../../componentes/CampoTexto/index.js';

test('chama a função aoAlterado quando o valor é alterado', () => {
  const aoAlteradoMock = jest.fn();
  const { getByRole } = render(<CampoTexto label="Nome" aoAlterado={aoAlteradoMock} />);
  const inputElement = getByRole('textbox');
  fireEvent.change(inputElement, { target: { value: 'João' } });
  expect(aoAlteradoMock).toHaveBeenCalledTimes(1);
  expect(aoAlteradoMock).toHaveBeenCalledWith('João');
});

test('exibe a mensagem de placeholder correta', () => {
  const { getByPlaceholderText } = render(<CampoTexto label="Nome" placeholder="Digite seu nome" />);
  const inputElement = getByPlaceholderText(/Digite seu nome/i);
  expect(inputElement).toBeInTheDocument();
});

test('o campo é obrigatório quando a prop obrigatorio é true', () => {
  const { getByRole } = render(<CampoTexto label="Nome" obrigatorio />);
  const inputElement = getByRole('textbox');
  expect(inputElement).toBeRequired();
});

test('o campo não é obrigatório quando a prop obrigatorio é false', () => {
  const { getByRole } = render(<CampoTexto label="Nome" obrigatorio={false} />);
  const inputElement = getByRole('textbox');
  expect(inputElement).not.toBeRequired();
});