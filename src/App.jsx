import React, { memo } from 'react'
import {useRoutes} from 'react-router-dom'
import routes from '@/router'
import AppHeader from 'components/app-header'
import AppFooter from 'components/app-footer'
const App = memo(() => {
  return (
    <div className="app">
      <div className="header">
         <AppHeader></AppHeader>
      </div>
      <div className="page">
        {useRoutes(routes)}
      </div>
       <div className="footer">
        <AppFooter></AppFooter>
       </div>
    </div>
  )
})

export default App