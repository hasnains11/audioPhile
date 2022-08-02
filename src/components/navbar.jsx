import { Box, Text, Image, Flex } from "@chakra-ui/react";
import { ArrowDownIcon } from "@chakra-ui/icons";
import { CartIcon, Logo, Hamburger } from "../icons";
const menuItemStyles = {
  textTransform: "uppercase",
  ml: 4,
  color: "white",
  _hover: { color: "orange.200", cursor:'pointer' },
};
const onScrollProperties = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
};
const NavbarStyles = {
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
    <Text {...menuItemStyles}>Home</Text>
    <Text {...menuItemStyles}>HeadPhones</Text>
    <Text {...menuItemStyles}>Speakers</Text>
    <Text {...menuItemStyles}>EarPhones</Text>
  </Box>
);

const Navbar = () => {
  return (
    <Box {...NavbarStyles}>
      <Box as="div">
        <Flex
          alignItems={"center"}
          _hover={{ color: "gray.300" }}
          display={["inline-block", "inline-block", "none", "none"]}
          me={[4, 4, 0, 0]}
        >
          {Hamburger()}
        </Flex>
        <Logo style={{ height: "1rem", width: "3rem" }} />
      </Box>
      <MenuItems />
      <CartIcon style={{ height: 20, width: 24 }} />
    </Box>
  );
};

export default Navbar;
