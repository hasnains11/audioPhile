import { Box, Button, Flex, Text,Image } from '@chakra-ui/react'
import desktop from './../assets/home/desktop/image-earphones-yx1.jpg'
import mobile from './../assets/home/mobile/image-earphones-yx1.jpg'
import tablet from './../assets/home/tablet/image-earphones-yx1.jpg'
import React from 'react'
import { InfoOutlineIcon } from '@chakra-ui/icons'

function EarphonesYX1() {
  return (
    <Flex columnGap={'2rem'} w={'80%'} m={'auto'} h={'20rem'} flexDirection={{base:'column-reverse',sm:'row'}} rowGap={{base:'1rem',sm:'0'}}>
        <Box flex={1} borderRadius={'1rem'} bgImage={[mobile,tablet,desktop]} bgPos={'center'} bgRepeat={'no-repeat'} bgSize={'cover'} >
            
        </Box>
        <Box  bg={'#cecece'} borderRadius={'1rem'} flex={1} display={'flex'} flexDir={'column'} justifyContent={'center'} alignItems={'center'} pr={['0rem','2rem']}>
            <Text fontSize={['2xl','3xl','4xl']} mb={'1.5rem'} fontWeight={800}> YX1 Earphones</Text>
            <Button size={['sm','lg','lg']} variant={'out-lined'}>See Product</Button>
        </Box>
    </Flex>
    )
}

export default EarphonesYX1