import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

interface SectionProps {
  t: typeof import('@/lib/translations').default['vi'];
}

const HeroSection: React.FC<SectionProps> = ({ t }) => {
  const [backgroundImage, setBackgroundImage] = useState<string>("/web_image/1_tong_quan_dat_xanh_home.jpg");
  const [isPlaying, setIsPlaying] = useState(true); // default true for autoplay
  const [isMuted, setIsMuted] = useState(true); // default true for autoplay on mobile
  const [isFullscreen, setIsFullscreen] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  
  const scrollToOverview = () => {
    const overviewSection = document.getElementById('overview');
    if (overviewSection) {
      overviewSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const video = document.getElementById('hero-mobile-video') as HTMLVideoElement | null;
    if (video) {
      videoRef.current = video;
      setIsPlaying(!video.paused);
      setIsMuted(video.muted);
      const handlePlay = () => setIsPlaying(true);
      const handlePause = () => setIsPlaying(false);
      const handleVolumeChange = () => setIsMuted(video.muted);
      video.addEventListener('play', handlePlay);
      video.addEventListener('pause', handlePause);
      video.addEventListener('volumechange', handleVolumeChange);
      return () => {
        video.removeEventListener('play', handlePlay);
        video.removeEventListener('pause', handlePause);
        video.removeEventListener('volumechange', handleVolumeChange);
      };
    }
  }, []);

  // Add fullscreen event listener to sync state
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

  return (
    <section id="hero" className="relative h-screen min-h-[600px] flex items-center justify-center">
      {/* Hero Background */}
      <div className="absolute inset-0 w-full h-full z-0">
        {/* Mobile: Hiển thị video thay cho ảnh nền */}
        <div className="block sm:hidden w-full h-full relative">
          <video
            id="hero-mobile-video"
            className="w-full h-full object-contain bg-black"
            autoPlay
            loop
            muted={isMuted}
            playsInline
            poster="/web_image/1_tong_quan_dat_xanh_home.jpg"
            style={{ maxHeight: '100vh' }}
          >
            <source src="/4579752162252452685.mp4" type="video/mp4" />
            {/* Nếu không hỗ trợ video, fallback sang ảnh */}
            Your browser does not support the video tag.
          </video>
          {/* Video controls overlay (bottom, moved up) */}
          <div className="absolute bottom-20 left-0 right-0 flex flex-col items-center px-4 z-10">
            <input
              type="range"
              id="hero-video-seek"
              min="0"
              max="100"
              defaultValue="0"
              className="w-full h-2 accent-prive bg-white/70 rounded-lg appearance-none cursor-pointer"
              onChange={e => {
                const video = videoRef.current;
                if (video && video.duration) {
                  video.currentTime = (Number(e.target.value) / 100) * video.duration;
                }
              }}
            />
            <div className="w-full flex justify-center mt-5 relative">
              <button
                id="hero-video-toggle"
                className="absolute left-1/2 -translate-x-1/2 bg-black/60 text-white rounded shadow text-xs flex items-center justify-center px-4 py-1 z-20 "
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
                  // Pause icon
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="5" y="3" width="2.5" height="12" rx="1" fill="white"/>
                    <rect x="10.5" y="3" width="2.5" height="12" rx="1" fill="white"/>
                  </svg>
                ) : (
                  // Play icon
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <polygon points="5,3 15,9 5,15" fill="white"/>
                  </svg>
                )}
              </button>
              <div className="flex flex-row gap-1 absolute left-0 top-[110%] -translate-y-1/2">
                <button
                  id="hero-video-mute-toggle"
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
                  id="hero-video-fullscreen-toggle"
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
                    // Minimize icon
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7 15L4 18M4 18H8M4 18V14" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                      <path d="M15 7L18 4M18 4V8M18 4H14" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  ) : (
                    // Fullscreen icon
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
        {/* Desktop: Hiển thị ảnh nền như cũ */}
        <img
          src={backgroundImage}
          alt="Privé Luxury Apartments"
          className="w-full h-full object-cover hidden sm:block"
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
      {/* Hero Content */}
      <div className="container relative z-10 px-4 text-center text-white">
        {/* <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-2 -mt-2 animate-fade-in leading-tight">
          <span className="block text-white">{t.heroSubtitle}</span>
        </h1> */}
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto animate-fade-in delay-200 leading-relaxed sm:block hidden">
          {t.heroDescription}
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in delay-300">
          <Button 
            size="lg" 
            className="bg-prive hover:bg-prive-dark text-white sm:inline-flex hidden"
            asChild
          >
            <a href="https://zalo.me/0346697531" target="_blank" rel="noopener noreferrer">{t.xemPhapLy}</a>
          </Button>
          <Button 
            size="lg" 
            className="bg-prive hover:bg-prive-dark text-white sm:inline-flex hidden"
            asChild
          >
            <a href="#pricing">{t.xemBangGia}</a>
          </Button>
        </div>
      </div>
      {/* Scroll Down Button */}
      {/* <button 
        onClick={scrollToOverview}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
      >
        <ArrowDown size={30} />
      </button> */}
    </section>
  );
};

export default HeroSection;
