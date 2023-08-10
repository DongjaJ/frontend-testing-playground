import renderer from 'react-test-renderer';
import userEvent from '@testing-library/user-event';
import { withRouter } from '../../tests/utils';
import SearchHeader from '../SearchHeader';
import { Route } from 'react-router-dom';
import { getByDisplayValue, render, screen } from '@testing-library/react';

describe('SearchHeader', () => {
  it('renders correctly', () => {
    const component = renderer.create(
      withRouter(<Route path="/" element={<SearchHeader />} />)
    );
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders keyword correctly', () => {
    render(
      withRouter(<Route path="/:keyword" element={<SearchHeader />} />, '/bts')
    );
    expect(screen.getByDisplayValue('bts')).toBeInTheDocument();
  });

  it('navigates to results page on search button click', () => {
    const fakeKeyword = 'fake-keyword';

    render(
      withRouter(
        <>
          <Route path="/" element={<SearchHeader />} />
          <Route
            path={`/videos/${fakeKeyword}`}
            element={`<p>search results by ${fakeKeyword}</p>`}
          />
        </>,
        '/'
      )
    );

    const searchInput = screen.getByRole('textbox');
    const searchButton = screen.getByRole('button');
    userEvent.type(searchInput, fakeKeyword);
    userEvent.click(searchButton);

    expect(
      screen.getByText(`<p>search results by ${fakeKeyword}</p>`)
    ).toBeInTheDocument();
  });
});
