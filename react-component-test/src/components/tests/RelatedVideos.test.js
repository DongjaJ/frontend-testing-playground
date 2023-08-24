import { withAllContext, withRouter } from '../../tests/utils';
import RelatedVideos from '../RelatedVideos';
import {
  render,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import { Route } from 'react-router-dom';
import { fakeVideos } from '../../tests/video';

describe('relatedVideos', () => {
  const fakeYoutube = {
    relatedVideos: jest.fn(),
  };

  afterEach(() => fakeYoutube.relatedVideos.mockReset());

  it('render correctly', async () => {
    fakeYoutube.relatedVideos = jest.fn(() => fakeVideos);

    const { asFragment } = renderRelatedVideos();
    await waitForElementToBeRemoved(screen.queryByText('Loading...'));
    screen.queryByRole('list');
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders error', async () => {
    fakeYoutube.relatedVideos = jest.fn(() => {
      throw new Error('error');
    });
    renderRelatedVideos();
    await waitForElementToBeRemoved(screen.queryByText('Loading...'));
    expect(screen.getByText('Something is wrong 😖')).toBeInTheDocument();
    expect(screen.queryByRole('list')).toBeNull();
  });

  it('renders with loading', async () => {
    fakeYoutube.relatedVideos = jest.fn(() => fakeVideos);
    renderRelatedVideos();
    screen.getByText('Loading...');
  });

  it('renders with videos', async () => {
    fakeYoutube.relatedVideos = jest.fn(() => fakeVideos);
    renderRelatedVideos();
    await screen.findByRole('list');
    expect(fakeYoutube.relatedVideos).toHaveBeenCalledWith('id');
  });

  function renderRelatedVideos() {
    return render(
      withAllContext(
        withRouter(<Route path="/" element={<RelatedVideos id="id" />} />),
        fakeYoutube
      )
    );
  }
});
