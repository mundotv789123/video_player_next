import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faVolumeUp, faExpand, faAngleLeft, faPause } from "@fortawesome/free-solid-svg-icons";
import { useRef, useState } from "react";
import { VideoElement, VideoBottom, VideoButton, VideoCenter, VideoCloseButton, VideoCont, VideoLoading, VideoMain, VideoProgress, VideoProgressBar, VideoTitle, VideoTop, VideoProgressBarPin } from "./VideoStyled";

export default function Video(props: any) {
    /* video name */
    let srcSplited = props.src.split("/")
    const fileName = srcSplited[srcSplited.length - 1];

    /* states */
    const [buttonPlayIcon, setButtonPlayIcon] = useState(faPlay)
    const [progressPercent, setProgressPercent] = useState(0)
    const [loading, setLoading] = useState(true)

    /* refs */
    const main_element = useRef(null);
    const video_element = useRef(null);
    const progress_bar = useRef(null);

    /* functions */
    function togglePauseVideo() {
        if (video_element.current.paused) {
            video_element.current.play();
        } else {
            video_element.current.pause();
        }
        setLoading(false);
    }

    function togglePauseButton() {
        if (video_element.current.paused) {
            setButtonPlayIcon(faPlay)
        } else {
            setButtonPlayIcon(faPause)
        }
    }

    function toggleFullScreen() {
        if (!document.fullscreenElement) {
            main_element.current.requestFullscreen()
        } else {
            document.exitFullscreen()
        }
    }

    function updateProgress() {
        let percent = (video_element.current.currentTime * 100 / video_element.current.duration);
        setProgressPercent(percent);
    }

    function updateVideoTime(event) {
        let rect = progress_bar.current.getBoundingClientRect();
        let percent = ((event.clientX - rect.left) * 100 / (rect.right - rect.left));
        video_element.current.currentTime = (video_element.current.duration / 100 * percent);
        setProgressPercent(percent);
    }

    if (!props.src) {
        return <></>
    }

    return (
        <VideoCont ref={main_element}>
            <VideoElement onPlay={togglePauseButton} onPause={togglePauseButton} onTimeUpdate={updateProgress} onCanPlay={() => setLoading(false)} src={props.src} controls={false} ref={video_element}></VideoElement>
            <VideoMain>
                <VideoTop>
                    <VideoTitle>{fileName}</VideoTitle>
                    <VideoCloseButton style={{ display: (props.backUrl ? '' : 'none') }} href={props.backUrl}><FontAwesomeIcon icon={faAngleLeft} /></VideoCloseButton>
                </VideoTop>
                <VideoCenter onClick={togglePauseVideo}>
                    <VideoLoading style={{ display: (loading ? '' : 'none') }} />
                </VideoCenter>
                <VideoBottom>
                    <VideoButton onClick={togglePauseVideo}><FontAwesomeIcon icon={buttonPlayIcon} /></VideoButton>
                    <VideoProgress onClick={(e) => updateVideoTime(e)} ref={progress_bar}><VideoProgressBar style={{ width: `${progressPercent}%` }} /><VideoProgressBarPin /></VideoProgress>
                    <VideoButton><FontAwesomeIcon icon={faVolumeUp} /></VideoButton>
                    <VideoButton onClick={toggleFullScreen}><FontAwesomeIcon icon={faExpand} /></VideoButton>
                </VideoBottom>
            </VideoMain>
        </VideoCont>
    );
}