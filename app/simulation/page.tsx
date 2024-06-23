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
    Collapse,
    SimpleGrid
} from '@chakra-ui/react';
import Participant from '../components/participant'
import WinScreen from '../components/winscreen'
import { Inconsolata } from '@next/font/google';

const inconsolata = Inconsolata({
    weight: ['400', '700'],
    subsets: ['latin'],
});

var round = 0;
var round_text = round;
var t = 0;
var h = 0;
var max_participants = 1000;
var participants = max_participants;
var done = false;

const RenderComponents: React.FC<{ count: number }> = ({ count }) => {
    const components = [];
    var yup = round;
    if (yup == 0) {
        yup = 0.75
    }


    if (done == true) {
        components.push(<WinScreen tails={t} />)
        return <>{components}</>;
    }
    for (let i = 0; i < count; i++) {
        components.push(<Participant eliminated={false} count={yup} num={i} key={i} />);
    }
    return <>{components}</>;


};

export default function Simulation() {
    const [isOpen, onToggle] = useState(true);

    const flip = () => {
        var toss = Math.floor(Math.random() * 2) == 0;
        if (toss) {
            return "tails"
        } else {
            return "heads"
        }
    }

    const set_rounds = (h: number, t: number) => {
        if (round == 0 && done == false) {
            return ("Participants: " + max_participants)
        }
        return ("Participants: " + (h + t))

    }

    const set_textbox = () => {
        onToggle(false)
        setTimeout(() => onToggle(true), 100);
    }

    const calculate = () => {


        t = 0;
        h = 0;

        if (done == true) {
            done = false
            participants = max_participants
            round_text = round;
            set_textbox();

        } 
        else {
            for (var i = 0; i < participants; i++) {
                if (flip() == "tails") {
                    t += 1;
                } else {
                    h += 1;
                }
            }

            round += 1;
            round_text = round;

            participants = t

            set_textbox();

            if (participants == 1 || participants <= 0) {
                participants = 0
                round = 0
                done = true
            }
        }
    }

    return (
        <main className={inconsolata.className}>
            <ChakraProvider>
                <Box height="100vh" bg="gray.900">
                    <Box bg="gray.800" color="white" textAlign="center" height="6%">
                        <Text fontSize="calc(1vw + 1vh)" height="100%" display="flex" alignItems="center" justifyContent="center">
                            The 1000 Coin Flip Experiment
                        </Text>
                    </Box>
                    <Flex alignItems="center" justifyContent="center">
                        <VStack spacing={4} align='center'>
                            <Button
                                mt="5vh"
                                p={6}
                                colorScheme='gray'
                                variant='solid'
                                onClick={() => calculate()}
                                _hover={{
                                    transform: "scale(1.1)",
                                    transition: "transform 0.2s",
                                }}
                                borderRadius={4}>

                                <Text
                                    fontSize="calc(1vw + 1vh)">
                                    Flip Coin
                                </Text>
                            </Button>
                            <Box width={"90%"}
                                display="flex"
                                flexDirection="column"
                                alignItems="center"
                                justifyContent="center">
                                <Collapse in={isOpen} transition={{ enter: { duration: .5, delay: .1 }, exit: { duration: 0 } }}>
                                    <Divider mt="3vh" orientation='horizontal' width={"100%"} border="1px solid" borderColor="white" />

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

                                    <Divider mt="3vh" orientation='horizontal' width={"100%"} border="1px solid" borderColor="white" />
                                </Collapse>
                            </Box>

                            <ScaleFade initialScale={0} in={isOpen} reverse={true} transition={{ enter: { duration: 0.4, delay: 0.2 }, exit: { duration: 0 } }}>
                                <Box mt="3vh" bg="gray.800" color="white" p={4} textAlign="center" borderRadius={8}>
                                    <Text
                                        fontSize="calc(1vw + 1vh)">
                                        {set_rounds(h, t)}
                                    </Text>
                                </Box>
                            </ScaleFade>
                            <ScaleFade initialScale={0} in={isOpen} reverse={true} transition={{ enter: { duration: 0.4, delay: 0.3 }, exit: { duration: 0 } }}>
                                <Box bg="gray.800" color="white" p={4} textAlign="center" borderRadius={8} >
                                    <Text
                                        fontSize="calc(1vw + 1vh)">
                                        {"Round: " + round_text}
                                    </Text>
                                </Box>
                            </ScaleFade>
                            <ScaleFade initialScale={0} in={isOpen} reverse={true} transition={{ enter: { duration: 0.4, delay: .4 }, exit: { duration: 0 } }}>
                                <HStack spacing={4} align="center" justify="center">
                                    <Box bg="gray.800" color="white" p={4} textAlign="center" borderRadius={8} >
                                        <Text
                                            fontSize="calc(1vw + 1vh)">
                                            {"Heads: " + h}
                                        </Text>
                                    </Box>
                                    <Box bg="gray.800" color="white" p={4} textAlign="center" borderRadius={8}>
                                        <Text
                                            fontSize="calc(1vw + 1vh)">
                                            {"Tails: " + t}
                                        </Text>
                                    </Box>
                                </HStack>
                            </ScaleFade>
                        </VStack>
                    </Flex>
                </Box>
            </ChakraProvider>
        </main >
    );
}
