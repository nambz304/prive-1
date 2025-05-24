import React, { useState, useEffect, useRef } from 'react';
interface SectionProps {
  t: typeof import('@/lib/translations').default['vi'];
}

const OverviewSection: React.FC<SectionProps> = ({ t }) => {
  const [isPlaying, setIsPlaying] = useState(true); // default true for autoplay
  const [isMuted, setIsMuted] = useState(true); // default true for autoplay on mobile
  const [isFullscreen, setIsFullscreen] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [seek, setSeek] = useState(0);

  useEffect(() => {
    const video = document.getElementById('overview-mobile-video') as HTMLVideoElement | null;
    if (video) {
      videoRef.current = video;
      setIsPlaying(!video.paused);
      setIsMuted(video.muted);
      const handlePlay = () => setIsPlaying(true);
      const handlePause = () => setIsPlaying(false);
      const handleVolumeChange = () => setIsMuted(video.muted);
      const handleTimeUpdate = () => {
        if (video.duration) setSeek((video.currentTime / video.duration) * 100);
      };
      video.addEventListener('play', handlePlay);
      video.addEventListener('pause', handlePause);
      video.addEventListener('volumechange', handleVolumeChange);
      video.addEventListener('timeupdate', handleTimeUpdate);
      return () => {
        video.removeEventListener('play', handlePlay);
        video.removeEventListener('pause', handlePause);
        video.removeEventListener('volumechange', handleVolumeChange);
        video.removeEventListener('timeupdate', handleTimeUpdate);
      };
    }
  }, []);

  // Fix: force videoRef.current to always point to the desktop video for fullscreen logic
  useEffect(() => {
    const video = document.getElementById('overview-desktop-video') as HTMLVideoElement | null;
    if (video) {
      videoRef.current = video;
    }
  }, []);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
    document.addEventListener('msfullscreenchange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
      document.removeEventListener('msfullscreenchange', handleFullscreenChange);
    };
  }, []);

  const projectDetails = [
    { key: 'projectName', value: 'The Privé' },
    { key: 'location', value: t.locationDetail },
    { key: 'investor', value: t.investorDetail },
    { key: 'designConsultant', value: t.designConsultantDetail },
    { key: 'constructionUnit', value: t.constructionUnitDetail },
    { key: 'area', value: t.areaDetail },
    { key: 'scale', value: t.scaleDetail },
    { key: 'productTypes', value: t.productTypesDetail },
    { key: 'productArea', value: t.productAreaDetail },
    { key: 'highlightedUtilities', value: t.highlightedUtilitiesDetail },
    { key: 'legal', value: t.legalDetail },
    { key: 'handoverMaterials', value: t.handoverMaterialsDetail },
    { key: 'handoverTime', value: t.handoverTimeDetail },
    { key: 'partnerBanks', value: t.partnerBanksDetail },
  ];

  // VideoPlayer component for desktop only
  const OverviewVideoPlayer: React.FC<{
    isMuted: boolean;
    setIsMuted: (v: boolean) => void;
    isPlaying: boolean;
    setIsPlaying: (v: boolean) => void;
    isFullscreen: boolean;
    setIsFullscreen: (v: boolean) => void;
    seek: number;
    setSeek: (v: number) => void;
    videoRef: React.RefObject<HTMLVideoElement>;
  }> = ({ isMuted, setIsMuted, isPlaying, setIsPlaying, isFullscreen, setIsFullscreen, seek, setSeek, videoRef }) => (
    <div className="hidden sm:flex w-full justify-center mb-8">
      <div className="w-full max-w-2xl relative mx-auto">
        <video
          id="overview-desktop-video"
          className="w-full h-[350px] object-contain bg-black rounded-lg mb-4"
          autoPlay
          loop
          muted={isMuted}
          playsInline
          poster="/lovable-uploads/9a274b96-1cc0-45bc-813e-ad4620d51bc2.jpg"
          ref={videoRef}
          style={{ background: 'black' }}
        >
          <source src="/4579752162252452685.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Video controls overlay */}
        <div className="absolute bottom-4 left-0 right-0 flex flex-col items-center px-4 z-10">
          <input
            type="range"
            id="overview-video-seek"
            min="0"
            max="100"
            value={seek}
            className="w-full h-2 accent-prive bg-white/70 rounded-lg appearance-none cursor-pointer"
            onChange={e => {
              const video = videoRef.current;
              if (video && video.duration) {
                video.currentTime = (Number(e.target.value) / 100) * video.duration;
              }
            }}
          />
          <div className="w-full flex justify-center mt-3 relative">
            <button
              id="overview-video-toggle"
              className="absolute left-1/2 -translate-x-1/2 bg-black/60 text-white rounded shadow text-xs flex items-center justify-center px-4 py-1 z-20"
              onClick={() => {
                const video = videoRef.current;
                if (video) {
                  if (video.paused) {
                    video.play();
                  } else {
                    video.pause();
                  }
                }
              }}
              aria-label={isPlaying ? 'Pause video' : 'Play video'}
            >
              {isPlaying ? (
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="5" y="3" width="2.5" height="12" rx="1" fill="white"/>
                  <rect x="10.5" y="3" width="2.5" height="12" rx="1" fill="white"/>
                </svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <polygon points="5,3 15,9 5,15" fill="white"/>
                </svg>
              )}
            </button>
            <div className="flex flex-row gap-1 absolute left-0 top-[110%] -translate-y-1/2">
              <button
                id="overview-video-mute-toggle"
                className="bg-black/60 text-white rounded-full shadow p-2 z-20 flex items-center justify-center"
                onClick={() => {
                  const video = videoRef.current;
                  if (video) {
                    video.muted = !video.muted;
                    setIsMuted(video.muted);
                  }
                }}
                aria-label={isMuted ? 'Unmute video' : 'Mute video'}
              >
                {isMuted ? (
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 8.5V13.5H8L13 18V4L8 8.5H4Z" fill="white"/>
                    <line x1="16" y1="7" x2="20" y2="15" stroke="red" strokeWidth="2"/>
                    <line x1="20" y1="7" x2="16" y2="15" stroke="red" strokeWidth="2"/>
                  </svg>
                ) : (
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 8.5V13.5H8L13 18V4L8 8.5H4Z" fill="white"/>
                    <path d="M16 8C17.3333 9.33333 17.3333 12.6667 16 14" stroke="white" strokeWidth="2"/>
                  </svg>
                )}
              </button>
              <button
                id="overview-video-fullscreen-toggle"
                className="bg-black/60 text-white rounded-full shadow p-2 z-20 flex items-center justify-center ml-1"
                onClick={() => {
                  const video = videoRef.current;
                  if (video) {
                    if (!document.fullscreenElement) {
                      if (video.requestFullscreen) {
                        video.requestFullscreen();
                      } else if ((video as any).webkitRequestFullscreen) {
                        (video as any).webkitRequestFullscreen();
                      } else if ((video as any).msRequestFullscreen) {
                        (video as any).msRequestFullscreen();
                      }
                      setIsFullscreen(true);
                    } else {
                      if (document.exitFullscreen) {
                        document.exitFullscreen();
                      } else if ((document as any).webkitExitFullscreen) {
                        (document as any).webkitExitFullscreen();
                      } else if ((document as any).msExitFullscreen) {
                        (document as any).msExitFullscreen();
                      }
                      setIsFullscreen(false);
                    }
                  }
                }}
                aria-label={isFullscreen ? 'Exit fullscreen' : 'Enter fullscreen'}
              >
                {isFullscreen ? (
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 15L4 18M4 18H8M4 18V14" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M15 7L18 4M18 4V8M18 4H14" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                ) : (
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 8V4H8" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M18 8V4H14" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M4 14V18H8" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M18 14V18H14" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section id="overview" className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="section-title">
          <h2>{t.projectOverview}</h2>
          <p>{t.detailedInformation}</p>
        </div>
        <OverviewVideoPlayer
          isMuted={isMuted}
          setIsMuted={setIsMuted}
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          isFullscreen={isFullscreen}
          setIsFullscreen={setIsFullscreen}
          seek={seek}
          setSeek={setSeek}
          videoRef={videoRef}
        />
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 bg-gray-100">
          {/* Cột trái: Hình ảnh (desktop) + video (desktop) */}
          <div className="lg:col-span-2">
            {/* Ảnh như cũ */}
            <img alt="Privé Building" className="w-full lg:w-[78%] h-full object-cover mx-auto" src="/lovable-uploads/9a274b96-1cc0-45bc-813e-ad4620d51bc2.jpg" />
          </div>
          
          <div className="lg:col-span-3">
            <div className="bg-gray-900 text-white rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-prive">{t.detailedInformation}</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
                {projectDetails.map((detail, index) => <div key={index} className="border-b border-gray-700 pb-3">
                    <span className="text-sm text-gray-400">{t[detail.key]}</span>
                    <p className="font-medium text-white">{detail.value}</p>
                  </div>)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default OverviewSection;
