import { 
    Card, 
    CardBody, 
    Heading, 
    CircularProgress, 
    CircularProgressLabel,
    Flex,
    Center,
    Image
} from '@chakra-ui/react'

export default function DataCard(props:{title:string, value:number, type:string, max:number, color:string, img:string}){

    return(
    <>
        <Card size={'lg'} width={'lg'} shadow={'lg'}>    
            <CardBody>
                <Flex gap={10}>
                    <CircularProgress value={props.value} color={props.color} thickness='10px' size='80px' max={props.max} >
                        <CircularProgressLabel>{props.value}{props.type}</CircularProgressLabel>
                    </CircularProgress>
                    <Center>
                        <Heading size={'lg'}>{props.title}</Heading>
                    </Center>
                    <Image paddingLeft={10} src={props.img}/> 
                </Flex>
            </CardBody>
        </Card>
    </>
    )
}