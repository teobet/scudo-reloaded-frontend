import {
    Tabs,TabList,Tab,Divider, Box 
} from '@chakra-ui/react'

export default function SideBar(props:{callback:Function}){

    return(
    <>
        <Box p={5} minWidth={'15vw'} justifyContent={'center'}>
            <Tabs size={'lg'} justifyContent={'center'}  defaultIndex={0} variant={'soft-rounded'} orientation={'horizontal'} onChange={(index)=>props.callback(index)}> 
                <TabList gap={5} alignItems={'center'}>
                    <Tab>Salone</Tab>
                    <Tab>Camera da Letto</Tab>
                    <Tab>Cameretta</Tab>
                    <Tab>Cucina</Tab>
                    <Tab>Bagno</Tab>
                </TabList>
            </Tabs>
        </Box>
    </>
    )
}