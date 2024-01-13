import React, { useEffect, useRef, useState } from 'react'
import video from '../../assets/gowork.mp4'
import bg from '../../assets/video-bg.png'
import play from '../../assets/play.png'

const Video = () => {
    const videoPlayer = useRef()

    const [isVideoPlaying, setIsVideoPlaying] = useState(false);

    useEffect(() => {
        // Add event listeners for video events
        videoPlayer.current.addEventListener('play', handleVideoPlay);
        videoPlayer.current.addEventListener('ended', handleVideoEnded);
        videoPlayer.current.addEventListener('pause', handleVideoPause);

        // return () => {
        //   // Clean up event listeners when the component unmounts
        //   videoPlayer.current.removeEventListener('play', handleVideoPlay);
        //   videoPlayer.current.removeEventListener('ended', handleVideoEnded);
        //   videoPlayer.current.removeEventListener('pause', handleVideoPause);
        // };
    }, []);

    function handleVideoPlay() {
        setIsVideoPlaying(true);
        videoPlayer.current.controls = true;
    }

    function handleVideoEnded() {
        setIsVideoPlaying(false);
        videoPlayer.current.controls = false;
    }

    function handleVideoPause() {
        setIsVideoPlaying(false);
        videoPlayer.current.controls = false;
    }

    function playVideo() {
        videoPlayer.current.play();
    }

    return (
        <section>
            <div className="">
                <div className="w-full relative">
                    {!isVideoPlaying && (
                        <div onClick={playVideo} className="flex items-center justify-center my-0 mx-auto cursor-pointer z-20 absolute w-14 top-0 bottom-0 left-1/2">
                            <img src={play} alt="" />
                        </div>
                    )}
                    <video src={video} poster={bg} ref={videoPlayer} className='video-b grid place-items-center w-full after:content-[""] after:absolute after:z-20 after:w-[100%] '></video>
                </div>
            </div>
        </section>
    )
}

export default Video
