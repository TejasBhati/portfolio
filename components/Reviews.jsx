// import required modules
'use client';
// import swiper styles
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';
import { Card, CardHeader,CardTitle, CardDescription } from "./ui/card";
import Image from 'next/image';
const reviewsData = [
    {
        avatar: 'https://media.githubusercontent.com/media/TejasBhati/portfolio/main/public/reviews/avatar-1.png',
        name: 'Richard Thompson',
        job:
            'Chef',
        review:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quos quo voluptas tempora delectus dicta.',
    },
    {
        avatar: 'https://media.githubusercontent.com/media/TejasBhati/portfolio/main/public/reviews/avatar-2.png',
        name: 'Richard Thompson',
        job:
            'Chef',
        review:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quos quo voluptas tempora delectus dicta.',
    },
    {
        avatar: 'https://media.githubusercontent.com/media/TejasBhati/portfolio/main/public/reviews/avatar-3.png',
        name: 'Richard Thompson',
        job:
            'Chef',
        review:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quos quo voluptas tempora delectus dicta.',
    },
    {
        avatar: 'https://media.githubusercontent.com/media/TejasBhati/portfolio/main/public/reviews/avatar-5.png',
        name: 'Richard Thompson',
        job:
            'Chef',
        review:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quos quo voluptas tempora delectus dicta.',
    }
];
const Reviews = () => {
    return <section className='mb-12 xl:mb-32'>
        <div className='container mx-auto'>
            <h2 className='section-title mb-12 text-center mx-auto'>Reviews</h2>
            {/* slider */}
            <Swiper
                slidesPerView={1}
                breakpoints={{
                    640: { slidesPerView: 2 },
                    1400: { slidesPerView: 3 },
                }}
                spaceBetween={30}
                modules={[Pagination]}
                pagination={{
                    clickable: true,
                }}
                className='h-[350px]'>
                {reviewsData.map((person, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <Card className='bg-tertiary dark:bg-secondary/40 p-8 min-h-[300px]'>
                                <CardHeader className='p-0 mb-10'>
                                    <div className='flex items-center gap-x-4'>
                                        {/* image */}
                                        <Image
                                            src={person.avatar}
                                            width={70}
                                            height={70}
                                            alt=''
                                            priority
                                        />
                                        {/* name */}
                                        <div className='flex flex-col'>
                                            <CardTitle>{person.name}</CardTitle>
                                            <p>{person.job}</p>
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardDescription className='text-lg text-muted-foreground '>
                                    {person.review}
                                </CardDescription>
                            </Card>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    </section >;
};

export default Reviews