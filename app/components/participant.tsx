import React, { FC } from 'react';
import {
  Box,
  Image,
  Text
} from '@chakra-ui/react';

interface Props {
  eliminated: boolean;
  count: number;
}


const Title: FC<Props> = ({ eliminated, count }) => {
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
        <Image src="/images/ParticipantMale.png"
          boxSize="20px"
        ></Image>
      </Box>
    </>
  );
};

export default Title;