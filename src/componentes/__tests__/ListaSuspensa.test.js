import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ListaSuspensa from './../../componentes/ListaSuspensa/index.js';
import '@testing-library/jest-dom/extend-expect';


test('renderiza corretamente as opções', () => {
    const opcoes = ['Opção 1', 'Opção 2', 'Opção 3'];
    const { getByText } = render(<ListaSuspensa label="Opções" itens={opcoes} />);
    opcoes.forEach(opcao => expect(getByText(opcao)).toBeInTheDocument());
});

