import DevloperImage from "./DevloperImage"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs"
import { User2, MailIcon, HomeIcon, PhoneCall, GraduationCap, Calender, Briefcase } from "lucide-react"

const informationData = [
    {
        icon: <User2 size={20} />,
        text: 'Tejas Bhati',
    },
    {
        icon: <PhoneCall size={20} />,
        text: '+91 7517470030',
    },
    {
        icon: <MailIcon size={20} />,
        text: 'tejasbhati112002@gmail.com',
    },
    {
        icon: <GraduationCap size={20} />,
        text: 'Bachelors of Computer Science and Information Technolohgy',
    },
    {
        icon: <HomeIcon size={20} />,
        text: 'Akola, Maharashtra',
    }

];

const skillsData = [
    {
        title: 'skills',
        data: [
            {
                name: 'HTML,CSS',
            },
            {
                name: 'Reactjs',
            },
            {
                name: 'Laravel',
            },
            {
                name: 'Github',
            },
            {
                name: 'Machine Learning',
            },
        ]
    },
    {
        title: 'tools',
        data: [
            {
                iconPath: '/about/vscode.svg',
            },
            {
                iconPath: '/about/figma.svg',
            },
            {
                iconPath: '/about/notion.svg',
            },
            {
                iconPath: '/about/wordpress.svg',
            },

        ]
    }

];

