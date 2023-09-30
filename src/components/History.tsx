import { Heading } from '@chakra-ui/react'
import React, { useState } from 'react';
import DataCard from './DataCard';
import InfoCard from './InfoCard';
import { Grid, GridItem } from '@chakra-ui/react'

export default function History(props:{boardname:string}){
    const [history,setHistory] = React.useState<Array<number>>([])
    //const [time,setTime] = React.useState<number>()
    React.useEffect(()=>{
    fetch(`https://api.scudoreloaded.it/history/${props.boardname}`)
        .then(res=>res.json())
        .then(data=>{setHistory(data.history); console.log(data)})
    },[])
    return(
        <InfoCard time={"1000"} value={10} type={"%"} max={50} color="yellow.400"></InfoCard>
        )
}

/*{name:"Sala",history:[{time:0,data:{light:0,temperature:0,humidity:0}}]}*/ 