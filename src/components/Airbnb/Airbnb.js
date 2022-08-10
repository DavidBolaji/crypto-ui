import { Badge, Box, Button, Image } from '@chakra-ui/react'
import React from 'react'

const Airbnb = ({ style, id, img, artist, price, label, ref, showBtn }) => {
    return (
        <Box style={style} pb={'10px'} ref={ref} key={id} minW='300px' borderWidth='1px' borderRadius='lg' mx={'10px'} my={'10px'} overflow='hidden'
            _hover={{
                boxShadow: '5px 5px 5px 2px rgba(0,0,0,0.2)',
                cursor: 'pointer',
                transition: '0.2s ease-in'
            }}
        >
            <Image src={img} alt={'nft'} width={'100%'} height={'80%'} objectFit={'cover'} />

            <Box p='2'>
                <Box display='flex' alignItems='baseline'>
                    <Badge borderRadius='full' px='2' colorScheme='teal'>
                        {label}
                    </Badge>
                    <Box
                        color='gray.500'
                        fontWeight='semibold'
                        letterSpacing='wide'
                        fontSize='xs'
                        textTransform='uppercase'
                        ml='auto'
                    >
                        {artist}
                    </Box>
                </Box>


                {!showBtn && <Box
                    fontWeight={'black'}
                    mt={'10px'}
                    width={'100%'}
                    display={'flex'}
                    justifyContent={'flex-end'}


                >

                    <Box as='span' color='gray.600' fontSize='sm'>
                        $ {price.toFixed(2)}
                    </Box>

                </Box>}

                {showBtn && <Button w={'100%'} size={'sm'} colorScheme='blue' fontSize={'md'} mt={'20px'} mb={'20px'}>
                    Mint yours for 0.03 ETH
                </Button>}


            </Box>
        </Box>
    )
}

export default Airbnb