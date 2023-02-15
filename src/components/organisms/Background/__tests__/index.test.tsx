import search from '@/assets/background/search.jpeg';
import { render } from '@testing-library/react';
import { Background } from '../index';

describe('Background', () => {
  it('to match snapshot', () => {
    const { container } = render(
      <Background backgroundImage={search}>
        <></>
      </Background>
    );
    expect(container).toMatchSnapshot();
  });
});
