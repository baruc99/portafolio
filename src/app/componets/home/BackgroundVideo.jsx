// components/BackgroundVideo.jsx
import style from './BackgroundVideo.module.css';




const BackgroundVideo = () => {
  return (
    <>
      <video className={style['background-video'] } autoPlay loop muted playsInline id="background-video">
        <source src="/videos/Plexus.mp4" type="video/mp4" />
        Tu navegador no admite videos HTML5.
      </video>
      <div className={style['background-overlay']}></div>
    </>
  );
};

export default BackgroundVideo;
