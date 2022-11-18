import { Suspense, useMemo } from 'react'
import { gql, useShopQuery, useLocalization } from '@shopify/hydrogen'
import type {
    Product,
    ProductConnection,
} from '@shopify/hydrogen/storefront-api-types'

const mockProducts = new Array(12).fill('')


export const HeroSection = () => {
    return (
        <>
        </>
        // <Section heading={title} padding="y" {...props}>
        //     <div className="swimlane hiddenScroll md:pb-8 md:scroll-px-8 lg:scroll-px-12 md:px-8 lg:px-12">
        //         {productCardsMarkup}
        //     </div>
        // </Section>
    )
}