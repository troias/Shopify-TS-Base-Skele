
import { Heading } from './Heading'
import { FooterMenu } from '../global/FooterMenu.client'

import type { EnhancedMenu, EnhancedMenuItem } from '~/lib/utils'


type RevisedFooterMenun = {
    handeName: String,
    items: EnhancedMenuItem[]


}[]


export const FooterLinks = ({ menu }: {
    menu: RevisedFooterMenun | unknown,
    defaultFooterMenu?: EnhancedMenu
}) => {

    console.log("footerLinksReconstructed", menu)


    const footerMenuHandle = "footer"

    const removeDefaultFooterIfCustomFootersExist = (menu: RevisedFooterMenun) => {

        if (menu.length > 1) {
            return menu.filter((item) => item.handeName !== footerMenuHandle)
        }
        return menu


    }

    const updatedMenu = removeDefaultFooterIfCustomFootersExist(menu)







    const footerMenu = updatedMenu?.map((item) => {






        return (


            <div className="grid 
            border-2 lg:border-none border-gray-400  rounded-xl px-8 py-10 gap-y-2  text-secondary-grey font-semibold dark:text-gray-200 w-full
             md:w-4/5 md:justify-self-center lg:w-fit     ">

                <Heading size="lead" as="h3" className="uppercase font-black text-black dark:text-white ">
                    {item?.handeName}
                </Heading>
                {item.items.map((item) => {
                    //move to helper utils
                    const firstLetterCaps = (title: string) => {
                        return title.charAt(0).toUpperCase() + title.slice(1)
                    }

                    const title = firstLetterCaps(item.title)
                    return (
                        <div className="">
                            {title}
                        </div>
                    )
                }
                )}

            </div>



        )
    })







    return (
        <>
            {footerMenu}
        </>

    )


}