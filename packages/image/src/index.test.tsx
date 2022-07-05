import React from 'react';
import Image from './index';
import { render, waitFor, screen } from '@testing-library/react';

test('test', () => {
  render(
    <Image src="https://images.dog.ceo/breeds/newfoundland/n02111277_13670.jpg" />
  );

  waitFor(async () => {
    await new Promise(resolve => {
      setTimeout(resolve, 3000);
    });
  });

  expect(screen.getByRole('img')).toBeInTheDocument();
});
