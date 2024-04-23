import { Discountpro } from '@/components/ui/discountpro/Discountpro'
import { Footer } from '@/components/ui/footer/Footer'
import { NavBar } from '@/components/ui/navbar/NavBar'
import { Product } from '@/components/ui/products/Product'
import { Title } from '@/components/ui/title/Title'
import { List } from 'lucide-react'
import React from 'react'

const home = () => {
  return (
    <main>
      <NavBar />
      <Title />
      <Product />
      <Discountpro />
      <Footer />
      
    </main>
    
    
  )
}

export default home