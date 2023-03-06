import { Heading, HStack, Image, Text, VStack, Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return <Box bg="white" borderRadius="10px" borderWidth='2px'>
        <Image src={imageSrc} align="center" borderTopRadius="10px"></Image>
        <VStack spacing={8} p={5} align="left" bg="white" borderBottomRadius="10px">
      <Heading  textColor="black" size='md' >{title}</Heading>
      <Text color="gray" >{description}</Text>
       <HStack alignSelf="self-start" px="3" py="4">
   <Text color="black" size ="sm">See More</Text> 
         <FontAwesomeIcon icon ={faArrowRight} size ="1px" color="black"></FontAwesomeIcon>
  </HStack>
      </VStack>
    </Box>
};

export default Card;
