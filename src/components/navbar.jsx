import { Box, Text, Image, Flex, Button,useDisclosure} from "@chakra-ui/react";
import { ArrowDownIcon } from "@chakra-ui/icons";
import { CartIcon, Logo, Hamburger } from "../icons";
import {Link} from 'react-router-dom';
import { useState } from "react";
import MobileNav from "./MobileNav";

const menuItemStyles = {
  textTransform: "uppercase",
  ml: 4,
  color:'white',
  fontWeight:'bolder',
  _hover: { color: "orange.200", cursor: "pointer" },
};
const onScrollProperties = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  color: "white"
  
};
let navbarStyles = {
  //position: "fixed",
  w: "80%",
  // top: 0,
  //left: 0,
  //right: 0,
  m: "0 auto",
  //zIndex: 1,
  bg: "transparent",
  borderBottom: "1px solid white",
  py: 5,
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  px: [0, 0, 8, 8],
};

const MenuItems = () => (
  <Box
    ml="auto"
    display={{ base: "none", md: "flex" }}
    textTransform="uppercase"
    direction="row"
    fontSize={15}
    fontWeight="semibold"
    
  >
   <Link to="/"><Text {...menuItemStyles}>Home</Text></Link>
    <Link to='headphones'><Text {...menuItemStyles}>HeadPhones</Text></Link>
    <Link to='speakers'><Text {...menuItemStyles}>Speakers</Text></Link>
    <Link to='earphones'><Text {...menuItemStyles}>EarPhones</Text></Link>
  </Box>
);






const Navbar = () => {
  const [navstyles, setNavstyle] = useState(navbarStyles);
  const [mobileNav,setMobileNavTrue]=useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  

  window.addEventListener("scroll ", onScroll);

  function displayMobileNav(){

  }


  function onScroll(e) {
    if (window.scrollY > 65) {
      let newNavStyle = { ...navbarStyles, ...onScrollProperties };
      setNavstyle(newNavStyle);
    } else {
      setNavstyle(navbarStyles);
    }
  }
  return (
      <Box {...navstyles} transition="border-bottom 2s">
        <Box as="div">
          <Flex
          
            alignItems={"center"}
            _hover={{ color: "gray.300" }}
            display={["inline-block", "inline-block", "none", "none"]}
            me={[4, 4, 0, 0]}
          >
            <button onClick={()=>onOpen()}>{Hamburger()}</button>
          </Flex>
          <Logo style={{ height: "1rem", width: "3rem" }} />
        </Box>
        <MobileNav onClose={onClose} isOpen={isOpen} ></MobileNav>
        <MenuItems /> 
        
        <CartIcon style={{ height: 20, width: 24 }} />
      </Box>
  );
};

export default Navbar;
