import { Card, Divider, CardHeader,useColorMode, CardBody, CardFooter,IconButton , Heading, CircularProgress, CircularProgressLabel,Flex,Spacer,Stack,Center,Box } from '@chakra-ui/react'


export default function DataCard(props:{title:string, value:number, type:string}){

    return(
        <>
        <Card size={'lg'} width={'sm'} boxShadow={'2 2 2 #000'}>    
            <CardBody>
                <Flex gap={5}>
                    <CircularProgress value={props.value} color='green.400' thickness='10px' size='80px'>
                        <CircularProgressLabel>{props.value}{props.type}</CircularProgressLabel>
                    </CircularProgress>
                    <Center>
                        <Heading size={'lg'}>{props.title}</Heading>
                    </Center>
                </Flex>
            </CardBody>
        </Card>
        </>
    )
}