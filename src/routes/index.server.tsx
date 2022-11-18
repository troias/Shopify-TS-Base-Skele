// import { Suspense } from 'react'
import {
  CacheLong,
  gql,
  Seo,
  ShopifyAnalyticsConstants,
  useServerAnalytics,
  useLocalization,
  useShopQuery,
} from '@shopify/hydrogen'

// import { MEDIA_FRAGMENT, PRODUCT_CARD_FRAGMENT } from '~/lib/fragments'
// import { getHeroPlaceholder } from '~/lib/placeholders'
import { Hero } from '~/components'
import { Layout } from '../components/global/index.server'
import {
  CollectionConnection,
  ProductConnection,
} from '@shopify/hydrogen/storefront-api-types'


import { getHeroPlaceholder } from '~/lib/placeholders'

import { HOMEPAGE_CONTENT_QUERY } from '../lib/graph-queries/queries'



interface Metafield {
  value: string
  reference?: object
}


const HomePageContent = () => {

  const {
    language: { isoCode: languageCode },
    country: { isoCode: countryCode },
  } = useLocalization()

  const { data } = useShopQuery<{
    heroBanners: CollectionConnection
    featuredCollections: CollectionConnection
    featuredProducts: ProductConnection
  }>({
    query: HOMEPAGE_CONTENT_QUERY,
    variables: {
      language: languageCode,
      country: countryCode,
    },
    preload: true,
  })

  const { heroBanners, featuredCollections, featuredProducts } = data



  interface PrimaryHeroBanner {
    byline: Metafield,
    cta: Metafield,
    handle: string,
    heading: Metafield,
    height?: 'full'
    loading?: 'eager' | 'lazy'
    spread: Metafield,
    spreadSecondary: Metafield,
    top: number,
    id: string,
    descriptionHtml: string,

  }
  //, secondaryHero, tertiaryHero

  const [primaryHero] = getHeroPlaceholder(
    heroBanners.nodes,
  ) as PrimaryHeroBanner[]

  console.log("herodata", data.heroBanners.nodes)

  return (
    <div>
      <Layout>


        {primaryHero && (
          <Hero {...primaryHero} top loading="eager" />
        )}
      </Layout>
    </div>
  )
}

export default HomePageContent
