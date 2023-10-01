import { 
    Card, 
    CardBody, 
    Heading, 
    CircularProgress, 
    CircularProgressLabel,
    Flex,
    Center,
    Image,
    Spinner
} from '@chakra-ui/react'

export default function DataCard(props:{dim?:string,title:string, value:number, type:string , max:number, color:string, spinning?:boolean}){

    return(
    <>
        <Card size={'lg'} width={props.dim??'lg'} shadow={'lg'}>    
            <CardBody>
                <Flex gap={10}>
                    <CircularProgress isIndeterminate={props.spinning} value={props.value>=0?props.value:0} capIsRound color={props.color} thickness='10px' size='80px' max={props.max} >
                        <CircularProgressLabel>{
                            props.spinning?
                            "":
                            (Math.round(props.value*10)/10)+props.type
                        }</CircularProgressLabel>
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