'use client';
import React, { useState } from 'react';
import {
    Button,
    ChakraProvider,
    Box,
    Flex,
    VStack,
    HStack,
    Divider,
    ScaleFade,
    Text,
    SimpleGrid
} from '@chakra-ui/react';
import Participant from '../components/participant'

var round = 0;
var t = 0;
var h = 0;
var max_participants = 1000;
var participants = max_participants;

const RenderComponents: React.FC<{ count: number }> = ({ count }) => {
    const components = [];
    var yup = round;
    if (yup == 0) {
        yup = 0.75
    }

    for (let i = 0; i < count; i++) {
        components.push(<Participant eliminated={false} count={yup} key={i} />);
    }

    return <>{components}</>;
};


export default function Simulation() {
    const [isOpen, onToggle] = useState(true);

    var [participant_text, set_participant_text] = useState("Participants Left: " + participants);
    var [tails_text, set_tails_text] = useState("Tails: " + t);
    var [heads_text, set_heads_text] = useState("Heads: " + h);
    var [round_text, set_rounds_text] = useState("Round: " + round);

    const flip = () => {
        var toss = Math.floor(Math.random() * 2) == 0;
        if (toss) {
            return "tails"
        } else {
            return "heads"
        }
    }
    // free oso
    const set_textbox = () => {
        onToggle(false)
        setTimeout(() => onToggle(true), 100);
        set_participant_text("Participants: " + participants)
        set_tails_text("Tails: " + t)
        set_heads_text("Heads: " + h)
        set_rounds_text("Round: " + round)
    }

    const calculate = () => {
        t = 0;
        h = 0;

        for (var i = 0; i < participants; i++) {
            if (flip() == "tails") {
                t += 1;
            } else {
                h += 1;
            }
        }

        round += 1;
        participants = t;

        if (participants == 1) {
            participants = max_participants;
            round = 0;
            
        } else if (participants <= 0) {
            participants = max_participants;
            round = 0;
        }
        set_textbox();
    }

    return (

        <main className="flex min-h-screen flex-co justify-between">
            <ChakraProvider>
                <Box position="fixed" top="0" left="0" right="0" bottom="0" bgGradient="linear(to-b, gray.200, gray.500)">
                    <Box bg="blue.500" color="white" textAlign="center" height="6%">
                        <Text fontSize="calc(1vw + 1vh)" fontWeight="bold" height="100%" display="flex" alignItems="center" justifyContent="center">
                            The 1000 Coin Flip Experiment
                        </Text>
                    </Box>
                    <Flex alignItems="center" justifyContent="center">
                        <VStack spacing={4} align='center'>
                            <Button
                                mt="10vh"
                                p={6}
                                colorScheme='blue'
                                variant='solid'
                                onClick={() => calculate()}
                                _hover={{
                                    transform: "scale(1.1)",
                                    transition: "transform 0.2s",
                                }}
                                borderRadius={24}>

                                <Text
                                    fontSize="calc(1vw + 1vh)"
                                    fontWeight="bold">
                                    Calculate Number of Coin Flips
                                </Text>
                            </Button>


                            <Box width={"90%"} 
                                display="flex"
                                flexDirection="column"
                                alignItems="center"
                                justifyContent="center">
                                <Divider mt="3vh" orientation='horizontal' width={"100%"} borderColor="black" />

                                <SimpleGrid 
                                    mt="3vh" 
                                    justifyContent={"center"} 
                                    alignContent={"center"} 
                                    display={"flex"} 
                                    flexWrap={"wrap"}
                                    minChildWidth="50px"
                                    >

                                        <RenderComponents count={participants} />

                                </SimpleGrid>
                                
                                <Divider mt="3vh" orientation='horizontal' width={"100%"} borderColor="black" />
                            </Box>
                            <ScaleFade initialScale={0.1} in={isOpen} reverse={true} transition={{ enter: { duration: 0.3, delay: 0.2 }, exit: { duration: 0.1 } }}>
                                <Box mt="3vh" bg="blue.500" color="white" p={4} textAlign="center" borderRadius={8} >
                                    <Text
                                        fontSize="calc(1vw + 1vh)"
                                        fontWeight="bold">
                                        {participant_text}
                                    </Text>
                                </Box>
                            </ScaleFade>
                            <ScaleFade initialScale={0.1} in={isOpen} reverse={true} transition={{ enter: { duration: 0.2, delay: 0.2 }, exit: { duration: 0.1 } }}>
                                <Box bg="blue.500" color="white" p={4} textAlign="center" borderRadius={8}>
                                    <Text
                                        fontSize="calc(1vw + 1vh)"
                                        fontWeight="bold">
                                        {round_text}
                                    </Text>
                                </Box>
                            </ScaleFade>
                            <ScaleFade initialScale={0.1} in={isOpen} reverse={true} transition={{ enter: { duration: 0.4, delay: 0.2 }, exit: { duration: 0.1 } }}>
                                <HStack spacing={4} align="center" justify="center">
                                    <Box bg="blue.500" color="white" p={4} textAlign="center" borderRadius={8} >
                                        <Text
                                            fontSize="calc(1vw + 1vh)"
                                            fontWeight="bold">
                                            {tails_text}
                                        </Text>
                                    </Box>
                                    <Box bg="blue.500" color="white" p={4} textAlign="center" borderRadius={8}>
                                        <Text
                                            fontSize="calc(1vw + 1vh)"
                                            fontWeight="bold">
                                            {heads_text}
                                        </Text>
                                    </Box>
                                </HStack>
                            </ScaleFade>
                        </VStack>
                    </Flex>
                </Box>
            </ChakraProvider>
        </main>
    );
}
