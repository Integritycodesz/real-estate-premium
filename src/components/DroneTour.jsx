import React, { useState, useRef } from 'react';
import { Play, Video, Pause, ChevronLeft, ChevronRight } from 'lucide-react';
import './DroneTour.css';

const DroneTour = ({ project }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentVideoIdx, setCurrentVideoIdx] = useState(0);
  const videoRef = useRef(null);

  const hasDroneVideos = project.droneVideos && project.droneVideos.length > 0;

  const handlePlay = () => {
    if (!hasDroneVideos) return;
    setIsPlaying(true);
    // Video will autoplay via the autoPlay attribute when rendered
  };

  const nextVideo = () => {
    if (hasDroneVideos) {
      setCurrentVideoIdx((prev) => (prev + 1) % project.droneVideos.length);
    }
  };

  const prevVideo = () => {
    if (hasDroneVideos) {
      setCurrentVideoIdx((prev) => (prev - 1 + project.droneVideos.length) % project.droneVideos.length);
    }
  };

  return (
    <section className="drone-tour-section">
      <div className="container">
        <div className="drone-header">
          <span className="pre-title-center">DRONE TOUR & SITE GALLERY</span>
          <h2 className="section-title-center">See {project.title} from above.</h2>
          <p className="drone-subtitle">
            Real footage from the project site — internal roads laid, plot demarcations done, 
            surrounding development already underway.
          </p>
        </div>

        <div className="drone-video-container">
          {isPlaying && hasDroneVideos ? (
            <div className="video-player-live">
              <video
                ref={videoRef}
                src={project.droneVideos[currentVideoIdx]}
                className="drone-video-element"
                autoPlay
                controls
                playsInline
                onEnded={nextVideo}
              />
              
              {project.droneVideos.length > 1 && (
                <div className="video-nav-controls">
                  <button className="video-nav-btn" onClick={prevVideo}>
                    <ChevronLeft size={20} />
                  </button>
                  <span className="video-counter">
                    {currentVideoIdx + 1} / {project.droneVideos.length}
                  </span>
                  <button className="video-nav-btn" onClick={nextVideo}>
                    <ChevronRight size={20} />
                  </button>
                </div>
              )}
              
              <div className="video-bottom-bar">
                <div className="video-info-left">
                  <Video size={18} />
                  <span>Live drone footage — recorded at the {project.title} site, Lucknow.</span>
                </div>
              </div>
            </div>
          ) : (
            <div className="video-player-mock" onClick={hasDroneVideos ? handlePlay : undefined}>
              <img src={project.image} alt="Project Drone View" className="video-thumb" />
              <div className="video-overlay-gradient"></div>
              <button className="play-btn-large" onClick={hasDroneVideos ? handlePlay : undefined}>
                <Play size={40} fill="currentColor" />
              </button>
              
              <div className="video-bottom-bar">
                <div className="video-info-left">
                  <Video size={18} />
                  <span>Live drone footage — recorded at the {project.title} site, Lucknow.</span>
                </div>
                <button className="btn-watch-tour" onClick={hasDroneVideos ? handlePlay : undefined}>
                  <Play size={14} fill="currentColor" />
                  <span>Watch Drone Tour{hasDroneVideos ? ` (${project.droneVideos.length} clips)` : ''}</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default DroneTour;
