import {
    Tabs,TabList,Tab,Divider, Box,Skeleton
} from '@chakra-ui/react'

export default function SideBar(props:{callback:Function,boards:Array<string>}){

    return(
    <>
        <Box p={5} minWidth={'15vw'} justifyContent={'center'}>
            <Skeleton height={50} isLoaded={props.boards.length>0}>
                <Tabs size={'lg'} justifyContent={'center'} variant={'soft-rounded'} orientation={'horizontal'} onChange={(index)=>props.callback(index)}>   
                    <TabList gap={5} alignItems={'center'}>
                            {props.boards.map((board:string) => <Tab>{board}</Tab>)}
                    </TabList>
                </Tabs>
            </Skeleton>
        </Box>
        <Divider></Divider>
    </>
    )
}