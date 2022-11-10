export const fragments = {
    Collection: `fragment Collection on Collection {
    id
    handle
    title
    description
    descriptionHtml
    image {
        originalSrc
        altText
    }
    products(first: 250) {
        edges {
            node {
                id
                handle
                title
                description
                descriptionHtml
                images(first: 250) {
                    edges {
                        node {
                            originalSrc
                            altText
                        }
                    }
                }
                variants(first: 250) {
                    edges {
                        node {
                            id
                            title
                            price
                            compareAtPrice
                            availableForSale
                            image {
                                originalSrc
                                altText
                            }
                        }
                    }
                }
            }
        }
    }
}`}