import {Text,useDisclosure,Drawer,DrawerBody,DrawerContent,DrawerHeader,DrawerOverlay,Radio,Button,RadioGroup,Stack, Flex} from '@chakra-ui/react';
import {CloseIcon} from "@chakra-ui/icons";
import React, { useState } from 'react'

const menuItemStyles = {
  textTransform: "uppercase",
  mb: 5,
  color:'white',
  fontSize:'md',
  fontWeight:'900',
  _hover: { color: "orange", cursor: "pointer" },
};

const NavItems = ({onClose}) => (
  <Flex
    flexDir={'column'} 
  >
    <Text {...menuItemStyles} >Home</Text>
    <Text {...menuItemStyles} >HeadPhones</Text>
    <Text {...menuItemStyles} >Speakers</Text>
    <Text {...menuItemStyles} >EarPhones</Text>
   
  </Flex>
);

function MobileNav({isOpen,onClose}) {
    //const { isOpen, onClose } = useDisclosure()
    const [placement, setPlacement] = useState('left')
  



    return (
      <>
       
        <Drawer w={'100vw'} placement={placement} onClose={onClose} isOpen={isOpen} colorScheme={'blackAlpha'}>
          <DrawerOverlay />
          <DrawerContent >
            <DrawerHeader    display={'flex'} justifyContent={'space-between'} borderBottomWidth='1px'><strong>Navigation Menu</strong><CloseIcon _hover={{color:'orange'}}onClick={onClose}/></DrawerHeader>
            <DrawerBody style={{background:'#000'}} >
              <NavItems onClose={onClose}/>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </>
    )
  }

export default MobileNav;

    
   