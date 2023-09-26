import {
    Tabs,TabList,Tab,Divider, Box 
} from '@chakra-ui/react'

export default function SideBar(props:{callback:Function,boards:Array<string>}){

    return(
    <>
        <Box p={5} minWidth={'15vw'} justifyContent={'center'}>
            <Tabs size={'lg'} justifyContent={'center'}  defaultIndex={0} variant={'soft-rounded'} orientation={'horizontal'} onChange={(index)=>props.callback(index)}> 
                <TabList defaultValue={0} gap={5} alignItems={'center'}>
                    {props.boards.map((board:string) => <Tab>{board}</Tab>)}
                </TabList>
            </Tabs>
        </Box>
        <Divider></Divider>
    </>
    )
}