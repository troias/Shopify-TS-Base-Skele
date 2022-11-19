import { useUrl } from '@shopify/hydrogen'

import { Section, Heading, FooterMenu, CountrySelector } from '~/components'
import type { EnhancedMenu } from '~/lib/utils'

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
        <div className="grid grid-cols-1 grid-rows-2">
            <div className="grid grid-cols-3 sm:grid-cols-2">
                <div className=" grid grid-cols-2 place-content-center p-8">
                    <div>
                        <Heading size="lead" as="h3">
                            Support
                        </Heading>
                        <div>Help center</div>
                        <div>contact us</div>
                        <div>Shipping policy</div>
                    </div>
                    <div>
                        <Heading size="lead" as="h3">
                            Info
                        </Heading>
                        <div>Careers</div>
                        <div>About US</div>
                        <div>Apex Land</div>
                        <div>Summer Shredding</div>
                    </div>
                </div>


                <div className="grid p-8 place-items-end">
                    {/* 2 line news letter hearding */}
                    <div className='grid grid-rows-2 uppercase font-bold'>

                        <Heading size="lead" as="h3">
                            Sign up for our ApexAthlete
                        </Heading>
                        <Heading size="lead" as="h3" width='wide' className="justify-self-end  ">
                            Newsletter
                        </Heading>
                    </div>



                    <div className="  "

                    >
                        <input
                            type="text"
                            placeholder="Email"
                            className="border border-gray-300 rounded-md p-2 mb-2"
                        />
                        <button
                            className="bg-black text-white p-2 rounded-md ml-3 font-bold px-4"
                        >
                            Sign up
                        </button>

                    </div>

                </div>
            </div>
            <div className="grid grid-cols-3">


                <Heading size="lead" as="h3">
                    {new Date().getFullYear()} ApexAthlete }
                </Heading>
                <Heading>
                    Learn More | Dream More | Achieve More
                </Heading>
                <Heading>
                    Privacy Policy | Terms of Service | CCPA
                </Heading>


            </div>

        </div>

    )
}













