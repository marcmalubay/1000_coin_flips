import React, { FC } from 'react';
import {
  Box,
  Image,
} from '@chakra-ui/react';
import { countReset } from 'console';

interface Props {
  eliminated: boolean;
  count: number;
}


const Title: FC<Props> = ({ eliminated, count }) => {
  const calculateSize = (cc: number) => {
    const maxWidth = 40; // Maximum width for the image
    const minWidth = 80;  // Minimum width for the image
    
    const size = Math.min(minWidth, maxWidth * (cc / 1.9));
    return `${size}px`;
  };

  return (
    <>
      <Box
        filter="none"
        transition="filter .5s ease"
        _hover={{
          transform: "scale(1.3)",
          transition: "transform 0.3s",
          filter: "brightness(0.3) invert(1)",
        }}
      >
        <Box  boxSize={calculateSize(count)} overflow="hidden">
          <Image src="/images/ParticipantMale.png"></Image>
        </Box>
      </Box>
    </>
  );
};

export default Title;