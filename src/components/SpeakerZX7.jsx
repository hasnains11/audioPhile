import React from 'react'
import desktop from './../assets/home/desktop/image-speaker-zx7.jpg';
import tablet from './../assets/home/tablet/image-speaker-zx7.jpg';
import mobile from './../assets/home/mobile/image-speaker-zx7.jpg';
import { Box,Flex,Text,Button } from '@chakra-ui/react';
export default function SpeakerZX7() {
  return (
    <Box w={'80%'} m={'auto'} my={'5rem'} pl={{base:'1rem',sm:'3rem'}} borderRadius={'1rem'} bgImage={[mobile,tablet,desktop]}bgPos={'right'} backgroundSize='cover'  >
        <Flex h="25rem" flexDir={'column'} alignItems={'flex-start'} justifyContent={'center'} >
            <Text fontSize={['2xl','3xl','4xl']} mb={['1rem','2rem']} fontWeight={'900'}>ZX7 Speakers</Text>
            <Button variant={'out-lined'}  size={['sm','lg']}>See Product</Button>
        </Flex>
    </Box>
  )
}
