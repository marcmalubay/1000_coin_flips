import React, { FC } from 'react';
import {
  Box,
  Image,
} from '@chakra-ui/react';
import { countReset } from 'console';

interface Props {
  eliminated: boolean;
  count: number;
  num: number;
}


const Title: FC<Props> = ({ eliminated, count, num }) => {
  const calculateSize = (cc: number) => {
    const maxWidth = 1.5; // Maximum width for the image
    const minWidth = 2.5;  // Minimum width for the image
    
    const size = Math.min(minWidth, maxWidth * (cc / 2.6));
    const size2 = size
    return  `calc(${size}vh + ${size2}vw)`;
  };

  return (
    <>
      <Box
        filter="brightness(0.3) invert(1)"
        transition="filter .5s ease"
        _hover={{
          transform: "scale(1.3)",
          transition: "transform 0.3s",
          filter: "brightness(0.3) invert(1)",
        }}
      >
        <Box className={"" + num} boxSize={calculateSize(count)} overflow="hidden">
          <Image src="/images/ParticipantMale.png"></Image>
        </Box>
      </Box>
    </>
  );
};

export default Title;