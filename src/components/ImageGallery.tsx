
import React, { useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';

interface ImageProps {
  src: string;
  alt: string;
}

interface ImageGalleryProps {
  images: ImageProps[];
  columns?: 2 | 3 | 4;
  className?: string;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ 
  images, 
  columns = 3, 
  className = "" 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState<ImageProps | null>(null);

  const handleOpenImage = (image: ImageProps) => {
    setCurrentImage(image);
    setIsOpen(true);
  };

  const getGridColumns = () => {
    switch (columns) {
      case 2: return 'grid-cols-1 sm:grid-cols-2';
      case 3: return 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3';
      case 4: return 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4';
      default: return 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3';
    }
  };

  return (
    <>
      <div className={`grid gap-4 ${getGridColumns()} ${className}`}>
        {images.map((image, index) => (
          <div
            key={index}
            className="aspect-video overflow-hidden rounded-lg cursor-pointer hover-scale"
            onClick={() => handleOpenImage(image)}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-4xl p-0 bg-transparent border-none">
          {currentImage && (
            <div className="relative flex items-center justify-center">
              <img
                src={currentImage.src}
                alt={currentImage.alt}
                className="max-h-[80vh] max-w-full object-contain"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ImageGallery;
