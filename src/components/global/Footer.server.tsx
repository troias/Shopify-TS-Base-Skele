import { useEffect, useState } from 'react'

import { useUrl } from '@shopify/hydrogen'

import { Section, Heading, FooterMenu, CountrySelector } from '~/components'
import type { EnhancedMenu } from '~/lib/utils'
import { InstagramIcon, TickTockIcon, DarkModeSliderButton } from '~/components'

/**
 * A server component that specifies the content of the footer on the website
 */
export function Footer({ menu }: { menu?: EnhancedMenu }) {

    console.log("footer menu", menu)

    const { pathname } = useUrl()

    const localeMatch = /^\/([a-z]{2})(\/|$)/i.exec(pathname)
    const countryCode = localeMatch ? localeMatch[1] : null

    const isHome = pathname === `/${countryCode ? countryCode + '/' : ''}`
    const itemsCount = menu
        ? menu?.items?.length + 1 > 4
            ? 4
            : menu?.items?.length + 1
        : []



    return (
        <div className="grid grid-cols-1 grid-rows-2 ">
            <div className="grid grid-cols-1  ">


                {/* news letter section */}
                <div className="grid py-10 justify-items-center  ">
                    {/* 2 line news letter hearding */}
                    <div className='grid grid-rows-2 uppercase w-3/5'>

                        <Heading size="lead" as="h3" className="uppercase justify-self-center">
                            Sign up for our ApexAthlete
                        </Heading>
                        <Heading size="lead" as="h3" width='wide' className="justify-self-center " >
                            Newsletter
                        </Heading>
                        <div className=" grid grid-rows-2  py-2 "

                        >
                            <input
                                type="text"
                                placeholder="Email"
                                className="border border-gray-300 rounded-md p-2 mb-2 "
                            />
                            <button
                                className="bg-secondary-grey text-white p-2 rounded-md  font-bold uppercase  "
                            >
                                Sign up
                            </button>

                        </div>
                        <div className="w-full">


                            <div className="grid grid-cols-6 w-full gap-2 place-items-center" >
                                <InstagramIcon />
                                <TickTockIcon />
                                <TickTockIcon />
                                <TickTockIcon />
                                <TickTockIcon />
                                <DarkModeSliderButton />

                            </div>
                        </div>
                    </div>





                </div>


                <div className="grid grid-cols-1 p-8 justify-items-start gap-y-5  font-semibold  ">
                    <div className="  border-2 w-full px-8 py-10 rounded-xl grid gap-y-2 text-secondary-grey">
                        <Heading size="lead" as="h3" className="uppercase font-black text-black">
                            Support
                        </Heading>
                        <div>Help center</div>
                        <div>contact us</div>
                        <div>Shipping policy</div>
                    </div>
                    <div className="grid border-2 rounded-xl w-full px-8 py-10 gap-y-2  text-secondary-grey font-semibold">
                        <Heading size="lead" as="h3" className="uppercase font-black text-black ">
                            Info
                        </Heading>
                        <div className="">Careers</div>
                        <div className="">About US</div>
                        <div className="">Apex Land</div>
                        <div className="">Summer Shredding</div>
                    </div>
                </div>



            </div>
            <div className="grid   place-content-center auto-rows-min h-1/5 gap-y-2">


                <Heading className=" text-secondary-grey ">
                    {new Date().getFullYear()} ApexAthlete LLC | All rights reserved
                </Heading>
                <Heading className="grid place-content-center text-sm">
                    Learn More | Dream More | Achieve More
                </Heading>
                <Heading className="place-self-center">
                    Privacy Policy | Terms of Service | CCPA
                </Heading>


            </div>

        </div>

    )
}



















