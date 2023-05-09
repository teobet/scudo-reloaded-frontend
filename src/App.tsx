import * as React from 'react'
import NavBar from './components/NavBar'
import SideBar from './components/SideBar'
import { ChakraProvider, Flex, Box, Wrap, Center } from '@chakra-ui/react'
import DataCard from './components/DataCard'

export default function App() {
    const [active, setActive] = React.useState<number>(0)

    return (
        <ChakraProvider>
            <Flex flexDirection={'column'} height={'100vh'}>
                <NavBar value={active} callback={setActive}></NavBar>
                <Flex flex={'1 1 auto'}>
                    <SideBar callback={setActive} ></SideBar>

                    {active}
                    <Box p={'5'}>
                        <Center>
                            <Wrap gap={15} p={5}>
                                <DataCard title={'Caio'} value={40} type={'%'} />
                                <DataCard title={'Caio'} value={80} type={'%'} />
                                <DataCard title={'Caio'} value={80} type={'%'} />
                                <DataCard title={'Caio'} value={80} type={'%'} />
                                <DataCard title={'Caio'} value={80} type={'%'} />
                                <DataCard title={'Caio'} value={40} type={'%'} />
                                <DataCard title={'Caio'} value={80} type={'%'} />
                                <DataCard title={'Caio'} value={80} type={'%'} />
                                <DataCard title={'Caio'} value={80} type={'%'} />
                                <DataCard title={'Caio'} value={80} type={'%'} />
                                <DataCard title={'Caio'} value={40} type={'%'} />
                                <DataCard title={'Caio'} value={80} type={'%'} />
                                <DataCard title={'Caio'} value={80} type={'%'} />
                                <DataCard title={'Caio'} value={80} type={'%'} />
                                <DataCard title={'Caio'} value={80} type={'%'} />
                                <DataCard title={'Caio'} value={40} type={'%'} />
                                <DataCard title={'Caio'} value={80} type={'%'} />
                                <DataCard title={'Caio'} value={80} type={'%'} />
                                <DataCard title={'Caio'} value={80} type={'%'} />
                                <DataCard title={'Caio'} value={80} type={'%'} />
                                <DataCard title={'Caio'} value={40} type={'%'} />
                                <DataCard title={'Caio'} value={80} type={'%'} />
                                <DataCard title={'Caio'} value={80} type={'%'} />
                                <DataCard title={'Caio'} value={80} type={'%'} />
                                <DataCard title={'Caio'} value={80} type={'%'} />

                            </Wrap>
                        </Center>
                    </Box>
                </Flex>
            </Flex>
        </ChakraProvider>
    )
}