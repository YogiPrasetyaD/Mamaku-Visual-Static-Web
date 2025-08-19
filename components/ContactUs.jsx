import React from 'react'
import Image from 'next/image'
import ContactMap from './ContactMap'

const ContactUs = () => {
    return (
        <div className='flex flex-col px-8 py-52 md:px-15 md:py-56'>
            <div className='flex flex-row items-center'>
                <div className='flex items-center gap-3 md:gap-5s'>
                    <Image
                        src="/logohitam.png"
                        alt="Hero Image"
                        width={48}
                        height={48}
                        className="md:w-16 md:h-16"
                    />
                    <h1 className='font-normal text-head-3-32 md:text-head-1-64 text-dev-black'>CONTACT US</h1>
                </div>
            </div>
            <div className='flex mt-1 p-2'>
                <p className='text-body-xs-12 md:text-body-sm-14 text-dev-black'>
                    If you have any questions or need further information, please feel free to reach out to us.
                </p>
            </div>
            <div className='grid md:grid-cols-2 gap-20 mt-4'>
                <div className='flex flex-col text-body-xs-12 md:text-body-sm-14 mt-2'>
                    <div className='flex flex-col gap-1 p-2'>
                        <label className='text-dev-black'>Email</label>
                        <input id='email' type="email" name='email' placeholder='youremail@example.com' className='border border-dev-black placeholder-dev-grey p-1 rounded-sm text-dev-black'/>
                    </div>
                    <div className='flex flex-col gap-1 p-2'>
                        <label className='text-dev-black'>Name</label>
                        <input id='name' type="text" name='name' placeholder='Your Name' className='border border-dev-black placeholder-dev-grey p-1 rounded-sm text-dev-black'/>
                    </div>
                    <div className='flex flex-col gap-1 p-2'>
                        <label className='text-dev-black'>Subject</label>
                        <input id='subject' type="text" name='subject' placeholder='Your Subject' className='border border-dev-black placeholder-dev-grey p-1 rounded-sm text-dev-black'/>
                    </div>
                    <div className='flex flex-col gap-1 p-2'>
                        <label className='text-dev-black'>Your Message</label>
                        <textarea id='message' type="textarea" name='message' rows={4} placeholder='Im Interested on Your Project, Lets Make It Out!!' className='truncate border border-dev-black placeholder-dev-grey p-1 rounded-sm text-dev-black'/>
                    </div>
                    <div className='flex flex-col p-2 md:col-span-2 lg:col-span-3'>
                        <button id='' className='border text-white bg-dev-black items-center justify-center p-2 mt-5 rounded-sm '>Submit</button>
                    </div>
                </div>
                <div>
                    <ContactMap />
                    <div>
                        <h3 className='text-dev-black font-semibold mt-4'>Our Location</h3>
                        <p className='text-body-xs-12 md:text-body-sm-14 text-dev-black'>Denpasar, Bali, Indonesia</p>
                    </div>
                    <div className='flex flex-row gap-2 mt-4'>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <Image
                                src="/ig.svg"
                                alt="Instagram"
                                width={24}
                                height={24}
                                className="cursor-pointer"
                            />
                        </a>

                        <a href="https://wa.me/6289605699929?text=Halo%20saya%20tertarik%20untuk%20kerjasama%20dengan%20Infrava%20Labs" target="_blank" rel="noopener noreferrer">
                            <Image
                                src="/wa.svg"
                                alt="WhatsApp"
                                width={24}
                                height={24}
                                className="cursor-pointer"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs
