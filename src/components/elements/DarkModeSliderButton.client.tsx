import React, { useEffect, useState } from 'react'




export const DarkModeSliderButton = () => {
    const { darkMode, setDarkMode } = useDarkMode()
    // rpunded darmmode slider button
    return (



        // onclick slide left to right 

        <div className="flex items-center justify-start w-full h-6 bg-gray-300 rounded-full dark:bg-white px-1 ">
            <div
                className={`w-4 h-4 bg-white rounded-full shadow transform duration-300 ease-in-out ${darkMode ? 'translate-x-9 dark:bg-black' : ''
                    }`}
                onClick={() => setDarkMode(!darkMode)}
            ></div>
        </div>















    )
}


const useDarkMode = () => {
    const [darkMode, setDarkMode] = useState(false)

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [darkMode])

    return { darkMode, setDarkMode }
}
