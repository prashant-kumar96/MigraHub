import React from 'react'
import Header from './Header'

const BeforeLoginLayout = (WrappedComponent:any) => {
  return function(props:any){
    return <>
    <Header />
    <WrappedComponent {...props} extraProp="I'm an extra prop!" />;
    </>
  }
}

export default BeforeLoginLayout
