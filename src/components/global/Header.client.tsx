import { Link, useUrl, useCart } from "@shopify/hydrogen"
import { useWindowScroll } from "react-use"


import {
    Heading,
    IconAccount,
    IconBag,
    IconMenu,
    IconSearch,
    // Input,
} from "~/components"

import type { EnhancedMenu } from "~/lib/utils"
import { useDrawer } from "./Drawer.client"

export const Header = ({
    title = "",
    menu = [],
}: {
    title: string
    menu?: EnhancedMenu
}) => {
    const { pathname } = useUrl()
    const localeMatch = /^\/([a-z]{2})(\/|$)/i.exec(pathname)
    const countryCode = localeMatch ? localeMatch[1] : undefined

    const isHome = pathname === `/${countryCode ? countryCode + "/" : ""}`

    // console.log("isHome", isHome)
    // console.log("pathName", pathname)

    const {
        isOpen: isCartOpen,
        openDrawer: openCart,
        closeDrawer: closeCart,
    } = useDrawer()

    const {
        isOpen: isMenuOpen,
        openDrawer: openMenu,
        closeDrawer: closeMenu,
    } = useDrawer()

    return (
        <>
            <MobileHeader
                countryCode={countryCode}
                isHome={isHome}
                title={title}
                openCart={openCart}
                openMenu={openMenu}
            />

            <DesktopHeader
                countryCode={countryCode}
                isHome={isHome}
                title={title}
                menu={menu}
                openCart={openCart}
            />
        </>
    )
}

function MobileHeader({
    countryCode,
    title,
    isHome,
    openCart,
    openMenu,
}: {
    countryCode?: string | null
    title: string
    isHome: boolean
    openCart: () => void
    openMenu: () => void
}) {
    const { y } = useWindowScroll()


    const styles = {
        button: "relative flex items-center justify-center w-8 h-8",
        container: ` border-b-2  border-r-2 border-l-2  rounded-b-3xl px-6 
             ${isHome
                ? "bg-white/80  dark:bg-contrast/60 text-contrast dark:text-primary shadow-darkHeader"
                : "bg-contrast/80 text-primary"
            } 
            
            ${y > 50 && !isHome ? "shadow-lightHeader " : "bg-white/80"
            }
            ${y > 50 && "bg-white/80"}
            
            flex lg:hidden items-center h-nav sticky backdrop-blur-lg z-40 top-0 justify-between w-full leading-none gap-4 px-4 md:px-8  `,
    }

    return (
        <header role="banner" className={styles.container}>
            <div className="flex items-center justify-start w-full gap-4 ">
                <button onClick={openMenu} className={styles.button}>
                    <IconMenu />
                </button>
                <form
                    action={`/${countryCode ? countryCode + "/" : ""}search`}
                    className="items-center gap-2 sm:flex"
                >
                    <button type="submit" className={styles.button}>
                        <IconSearch />
                    </button>

                </form>
            </div>

            <Link
                className="flex items-center self-stretch leading-[3rem] md:leading-[4rem] justify-center flex-grow w-full h-full"
                to="/"
            >
                <Heading className="font-bold text-center uppercase " as={isHome ? "h1" : "h2"}>
                    {title}
                </Heading>
            </Link>

            <div className="flex items-center justify-end w-full gap-4">
                <Link to={"/account"} className={styles.button}>
                    <IconAccount />
                </Link>
                <button onClick={openCart} className={styles.button}>
                    <IconBag />
                    <CartBadge dark={isHome} />
                </button>
            </div>
        </header>
    )
}

function DesktopHeader({
    countryCode,
    isHome,
    menu,
    openCart,
    title,
}: {
    countryCode?: string | null
    isHome: boolean
    openCart: () => void
    menu?: EnhancedMenu
    title: string
}) {
    const { y } = useWindowScroll()

    const styles = {
        button:
            "relative flex items-center justify-center w-8 h-8 focus:ring-primary/5",
        top_container: `${isHome &&
            "hidden lg:flex justify-start px-4 py-2 min-w-full border-b-[1px] border-grey    "
            }`,
        container: `${isHome
            ? "bg-primary/80 dark:bg-contrast/60 text-contrast dark:text-primary shadow-darkHeader"
            : "bg-contrast/80 text-primary"} 
            
            ${y > 50 && !isHome
                ? "shadow-lightHeader "
                : ""
            }
            
            hidden h-nav lg:flex items-center sticky transition duration-300 backdrop-blur-lg z-40 top-0 
            justify-between w-full leading-none gap-8 px-4 py-2 border-s`,

        text_secondary: " font-semibold  text-xs  text-secondary-grey ",
        border_container: " md:flex-col lg:border-b-2  border-r-2 border-l-2  rounded-b-3xl px-6 "
    }

    return (
        <header className="pb-8 drop-shadow-lg  ">
            <div
                role="banner"
                className={styles.border_container}
            >
                <div className={styles.top_container}>
                    <span className={styles.text_secondary}>
                        Men's 20-80% off "last chance" sale
                    </span>
                </div>
                <div className={styles.container}>
                    <div className="flex gap-12 ">
                        <Link className={` font-extrabold text-lg uppercase `} to="/">
                            {title}
                        </Link>
                    </div>
                    <nav className="flex gap-4">
                        {/* Top level menu items */}
                        {(menu?.items || []).map((item) => (
                            <Link key={item.id} to={item.to} target={item.target} className={` text-secondary-grey uppercase text-sm font-bold `}>
                                {item.title}
                            </Link>
                        ))}
                    </nav>
                    <div className="flex items-center gap-1">
                        <form
                            action={`/${countryCode ? countryCode + "/" : ""}search`}
                            className="flex items-center gap-2"
                        >

                            <button type="submit" className={styles.button}>
                                <IconSearch />
                            </button>
                        </form>
                        <Link to={"/account"} className={styles.button}>
                            <IconAccount />
                        </Link>
                        <button onClick={openCart} className={styles.button}>
                            <IconBag />
                            <CartBadge dark={isHome} />
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}

function CartBadge({ dark }: { dark: boolean }) {
    const { totalQuantity } = useCart()
    // const cartCtx = useCart()

    // console.log("cartCTX", cartCtx)

    if (totalQuantity < 1) {
        return null
    }
    return (
        <div
            className={`${dark
                ? "text-primary bg-contrast dark:text-contrast dark:bg-primary"
                : "text-contrast bg-primary"
                } absolute bottom-1 right-1 text-[0.625rem] font-medium subpixel-antialiased h-3 min-w-[0.75rem] flex items-center justify-center leading-none text-center rounded-full w-auto px-[0.125rem] pb-px`}
        >
            <span>{totalQuantity}</span>
        </div>
    )
}
