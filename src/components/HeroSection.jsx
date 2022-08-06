import { Box, Button, Heading, Image, Text, Flex } from "@chakra-ui/react";
import img_hero_lg from "./../assets//home/desktop/image-hero.jpg";
import img_hero_sm from "./../assets//home/mobile/image-header.jpg";
import img_hero_tablet from "./../assets//home/tablet/image-header.jpg";
const HeroSection = () => {
  const imgPOs={base:'40rem -8rem',md:'center'};
  return (
    <Box
      h={'70vh'}
      
      bgImage={[img_hero_sm,img_hero_tablet,img_hero_lg]}
      bgRepeat="none"
      bgPos={"center"}
     
      bgSize={"cover"}
      bgPosition={'center'}
    >
      <Box w={"80%"} m={"auto"}>
        <Flex
          pt={["6rem",'8rem']}
          spacing={10}
          flexDirection={"column"}
          alignItems={["center", "center", "baseline", "baseline"]}
          w={["100%", "100%", "50%"]}
          h={"100%"}
          color="white"
        >
          <Box >
          <Text
            marginBottom={0}
            bgClip={"text"}
            bgGradient={"linear(to-r,#aaa,#555)"}
            letterSpacing={4}
            textTransform={"uppercase"}
            align={["center", "center", "left", "left"]}
          >
            New Product
          </Text>
            <Heading fontSize={['3xl','4xl','5xl']} letterSpacing={1} textTransform={"uppercase"}>
              XX99 Mark II
            </Heading>
            <Heading
              marginBottom={"1rem"}
              letterSpacing={1}
              marginTop={"-0.2rem"}
              textTransform={"uppercase"} 
              fontSize={['3xl','4xl','5xl']}
            >
              HeadPhones
            </Heading>
          </Box>

          <Text
            align={["center", "center", "left", "left"]}
            pb={"3rem"}
            w={['90%','90%','60%']}
          >
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </Text>

          <Button
            variant={'solid'}
            
            size={['sm','lg']}
           
          >
            See Product
          </Button>
        </Flex>
      </Box>
    </Box>
  );
};

export default HeroSection;
