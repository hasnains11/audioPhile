import { Box,color,Image,Text} from "@chakra-ui/react";
import arrow from './../../assets/shared/desktop/icon-arrow-right.svg';

const ProductCard = ({img,title}) =>{
    return ( 
        <Box flex={1} display={'flex'} flexDir={'column'} alignItems={'center'}  backgroundColor={'#f1f1f1'} borderRadius={'4px'}>
            <Image maxW={'7rem'} src={img} position={'relative'} top={'-3rem'}></Image>
            <Text textTransform={'uppercase'} fontWeight={'bold'} position={'relative'} top={'-3rem'}>{title}</Text>  
            <Text textTransform={'uppercase'} 
            fontSize={'0.8rem'}
            position={'relative'} top={'-2.5rem'}
            fontWeight={'bold'} color={'#7c7878'} >shop <Image  px={1} src={arrow} display={'inline'}/></Text>
        </Box>
     );
}
 
export default ProductCard;