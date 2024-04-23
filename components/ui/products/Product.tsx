import React from 'react'
import Image from 'next/image'
import Product1 from '../../../assets/images/p1.jpg'
import Product2 from '../../../assets/images/p2.jpg'
import Product3 from '../../../assets/images/p3.jpg'
import Product4 from '../../../assets/images/p4.jpg'
import Product5 from '../../../assets/images/p5.jpg'
import Product6 from '../../../assets/images/p6.jpg'

export const Product = () => {

    const product = [
        {
            productno: 1,
            image: Product1,
            title: "Product",
            description: 'Description of first product',
            price: '$10.99'
        },
        {
            productno: 2,
            image: Product2,
            title: "Product",
            description: 'Description of second product',
            price: '$10.99'
        },
        {
            productno: 3,
            image: Product3,
            title: "Product",
            description: 'Description of third product',
            price: '$10.99'
        },
        {
            productno: 4,
            image: Product4,
            title: "Product",
            description: 'Description of forth product',
            price: '$10.99'
        },
        {
            productno: 5,
            image: Product5,
            title: "Product",
            description: 'Description of fifth product',
            price: '$10.99'
        },
        {
            productno: 6,
            image: Product6,
            title: "Product",
            description: 'Description of six product',
            price: '$10.99'
        }
    ];
  return (
    <div className='mx-12 mt-16'>
        <div className='text-4xl font-bold mb-8'>Heading</div>

        <div className='grid grid-cols-1 sm:grid-cols-3 sm:grid-rows-2 gap-8'>
            {product.map((product) => {
                return (
                    <div key= {product.productno}>
                        <div>
                            <Image 
                              src={product.image} 
                              alt='Product' 
                              className='h-[240px] lg:h-[250] rounded-xl' 
                              style={{ objectFit: 'cover' }} 
                              />
                        </div>
                        <div className='text-[18px] font-medium mt-4'>
                            {product.title}
                        </div>
                        <div className='text-[16px] mt-2 text-[#828282]'>
                            {product.description}
                        </div>
                        <div className='text-[16px] mt-2 font-bold'>
                            {product.price}
                        </div>

                    </div>

                )

            })
            }
        </div>

    </div>
  )
}
