import { render } from '@testing-library/react';
import { News } from '../index';

describe('News', () => {
  it('to match snapshot', () => {
    const { container } = render(
      <News loading={true} error={null} data={[]} />
    );
    expect(container).toMatchSnapshot();
  });
});
