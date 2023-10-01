import * as React from 'react'
import NavBar from './components/NavBar'
import SideBar from './components/SideBar'
import {
    ChakraProvider,
    Flex,
    Grid
} from '@chakra-ui/react'
import UpperBar from './components/UpperBar'
import History from './components/History'
import CurrentPanel from './components/Current'

export default function App() {
    const [activeup, setActiveup]= React.useState<number>(0)
    const [activeside, setActiveside] = React.useState<number>(0)
    const [boards,setBoards] = React.useState<Array<string>>([])
    //const [activeboard,setactiveboard] = React.useState<string>([])
    React.useEffect(()=>{
        return () => {
            fetch('https://api.scudoreloaded.it/boards/')
                .then(res=>res.json())
                .then(data=>setBoards(data))
        }
    },[])
    return (
    <ChakraProvider>
        <Flex flexDirection={'column'} height={'100vh'}>
            <NavBar></NavBar>
            <UpperBar callback={setActiveup} boards={boards}></UpperBar>
            <Flex flex={'1 1 auto'}>
                <SideBar callback={setActiveside} ></SideBar>
                <Grid p={'5'} alignContent={"center"} flexGrow={1}>
                        {activeside===0?
                            <CurrentPanel boardname={boards[activeup]}/>:
                            <History boardname={boards[activeup]}></History>
                        }
                </Grid>
            </Flex>
        </Flex>
    </ChakraProvider>
    )




    /*[{history:[{data:{light,temperature,humidity},time:3555},{},{}] ,name:Sala]*/
}