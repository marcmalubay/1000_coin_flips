import React, { FC } from 'react';
import {
  Box,
  Text,
} from '@chakra-ui/react';

interface Props {
  tails: number;
}


const Title: FC<Props> = ({ tails }) => {
  const complete = (t: number) => {
    var s = "The experiment is complete! One participant made it to the end."
    if (t == 0) {
      s = "The experiment is complete! No participant was able to land tails consequtively to the end."
    }
    return(s)
  }
  return (
    <>
      <Box color="white" p={4} width={"100%"} textAlign="center" borderRadius={8}>
        <Text
          justifyContent="center"
          fontSize="calc(1vw + 1.2vh)"
          height="20%" >
          {complete(tails)}
        </Text>
      </Box>
    </>
  );
};

export default Title;