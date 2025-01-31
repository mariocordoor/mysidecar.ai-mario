import Image from "next/image";
import React from "react";

interface LogoProps {
  width?: number;
  height?: number;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({
  width = 250,
  height = 70,
  className = "",
}) => {
  return (
    <Image
      src="/logo.png"
      alt="MySidecar.ai logo"
      width={width}
      height={height}
      className={className}
      style={{ width: "auto", height: "auto" }}
      priority
    />
  );
};
