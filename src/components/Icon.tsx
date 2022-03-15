import * as React from "react";
import { Image, Box } from "@chakra-ui/react";

interface IconProps {
  src: string;
  alt: string;
  size?: string;
  rotate?: string;
}

export default function Icon({ src, alt, size, rotate }: IconProps) {
  return (
    <Box width={size} height={size}>
      <Image
        transform={rotate ? `rotateZ(${rotate})` : ""}
        fit="contain"
        height="100%"
        width="100%"
        src={src}
        alt={alt}
      />
    </Box>
  );
}
