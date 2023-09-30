import { 
    Card, 
    CardBody, 
    Heading, 
    CircularProgress, 
    CircularProgressLabel,
    Flex,
    Center,
    Image,
    Wrap
} from '@chakra-ui/react'

export default function InfoCard(props:{time:string, value:number, type:string, max:number, color:string}){

    return(
        <Card inlineSize={'lg'} shadow={'lg'}>    
            <CardBody>
                <Wrap gap={10}>
                    <CircularProgress value={props.value} capIsRound color={props.color} thickness='10px' size='80px' max={props.max} >
                        <CircularProgressLabel>{props.value}{props.type}</CircularProgressLabel>
                        
                    </CircularProgress>
                    <Center>
                        <Heading size={'lg'}>{props.time}</Heading>
                    </Center> 
                </Wrap>
            </CardBody>
        </Card>
    )
}