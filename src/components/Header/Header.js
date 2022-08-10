import { Box, Button, Collapse, Image, Input, InputGroup, InputLeftElement, Slide, Stack, useDisclosure } from '@chakra-ui/react'
import Logo from '../../assets/img/opensea.svg'
import React, { useEffect, useState } from 'react'
import { Search2Icon } from '@chakra-ui/icons'
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import { HiMenuAlt3 } from "react-icons/hi";
import Dropdown from '../Dropdown/Dropdown';

const DesktopView = () => {
    return (<Box
        display={'flex'}
        bg={'#fff'}
        border={'1px solid #fafafa'}
        boxShadow={'10px 10px 10px 10px rgba(0,0,0,0.2)'}
        alignItems='center'
        py={'10px'}
        px={{
            base: '20px',
            sm: '20px',
            md: '40px'
        }}
        pos="fixed"
        w={'100%'}
        zIndex={"10"}

    >
        <Box
            flex={'0.12'}
        >
            <Image src={Logo} alt='Logo' w='40px' />

        </Box>
        <Box
            flex={'0.63'}
        >
            <InputGroup>
                <InputLeftElement
                    pointerEvents='none'
                    children={<Search2Icon color='gray.300' />}
                />
                <Input type='tel' placeholder='Search Artist and Releases' />
            </InputGroup>
        </Box>
        <Box
            flex={'0.25'}
        // bg={'red'}
        >
            <Stack direction={'row'} spacing={'6'} pl={4}>


                <Button
                    border={'1px solid blue'}
                    bg={'white'}
                >
                    Create
                </Button>

                <Button
                    leftIcon={<MdOutlineAccountBalanceWallet />}
                    bg={'black'}
                    color={'white'}
                    _hover={{
                        backgroundColor: 'rgba(0,0,0,0.8)'
                    }}
                >
                    Connect Wallet
                </Button>

            </Stack>

        </Box>
    </Box>)
}

const MobileView = () => {
    const { isOpen, onToggle } = useDisclosure()
    return (<><Box
        display={'flex'}
        bg={'#fff'}
        border={'1px solid #fafafa'}
        boxShadow={'10px 10px 10px 10px rgba(0,0,0,0.2)'}
        alignItems='center'
        py={'10px'}
        px={{
            base: '20px',
            sm: '20px',
            md: '40px'
        }}
        pos="fixed"
        w={'100%'}
        zIndex={"10"}

    >
        <Box flex={'0.85'} >
            <Image src={Logo} alt='Logo' w='40px' />
        </Box>

        <Box flex={'0.15'} >
            <Stack direction={'row'} spacing={'1'} pl={4}>
                <Button
                    leftIcon={<Search2Icon />}
                    bg={'white'} >
                </Button>

                <Button
                    onClick={onToggle}
                >
                    <HiMenuAlt3 fontSize={28} />
                </Button>
            </Stack>
        </Box>

    </Box>
        <Slide in={isOpen} direction='left' style={{ zIndex: 5 }}> <Dropdown /> </Slide>
    </>)
}

const Header = () => {
    const [width, setWidth] = useState(window.screen.width)

    useEffect(() => {
        const resize = () => setWidth(window.screen.width);

        window.addEventListener('resize', resize);

        return () => window.removeEventListener('resize', resize)
    }, [])

    return (width > 768 ? <DesktopView /> : <MobileView />

    )
}

export default Header