const qualificationsData = [
    {
        title: 'education',
        data: [
            {
                university: 'Symbiosis University of Applied Sciences',
                qualification: 'Bachelor of Computer Science and Information Technology',
                years: '2020-2024'
            },
            {
                university: 'School of Scholars',
                qualification: 'Bachelor of Computer Science and Information Technology',
                years: '2018-2020'
            },
            {
                university: 'School of Scholars',
                qualification: 'Bachelor of Computer Science and Information Technology',
                years: '2017-2018'
            },
        ]
    },
    {
        title: 'experience',
        data: [
            {
                company: 'Bigul',
                role: 'Software Developer Intern',
                years: '2022-2023'
            },
            {
                company: 'TCS',
                role: 'Software Development Mentorship',
                years: '2021-2022'
            },
            {
                company: 'Media Head',
                role: 'symbiosis',
                years: '2022-2023'
            },
        ]
    }

];
const About = () => {
    const getData = (arry, title) => {
        return arry.find((item) => item.title === title)
    }

    return (
        <section className='xl:h-[840px] pb-12 xl:py-24 top-[-8px]'>
            <div className='container mx-auto'>
                <h2 className='section-title mt-12 xl:mb-16 text-center mx-auto'>About me</h2>
                <div className="flex flex-colxl:flex-row">
                    <div className="hidden xl:flex flex-1 relative">
                        {/* image */}
                        <DevloperImage containerStyles='bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative' imageSrc='/about/tejas.png' />

                    </div>
                    {/* tabs */}
                    <div className='flex-1'>
                        <Tabs defaultValue='personal'>
                            <TabsList className='w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none'>
                                <TabsTrigger className='w-[162px] xl:w-auto ' value='personal'>Personal Information</TabsTrigger>
                                <TabsTrigger className='w-[162px] xl:w-auto ' value='qualifications'>Qualifications</TabsTrigger>
                                <TabsTrigger className='w-[162px] xl:w-auto ' value='skills'>Skills</TabsTrigger>
                            </TabsList>
                            {/* tabs content */}
                            <div className='text-lg mt-12 xl:mt-8'>
                                {/* personal */}

                                <TabsContent value='personal'>
                                    <div className="text-center xl:text-left">
                                        <h3 className="h3 mb-4">I am an Fresher Lookimg for opportunies to grow and build </h3>
                                        <p className='subtitle max-w-xl mx-auto xl:mx-0 mb-8'>
                                            Specialized lin Lorem, ipsum dolor sit distinctio, aliquam dolore tempore quibusdam officia dolores sed. Similique impedit quam optio dolorum?
                                        </p>
                                        {/* icons */}
                                        <div className='grid xl:grid-cols-2 gap-4 mb-12 '>
                                            {informationData.map((item, index) => {
                                                return <div className='flex  gap-x-4 mx-auto xl:mx-0 ' key={index}>
                                                    <div className='text-primary'>{item.icon}</div>
                                                    <div>{item.text}</div>
                                                </div>
                                            })}
                                        </div>
                                        {/* languages */}
                                        <div className="flex flex-col gap-y-2">
                                            <div className="text-primary">Language Skill</div>
                                            <div className="border-b border-border"></div>
                                            <div>English,Hindi,Marathi</div>
                                        </div>
                                    </div>


                                </TabsContent>
                                <TabsContent value='qualifications'>
                                    {/* qualification info */}
                                    <h3 className="h3 mb-8 text-center xl:text-left">
                                        My Awesome Journey
                                    </h3>
                                    {/* experience and education wrapper */}
                                    <div className='grid md:grid-cols-2 gap-y-8'>
                                        {/* experience */}
                                        <div className='flex flex-col gap-y-6'>
                                            <div className='flex gap-x-4 items-center text-[22px] text-primary'>
                                                <Briefcase />
                                                <h4 className='capitalize font-medium'>
                                                    {getData(qualificationsData, 'experience').title}
                                                </h4>
                                            </div>
                                            {/* list */}
                                            <div className='flex flex-col gap-y-8'>
                                                {getData(qualificationsData, 'experience').data.map((item, index) => {
                                                    const { company, role, years } = item;
                                                    return (
                                                        <div className='flex gap-x-8 group' key={index}>
                                                            <div className='h-[84px] w-[1px] bg-border relative ml-2'>
                                                                <div className='w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500' ></div>
                                                            </div>
                                                            <div>
                                                                <div className='font-semibold text-xl leading-none mb-2'>{company}</div>
                                                                <div className='text-lg leading-none text-muted-foreground mb-4'>{role}</div>
                                                                <div className='text-base font-medium'>{years}</div>
                                                            </div>
                                                        </div>

                                                    );
                                                }
                                                )}
                                            </div>
                                        </div>
                                        {/* education */}
                                        <div className='flex flex-col gap-y-6'>
                                            <div className='flex gap-x-4 items-center text-[22px] text-primary'>
                                                <GraduationCap size={28} />
                                                <h4 className='capitalize font-medium'>
                                                    {getData(qualificationsData, 'education').title}
                                                </h4>
                                            </div>
                                            {/* list */}
                                            <div className='flex flex-col gap-y-8'>
                                                {getData(qualificationsData, 'education').data.map((item, index) => {
                                                    const { university, qualification, years } = item;
                                                    return (
                                                        <div className='flex gap-x-8 group' key={index}>
                                                            <div className='h-[84px] w-[1px] bg-border relative ml-2'>
                                                                <div className='w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500' ></div>
                                                            </div>
                                                            <div>
                                                                <div className='font-semibold text-xl leading-none mb-2'>{university}</div>
                                                                <div className='text-lg leading-none text-muted-foreground mb-4'>{qualification}</div>
                                                                <div className='text-base font-medium'>{years}</div>
                                                            </div>
                                                        </div>

                                                    );
                                                }
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </TabsContent>
                                <TabsContent value='skills'>
                                    <div className='text-center xl:text-left'>
                                            <h3 className="h3 mb-8">
                                                Tools i use Everyday
                                            </h3>
                                            {/* skills  */}
                                            <div className='mb-16'>
                                                <h4 className="text-xl font-semibold mb-2">Skills</h4>
                                                <div className="border-b border-border mb-4"></div>
                                                {/* skill list */}
                                                <div>
                                                    {getData(skillsData,'skills').data.map((item,index)=>{
                                                        const {name} = item;
                                                        return <div className='w-2/4 text-center xl:text-left mx-auto xl:mx-0' key={index}>
                                                            <div className='font-medium'>{name}</div>
                                                            </div>
                                                    })}
                                                </div>
                                            </div>
                                            {/* tools */}
                                            <div className='text-xl font-semibold mb-2 xl:text-left'>
                                                <h4 className="text-xl font-semibold mb-2">Tools</h4>
                                                <div className="border-b border-border mb-4"></div>
                                                {/* tools list */}
                                                <div className='flex gap-x-8 justify-center xl:justify-start' >
                                                    {getData(skillsData,'tools').data.map((item,index)=>{
                                                        const {iconPath} =item;
                                                        return <div>
                                                            <Image src={iconPath} width={48} height={48} alt ='' priority     />
                                                            </div>
                                                    })}
                                                </div>

                                            </div>
                                    </div>
                                </TabsContent>
                            </div>
                        </Tabs>
                    </div >

                </div >
            </div >
        </section >
    )
}

export default About