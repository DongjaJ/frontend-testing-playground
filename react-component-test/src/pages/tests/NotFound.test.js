import { withRouter } from '../../tests/utils';
import { render, screen } from '@testing-library/react';
import { Route } from 'react-router-dom';
import NotFound from '../NotFound';
import renderer from 'react-test-renderer';

describe('Not Found page', () => {
  it('render correctly', () => {
    const component = renderer.create(
      withRouter(<Route path="/" element={<NotFound />} />)
    );
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('render with Not Found text', () => {
    render(withRouter(<Route path="/" element={<NotFound />} />));
    expect(screen.getByText('Not Found!')).toBeInTheDocument();
  });
});
