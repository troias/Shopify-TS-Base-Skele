import type { Menu, Shop } from '@shopify/hydrogen/storefront-api-types'
import { useLocalization, useShopQuery, CacheLong } from '@shopify/hydrogen'
// import { Suspense } from 'react'
import { Header } from '~/components'
import { Footer } from '~/components/index.server'

import { EnhancedMenu, parseMenu } from '~/lib/utils'
import { SHOP_QUERY } from '../../lib/graph-queries/queries'


const HEADER_MENU_HANDLE = 'main-menu'
const FOOTER_MENU_HANDLE = 'footer'
const SHOP_NAME_FALLBACK = 'Hydrogen'
const INFO_MENU_HANDLE = 'info'
const SUPPORT_MENU = "support-menu"

export interface UphancedMenu {
    handleName: string
    items: EnhancedMenu
    id: string
}


export const Layout = ({
    children
}: {
    children: React.ReactNode
}) => {
    return (
        <div className="min-h-full px-2 lg:px-20 xl:px-60 dark:bg-dm-grey z-0">

            <HeaderWithMenu />

            <main>
                {children}
            </main>

            <FooterWithMenu />


        </div>
    )
}

function HeaderWithMenu() {
    const { shopName, headerMenu } = useLayoutQuery()

    // console.log("headerMenu", headerMenu, "shopName", shopName)

    return <Header title={shopName} menu={headerMenu} />
}

function FooterWithMenu() {


    const ctx = useLayoutQuery()

    const placeHolderFooterMenu = [
        {
            handleName: "footer",
            id: "1",
            items: [
                {
                    id: 'gid://shopify/MenuItem/486957416762',
                    resourceId: null,
                    tags: [],
                    title: 'Footer',
                    type: 'footer',
                    url: 'https://hydrogen-ts.myshopify.com/search',
                    items: [
                        {
                            id: 'gid://shopify/MenuItem/486957416762',
                            resourceId: null,
                            tags: [],
                            title: 'Footer',
                            type: 'footer',
                            url: 'https://hydrogen-ts.myshopify.com/search',
                        },

                    ],
                    isExternal: false,
                    target: '_self',
                    to: '/search'
                }
            ],

        }]


    const footerArr = [{
        handeName: FOOTER_MENU_HANDLE,
        ...ctx.footerMenu,

    }, {
        ...ctx.infoMenu,
        handeName: INFO_MENU_HANDLE
    },
    {
        ...ctx.supportMenu,
        handeName: SUPPORT_MENU
    }
    ]

    const makeSureFooterArrAlwaysHasOneItem = footerArr.length > 0 ? footerArr : placeHolderFooterMenu

    // console.log("undefinedFooterArr", footerArr)


    return <Footer menu={makeSureFooterArrAlwaysHasOneItem} />






    // console.log("returned data", footerArr)



}

function useLayoutQuery() {
    const {
        language: { isoCode: languageCode },
    } = useLocalization()

    const { data } = useShopQuery<{
        shop: Shop
        headerMenu: Menu
        footerMenu: Menu
        infoMenu: Menu

    }>({
        query: SHOP_QUERY,
        variables: {
            language: languageCode,
            headerMenuHandle: HEADER_MENU_HANDLE,
            footerMenuHandle: FOOTER_MENU_HANDLE,
            infoMenuHandle: INFO_MENU_HANDLE,
            supportMenuHandle: SUPPORT_MENU
        },
        cache: CacheLong(),
        preload: '*',
    })



    const shopName = data ? data.shop.name : SHOP_NAME_FALLBACK


    const customPrefixes = { BLOG: '', CATALOG: 'products' }

    const headerMenu = data?.headerMenu
        ? parseMenu(data.headerMenu, customPrefixes)
        : undefined



    const footerMenu = data?.footerMenu
        ? parseMenu(data.footerMenu, customPrefixes)
        : undefined

    const infoMenu = data?.infoMenu
        ? parseMenu(data.infoMenu, customPrefixes)
        : undefined

    const supportMenu = data?.infoMenu
        ? parseMenu(data.infoMenu, customPrefixes)
        : undefined




    return { footerMenu, headerMenu, shopName, infoMenu, supportMenu }
}







