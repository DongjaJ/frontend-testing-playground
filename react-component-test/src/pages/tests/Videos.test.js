import { withAllContext, withRouter } from '../../tests/utils';
import { Route } from 'react-router-dom';
import { screen, findByRole, render, waitFor } from '@testing-library/react';
import Videos from '../Videos';
import { fakeVideo, fakeVideos } from '../../tests/video';

describe('Videos', () => {
  const fakeYoutube = {
    search: jest.fn(),
  };

  beforeEach(() => {
    fakeYoutube.search = jest.fn((keyword) =>
      keyword ? [fakeVideo] : fakeVideos
    );
  });

  afterEach(() => fakeYoutube.search.mockReset());

  it('render all videos when keyword is undefined', async () => {
    renderVideosWithPath('/');

    expect(fakeYoutube.search).toHaveBeenCalledWith(undefined);
    await waitFor(() => {
      expect(screen.getAllByRole('listitem')).toHaveLength(fakeVideos.length);
    });
  });

  it('render search results when keyword is specified', async () => {
    const fakeKeyword = 'fakekeyword';
    renderVideosWithPath(`/${fakeKeyword}`);

    expect(fakeYoutube.search).toHaveBeenCalledWith(fakeKeyword);

    await waitFor(() => {
      expect(screen.getAllByRole('listitem')).toHaveLength(1);
    });
  });

  it('render loading', async () => {
    renderVideosWithPath('/');
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('render error', async () => {
    fakeYoutube.search.mockImplementation(async () => {
      throw new Error('error!');
    });
    renderVideosWithPath('/');
    await waitFor(() => {
      expect(screen.getByText('Something is wrong 😖')).toBeInTheDocument();
    });
  });

  function renderVideosWithPath(path) {
    return render(
      withAllContext(
        withRouter(
          <>
            <Route path="/" element={<Videos />} />
            <Route path="/:keyword" element={<Videos />} />
          </>,
          path
        ),
        fakeYoutube
      )
    );
  }
});
