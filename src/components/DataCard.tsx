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
import { reverse } from 'dns'

export default function DataCard(props:{title:string, value:number, type:string , max:number, color:string, spinning?:boolean}){

    return(
    <>
        <Card size={'lg'} width={'lg'} shadow={'lg'}>    
            <CardBody>
                <Flex gap={10}>
                    <CircularProgress isIndeterminate={props.spinning} value={props.value>=0?props.value:0} capIsRound color={props.color} thickness='10px' size='80px' max={props.max} >
                        <CircularProgressLabel>{
                            props.spinning?
                            "":
                            props.value+props.type
                        }</CircularProgressLabel>
                    </CircularProgress>
                    <Center>
                        <Heading size={'lg'}>{props.title}</Heading>
                    </Center>
                    <Image paddingLeft={10}/> 
                </Flex>
            </CardBody>
        </Card>
    </>
    )
}