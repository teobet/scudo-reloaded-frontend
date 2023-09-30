import * as React from 'react'
import NavBar from './components/NavBar'
import SideBar from './components/SideBar'
import {
    ChakraProvider,
    Flex,
    Box,
    Wrap,
    Center,
    Badge,
    Grid
} from '@chakra-ui/react'
import DataCard from './components/DataCard'
import UpperBar from './components/UpperBar'
import History from './components/History'

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
    const [history,setHistory] = React.useState<any>({})

    return (
    <ChakraProvider>
        <Flex flexDirection={'column'} height={'100vh'}>
            <NavBar></NavBar>
            <UpperBar callback={setActiveup} boards={boards}></UpperBar>
            <Flex flex={'1 1 auto'}>
                <SideBar callback={setActiveside} ></SideBar>
                <Grid p={'5'} alignContent={"center"}>
                        {activeside===0?<CurrentPanel boardname={boards[activeup]}></CurrentPanel>:<History boardname={boards[activeup]}></History>}
                </Grid>
            </Flex>
        </Flex>
    </ChakraProvider>
    )




    /*[{history:[{data:{light,temperature,humidity},time:3555},{},{}] ,name:Sala]*/
}