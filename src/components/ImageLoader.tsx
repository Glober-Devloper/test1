import React, { useState, useEffect } from 'react';
import { Loader2 } from 'lucide-react';

interface ImageLoaderProps {
  src: string;
  alt: string;
  className?: string;
  fallbackSrc?: string;
  loadingClassName?: string;
  onLoad?: () => void;
  onError?: () => void;
}

const ImageLoader: React.FC<ImageLoaderProps> = ({
  src,
  alt,
  className = '',
  fallbackSrc,
  loadingClassName = '',
  onLoad,
  onError
}) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(src);

  useEffect(() => {
    setLoading(true);
    setError(false);
    setCurrentSrc(src);
  }, [src]);

  const handleLoad = () => {
    setLoading(false);
    onLoad?.();
  };

  const handleError = () => {
    setLoading(false);
    setError(true);
    
    if (fallbackSrc && currentSrc !== fallbackSrc) {
      setCurrentSrc(fallbackSrc);
      setLoading(true);
      setError(false);
    } else {
      onError?.();
    }
  };

  return (
    <div className={`relative ${className}`}>
      {loading && (
        <div className={`absolute inset-0 flex items-center justify-center bg-slate-800/50 backdrop-blur-sm rounded-lg ${loadingClassName}`}>
          <div className="flex flex-col items-center space-y-2">
            <Loader2 className="w-6 h-6 text-purple-400 animate-spin" />
            <span className="text-xs text-slate-400">Loading...</span>
          </div>
        </div>
      )}
      
      {error && !fallbackSrc ? (
        <div className={`flex items-center justify-center bg-slate-800/50 text-slate-400 text-sm p-4 rounded-lg ${className}`}>
          <div className="text-center">
            <div className="w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center mx-auto mb-2">
              <span className="text-2xl">📷</span>
            </div>
            <p>Image not available</p>
          </div>
        </div>
      ) : (
        <img
          src={currentSrc}
          alt={alt}
          className={`${className} ${loading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
          onLoad={handleLoad}
          onError={handleError}
          loading="lazy"
        />
      )}
    </div>
  );
};

export default ImageLoader;