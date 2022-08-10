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
        img: "https://lh3.googleusercontent.com/7Tfz60ZCabDULn_OmRG8wg7tuAsgXfCwdR71V2wJ7SYr8dXtZe2pgnU_ZeApfziqa0LbBtYKxug70923bcx0mYttiW9dfzeuEtZByQ=w164",
        label: 'record label',
        artist: 'will smith',
        price: 290
    },
    {
        id: 2,
        img: "https://lh3.googleusercontent.com/sdqR84OwFYeIavnUSIUrQ0b_74lwB5tDFH1AfGE8-MUzRpf4IA_Zb567DZsHGrP0JvZ5SX38KoJPd78QentCyETurwnpp8FFVcfx=w164",
        label: 'record label',
        artist: 'will smith',
        price: 290
    }, {
        id: 3,
        img: "https://lh3.googleusercontent.com/Lp06h4dy2_UzjVgP5HrWaYlZE9uXZOqJNgXzQ3sfCbUvi3ONNAjRiaVoBWHtN5EQOYW-LsJdBohOUHK-tt3GEh1-B2PVlpbd5kjp=w164",
        label: 'record label',
        artist: 'will smith',
        price: 290
    }, {
        id: 4,
        img: "https://lh3.googleusercontent.com/AQOM1IHZT1_ZFhhAK8ehFJkNe96Db7pHSKRIwz_Zwn7txOCYvJ8ZgeqpbgmWlxMizGc_QN6BHjfpR0ZkYryvDbzr0Tr2KlLDG6Bc9g=w164",
        label: 'record label',
        artist: 'will smith',
        price: 290
    }, {
        id: 5,
        img: NFT,
        label: 'record label',
        artist: 'will smith',
        price: 290
    }
]

const Top = () => {
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
            bg={'#fff'}

            p={{ base: '20px', sm: '20px', md: '20px', lg: '100px' }}
        >
            <Box display={'flex'} alignItems={'center'} w={'97%'}>
                <Text
                    flexDirection={'row'}
                    fontWeight={'extrabold'}
                    fontSize={'4xl'}
                    mb={'20px'}
                >Recent Drops</Text>
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

export default Top