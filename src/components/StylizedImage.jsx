import clsx from "clsx";
import Image from "next/image";
import React, { useId } from "react";

const shapes = [
  {
    width: 400,
    height: 400,
    path: "M50 100 L350 100 L340 150 L40 150 Z M60 250 L360 250 L350 300 L50 300 Z M30 50 L370 350 L350 370 L10 70 Z",
  },
  // ... outros shapes existentes se necessário
];

const StylizedImage = ({ shape = 0, className, ...props }) => {
  const id = useId();
  const { width, height, path } = shapes[shape];
  
  return (
    <div
      className={clsx(
        className,
        "relative flex aspect-square w-full grayscale"
      )}
    >
      <svg viewBox={`0 0 ${width} ${height}`} fill="none" className="h-full">
        <g clipPath={`url(#${id}-clip)`} className="group">
          <g className="origin-center scale-100 transition duration-500 motion-safe:group-hover:scale-105">
            <foreignObject width={width} height={height}>
              <Image
                alt=""
                className="w-full bg-neutral-100 object-cover"
                style={{ aspectRatio: `${width} / ${height}` }}
                {...props}
              />
            </foreignObject>
          </g>
          <use
            href={`#${id}-shape`}
            strokeWidth="2"
            className="stroke-neutral-950/10"
          />
        </g>
        <defs>
          <clipPath id={`${id}-clip`}>
            <path
              id={`${id}-shape`}
              d={path}
              fillRule="evenodd"
              clipRule="evenodd"
            />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

export default StylizedImage;