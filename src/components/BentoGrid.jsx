import React from 'react';

const BentoGrid = () => {
  const items = [
    {
      type: 'image',
      src: '5.jpg',
      alt: 'Digital marketing',
      title: 'Marketing',
      description: 'Estratégias que conectam',
      className: 'col-span-2 row-span-1',
      aspectRatio: 'landscape' // 16:9
    },
    {
      type: 'video',
      src: '/1.mp4',
      title: 'Video',
      description: 'Produções audiovisuais',
      className: 'col-span-2 row-span-3',
      aspectRatio: 'portrait' // 9:16
    },
    {
      type: 'image',
      src: '/logo.png',
      alt: 'Content creation',
      title: 'Content',
      description: 'Conteúdo que engaja',
      className: 'col-span-1 row-span-2',
      aspectRatio: 'portrait' // 9:16
    },
    {
      type: 'image',
      src: '1.png',
      alt: 'Social media',
      title: 'Social',
      description: 'Engajamento nas redes',
      className: 'col-span-1 row-span-1',
      aspectRatio: 'square' // 1:1
    },
    {
      type: 'image',
      src: '3.png',
      alt: 'SEO optimization',
      title: 'SEO',
      description: 'Otimização web',
      className: 'col-span-1 row-span-2',
      aspectRatio: 'instagram' // 4:5
    },
    {
      type: 'image',
      src: '8.png',
      alt: 'Analytics',
      title: 'Analytics',
      description: 'Análise de dados',
      className: 'col-span-1 row-span-1',
      aspectRatio: 'square' // 1:1
    },
    {
      type: 'image',
      src: '6.png',
      alt: 'Content creation',
      title: 'Content',
      description: 'Conteúdo que engaja',
      className: 'col-span-2 row-span-1',
      aspectRatio: 'landscape' // 16:9
    },
    {
      type: 'image',
      src: '4.jpg',
      alt: 'Social media',
      title: 'Social',
      description: 'Engajamento nas redes',
      className: 'col-span-1 row-span-2',
      aspectRatio: 'instagram' // 4:5
    },
    {
      type: 'image',
      src: '7.png',
      alt: 'SEO optimization',
      title: 'SEO',
      description: 'Otimização web',
      className: 'col-span-1 row-span-2',
      aspectRatio: 'instagram' // 4:5
    }
  ];

  const getAspectRatioClass = (ratio) => {
    switch (ratio) {
      case 'portrait': // 9:16
        return 'aspect-[9/16]';
      case 'instagram': // 4:5
        return 'aspect-[4/5]';
      case 'square': // 1:1
        return 'aspect-square';
      case 'landscape': // 16:9
        return 'aspect-video';
      default:
        return 'aspect-video';
    }
  };

  return (
    <div className="w-full max-w-[1400px] mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-fr">
        {items.map((item, index) => (
          <div
            key={index}
            className={`group relative overflow-hidden rounded-lg transition-all duration-300 
              hover:shadow-lg hover:scale-[1.02] 
              ${item.className} bg-neutral-100 cursor-pointer
              ${getAspectRatioClass(item.aspectRatio)}`}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent 
              opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
            
            {item.type === 'image' ? (
              <img
                src={item.src}
                alt={item.alt}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            ) : (
              <div className="relative h-full w-full">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="h-full w-full object-cover"
                  loading="lazy"
                >
                  <source src={item.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            )}
            
            <div className="absolute inset-0 p-4 text-white z-20 flex flex-col justify-end 
              transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 
              transition-all duration-300">
              <h3 className="text-sm sm:text-lg font-medium leading-tight mb-1">{item.title}</h3>
              <p className="text-xs sm:text-sm text-white/90 line-clamp-2 font-light">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BentoGrid;