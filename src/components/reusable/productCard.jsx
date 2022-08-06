import { Box,color,Image,Text} from "@chakra-ui/react";
import arrow from './../../assets/shared/desktop/icon-arrow-right.svg';

const ProductCard = ({img,title}) =>{
    return ( 
        <Box flex={1} display={'flex'} flexDir={'column'} alignItems={'center'}  backgroundColor={'#f1f1f1'} borderRadius={'4px'}>
            <Image maxW={['7rem','7rem','11rem']} src={img} position={'relative'} top={['-3rem','-3rem','-4rem']}></Image>
            <Text textTransform={'uppercase'} fontWeight={'bold'} position={'relative'} top={'-3rem'} fontSize={{md:'1.2rem'}} letterSpacing={'1.2px'}>{title}</Text>  
            <Text textTransform={'uppercase'} 
            fontSize={{md:'1rem'}}
            position={'relative'} top={'-2.5rem'}
            fontWeight={'bold'} color={'#7c7878'} mt={'1rem'} >shop <Image  px={1} src={arrow} display={'inline'}/></Text>
        </Box>
     );
}
 
export default ProductCard;