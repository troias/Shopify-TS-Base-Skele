import { useEffect, useState } from 'react'

import { useUrl } from '@shopify/hydrogen'

import { Section, Heading, FooterMenu, CountrySelector, NewsLetter, FooterLinks } from '~/components'
import type { EnhancedMenu } from '~/lib/utils'
import type { UphancedMenu } from '~/components/global/Layout.server'



/**
 * A server component that specifies the content of the footer on the website
 */
export function Footer({ menu, defaultFooterMenu }: {
    menu: UphancedMenu | unknown
    ,
    defaultFooterMenu?: EnhancedMenu
}) {

    // console.log("Footer Footer", menu)
    // console.log("defaultFooterMenu", defaultFooterMenu)

    const { pathname } = useUrl()

    const localeMatch = /^\/([a-z]{2})(\/|$)/i.exec(pathname)
    const countryCode = localeMatch ? localeMatch[1] : null

    const isHome = pathname === `/${countryCode ? countryCode + '/' : ''}`
    // const itemsCount = menu
    //     ? menu?.items?.length + 1 > 4
    //         ? 4
    //         : menu?.items?.length + 1
    //     : []
    // console.log("footer menu", menuInArr)

    return (
        <div className="grid grid-cols-1 grid-rows-2 ">
            <div className="grid grid-cols-1  ">
                {/* news letter section */}
                <div className="grid py-10 sm:px-2  justify-items-center dark:text-white   ">
                    {/* 2 line news letter hearding */}
                    <NewsLetter />
                </div>
                <FooterLinks menu={menu} defaultFooterMenu={defaultFooterMenu} />
            </div>
            <div className="grid   place-content-center auto-rows-min h-1/5 gap-y-2 dark:text-white">
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



















