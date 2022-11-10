import React from 'react'
// import { Header } from '~/components'
// import { Footer } from '../components/index.server'

// import { useLocalization, useShopQuery, CacheLong, gql } from '@shopify/hydrogen'



export const Layout = ({
    children
}: {
    children: React.ReactNode
}) => {
    return (
        <div>
            {/* <HeaderWithMenu /> */}
            {children}
            {/* <FooterWithMenu /> */}
        </div>
    )
}

// const HeaderWithMenu = () => {
//     const { shopName, headerMenu } = useLayoutQuery()
//     return <Header title={shopName} menu={headerMenu} />
// }

// function FooterWithMenu() {
//     const { footerMenu } = useLayoutQuery()
//     return <Footer menu={footerMenu} />
// }

// function useLayoutQuery() {
//     const {
//         language: { isoCode: languageCode },
//     } = useLocalization()

//     const { data } = useShopQuery<{
//         shop: Shop
//         headerMenu: Menu
//         footerMenu: Menu
//     }>({
//         query: SHOP_QUERY,
//         variables: {
//             language: languageCode,
//             headerMenuHandle: HEADER_MENU_HANDLE,
//             footerMenuHandle: FOOTER_MENU_HANDLE,
//         },
//         cache: CacheLong(),
//         preload: '*',
//     })

//     return {
//         shopName: data.shop.name,
//         headerMenu: data.headerMenu,
//         footerMenu: data.footerMenu,
//     }
// }

// const SHOP_QUERY = gql`
//     query ShopQuery(
//         $language: String!
//         $headerMenuHandle: String!
//         $footerMenuHandle: String!
//     ) {
//         shop {
//             name
//         }
//         headerMenu: menuByHandle(handle: $headerMenuHandle) {
//             ...Menu
//         }
//         footerMenu: menuByHandle(handle: $footerMenuHandle) {
//             ...Menu
//         }
//     }

//     fragment Menu on Menu {
//         id
//         handle
//         label: title
//         items {
//             id
//             label: title
//             url
//             type
//             linkedResource {
//                 ... on Page {
//                     id
//                     handle
//                     title


//                     url: translatedUrl(language: $language) 
//                 }
//                 ... on Product {
//                     id
//                     handle
//                     title
//                     url: translatedUrl(language: $language)
//                 }
//                 ... on Collection {
//                     id
//                     handle
//                     title
//                     url: translatedUrl(language: $language)
//                 }
//             }
//         }

//     }
// `





