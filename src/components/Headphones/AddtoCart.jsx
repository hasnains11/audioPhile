import { Flex, Text, Image,Heading } from "@chakra-ui/react";
import Section from "../reusable/Section";
import NewProduct from "../reusable/NewProuct";
import mobile from './../../assets/category-headphones/mobile/image-xx99-mark-two.jpg';
import tab from './../../assets/category-headphones/tablet/image-xx99-mark-two.jpg';
import desktop from './../../assets/category-headphones/desktop/image-xx99-mark-two.jpg';
const AddtoCart = () => {
  return (
    <Section>
      <Flex>
        <Image bgImage={[mobile,tab,desktop]}></Image>
        <Flex px={'3rem'} direction={'column'} >
          <NewProduct />
          <Heading
            fontSize={["3xl", "4xl", "5xl"]}
            letterSpacing={1}
            textTransform={"uppercase"}
          >
            XX99 Mark II
          </Heading>
          <Heading
            marginBottom={"1rem"}
            letterSpacing={1}
            marginTop={"-0.2rem"}
            textTransform={"uppercase"}
            fontSize={["3xl", "4xl", "5xl"]}
          >
            HeadPhones
          </Heading>
          <Text>
            The new XX99 Mark II headphones is the pinnacle of pristine audio.
            It redefines your premium headphone experience by reproducing the
            balanced depth and precision of studio-quality sound.{" "}
          </Text>
        </Flex>
      </Flex>
      `
    </Section>
  );
};

export default AddtoCart;
