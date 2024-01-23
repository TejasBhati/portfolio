'use client'

import { Button } from "@/components/ui/button"
import { MoonIcon, SunIcon } from "@radix-ui/react-icons"
import { useTheme } from "next-themes"


const ThemeToggler = () => {
    const { theme, setTheme } = useTheme();

    return (
        <div>
            <Button variant='outline'  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
                {theme === 'dark' ? (
                    <>
                        <SunIcon className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
                        <MoonIcon className='absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
                    </>
                ) : (
                    <>
                        <SunIcon className='absolute h-[1.2rem] w-[1.2rem] rotate-0 scale-100' />
                        <MoonIcon className='h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all' />
                    </>
                )}
            </Button>
        </div>
    );
}

export default ThemeToggler;
