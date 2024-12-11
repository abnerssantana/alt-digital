import React from 'react';
import { Card } from '@/components/ui/card';

const BentoGrid = () => {
  const items = [
    {
      type: 'image',
      src: '/api/placeholder/600/400',
      alt: 'Creative workspace',
      title: 'Creative Design',
      description: 'Transformando ideias em experiências visuais únicas',
      className: 'md:col-span-2 md:row-span-2'
    },
    {
      type: 'video',
      src: '/api/placeholder/300/300',
      title: 'Motion Design',
      description: 'Animações que contam histórias',
      className: 'md:col-span-1'
    },
    {
      type: 'image',
      src: '/api/placeholder/300/300',
      alt: 'Digital marketing',
      title: 'Digital Marketing',
      description: 'Estratégias que conectam',
      className: 'md:col-span-1'
    },
    {
      type: 'image',
      src: '/api/placeholder/600/300',
      alt: 'Content creation',
      title: 'Content Creation',
      description: 'Conteúdo que engaja e converte',
      className: 'md:col-span-2'
    }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-auto">
        {items.map((item, index) => (
          <Card 
            key={index}
            className={`group relative overflow-hidden rounded-xl transition-all hover:shadow-lg ${item.className}`}
          >
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity z-10" />
            
            {item.type === 'image' ? (
              <img
                src={item.src}
                alt={item.alt}
                className="h-full w-full object-cover"
              />
            ) : (
              <video
                autoPlay
                muted
                loop
                playsInline
                className="h-full w-full object-cover"
              >
                <source src={item.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
            
            <div className="absolute inset-0 p-4 text-white z-20 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end">
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-sm text-white/90">{item.description}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default BentoGrid;