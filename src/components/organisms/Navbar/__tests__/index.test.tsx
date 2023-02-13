import { render } from '@testing-library/react';
import { Navbar } from '../index';

describe('Navbar', () => {
  it('to match snapshot', () => {
    const { container } = render(<Navbar icon={<></>} appName={''}></Navbar>);
    expect(container).toMatchSnapshot();
  });
});
