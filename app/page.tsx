'use client';
import React, { useState } from 'react';
import {
  Button,
  ChakraProvider, 
  Box,
  Flex,
  VStack,
  HStack,
  Text
} from '@chakra-ui/react';

export default function Home() {

  var round = 0;
  var t = 0;
  var h = 0;
  var max_participants = 1000;
  var participants = max_participants;
  
  var [participant_text, set_participant_text] = useState("Participants Left: " + participants) ;
  var [tails_text, set_tails_text] = useState("Tails: " + t) ;
  var [heads_text, set_heads_text] = useState("Heads: " + h) ;
  var [round_text, set_rounds_text] = useState("Round: " + round) ;

  const flip = () =>{
    var toss = Math.floor(Math.random() * 2) == 0;
    if (toss){
      return "tails"
    } else {
      return "heads"
    }
  }
  
  const set_textbox = (participants: number) => {
    set_participant_text("Participants Remaining: " + t)
    set_tails_text("Tails: " + t)
    set_heads_text("Heads: " + h)
    set_rounds_text("Round: " + round)
  }

  const calculate = () => {
    t = 0;
    h = 0;
  
    for (var i=0; i < participants; i++) {
      if (flip() == "tails"){
        t += 1;
      } else {
        h += 1;
      }
    }
    round += 1;
    participants = t;
  
    console.log("Tails: " + t, "Heads: " + h, "Round: " + round)
    if (participants == 1){
      console.log("One participant made it to the end!")
      participants = max_participants;
      round = 0;

    } else if (participants <= 0){
      console.log("None of the participants made it to the end!")
      participants = max_participants;
      round = 0;
    }
    //set_textbox(t);
  }

  return (
    
    <main className="flex min-h-screen flex-co justify-between">
      <ChakraProvider>
      <Box height="7vh" bg="blue.500" color="white" textAlign="center">
        <Text fontSize="xl" fontWeight="bold" p={6} display="flex" alignItems="center" justifyContent="center">
          The 1000 Coin Flip Experiment
        </Text>
      </Box>
        <Box minH="93vh" bgGradient="linear(to-b, gray.200, gray.500)">
          <Flex height="90vh" alignItems="center" justifyContent="center">
          <VStack spacing={8} align="center" justify="center" height="30vh">
            <VStack spacing={28} align="center" justify="center" height="100vh">
                <Button
                  p={6} 
                  colorScheme='blue' 
                  variant='solid'
                  onClick={() => calculate()}>
                  <Text 
                    fontSize="xl" 
                    fontWeight="bold">
                    Calculate Number of Coin Flips
                  </Text>
                </Button>
                <HStack spacing={4} align="center" justify="center" height="10vh">
                  <Box bg="blue.500" color="white" p={4} textAlign="center" borderRadius={8}>
                  <Text 
                      fontSize="xl" 
                      fontWeight="bold">
                      {tails_text}
                    </Text>
                  </Box>
                  <Box bg="blue.500" color="white" p={4} textAlign="center" borderRadius={8}>
                  <Text 
                      fontSize="xl" 
                      fontWeight="bold">
                      {heads_text}
                    </Text>
                  </Box>
                </HStack>
              </VStack>
                  <Box bg="blue.500" color="white" p={4} textAlign="center" borderRadius={8}>
                  <Text 
                      fontSize="xl" 
                      fontWeight="bold">
                      {participant_text}
                    </Text>
                  </Box>
                  <Box bg="blue.500" color="white" p={4} textAlign="center" borderRadius={8}>
                  <Text 
                      fontSize="xl" 
                      fontWeight="bold">
                      {round_text}
                    </Text>
                  </Box>
              </VStack>
          </Flex>
        </Box>
      </ChakraProvider>
    </main>
  );
}
