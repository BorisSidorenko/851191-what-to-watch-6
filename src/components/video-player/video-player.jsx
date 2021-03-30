import React, {useRef, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import PropTypes from 'prop-types';
import ExitButton from '../exit-button/exit-button';
import VideoPlayerControls from '../video-player-controls/video-player-controls';
import {idProp} from '../props/movie-props';
import {redirectToRouteAction} from '../../store/user/action';
import {playerMovieToPlayAction, playerMovieLoadedAction, playerMoviePlayAction, clearPlayerMovieToPlayAction} from '../../store/video-player/action';
import {loadMovieById} from '../../api/api-actions';
import Loading from '../loading/loading';
import {RoutePaths} from '../../utils/constatns';

const getVideoPlayerComponents = (isPreview, videoRef, movieToPlay, isPlaying, isLoading, handlePlayButtonClick) => {
  const handleFullScreenButtonClick = () => {
    videoRef.current.requestFullscreen();
  };

  return (
    <>
      <video ref={videoRef} src={isPreview ? movieToPlay.preview_video_link : movieToPlay.video_link} className="player__video" poster="img/player-poster.jpg"></video>
      {isPreview || <ExitButton />}
      {isPreview || <VideoPlayerControls video={videoRef.current} isPlaying={isPlaying} isLoading={isLoading} movie={movieToPlay} onPlayButtonClick={handlePlayButtonClick} onFullScreenButtonClick={handleFullScreenButtonClick}/>}
    </>
  );
};

const VideoPlayer = ({movieId, isPreview = false}) => {
  const {movieToPlay, isLoading, isPlaying} = useSelector((state) => state.PLAYER);
  const id = parseInt(movieId, 10);
  const dispatch = useDispatch();

  useEffect(() => {
    if (movieToPlay && movieToPlay.id !== id) {
      dispatch(clearPlayerMovieToPlayAction());
    }

    dispatch(loadMovieById(id))
    .then(({data}) => dispatch(playerMovieToPlayAction(data)))
    .then(() => dispatch(playerMovieLoadedAction()))
    .catch(() => dispatch(redirectToRouteAction(RoutePaths.NOT_FOUND)));

    return (() => dispatch(playerMoviePlayAction(false)));
  }, [id]);

  const videoRef = useRef();
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.oncanplaythrough = () => {
        if (isPreview && videoRef.current) {
          videoRef.current.muted = true;
          videoRef.current.play();
        }
      };

      return () => {
        if (videoRef.current) {
          videoRef.current.oncanplaythrough = null;
          videoRef.current.onplay = null;
          videoRef.current.onpause = null;
          videoRef.current = null;
        }
      };
    }

    return () => {};
  }, [id, isLoading]);

  useEffect(() => {
    if (movieToPlay && isPlaying) {
      videoRef.current.play();
    } else if (movieToPlay && !isPlaying) {
      videoRef.current.pause();
    }
  }, [isPlaying]);

  const handlePlayButtonClick = () => isPlaying ? dispatch(playerMoviePlayAction(false)) : dispatch(playerMoviePlayAction(true));

  return (
    <div className="player">
      {isLoading && !movieToPlay ? <Loading /> : getVideoPlayerComponents(isPreview, videoRef, movieToPlay, isPlaying, isLoading, handlePlayButtonClick)}
    </div>
  );
};

VideoPlayer.propTypes = {
  movieId: idProp,
  isPreview: PropTypes.bool
};

export default VideoPlayer;
