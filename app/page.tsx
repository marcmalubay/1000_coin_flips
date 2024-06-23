'use client';
import React, {} from 'react';
import {
  Button,
  ChakraProvider,
  Box,
  Flex,
  VStack,
  Divider,
  Link,
  Text
} from '@chakra-ui/react';
import { Inconsolata } from '@next/font/google';

const inconsolata = Inconsolata({
    weight: ['400', '700'],
    subsets: ['latin'],
});

export default function Home() {
  return (
    <main className={inconsolata.className}>
      <ChakraProvider>
        <Box position="fixed" top="0" left="0" right="0" bottom="0" bg="gray.900">
          <Box bg="gray.800" color="white" textAlign="center" height="6%">
            <Text fontSize="calc(1vw + 1vh)" height="100%" display="flex" alignItems="center" justifyContent="center">
              The 1000 Coin Flip Experiment
            </Text>
          </Box>
          <Flex alignItems="center" justifyContent="center">
            <VStack spacing={15} align='center'>
              <Divider mt="10vh" orientation='horizontal' width={"50%"} borderColor="white" />
              <Box color="white" p={4} width={"70%"} textAlign="center" borderRadius={8}>
                <Text
                  justifyContent="center"
                  fontSize="calc(1vw + 1.2vh)"
                  height="20%" >
                  In this simulated environment, a select number of participants will be given a coin. Participants who land tails will be allowed to advance into the next round, while those who land heads must sit out. This experiment measures the likelihood of landing tails a certain amount of times in a row. Although not certain, it is likely that out of 1000 coin flips, one participant will land tails 10 times in a row.
                </Text>
              </Box>
              <Divider orientation='horizontal' width={"50%"} borderColor="white" />
              <Link href="/simulation">
                <Button
                  mt="10vh"
                  p={6}
                                    colorScheme='gray'
                                    variant='solid'
                  _hover={{
                    transform: "scale(1.1)",
                    transition: "transform 0.2s",
                  }}
                  borderRadius={4}>
                  <Text
                    fontSize="calc(1vw + 1vh)">
                    Begin Simulation
                  </Text>
                </Button>
              </Link>
            </VStack>
          </Flex>
        </Box>
      </ChakraProvider>
    </main>
  );
}
