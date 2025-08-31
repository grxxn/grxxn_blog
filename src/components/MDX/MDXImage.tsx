import Image, { ImageProps } from 'next/image';
import React, { ComponentPropsWithoutRef } from 'react';

type MDXImageProps = ComponentPropsWithoutRef<"img">

const MDXImage = ({ src = "", alt = "", width, height, ...props }: MDXImageProps) => {
  return (
    <Image
      src={src}
      alt={alt || ""}
      width={width ? Number(width) : 800}
      height={height ? Number(height) : 400}
      style={{ maxWidth: "100%", height: "auto" }}
      {...props}
    />
  );
};

export default MDXImage;