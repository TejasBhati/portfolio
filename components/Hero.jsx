import Link from "next/link"
import { Button } from "./ui/button"
import { Download, Send } from "lucide-react"
import { RiBriefcase4Fill, RiTeamFill, RiTodoFill, RiArrowDownSLine } from 'react-icons/ri'
import DevloperImage from "./DevloperImage"
import Badge from "./Badge"
import SocialMedias from "./SocialMedias"
    

const Hero = () => {
    return (
        <section className="py-8 xl:py-8 h-[90vh] xl: bg-hero bg-cover bg-no-repeat bg-bottom dark:bg-none">
            <div className="container mx-auto">
                <div className="flex justify-between gap-x-8">
                    {/* text */}
                    <div className='flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 xl:text-left text-center '>
                        <div className='text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]'>Frontend Engineer</div>

                        <h1 className="h1 mb-4">Hello, my name is Tejas Bhati</h1>
                        <p className="subinfo max-w-[490px]  mx-auto xl:mx-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis veniam expedita quaerat! A nulla, corrupti nostrum vero nihil amet natus voluptatum debitis, laudantium aliquid dignissimos nisi, id dolor exercitationem! Officiis?</p>
                        {/* button */}
                        <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
                            <Link href='/contact'>
                                <Button className='gap-x-2'> Contact me <Send size={18} />
                                </Button>
                            </Link>

                            <Button variant='secondary' className='gap-x-2'> Download CV <Download size={18} />
                            </Button>

                        </div>
                        <SocialMedias containerStyles='flex gap-x-6 mx-auto xl:mx-0' iconsStyles='text-foreground text-[22px] hover: text-primary transition-all'
                        />
                    </div>
                    {/* image */}
                    <div className="hidden xl:flex relative">
                        {/* badge1 */}
                        <Badge containerStyles='absolute top-[35%] right-[24rem]'
                        icon={<RiBriefcase4Fill />} endCountNum={6} badgeText='Months of Experience' />
                        {/* badge2 */}
                        <Badge containerStyles='absolute top-[83%] -left-[12rem]'
                        icon={<RiTodoFill />} endCountNum={8}  endCountText='+' badgeText='Academic Projects' />
                        {/* badge3 */}
                        <Badge 
                        icon={<RiTeamFill />} endCountNum={9.2} badgeText='CGPA' />
                        <div className="bg-hero_shape_2_light dark:bg-hero_shape_2_dark w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2">
                            <DevloperImage containerStyles="bg-hero_shape w-[509px] h-[462px] bg-no-repeat relative bg-bottom" imageSrc='/about/tejas.png' />
                        </div>
                    </div>
                </div>
                {/* icons */}
                <div className="hidden md:flex absolute left-2/4 bottom-12 xl:bottom-12 animate-bounce">
                    <RiArrowDownSLine className="text-3xl text-primary" />
                </div>

            </div>
        </section>
    )
}

export default Hero
