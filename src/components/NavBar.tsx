import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { Card, Divider, Image ,useColorMode, CardBody, CardFooter,IconButton , Heading, CircularProgress, CircularProgressLabel,Flex,Spacer,Stack,Center,Box } from '@chakra-ui/react'
import {MoonIcon, SunIcon} from '@chakra-ui/icons'
import Logo from '../icons/logo.png' 

export default function NavBar(props:{value:number,callback:Function,}){
    const {colorMode, toggleColorMode}=useColorMode();
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
                <IconButton aria-label='Change color mode' onClick={()=>toggleColorMode()} icon={colorMode=='dark'?<SunIcon/>:<MoonIcon />} />
            </Flex>    
        </Box>
        <Divider width={'100vw'}></Divider>
    </>  
    )
}