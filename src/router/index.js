import React from "react"

const Home=React.lazy(()=>import("@/views/home"))
const Entire=React.lazy(()=>import("@/views/entire"))
const Detail=React.lazy(()=>import("@/views/detail"))
const routes=[
  {
    path:"/home",
    element:<Home/>
  },
  {
    path:"/entire",
    element:<Entire/>
  },
  {
    path:"/detail",
    element:<Detail/>
  }
]
export default routes