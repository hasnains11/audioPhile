import { Flex,Box,Text } from '@chakra-ui/react'
import desktop from './../assets/shared/desktop/image-best-gear.jpg';
import tablet from './../assets/shared/tablet/image-best-gear.jpg';
import mobile from './../assets/shared/mobile/image-best-gear.jpg';
import React from 'react'

export default function LastSection() {
  return (
    <Flex flexDir={{base:'column-reverse',md:'row'}} rowGap={'2rem'} w={'80%'} m={'auto'} my={['4rem','4rem','8rem']} h={['38rem',"38rem",'28rem']} columnGap={'2rem'} >
        <Box flex={1} display={'flex'} flexDir={'column'} alignItems={['flex-start','center','flex-start']} justifyContent={'space-around'}>
            <Text textTransform={'uppercase'} fontSize={['2xl','3xl','4xl']} lineHeight={1}  mb={['1rem','1.2rem','2rem']} fontWeight={'bold'}>
            Bringing you the <br/><span style={{color:'#d87649',display:'inline'} }>best</span> audio gear
            </Text>
            <Text fontSize={['1rem','1.3rem','1.5rem']} w={['100%','100%','80%']} lineHeight={1} textAlign={['left','center','left']}>
            Located at the heart of New York City, Audiophile is the premier store for high end headphones, 
     earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration 
     rooms available for you to browse and experience a wide range of our products. Stop by our store 
     to meet some of the fantastic people who make Audiophile the best place to buy your portable 
     audio equipment.
            </Text>
        </Box>

        <Box bgImage={[mobile,tablet,desktop]} flex={1} borderRadius={'1rem'} bgPos={'center'} h="28rem"  bgRepeat={'no-repeat'} bgSize={'cover'}>

        </Box>
    </Flex>
  )
}
