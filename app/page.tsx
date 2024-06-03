'use client';
import React from 'react';
import {
  Box,
  Button,
  Flex,
  IconButton,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  useColorMode,
} from '@chakra-ui/react';

var round = 0;
var t = 0;
var h = 0;
var max_participants = 10;
var participants = max_participants;

export function flip() {
  var toss = Math.floor(Math.random() * 2) == 0;
  if (toss){
    return "tails"
  } else {
    return "heads"
  }
}

export function calculate(){
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
  
}

export default function Home() {
  return (
    
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="fixed flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
          <Button 
          border="none"
          color="teal"
          height = "200px"
          onClick={() => calculate()}
          radius = "50%"
          width = "200px"
          children = "Calculate Number of Coin Flips"
        />
        </div>
        <div className="fixed flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
          <Button 
          border="none"
          color="teal"
          height = "200px"
          onClick={() => calculate()}
          radius = "50%"
          width = "200px"
          children = "Calculate Number of Coin Flips"
        />
        <Button 
          border="none"
          color="teal"
          height = "200px"
          onClick={() => calculate()}
          radius = "50%"
          width = "200px"
          children = "Calculate Number of Coin Flips"
        />
        </div>
    </main>
  );
}
