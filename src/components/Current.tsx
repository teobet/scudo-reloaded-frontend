import { 
  Card,
  CardHeader,
  Heading,
  Skeleton,
  Flex,
  Text,
  Badge,
  Wrap, 
  Box} from '@chakra-ui/react'
import React, { useState } from 'react';
import DataCard from './DataCard';

export default function CurrentPanel(props:{boardname:string}){
    const [retrieved,setRetrieved] = useState(false)
    const [luminosity,setLuminosity] = useState(0)
    const [temperature,setTemperature] = useState(0)
    const [humidity,setHumidity] = useState(0)
    const [time,setTime] = useState(0)
    const [now,setNow] = useState(0)

  React.useEffect(()=>{
    if(!props.boardname)return
    fetch(`https://api.scudoreloaded.it/current/${props.boardname}`)
        .then(res=>res.json())
        .then(data=>{
          setTemperature(data.data.temperature)
          setLuminosity(data.data.light)
          setHumidity(data.data.humidity)
          setTime(data.data.time)
          setNow(Date.now()/1000)
          setRetrieved(true)
        })
    let interval=
      setInterval(() => {
        fetch(`https://api.scudoreloaded.it/current/${props.boardname}`)
        .then(res=>res.json())
        .then(data=>{
          setTemperature(data.data.temperature)
          setLuminosity(data.data.light)
          setHumidity(data.data.humidity)
          setTime(data.data.time)
          setNow(Date.now()/1000)
        })
      }, 4000);

    return () => clearInterval(interval)

  },[props.boardname,time])
    return(
      <Card p={10} height={"fit-content"} shadow={'lg'}>
        <CardHeader>
          <Wrap direction={'row'} justify={'space-between'}>
              {
                props.boardname!=undefined?
                <Box>
                  <Heading>{props.boardname}</Heading>
                  <Text marginTop={2}>Current readings for {props.boardname} board</Text>
                </Box> :
                <Box>
                  <Skeleton>
                    <Heading>AAAAAAAAAA</Heading>
                  </Skeleton>
                  <Skeleton>
                    <Text marginTop={2}>Current readings for AAAAAAAAAA board</Text>
                  </Skeleton>
                </Box>
              }
            <Box>
              {retrieved?
                  (now-time)<4?
                  <Badge p={1} bg="green.400" size={'xl'}>Updating</Badge>:
                  (now-time)<60?
                  <Badge p={1} size={'300vh'}>Last update {Math.floor(now-time)} seconds ago</Badge>:
                  <Badge p={1} size={'300vh'}>Last update {new Date(time *1000).toLocaleString()}</Badge>:
                  <Skeleton><Badge>jjjjhhhhhhhhjjjjjjjjjj</Badge></Skeleton>
            }
            {/*retrieved?
              now-time:
              <Skeleton><Badge>jjjjhhhhhhhhjjjjjjjjjj</Badge></Skeleton>
          */}
              
            </Box>
          </Wrap>
        </CardHeader>
      <Wrap spacing={30} p={5} justify={'center'}>
        <DataCard title={'Temperatura'} value={temperature} type={'°'} max={50} color={'red.400'} spinning={!retrieved}/>
        <DataCard title={'Luminosità'} value={luminosity} type={'%'} max={100} color={'yellow.400'} spinning={!retrieved}/>
        <DataCard title={'Umidità'} value={humidity} type={'%'} max={100} color={'blue.400'} spinning={!retrieved}/>
      </Wrap>
    </Card>
    )
}