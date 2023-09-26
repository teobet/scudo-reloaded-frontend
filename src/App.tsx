import * as React from 'react'
import NavBar from './components/NavBar'
import SideBar from './components/SideBar'
import { 
    ChakraProvider,
    Flex, 
    Box, 
    Wrap, 
    Center,
    Badge
} from '@chakra-ui/react'
import DataCard from './components/DataCard'
import UpperBar from './components/UpperBar'

import umidi from './icons/water.png'
import temp from './icons/temp.png'
import light from './icons/light.png'
import CurrentPanel from './components/Current'

export default function App() {
    const [activeup, setActiveup]= React.useState<number>(0)
    const [time, setTime]= React.useState(0)
    const [activeside, setActiveside] = React.useState<number>(0)
    const [boards,setBoards] = React.useState<Array<string>>([])
    //const [activeboard,setactiveboard] = React.useState<string>([])
    React.useEffect(()=>{
        fetch('https://api.scudoreloaded.it/boards/')
        .then(res=>res.json())
        .then(data=>setBoards(data))
    },[])
    const [currents,setCurrents] = React.useState<any>({})
    React.useEffect(()=>{
        fetch(`https://api.scudoreloaded.it/current/${boards[activeup]}`)
        .then(res=>res.json())
        .then(data=>{setCurrents(data); console.log(data)})
    },[boards,activeup])

    return (
    <ChakraProvider>
        <Flex flexDirection={'column'} height={'100vh'}>
            <NavBar></NavBar>
            <UpperBar callback={setActiveup} boards={boards}></UpperBar>
            <Flex flex={'1 1 auto'}>
                <SideBar callback={setActiveside} ></SideBar>

                <Box p={'5'} paddingLeft={20} paddingTop={10}>
                        <Wrap spacing={30} p={5} justify={'center'}>
                        <CurrentPanel boardname={boards[activeup]} callback={setTime}></CurrentPanel>
                        </Wrap> 
                </Box>
            </Flex>
        </Flex>
        {Date.now()/1000-time<4? <Badge color="green" position={'absolute'} size={'lg'} bottom={'30px'} left={'90px'}>Updating</Badge>:<Badge position={'absolute'} size={'lg'} bottom={'30px'} left={'20px'}>Last update {new Date(time *1000).toLocaleString()}</Badge>}
    </ChakraProvider>
    )
}