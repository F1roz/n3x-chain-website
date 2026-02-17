'use client'
import SectionTitle from '@/app/(site)/component/common/sectionTitle';
import { Daofeatures, nftDaofeatures } from '@/app/(site)/utils/menu';
import Image from 'next/image';

const DAOFeatures = () => {

    return (
        <div className='relative my-[100px]'>
            <Image src={'/Vector.png'} width={1000} height={500} alt='v' className='absolute -top-[20%] -z-10 h-[900px] md:-top-[30%]  w-full md:w-[60%] ' />
            <Image src={'/Vector2.png'} width={1000} height={500} alt='v' className='absolute -bottom-[30%] right-0 rotate-180 -z-10 h-[900px] md:top-[30%]  w-full md:w-[60%] ' />
            <section className="text-center py-12 max-w-[1230px] mx-auto font-poppins text-white ">
                <SectionTitle title={"Creating Digital Collectibles with Impeccable Rarity"} des={"Unlocking the Future with Our Expertise in NFT Development"} />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-8 px-3">
                    {nftDaofeatures.map((feature, index) => (
                        <div key={index} className="flex flex-col items-center text-center  bg-white/10 drop-shadow-sm lg:p-6 p-10  rounded-lg shadow-lg">
                            <div className="text-xl flex items-center justify-center mb-4 bg-blue-600 w-[35px] h-[35px] rounded-full">{feature?.num}</div>
                            <Image src={feature?.url} width={500} height={400} alt='image' className='w-[200px] mb-4 ' />
                            <h3 className="lg:text-xl text-lg font-semibold mb-2">{feature?.title}</h3>
                            <p className="lg:text-base text-sm">{feature?.description}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>

    );
}

export default DAOFeatures;
