import { 
    Card,
    CardHeader,
    Box,
    Flex,
    Wrap,
    Text,
    Skeleton,
    Spinner,
    Heading} from '@chakra-ui/react'
import React, { useState } from 'react';
import InfoCard from './InfoCard';

type rowData={time:number,data:{temperature:number,light:number,humidity:number}}


export default function History(props:{boardname:string}){
    const [retrieved,setRetrieved] = useState(false)
    const [rows,setRows] = useState<Array<rowData>>([])
  React.useEffect(()=>{
    if(props.boardname!==undefined){
      fetch(`https://api.scudoreloaded.it/history/${props.boardname}`)
          .then(res=>res.json())
          .then(data=>{
            setRows(data.history)
            setRetrieved(true)
          })
      let interval=
        setInterval(() => {
          fetch(`https://api.scudoreloaded.it/history/${props.boardname}`)
          .then(res=>res.json())
          .then(data=>{
            setRows(data.history)
          })
        }, 10000);

      return () => {
        clearInterval(interval)
      }
    }
    else return
  },[props.boardname])
    return(
        <Card p={10} shadow={'lg'} maxHeight={"75vh"} >
            <CardHeader>
          <Wrap direction={'row'} justify={'space-between'}>
              {
                props.boardname!=undefined?
                <Box>
                  <Heading>{props.boardname}</Heading>
                  <Text marginTop={2}>Histoy of readings for {props.boardname} board</Text>
                </Box> :
                <Box>
                  <Skeleton>
                    <Heading>AAAAAAAAAA</Heading>
                  </Skeleton>
                  <Skeleton>
                    <Text marginTop={2}>Histoy of readings for AAAAAAAAAA board</Text>
                  </Skeleton>
                </Box>
              }
            <Box>
              
            </Box>
          </Wrap>
        </CardHeader>
            {
                retrieved?
                  (rows.length>0?
                    <Wrap spacing={30} p={5} justify={'center'} flexGrow={1} maxHeight={"100%"} overflowY="auto">
                      {rows.map((row:rowData)=>
                      <InfoCard key={row.time} data={row} retrieved={retrieved}></InfoCard>)}
                    </Wrap>:
                    <Flex justifyContent={'space-around'}><Box p={5}><Heading color={'GrayText'}>Looks like this board has been sleeping for a while...</Heading></Box></Flex>):
                    <Flex justifyContent={'space-around'}><Box p={5}><Spinner size={"xl"}></Spinner></Box></Flex>
            }
        </Card>
    )
}

/*{name:"Sala",history:[{time:0,data:{light:0,temperature:0,humidity:0}}]}*/ 