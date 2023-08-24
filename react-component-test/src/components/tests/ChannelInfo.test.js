import { render, waitFor, screen } from '@testing-library/react';
import { withAllContext, withRouter } from '../../tests/utils';
import ChannelInfo from '../ChannelInfo';
import { Route } from 'react-router-dom';

describe('channelInfo', () => {
  const fakeYoutube = {
    channelImageURL: jest.fn(),
  };

  afterEach(() => fakeYoutube.channelImageURL.mockReset());

  it('render correctly', async () => {
    // mock할때 아래 두가지 모두 가능
    // fakeYoutube.channelImageURL.mockImplementation(() => 'url');
    // fakeYoutube.channelImageUrl = jest.fn(()=>'url')

    const { asFragment } = renderChannelInfoWithCallback(() => 'url');

    await screen.findByRole('img');
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders without Url', async () => {
    renderChannelInfoWithCallback(() => {
      throw new Error('error');
    });
    expect(screen.queryByRole('img')).toBeNull();
  });

  it('renders with url', async () => {
    renderChannelInfoWithCallback(() => 'url');

    await screen.findByRole('img');
  });

  function renderChannelInfoWithCallback(callback) {
    fakeYoutube.channelImageURL.mockImplementation(callback);
    return render(
      withAllContext(
        withRouter(
          <Route path="/" element={<ChannelInfo id="id" name="channel" />} />
        ),
        fakeYoutube
      )
    );
  }
});
