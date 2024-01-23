import { MailIcon, HomeIcon, PhoneCall } from 'lucide-react';
import Form from '@/components/Form'
const Contact = () => {
    return (
        <section>
            <div className='container mx-auto'>
                {/* info text & form */}
                <div className='grid xl: grid-cols-2 mb-24 xl:mb-32'>
                    {/* info text */}
                    <div className='flex flex-col gap-y-4 xl:gap-y-14 mb-12 xl:mb-24 text-base xl:text-lg'>
                        {/*mail */}
                        <div className='flex items-center gap-x-8'>
                            <MailIcon size={18} className='text-primary' />
                            <div>youremail@gmail.com</div>
                        </div>
                        {/* address */}
                            <div className='flex items-center gap-x-8'>
                                <HomeIcon size={18} className='text-primary' />
                                <div>8420 Pine Avenue, Meadowville MC 842</div>
                            </div>
                        {/* phone */}
                        <div className='flex items-center gap-x-8'>
                            <PhoneCall size={18} className='text-primary' />
                            <div>+44 123 546 7890</div>
                        </div>
                    </div>
                    <Form />
                </div>
            </div>
        </section >
    );
};
export default Contact;