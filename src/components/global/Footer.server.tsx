import { useEffect, useState } from 'react'

import { useUrl } from '@shopify/hydrogen'

import { Section, Heading, FooterMenu, CountrySelector, NewsLetter, FooterLinks } from '~/components'
import type { EnhancedMenu } from '~/lib/utils'
import type { UphancedMenu } from '~/components/global/Layout.server'



/**
 * A server component that specifies the content of the footer on the website
 */
export function Footer({ menu }: {
    menu: UphancedMenu | unknown


}) {

    // console.log("Footer Footer", menu)
    // console.log("defaultFooterMenu", defaultFooterMenu)

    const { pathname } = useUrl()

    const localeMatch = /^\/([a-z]{2})(\/|$)/i.exec(pathname)
    const countryCode = localeMatch ? localeMatch[1] : null

    const isHome = pathname === `/${countryCode ? countryCode + '/' : ''}`


    return (
        <div className="grid grid-cols-1  grid-rows-2 lg:py-12 ">
            <div className="grid grid-cols-1 lg:grid-cols-3 ">
                {/* news letter section */}
                <div className="grid py-10 sm:px-2  justify-items-center dark:text-white lg:order-2 lg:col-span-2  ">
                    <NewsLetter />
                </div>
                <div className="grid grid-cols-1 p-8 justify-items-start gap-y-5 font-semibold xs:px-12 sm:px-32 md:px-44 lg:px-2 order-1 lg:grid-cols-2">
                    <FooterLinks menu={menu} />
                </div>
            </div>
            <div className="grid place-content-center auto-rows-min h-1/5 gap-y-2 dark:text-white lg:order-3 ">
                <Heading className=" text-secondary-grey dark:text-white">
                    {new Date().getFullYear()} ApexAthlete LLC | All rights reserved
                </Heading>
                <Heading className="grid place-content-center text-sm">
                    Learn More | Dream More | Achieve More
                </Heading>
                <Heading className="place-self-center dark:text-gray-400">
                    Privacy Policy | Terms of Service | CCPA
                </Heading>


            </div>

        </div>

    )
}



















