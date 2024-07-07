import React from 'react'
import Footer from '@/components/common/footer/Footer'
import Navbar from '@/components/common/navbar/Navbar'
import SecondBox from '@/components/common/navbar/Navbar.SecondBox'
import ProductPage from '@/components/productPageComponents/ProductPage'


const page = () => {
  return (
    <>
        <Navbar/>
        <SecondBox/>
        <ProductPage/>
        <Footer/>
    </>
  )
}

export default page