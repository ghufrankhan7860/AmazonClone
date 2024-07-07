import Footer from '@/components/common/footer/Footer'
import Navbar from '@/components/common/navbar/Navbar'
import SecondBox from '@/components/common/navbar/Navbar.SecondBox'
import CategoryPage from '@/components/productCategoryPage/CategoryPage'
import React from 'react'

const page = () => {
    return (
        <>
            <Navbar />
            <SecondBox />
            <CategoryPage />
            <Footer />
        </>
    )
}

export default page