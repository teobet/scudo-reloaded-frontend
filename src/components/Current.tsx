import { 
} from '@chakra-ui/react'
import React, { useState } from 'react';
import DataCard from './DataCard';

export default function CurrentPanel(props:{boardname:string , callback:Function}){
    const [luminosity,setLuminosity] = useState(0)
    const [temperature,setTemperature] = useState(0)
    const [humidity,setHumidity] = useState(0)

  React.useEffect(()=>{
    fetch(`https://api.scudoreloaded.it/current/${props.boardname}`)
        .then(res=>res.json())
        .then(data=>{setTemperature(data.data.temperature);setLuminosity(data.data.light);setHumidity(data.data.humidity); props.callback(data.data.time)})
    let interval=
      setInterval(() => {
        fetch(`https://api.scudoreloaded.it/current/${props.boardname}`)
        .then(res=>res.json())
        .then(data=>{setTemperature(data.data.temperature);setLuminosity(data.data.light);setHumidity(data.data.humidity); props.callback(data.data.time)})
      }, 4000);

    return () => clearInterval(interval)

  },[props.boardname])
    return(
    <>
        <DataCard title={'Temperatura'} value={temperature} type={'°'} max={40} color={'red.400'}/>
        <DataCard title={'Luminosità'} value={luminosity} type={'%'} max={100} color={'yellow.400'}/>
        <DataCard title={'Umidità'} value={humidity} type={'%'} max={100} color={'blue.400'}/>
    </>
    )
}