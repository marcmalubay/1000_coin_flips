import React, { FC } from 'react';
import {
    Box,
    Image,
    Text
  } from '@chakra-ui/react';

interface Props {
    eliminated: boolean;
}

const Title: FC<Props> = ({eliminated}) => {
    return (
      <>
        <Image src="/images/ParticipantMale.png" boxSize="100px"></Image>
      </>
    );
  };
  
  export default Title;