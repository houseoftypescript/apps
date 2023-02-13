import { render } from '@testing-library/react';
import { Loading } from '../index';

describe('Loading', () => {
  it('to match snapshot', () => {
    const { container } = render(
      <Loading loading={true} error={null}>
        <></>
      </Loading>
    );
    expect(container).toMatchSnapshot();
  });
});
