
import { Heading } from './Heading'
import { FooterMenu } from '../global/FooterMenu.client'

import type { EnhancedMenu, EnhancedMenuItem } from '~/lib/utils'



export const FooterLinks = ({ menu }: { menu?: EnhancedMenu }) => {


    // console.log("FooterLinksmenu", menu)


    // const infoMenu = menu?.items?.filter((item) => item.title === 'Info')
    // const infoMenuArr = new Array(infoMenu)
    // console.log("firstItems", infoMenuArr)

    const footerMenu = menu?.items?.map((item: EnhancedMenuItem) => {

        // const { title, url, children } = item

        return (


            <div className="grid border-2 border-gray-400 rounded-xl w-full px-8 py-10 gap-y-2  text-secondary-grey font-semibold dark:text-gray-200">
                <Heading size="lead" as="h3" className="uppercase font-black text-black dark:text-white ">
                    {item?.title}
                </Heading>

                {/* {item.items.map((item) => {
                    return (
                        <div className="">
                            {item?.title}
                        </div>
                    )
                }
                )} */}

            </div>



        )
    })





    return (
        <div className="grid grid-cols-1 p-8 justify-items-start gap-y-5  font-semibold   ">
            {footerMenu}
        </div>
    )


}