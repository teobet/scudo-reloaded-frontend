import { 
    Card, 
    CardHeader, 
    Heading,
    Wrap
} from '@chakra-ui/react'
import React, { useState } from 'react'
import DataCard from './DataCard'

export default function InfoCard(props:{retrieved:boolean,data:{time:number,data:{temperature:number,light:number,humidity:number}}}){
    const [date,setDate] = useState("")
    React.useEffect(
        ()=>{
            setDate(new Date(props.data.time).toLocaleTimeString())
        },[props.data.time])
    return(
        <Card p={10} width={"full"} size={'lg'} shadow={'lg'}>  
                <CardHeader>
                    <Heading>{date.slice(0,5)}</Heading>
                </CardHeader>
                <Wrap spacing={30} p={5} justify={'center'}>
                    <DataCard title={'Temperatura'} value={props.data.data.temperature} type={'°'} max={50} color={'red.400'} spinning={!props.retrieved}/>
                    <DataCard title={'Luminosità'} value={props.data.data.light} type={'%'} max={100} color={'yellow.400'} spinning={!props.retrieved}/>
                    <DataCard title={'Umidità'} value={props.data.data.humidity} type={'%'} max={100} color={'blue.400'} spinning={!props.retrieved}/>
                </Wrap>
        </Card>
    )
}