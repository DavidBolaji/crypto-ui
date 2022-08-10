import { Box, Button, Image, Stack, Text } from '@chakra-ui/react'
import NFT from '../../assets/img/nft.webp'
import React from 'react'

import Container from '../Container/Container'
import Airbnb from '../Airbnb/Airbnb'

const Hero = () => {
    return (
        <Container>
            <Box
                backgroundImage={'url("https://www.transparenttextures.com/patterns/padded-light.png")'}

                display={'flex'}
                // alignItems={'center'}
                flexDirection={{ base: 'column', sm: 'column', md: 'column', lg: 'row' }}
                mt={{ base: '35px' }}
                p={{ base: '20px', sm: '20px', md: '20px', lg: '100px' }}
                textAlign={{ base: 'center', sm: 'center', md: 'center', lg: 'left' }}
                pt={{ base: '20px', sm: '20px', md: '20px', lg: '60px' }}
                pb={{ base: '20px', sm: '20px', md: '20px', lg: '20px' }}

            >
                <Box
                    flex={'0.5'}
                    mb={{ base: '20px', sm: '20px', md: '20px', lg: '0px' }}
                    mt={{ base: 4, sm: 4, md: 4, lg: 6 }}

                >
                    <Box>
                        <Text
                            fontWeight={'extrabold'}
                            fontSize={{ base: '2.05rem', sm: '2.05rem', md: '2.05rem', lg: '2.19rem' }}
                            textTransform={'uppercase'}
                            mb={'10px'}
                            maxWidth={'500px'}
                            mx={{ base: 'auto', sm: 'auto', md: 'auto', lg: '0px' }}
                        >
                            Discover, collect, and sell extraordinary NFTs
                        </Text>
                    </Box>
                    <Box>
                        <Text
                            fontWeight={'semibold'}
                            fontSize={'1.25rem'}
                            maxWidth={'400px'}
                            mx={{ base: 'auto', sm: 'auto', md: 'auto', lg: '0px' }}
                            mb={'20px'}
                        >OpenSea is the world's first and largest NFT marketplace</Text>
                    </Box>
                    <Box>
                        <Stack direction={'row'} spacing={4}

                            justifyContent={{ base: 'center', sm: 'center', md: 'center', lg: 'flex-start' }}
                        >
                            <Button
                                bg={'blue'}
                                color={'white'}
                                border={'1px solid blue'}
                                size={'lg'}

                                pos={'relative'}

                                _hover={{
                                    backgroundColor: 'white',
                                    color: 'blue',
                                }}

                            >Explore</Button>
                            <Button
                                bg={'white'}
                                color={'blue'}
                                border={'1px solid blue'}
                                size={'lg'}

                                _hover={{
                                    backgroundColor: 'blue',
                                    color: 'white'
                                }}
                            >Continue</Button>
                        </Stack>
                    </Box>



                </Box>

                <Box
                    flex={'0.5'}

                >
                    <Box
                        display={'flex'}
                        justifyContent={'center'}
                        flex={'1'}
                        w={'100%'}
                        // mr={'auto'}
                        ml={'auto'}
                        h={'80%'}
                    >
                        <Image
                            src={"https://img.seadn.io/files/b98ecd10521480afc994fda71646de33.png?auto=format&fit=max&w=750"}
                            alt="NFT"
                            w={{ base: '100%', sm: '100%', md: '60%', lg: '100%' }}
                            p={{ base: '0px', sm: '0px', md: '0px', lg: '20px' }}
                            h={'100%'}
                            objectFit={'cover'} />
                        {/* <Airbnb /> */}
                    </Box>
                </Box>
            </Box>
        </Container >
    )
}

export default Hero