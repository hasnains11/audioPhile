import { Box, Button, Heading, Image, Text, VStack } from "@chakra-ui/react";
import img from "./image-hero.jpg";
const HeroSection = () => {
  return (
    <Box
      h={"80vh"}
      bgPosition="center"
      bgImage={img}
      bgRepeat="none"
      bgPos={"center"}
      bgColor={"red.100"}
      bgSize={"cover"}
    >
      <Box w={'80%'} m={'auto'}>
        <VStack pt={'6rem'} spacing={8} align={['center','center','left']} w={['100%','100%',"50%"]} h={'100%'}  color="white">
         <Box alignItems={['center','center','left']}>

            <Text marginBottom={'1rem'} bgClip={'text'} bgGradient={'linear(to-r,#aaa,#555)'} letterSpacing={4}  textTransform={'uppercase'}>New Product</Text>
            <Heading  
            letterSpacing={1}
            textTransform={'uppercase'}>XX99 Mark II</Heading>
           <Heading marginBottom={'1rem'} letterSpacing={1} marginTop={'-0.2rem'} textTransform={'uppercase'}>HeadPhones</Heading>
           <Text marginBottom={'1rem'} noOfLines={3}>
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
            </Text>
          </Box>

          <Button colorScheme={"orange"} borderRadius={0} w={"7rem"} py={5} px={2}>
            See Product
          </Button>
        </VStack>
      </Box>
    </Box>
  );
};

export default HeroSection;
