

import { defineConfig, CookieSessionStorage } from '@shopify/hydrogen/config'

export default defineConfig({
  shopify: {
    defaultCountryCode: 'US',
    defaultLanguageCode: 'EN',
    storeDomain:
      // @ts-ignore
      Oxygen?.env?.PUBLIC_STORE_DOMAIN || import.meta.env.VITE_PUBLIC_STORE_DOMAIN,
    storefrontToken:
      // @ts-ignore

      Oxygen?.env?.PUBLIC_STOREFRONT_API_TOKEN || import.meta.env.VITE_STOREFRONT_API_TOKEN,
    privateStorefrontToken:
      // @ts-ignore
      Oxygen?.env?.PRIVATE_STOREFRONT_API_TOKEN || import.meta.env.VITE_PRIVATE_STOREFRONT_API_TOKEN,
    storefrontApiVersion: '2022-07',

    storefrontId:
      // @ts-ignore
      Oxygen?.env?.PUBLIC_STOREFRONT_ID || import.meta.env.VITE_STOREFRONT_ID,
  },
  session: CookieSessionStorage('__session', {
    path: '/',
    httpOnly: true,
    secure: import.meta.env.PROD,
    sameSite: 'Strict',
    maxAge: 60 * 60 * 24 * 30,
  }),
});

