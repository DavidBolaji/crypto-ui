import { Box, Button, Stack, Text } from '@chakra-ui/react'
import React, { useRef } from 'react'
import Airbnb from '../Airbnb/Airbnb'
import { useToast, ToastId } from "@chakra-ui/toast";
import NFT from '../../assets/img/nft.webp'
import { IoMdArrowDropleft } from "react-icons/io";
import { AiOutlineCaretRight, AiFillCaretLeft } from "react-icons/ai";


const datas = [
    {
        id: 1,
        img: NFT,
        label: 'record label',
        artist: 'will smith',
        price: 290
    },
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

const Activities = () => {
    const divRef = useRef(null);

    const handleScroll = (dir) => {
        if (dir === "left") {
            if (divRef.current.scrollLeft > 0) {
                divRef.current.scrollLeft -= 200;
            }
        } else {
            // const contWidth = (divRef.current.children.length - 1) * divRef.current.children[1].clientWidth;
            divRef.current.scrollLeft += 200;
        }
    }

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
                >Top Music</Text>
                <Stack direction={'row'} spacing={2} ml={'auto'}>
                    <Button size={'sm'} onClick={() => handleScroll('left')}>
                        <AiFillCaretLeft />
                    </Button>
                    <Button size={'sm'} onClick={() => handleScroll('right')}>
                        <AiOutlineCaretRight />
                    </Button>
                </Stack>
            </Box>
            <Box
                display={'flex'}
                overflowX={'scroll'}
                ref={divRef}
                transition={'all 0.2s ease'}
                scrollBehavior="smooth"

                sx={{
                    '&::-webkit-scrollbar': {
                        height: '3px'
                    },
                    '&::-webkit-scrollbar-thumb': {
                        height: '3px'
                    },
                }}
            >
                <hr style={{
                    marginBottom: '20px'
                }} />

                {datas.map(data => {
                    return <Airbnb

                        key={data.id}
                        img={data.img}
                        price={data.price}
                        artist={data.artist}
                        label={data.label}
                    />
                })}

            </Box>


        </Box>

    )
}

export default Activities