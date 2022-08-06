import { Box, Text, Flex, Icon } from "@chakra-ui/react";
import React from "react";
import { fb, instagram, Logo, twitter } from "../icons";

function Footer() {
  const footerItemsStyles = {
    textTransform: "uppercase",
    fontWeight:'bold',
    mr: 4,
    color: "white",
    _hover: { color: "orange.200", cursor: "pointer" },
  };
  return (
    <Box bg={"blackAlpha.900"} _before={{content:'" "',bgColor:'#d87649',display:'block',height:'4px',width:'8rem',margin:'auto'}}> 
      <Box w={"80%"}  display={"flex"} flexDir={'column'} py={"4rem"} columnGap={'1rem'} fontColor={'#fff'} m={'auto'} alignItems={['center','normal']} >
        
        <Flex flexDir={{base:'column',md:'row'}} justifyContent={'space-between'} mb={'1rem'} rowGap={'2rem'}>
          <Logo />

          <Flex flexDirection={['column','row']} alignItems={['center','normal']}> 
            <Text {...footerItemsStyles}>Home</Text>
            <Text {...footerItemsStyles}>HeadPhones</Text>
            <Text {...footerItemsStyles}>Speakers</Text>
            <Text {...footerItemsStyles}>EarPhones</Text>
          </Flex>
        
          
        </Flex>
        <Flex  
          mb={'4rem'} flexDir={['column','row']} justifyContent={"space-between"} alignItems={['center','end']} flexWrap={'wrap'} rowGap={'2rem'} >
        <Text color={'white'} my={'2rem'} fontSize={'1rem'} w={{sm:'80%',md:'50%'}}>
              Audiophile is an all in one stop to fulfill your audio needs. We're a
              small team of music lovers and sound specialists who are devoted to
              helping you get the most out of personal audio. Come and visit our
              demo facility - we’re open 7 days a week.
          </Text>
          <Flex mb={{md:'3rem'}} justifyContent={'flex-end'}  w={{md:'50%'}} order={{sm:1,md:0}}>
            <Icon  fontSize={'2rem'} mx={'0.6rem'}>{fb()}</Icon>
            <Icon  fontSize={'2rem'} mx={'0.6rem'} >{twitter()}</Icon>
            <Icon  fontSize={'2rem'} mx={'0.6rem'} >{instagram()}</Icon>
          </Flex>
        <Text color={'white'} fontWeight={'bold'} textAlign={['center','normal']}>Copyright 2021. All Rights Reserved</Text> 
        </Flex>
      </Box>
      
    </Box>
  );
}

export default Footer;
