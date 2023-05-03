import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { Banner } from '../../componentes/Banner/Banner.js';

test('exibe corretamente o banner', () => {
  const { getByAltText } = render(<Banner />);
  const bannerImage = getByAltText(/Banner principal da página do Organo/i);
  expect(bannerImage).toBeInTheDocument();
});