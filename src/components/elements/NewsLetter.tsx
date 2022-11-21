
import { InstagramIcon, TickTockIcon, DarkModeSliderButton, Heading } from '~/components'



export const NewsLetter = () => {
    return (
        <div className='grid grid-rows-2 uppercase w-3/5'>

            <Heading size="lead" as="h3" className="uppercase justify-self-center dark:text-white">
                Sign up for our ApexAthlete
            </Heading>
            <Heading size="lead" as="h3" width='wide' className="justify-self-center dark:text-white  " >
                Newsletter
            </Heading>
            <div className=" grid grid-rows-2  py-4 "

            >
                <input
                    type="text"
                    placeholder="Email"
                    className="border border-gray-300 rounded-md p-2 mb-2 "
                />
                <button
                    className="bg-secondary-grey text-white p-2 rounded-md  font-bold uppercase  "
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
        </div>
    )
}