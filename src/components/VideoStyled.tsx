import styled from 'styled-components'
import { keyframes } from 'styled-components'

export const VideoCont = styled.div`
    display: flex;
    background-color: black;
    color: white;
    overflow: hidden;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
`

export const VideoElement = styled.video`
    width: 100%;
    height: 100%;
    margin: auto;
`

export const VideoMain = styled.div`
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    position: absolute;
    display: flex;
    flex-direction: column;
    transition: 0.5s;
    opacity: 0;
    cursor: none;
    transition-delay: 3s;
    &:hover {
        transition-delay: 0s;
        opacity: 100;
        cursor: default;
    }
`

export const VideoTop = styled.div`
    color: white;
    padding: 15px;
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.8), transparent);
    user-select: none;
`

export const VideoTitle = styled.h1`
    text-align: center;
    margin: 0;
`

export const VideoCenter = styled.div`
    height: 100%;
    display: flex;
`

export const VideoLoadingSpin = keyframes`
    to {
        transform: rotate(0);
    }
    from {
        transform: rotate(-360deg);
    }
`

export const VideoLoading = styled.div`
    margin: auto;
    border-radius: 50%;
    width: 120px;
    height: 120px;
    border: solid 10px transparent;
    border-left-color: white;
    animation: ${VideoLoadingSpin} 0.7s linear infinite;
`

export const VideoBottom = styled.div`
    padding: 10px;
    display: flex;
    background-image: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.8));
`

export const VideoButton = styled.button`
    background-color: transparent;
    border: none;
    color: white;
    font-size: 13pt;
    margin: 0 5px;
    font-size: 20px;
    text-align: center;
    width: 28px;
    &:hover {
        color: lightgray;
        transform: translateY(-1px);
    }
`

export const VideoCloseButton = styled.a`
    background-color: transparent;
    border: none;
    color: white;
    font-size: 13pt;
    font-size: 20px;
    text-align: center;
    position: absolute;
    top: 0;
    left: 0;
    margin: 10px 15px; 
    &:hover {
        color: lightgray;
        transform: translateY(-1px);
    }
`

export const VideoProgress = styled.div`
    width: 100%;
    margin: auto 5px;
    background: rgb(100,100,100);
    height: 7px;
    border-radius: 5px;
    display: flex;
`

export const VideoProgressBar = styled.div`
    background-color: white;
    height: 100%;
    border-radius: 5px 0 0 5px;
`

export const VideoProgressBarPin = styled.div`
    border: solid 7px white;
    top: -3px;
    margin: auto 0;
    position: relative;
    border-radius: 50%;
`