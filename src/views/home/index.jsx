import React, { memo,useEffect,useState} from 'react'
import cbRequest from '@/services'
const Home = memo(() => {
  const [highstore,setHighStore]=useState({})
  useEffect(()=>{
    cbRequest.get({url:'/home/highscore'}).then(res=>{
      setHighStore(res)
      console.log(res);
    })
  },[])
  return (
    <div>
     <h2>{highstore.title}</h2>
     <h4>{highstore.subtitle}</h4>
     <ul>
      {

        highstore.list?.map(item=>{
          return(
            <li key={item.id}>{item.name}</li>
          )
        })
      }
     </ul>
    </div>
  )
})

export default Home