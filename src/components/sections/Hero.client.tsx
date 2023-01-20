import { Image, Link, Video } from '@shopify/hydrogen'
import type { Media } from '@shopify/hydrogen/storefront-api-types'

import { Heading, Text } from '~/components'
import { useWindowSize } from 'react-use'

interface Metafield {
  value: string
  reference?: object

}

export function Hero({
  byline,
  buttonTitle,
  cta,
  handle,
  heading,
  height,
  loading,
  spread,
  spreadSecondary,
  top,
}: {
  byline: Metafield
  cta: Metafield
  handle: string
  heading: Metafield
  height?: 'full'
  loading?: 'eager' | 'lazy'
  spread: Metafield
  spreadSecondary: Metafield
  top?: boolean
  buttonTitle: Metafield
}) {


  // console.log("hero", "-", "inline", byline, cta, handle, heading, height, loading, spread, spreadSecondary, top)
  const { width } = useWindowSize()
  console.log("buttonTitle", buttonTitle)

  return (
    <Link to={`/collections/${handle}`}>
      <section
        className={`relative justify-end flex flex-col w-full rounded-2xl aspect-square ${top && '-mt-nav'
          } ${height === 'full'
            ? 'h-screen'
            : 'aspect-[4/5] sm:aspect-square md:aspect-[2/1] lg:aspect-[2/1] xl:aspect-[2/1]'
          }  overflow-hidden px-10 z-30  dark:border-2 dark:border-gray-400 `}
      >
        <div className="absolute inset-0 grid flex-grow grid-flow-col pointer-events-none auto-cols-fr -z-10 content-stretch overflow-clip   ">
          {spread?.reference && (
            <div className="  ">
              <SpreadMedia
                scale={2}
                sizes={
                  spreadSecondary?.reference
                    ? '(min-width: 80em) 700px, (min-width: 48em) 450px, 500px'
                    : '(min-width: 80em) 1400px, (min-width: 48em) 900px, 500px'
                }
                widths={
                  spreadSecondary?.reference
                    ? [500, 450, 700]
                    : [500, 900, 1400]
                }
                width={spreadSecondary?.reference ? 375 : 750}
                data={spread.reference as Media}
                loading={loading}

              />
            </div>
          )}

        </div>
        <div className="flex flex-col items-baseline justify-between gap-4 px-2 py-8 sm:px-8 md:px-12 bg-gradient-to-t dark:from-contrast/60 dark:text-primary from-primary/60 text-contrast">

          {
            heading?.value && (
              <Heading width='wide' className="text-2xl md:text-4xl font-bold text-white uppercase ">
                {/* split heading to tow lines */}
                {width > 600 && heading.value.split(' ').map((word, index) => {
                  if (index === 0) {
                    return <span key={index}>{word}</span>
                  }
                  return <span key={index} className="block">{word}</span>
                })}
                {width <= 600 && heading.value}

              </Heading>
            )

          }
          {
            byline?.value && (

              <Text className={`  text-base font-bold text-white  font-semibold ${width < 600 && "hidden"}`}>
                {byline.value}
              </Text>
            )
          }
          <Link to={`/collections/${handle}`} className="mb-2">
            <Text className="text-lg font-bold text-white   bg-gray-400 rounded-3xl px-4 py-2 uppercase ">
              {buttonTitle.value} <br />
            </Text>
          </Link>





        </div>
      </section>
    </Link>
  )
}

interface SpreadMediaProps {
  data: Media
  loading?: HTMLImageElement['loading']
  scale?: 2 | 3
  sizes: string
  width: number
  widths: number[]
}

function SpreadMedia({
  data,
  loading,
  scale,
  sizes,
  width,
  widths,
}: SpreadMediaProps) {
  if (data.mediaContentType === 'VIDEO') {
    return (
      <Video
        previewImageOptions={{ scale, src: data.previewImage!.url }}
        width={scale! * width}
        className="block object-cover w-full h-full"
        data={data}
        controls={false}
        muted
        loop
        playsInline
        autoPlay
      />
    )
  }

  if (data.mediaContentType === 'IMAGE') {
    return (
      <Image
        widths={widths}
        sizes={sizes}
        alt={data.alt || 'Marketing Banner Image'}
        className="block object-cover w-full h-full "
        // @ts-ignore
        data={data.image}
        loading={loading}
        width={width}
        loaderOptions={{ scale, crop: 'center' }}
      />
    )
  }

  return null
}
