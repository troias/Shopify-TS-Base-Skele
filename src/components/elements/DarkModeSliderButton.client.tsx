import React, { useEffect, useState } from 'react'




export const DarkModeSliderButton = () => {
    const { darkMode, setDarkMode } = useDarkMode()
    // rpunded darmmode slider button
    return (

        <div className="flex items-center justify-start w-24 h-20 bg-gray-300 border-2 rounded-xl w-full">
            {/* moon and sun button that change and transition based on mode */}

            {
                // button with moon svg inside 
                darkMode ? (
                    <button
                        onClick={() => setDarkMode(!darkMode)}
                        className="flex items-center justify-center w-8 h-8 bg-gray-300 rounded-xl transition-all duration-300 ease-in-out transform translate-x-8"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-gray-800"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path

                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}

                                d="M12 3v1m0 16v1m9-9h-1m-16 0h-1m4.304-4.304l-.707-.707m8.485 8.485l-.707-.707m-8.485-.707l.707-.707m8.485 0l.707-.707M12 12a9 9 0 100-18 9 9 0 000 18z"
                            />
                        </svg>
                    </button>
                ) : (
                    // button with sun svg inside
                    <button
                        onClick={() => setDarkMode(!darkMode)}
                        className="flex items-center justify-center w-8 h-8 bg-gray-300 rounded-xl transition-all duration-300 ease-in-out transform translate-x-0"
                    >
                        <svg

                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-gray-800"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path

                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 3a9 9 0 100 18 9 9 0 000-18z"
                            />
                        </svg>
                    </button>
                )



            }





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
