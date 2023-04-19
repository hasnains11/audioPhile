import { Text } from "@chakra-ui/react"
export default function NewProduct() {
    return (
    <Text
      marginBottom={0}
      bgClip={"text"}
      bgGradient={"linear(to-r,#aaa,#555)"}
      letterSpacing={4}
      textTransform={"uppercase"}
      align={["center", "center", "left", "left"]}
    >
      New Product
    </Text>)
  }