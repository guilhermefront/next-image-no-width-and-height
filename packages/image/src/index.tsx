import React, { useState } from 'react';
import NextImage, { ImageProps } from 'next/Image';

const ImageWithNoDimensions = (
  props: Omit<ImageProps, 'width' | 'height'> & {
    width?: number;
    height?: number;
  }
) => {
  const { src } = props;
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  if (
    dimensions.width === 0 &&
    dimensions.height === 0 &&
    typeof src === 'string' &&
    typeof window !== 'undefined'
  ) {
    const img = new Image();

    img.src = src;

    img.onload = () => {
      setDimensions({ width: img.naturalWidth, height: img.naturalHeight });
    };
  }

  return <NextImage {...dimensions} {...props} />;
};

export default ImageWithNoDimensions;
