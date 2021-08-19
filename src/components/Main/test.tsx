import { render, screen } from '@testing-library/react';

import { Main } from '.';

describe('<Main />', () => {
  it('it should render the header', () => {
    const { container } = render(<Main />);

    expect(
      screen.getAllByRole('heading', { name: /boilerplate/i })[0]
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });

  it('it should render the colors correctly', () => {
    const { container } = render(<Main />);

    expect(container.firstChild).toHaveStyle({ background: '#06092b' });
  });
});
