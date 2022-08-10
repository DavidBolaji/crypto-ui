import { Box, Button, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import Airbnb from '../Airbnb/Airbnb'

const datas = [

    {
        id: 2,
        img: "https://img.seadn.io/files/656c170d9e4c2df30089b4997936a7a4.png?auto=format&fit=max&w=384",
        label: 'record label',
        artist: 'will smith',
        price: 290
    }, {
        id: 3,
        img: "https://img.seadn.io/files/debd18bb41e34b0d6fefce2b43042762.png?auto=format&fit=max&w=750",
        label: 'record label',
        artist: 'will smith',
        price: 290
    }, {
        id: 4,
        img: "https://img.seadn.io/files/5cd69c410161cd78166d4c2957dbfb91.png?auto=format&fit=max&w=750",
        label: 'record label',
        artist: 'will smith',
        price: 290
    }, {
        id: 5,
        img: "https://img.seadn.io/files/7af6bd6b3af2b1dbc0444a1f00adfce3.png?auto=format&fit=max&w=750",
        label: 'record label',
        artist: 'will smith',
        price: 290
    }
]

const filterBtn = [
    {
        id: 1,
        title: 'All Genres',
        onClick: () => { }
    },
    {
        id: 2,
        title: 'Techno',
        onClick: () => { }
    },
    {
        id: 3,
        title: 'Dub Step',
        onClick: () => { }
    },
    {
        id: 4,
        title: 'R&B & Soul',
        onClick: () => { }
    },
    {
        id: 5,
        title: 'All Genres',
        onClick: () => { }
    },
    {
        id: 6,
        title: 'Hip Hop & Rap',
        onClick: () => { }
    },
    {
        id: 7,
        title: 'Latin',
        onClick: () => { }
    },
    {
        id: 8,
        title: 'Dance & Edm',
        onClick: () => { }
    },
    {
        id: 9,
        title: 'Deep House',
        onClick: () => { }
    },
    {
        id: 10,
        title: 'indie',
        onClick: () => { }
    }
]


const statusBtn = [
    {
        id: 1,
        title: 'All',
        onClick: () => { }
    },
    {
        id: 2,
        title: 'Available to Mint',
        onClick: () => { }
    },
    {
        id: 3,
        title: 'Sold Out',
        onClick: () => { }
    },

]

const Discover = () => {
    return (
        <Box
            bg={'#fafafa'}

            p={{ base: '20px', sm: '20px', md: '20px', lg: '100px' }}
        >
            <Box display={'flex'} alignItems={'center'} w={'97%'}>
                <Text
                    flexDirection={'row'}
                    fontWeight={'extrabold'}
                    fontSize={'4xl'}
                    mb={'20px'}
                >Discover on Sound</Text>

            </Box>
            <Box>
                <Box
                    display={'flex'}
                    alignItems={'center'}
                    mb={'10px'}
                >
                    <Box
                        flex={'0.05'}
                        mr={'10px'}
                    >Genre</Box>
                    <Box
                        flex={'0.95'}
                        display={'flex'}
                        overflowX={'scroll'}
                        sx={{
                            '&::-webkit-scrollbar': {
                                height: '3px'
                            },
                            '&::-webkit-scrollbar-thumb': {
                                height: '3px'
                            },
                        }}
                        scrollBehavior="smooth"

                    >
                        <Stack direction={'row'} spacing={'4'}>
                            {filterBtn.map(filter => {
                                return <Button key={filter.id} size={'sm'}>{filter.title}</Button>
                            })}
                        </Stack>
                    </Box>
                </Box>

                <Box
                    display={'flex'}
                    alignItems={'center'}
                    mb={'10px'}
                >
                    <Box
                        flex={'0.05'}
                        mr={'10px'}
                    >Status</Box>
                    <Box
                        flex={'0.95'}
                        display={'flex'}
                        overflowX={'scroll'}
                        sx={{
                            '&::-webkit-scrollbar': {
                                height: '3px'
                            },
                            '&::-webkit-scrollbar-thumb': {
                                height: '3px'
                            },
                        }}
                        scrollBehavior="smooth"

                    >
                        <Stack direction={'row'} spacing={'4'}>
                            {statusBtn.map(filter => {
                                return <Button key={filter.id} size={'sm'}>{filter.title}</Button>
                            })}
                        </Stack>
                    </Box>
                </Box>




            </Box>
            <Box

            >
                <hr style={{
                    marginBottom: '20px'
                }} />

                <Box
                    m={'auto'}
                    display={'flex'}
                    flexWrap={'wrap'}
                    width={'90%'}
                >
                    {datas.map(data => {
                        return <Airbnb
                            style={{
                                flex: '0 0 190px',
                                // marginLeft: 'auto',
                                // marginRight: 'auto',
                            }}
                            key={data.id}
                            img={data.img}
                            price={data.price}
                            artist={data.artist}
                            label={data.label}
                        />
                    })}

                </Box>

            </Box>


        </Box>
    )
}

export default Discover