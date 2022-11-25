
import { InstagramIcon, TickTockIcon, DarkModeSliderButton, Heading } from '~/components'



export const NewsLetter = () => {
    return (
        <div className='grid grid-rows-2 uppercase w-4/5  xs:w-5/6 sm:w-3/5 md:w-2/5
        '>

            <Heading size="lead" as="h3" className="uppercase justify-self-center dark:text-white  

            ">
                Sign up for our ApexAthlete
            </Heading>
            <Heading size="lead" as="h3" width='wide' className="justify-self-center dark:text-white  " >
                Newsletter
            </Heading>
            <div className=" grid grid-rows-2  py-4 "

            >
                <input
                    type="text"
                    placeholder="Your Email Address"
                    className="border border-gray-300 rounded-md px-4 py-2 mb-2 "
                />
                <button
                    className="bg-secondary-grey text-white 
                   rounded-md 
                     font-black uppercase dark:bg-gray-300
                      dark:text-gray-800
                       text-sm tracking-wide sm 
                       h-auto
                       "
                >
                    Sign up
                </button>

            </div>
            <div className="w-full">


                <div className="grid grid-cols-6 w-full gap-2 place-items-center" >
                    <InstagramIcon />
                    <TickTockIcon />
                    <TickTockIcon />
                    <TickTockIcon />
                    <TickTockIcon />
                    <DarkModeSliderButton />

                </div>
            </div>
        </div >
    )
}