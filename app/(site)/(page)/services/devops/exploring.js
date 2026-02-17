import ExploringCard from './exploring-card';
import Image from 'next/image';
import SectionTitle from '@/app/(site)/component/common/sectionTitle';
import { Expertingsdevops } from '@/app/(site)/utils/menu';

const Exploring = () => {
    return (
        <div className='relative '>
            <Image src={'/Vector.png'} width={1000} height={500} alt='v' className='absolute -top-[20%] -z-10 h-[900px] md:-top-[30%]  w-full md:w-[60%] ' />
            <Image src={'/Vector2.png'} width={1000} height={500} alt='v' className='absolute -bottom-[30%] right-0 rotate-180 -z-10 h-[900px] md:top-[30%]  w-full md:w-[60%] ' />
            <div className='container mx-auto  font-poppins'>
                <SectionTitle title={"Our Approach to DevOps!"} des={"Exploring Our DevOps Process"} />
                <div className='flex flex-wrap justify-center lg:justify-start gap-5 mt-20  px-5 xl:px-0'>
                    {
                        Expertingsdevops?.map((item, index) => <ExploringCard data={item} key={index} /> )
                    }  
                </div>
            </div>
        </div>
    );
};

export default Exploring;