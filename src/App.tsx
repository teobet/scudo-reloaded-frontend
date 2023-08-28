import * as React from 'react'
import NavBar from './components/NavBar'
import SideBar from './components/SideBar'
import { 
    ChakraProvider,
    Flex, 
    Box, 
    Wrap, 
    Center 
} from '@chakra-ui/react'
import DataCard from './components/DataCard'
import UpperBar from './components/UpperBar'

import umidi from './icons/water.png'
import temp from './icons/temp.png'
import light from './icons/light.png'

export default function App() {
    const [activeup, setActiveup]= React.useState<number>(0)
    const [activeside, setActiveside] = React.useState<number>(0)

    /*function sidecard(active:number) {

        switch (active) {
            case 0:
                return(
                    <>
                    <DataCard title={'Caio'} value={40} type={'°'} />
                    <DataCard title={'Caio'} value={80} type={'%'} />
                    <DataCard title={'Caio'} value={80} type={'%'} />
                    </>
                )
        
            case 1:
                return(
                    <DataCard title={'Caio'} value={40} type={'%'} />
                )
        }
    }*/

    /*function stat(active:number) {

        switch (active) {
            case 0:
                return(
                    <>

                    <Flex flex={'1 1 auto'}>
                <SideBar callback={setActiveside} ></SideBar>

                {activeside}
                <Box p={'5'}>
                    <Center>
                        <Wrap  p={5} justify={'center'}>
                            {sidecard(activeside)}
                        </Wrap>
                    </Center>
                </Box>
            </Flex>
                    </>
                )
        
            case 1:
                return(
                    <>
                    <Flex flex={'1 1 auto'}>
                <SideBar callback={setActiveside} ></SideBar>

                {activeside}
                <Box p={'5'}>
                    <Center>
                        <Wrap  p={5} justify={'center'}>
                            {sidecard(activeside)}
                        </Wrap>
                    </Center>
                </Box>
            </Flex>
                    </>
                    
                )
        }
    }*/

    return (
    <ChakraProvider>
        <Flex flexDirection={'column'} height={'100vh'}>
            <NavBar></NavBar>
            <UpperBar callback={setActiveup}></UpperBar>
            {activeup}
            {activeside}
            {/* {activeup} */}
            {/* {stat(activeup)} */}
            <Flex flex={'1 1 auto'}>
                <SideBar callback={setActiveside} ></SideBar>

                {/* {activeside} */}
                <Box p={'5'} paddingLeft={20} paddingTop={10}>
                    <Center>
                        <Wrap spacing={30} p={5} justify={'center'}>
                        <DataCard title={'Temperatura'} value={20} type={'°'} max={40} color={'red.400'} img={temp}/>
                        <DataCard title={'Luminosità'} value={80} type={'%'} max={100} color={'yellow.400'} img={light}/>
                        </Wrap>
                    </Center>
                    <Center p={'10'}>
                        <DataCard title={'Umidità'} value={40} type={'%'} max={100} color={'blue.400'} img={umidi}/>
                    </Center>
                    
                </Box>
            </Flex>
        </Flex>
    </ChakraProvider>
    )
}