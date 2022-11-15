import type { Menu, Shop } from '@shopify/hydrogen/storefront-api-types'
import { useLocalization, useShopQuery, CacheLong } from '@shopify/hydrogen'
// import { Suspense } from 'react'
// import { Header } from '~/components'
// import {Footer} from '~/components/index.server';
// import { FooterMenu } from './FooterMenu.client'
import { parseMenu } from '../../lib/utils'
import { SHOP_QUERY } from '../../lib/graph-queries/queries'


const HEADER_MENU_HANDLE = 'main-menu'
const FOOTER_MENU_HANDLE = 'footer'
const SHOP_NAME_FALLBACK = 'Hydrogen'

export const Layout = ({
    children
}: {
    children: React.ReactNode
}) => {
    return (
        <div className="min-h-full ">


            {/* 
            <HeaderWithMenu /> */}

            <main>
                {children}
            </main>
            {/* 
            <FooterMenu /> */}


        </div>
    )
}

// function HeaderWithMenu() {
//     const { shopName, headerMenu } = useLayoutQuery()
//     return <Header title={shopName} menu={headerMenu} />
// }

function useLayoutQuery() {
    const {
        language: { isoCode: languageCode },
    } = useLocalization()

    const { data } = useShopQuery<{
        shop: Shop
        headerMenu: Menu
        footerMenu: Menu
    }>({
        query: SHOP_QUERY,
        variables: {
            language: languageCode,
            headerMenuHandle: HEADER_MENU_HANDLE,
            footerMenuHandle: FOOTER_MENU_HANDLE,
        },
        cache: CacheLong(),
        preload: '*',
    })

    const shopName = data ? data.shop.name : SHOP_NAME_FALLBACK

    /*
      Modify specific links/routes (optional)
      @see: https://shopify.dev/api/storefront/unstable/enums/MenuItemType
      e.g here we map:
        - /blogs/news -> /news
        - /blog/news/blog-post -> /news/blog-post
        - /collections/all -> /products
    */
    const customPrefixes = { BLOG: '', CATALOG: 'products' }

    const headerMenu = data?.headerMenu
        ? parseMenu(data.headerMenu, customPrefixes)
        : undefined

    console.log("menu", headerMenu)

    const footerMenu = data?.footerMenu
        ? parseMenu(data.footerMenu, customPrefixes)
        : undefined

    return { footerMenu, headerMenu, shopName }
}







