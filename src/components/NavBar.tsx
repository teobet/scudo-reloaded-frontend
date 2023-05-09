import {
    Divider, 
    Image,
    useColorMode, 
    IconButton, 
    Heading,
    Flex,
    Center,
    Box 
} from '@chakra-ui/react'

import {
    MoonIcon, 
    SunIcon
} from '@chakra-ui/icons'

import Logo from '../icons/logo.png' 

export default function NavBar(){

    const {colorMode,toggleColorMode}=useColorMode()

    return(
    <>
        <Box padding={3} flex={'0 1 auto'}>
            <Flex justifyContent={'space-between'} align={'center'} gap={2}>
                <Flex gap={5}>
                    <Image src={Logo} height={'3rem'}></Image>
                    <Center>
                        <Heading size={'lg'}>ScuDo Reloaded</Heading>
                    </Center>
                </Flex>
                <IconButton aria-label='Change color mode' onClick={()=>toggleColorMode()} icon={colorMode==='dark'?<SunIcon/>:<MoonIcon />} />
            </Flex>    
        </Box>
        <Divider width={'100vw'}></Divider>
    </>  
    )
}