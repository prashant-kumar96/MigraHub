import Banner from '@/components/Banner'
import BeforeLoginLayout from '@/components/BeforeLoginLayout'
import React from 'react'

const LandingPage = () => {
  return (
    <div>
      <Banner />
    </div>
  )
}

export default BeforeLoginLayout(LandingPage)
