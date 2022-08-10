import { Box } from '@chakra-ui/react'
import React from 'react'
import { MdOutlineAccountBalanceWallet, MdCreateNewFolder, MdPlaylistAddCheck } from 'react-icons/md'
import { Si1001Tracklists } from 'react-icons/si'

const datas = [
    {
        id: 1,
        image: <MdOutlineAccountBalanceWallet fontSize={'40px'} style={{ color: 'blue' }} />,
        heading: 'Set up your wallet',
        para: 'Once you’ve set up your wallet of choice, connect it to SoundView by clicking the wallet icon in the top right corner. Learn about the wallets we support.'
    },
    {
        id: 2,
        image: <MdCreateNewFolder fontSize={'40px'} style={{ color: 'blue' }} />,
        heading: 'Create your collection',
        para: 'Click My Collections and set up your collection. Add social links, a description, profile & banner images, and set a secondary sales fee.'
    },
    {
        id: 3,
        image: <Si1001Tracklists fontSize={'40px'} style={{ color: 'blue' }} />,
        heading: 'Add your NFTs',
        para: 'Upload your work (image, video, audio, or 3D art), add a title and description, and customize your NFTs with properties, stats, and unlockable content.'
    },
    {
        id: 4,
        image: <MdPlaylistAddCheck fontSize={'40px'} style={{ color: 'blue' }} />,
        heading: 'List them for sale',
        para: 'Choose between auctions, fixed-price listings, and declining-price listings. You choose how you want to sell your NFTs, and we help you sell them!'
    }
]

const Create = () => {
    return (
        <Box
            p={{ base: '20px', sm: '20px', md: '20px', lg: '100px' }}
        >
            <Box
                w={'100%'}
                textAlign={'center'}
                fontWeight={'extrabold'}
                fontSize={'3xl'}
                mb={'50px'}
            >
                Create and Sell your NFTs
            </Box>
            <Box
                display={'flex'}
                flexDirection={{
                    base: 'column',
                    sm: 'column',
                    md: 'column',
                    lg: 'row'
                }}
                textAlign={{
                    base: 'left',
                    sm: 'left',
                    md: 'center',
                    lg: 'center'
                }}
            >


                {datas.map(data => {
                    return (
                        <Box key={data.id}
                            mx={'auto'}
                            mb={'40px'}
                        >
                            <Box
                                w={'100%'}
                                display={'flex'}
                                justifyContent={{
                                    base: 'flex-start',
                                    sm: 'flex-start',
                                    md: 'center',
                                    lg: 'center'
                                }}
                                mb={'10px'}
                            >{data.image}</Box>
                            <Box
                                fontWeight={'black'}
                                fontSize={'lg'}
                                mb={'20px'}
                            >{data.heading}</Box>
                            <Box
                                lineHeight={'35px'}
                                maxW={{
                                    base: '100%',
                                    sm: '100%',
                                    md: '60%',
                                    lg: '250px'
                                }}
                                mx={{ md: 'auto' }}
                            >{data.para}</Box>
                        </Box>
                    )
                })}

            </Box>

        </Box>
    )
}

export default Create