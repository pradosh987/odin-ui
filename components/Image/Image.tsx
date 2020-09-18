import React, { useState } from "react";
import Loading from "../../assets/loading.svg";

interface IProps {
  src: string;
  alt?: string;
  className?: string;
  height?: number | string;
}

export const Image = ({ src, alt, className, height }: IProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div>
      {!imageLoaded && (
        <div
          className="d-flex justify-content-center align-items-center position-absolute w-100 bg-light shadow-sm text-primary"
          style={{ height: height }}
        >
          <Loading />
        </div>
      )}

      <img
        src={src}
        style={{
          opacity: imageLoaded ? 100 : 0,
          transition: "visibility 0s linear 0s, opacity 300ms",
        }}
        onLoad={() => setImageLoaded(true)}
        alt={alt || ""}
        className={className || ""}
        height={height}
      />
    </div>
  );
};
