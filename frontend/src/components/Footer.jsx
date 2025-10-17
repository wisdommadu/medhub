import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

            {/*---------- Left Section -------*/}
            <div>
                <img className='mb-0 w-4' src={assets.logo} alt="" />
                <p className='w-full md:w-2/3 text-gray-600 leading-6'>
                    MedHub is your gateway to seamless healthcare. Book export GP consultations, urgent care, and personalized wellness programs instantly anytime,
                    anywhere.
                </p>
            </div>

            {/*---------- Center Section -------*/}
            <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Privacy policy</li>
                </ul>
            </div>

            {/*---------- Right Section -------*/}
            <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>+234-8022-131-472</li>
                    <li>numericnature@gmail.com</li>
                </ul>
            </div>

        </div>

        {/*---------- Copyright Text--------*/}
        <div>
            <hr />
            <p className='py-5 text-sm text-center'>Copyight 2025@Medhub - All Right Reserved.</p>
        </div>
       
    </div>
  )
}

export default Footer