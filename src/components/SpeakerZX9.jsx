import { Box, Button, Image, Text } from "@chakra-ui/react";
import img1 from "./../assets/shared/desktop/image-speaker-zx9.png";
import img from './../assets/home/tablet/image-speaker-zx9.png'
const SpeakerZX9 = () => {
  return (
    <Box
      display={"flex"}
      w={"80%"}
      flexDirection={["column", "column", "row"]}
      mb="2rem"
      h={"35rem"}
      background={"#d87649"}
      columnGap={{md:'2rem'}}
      m="auto"
      borderRadius={"1rem"}
      alignItems={"center"}
      justifyContent={"center"}
      overflow="hidden"
    >
      <Box pl={["0", "0", "3rem"]} ml={["", "", "auto"]}>
        <Image
         mt={['1rem','2rem','0']}
          h={["11rem", "13rem", "30rem"]}
          mb={{md:"-6rem"}}
          maxW={"none"}
          src={img}
        />
      </Box>

      <Box
        display={"flex"}
        flexDirection={"column"}
        w={{ md: "100%", lg: "55%" }}
        m={'auto'}
       
        alignSelf={{ md: "end"}}
      >
        <Box 
            display={'block'}
            fontSize={['3xl','4xl','5xl']}
        
            mt={['1rem','2rem','0']}
            fontWeight={['700','800']}          
          textAlign={['center','center','left']}
          mb={["-1rem", "-1rem", "1rem"]}
          alignItems={{md:"center"}}
          aligntext={{ md: "center" }}
        >
          <Text
           lineHeight={['1.7','1.7','1.3']}
            color="#fff"
            textTransform={"uppercase"}
            mb={"1.5rem"}
            mt={['-5rem','-5rem',"-2rem"]}
          >
            {" "}
            ZX9{" "}
          </Text>
          <Text
            lineHeight={1}
            color="#fff"
            textTransform={"uppercase"}
            mb={["2.5rem",'2.5rem','1.5rem']}
            mt={'-2rem'}
          >
            Speaker
          </Text>
        </Box>

        <Text w={['75%','75%',"60%"]} m={{base:'auto', md:0}} textAlign={{base:'center', md:'left'}} color={"#fff"}>
         
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound.
        </Text>
        <Button
        variant={'solid'}
        size={['sm','lg']}
        bg={'#000'}

          mt={{base:'1.4rem',md:"2.4rem"}}
          w="fit-content"
            display={'block'}
          p={{base:'0.2rem 1rem',md:"0.4rem 1.8rem"}}
         
          alignSelf={{base:'center',md:'auto'}}
         
        >
          See Product
        </Button>
      </Box>
    </Box>
  );
};

export default SpeakerZX9;
