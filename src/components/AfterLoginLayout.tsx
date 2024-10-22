import React from 'react'
import Header from './Header'
import LeftMenuBar from './LeftMenuBar'

const AfterLoginLayout = (WrappedComponent:any) => {
  return function(props:any){
    return <>
    <Header />
    <div className='flex w-full'>
        <LeftMenuBar />
    <WrappedComponent {...props} extraProp="I'm an extra prop!" />
    </div>
    </>
  }
}

export default AfterLoginLayout
