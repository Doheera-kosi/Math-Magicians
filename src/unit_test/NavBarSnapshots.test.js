import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Navbar from '../components/NavBar';

it('NavBar renders correctly', () => {
  const tree = renderer.create(
    <MemoryRouter>
      <Navbar />
    </MemoryRouter>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
