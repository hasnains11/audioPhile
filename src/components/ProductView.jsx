import { Flex,Box} from "@chakra-ui/react";
import ProductCard from "./reusable/productCard";
import headphones from './../assets/shared/desktop/image-headphones.png'
import speakers from './../assets/shared/desktop/image-speakers.png'
import earphones from './../assets/shared/desktop/image-earphones.png'

const ProductView = () => {
    return ( 
        

        <Flex px={{base:'0',md:'1rem'}} py={['4rem','5rem','7rem']} width={'80%'} margin={'auto'} rowGap={['4rem','0']} columnGap={[0,'1rem','2rem']} flexDirection={['column','row']}>
               <ProductCard  img={headphones} title={'Headphones'}></ProductCard>         
               <ProductCard  img={speakers} title={'Speakers'}></ProductCard>         
               <ProductCard  img={earphones} title={'earphones'}></ProductCard>         
        </Flex>
    
     );
}
 
export default ProductView;