import type { Menu, Shop } from '@shopify/hydrogen/storefront-api-types'
import { useLocalization, useShopQuery, CacheLong } from '@shopify/hydrogen'
// import { Suspense } from 'react'
import { Header } from '~/components'
import { Footer } from '~/components/index.server'

import { parseMenu } from '~/lib/utils'
import { SHOP_QUERY } from '../../lib/graph-queries/queries'


const HEADER_MENU_HANDLE = 'main-menu'
export const FOOTER_MENU_HANDLE = 'footer'
const SHOP_NAME_FALLBACK = 'Hydrogen'
const INFO_MENU_HANDLE = 'info'

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

    const footerArr = [{
        ...ctx.footerMenu,
        handeName: FOOTER_MENU_HANDLE
    }, {
        ...ctx.infoMenu,
        handeName: INFO_MENU_HANDLE
    }]








    return <Footer menu={footerArr} defaultFooterMenu={ctx.footerMenu} />



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




    return { footerMenu, headerMenu, shopName, infoMenu }
}







