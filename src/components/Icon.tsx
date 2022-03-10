import * as React from "react";
import { Image, Box } from "@chakra-ui/react";

interface IconProps {
  src: string;
  alt: string;
}

export default function Icon({ src, alt }: IconProps) {
  return (
    <Box>
      <Image fit="contain" sizes="100%" src={src} alt={alt} />
    </Box>
  );
}
