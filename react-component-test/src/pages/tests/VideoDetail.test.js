import { fakeVideo } from '../../tests/video';
import { withRouter } from '../../tests/utils';
import renderer from 'react-test-renderer';
import { Route } from 'react-router-dom';
import VideoDetail from '../VideoDetail';
import ChannelInfo from '../../components/ChannelInfo';
import RelatedVideos from '../../components/RelatedVideos';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

jest.mock('../../components/ChannelInfo');
jest.mock('../../components/RelatedVideos');

describe('VideoDetail page', () => {
  afterEach(() => {
    ChannelInfo.mockReset();
    RelatedVideos.mockReset();
  });

  it('snapshot', () => {
    const component = renderer.create(
      withRouter(<Route path="/" element={<VideoDetail />} />, {
        pathName: '/',
        state: { video: fakeVideo },
        key: 'fake-key',
      })
    );
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('render correctly', () => {
    const { channelId, channelTitle } = fakeVideo.snippet;

    render(
      withRouter(<Route path="/" element={<VideoDetail />} />, {
        pathName: '/',
        state: { video: fakeVideo },
        key: 'fake-key',
      })
    );

    expect(RelatedVideos.mock.calls[0][0]).toStrictEqual({ id: fakeVideo.id });
    expect(ChannelInfo.mock.calls[0][0]).toStrictEqual({
      id: channelId,
      name: channelTitle,
    });
  });
});
