import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { Card, Divider, CardHeader,useColorMode, CardBody, CardFooter,IconButton , Heading, CircularProgress, CircularProgressLabel,Flex,Spacer,Stack,Center,Box } from '@chakra-ui/react'

export default function SideBar(props:{callback:Function}){
    return(
        <>
            <Box p={5} minWidth={'15vw'}>
                <Tabs justifyContent={'end'} defaultIndex={0} variant={'soft-rounded'} orientation={'vertical'} onChange={(index)=>props.callback(index)}> 
                    <TabList gap={5} alignItems={'end'}>
                        <Tab>Current</Tab>
                        <Tab>History</Tab>
                    </TabList>
                </Tabs>
            </Box>
            <Divider orientation={'vertical'}></Divider>
        </>
    )
}