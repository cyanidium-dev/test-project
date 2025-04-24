'use client';

import { SliderItemProps } from '@/app/types/components/carousel-item';
import Image from 'next/image';


export default function SliderItem({
    avatar,
    name,
    position,
    task,
    review,
}: SliderItemProps) {
    return (
        <>
            <div className="relative w-[300px] h-[450px] rounded-xl p-[1px]"
                style={{
                    background: 'linear-gradient(to bottom, #EBF0FF, #4D62CA, #1A1033)',
                    borderRadius: '12px',
                }}
            >
                {
                    review
                        ?
                        <div className="w-full h-full flex flex-col rounded-xl overflow-hidden"
                            style={{
                                background: 'linear-gradient(to bottom, #020418 80%, #0A157E 100%)',
                                borderRadius: '11px',
                            }}
                        >
                            <div className="flex items-center gap-4 p-6">
                                <div className="w-14 h-14 rounded-full overflow-hidden">
                                    <Image
                                        src={avatar}
                                        alt={name}
                                        width={74}
                                        height={74}
                                        className="object-cover"
                                    />
                                </div>
                                <div>
                                    <h3 className="text-white font-medium text-lg">{name}</h3>
                                    <p className="text-gray-400 text-sm">{position}</p>
                                </div>
                            </div>

                            <div className="bg-[#EAEBFF] text-black px-6 py-3 flex justify-between items-center relative">
                                <div>
                                    <p className="text-base font-semibold uppercase tracking-wide">Наше Завдання</p>
                                    <p className="text-sm">{task}</p>
                                </div>
                                <Image width={28} height={28} src='/images/Star3.svg' alt='star-image' className='absolute top-2 right-2' />
                            </div>

                            <div className="px-4 py-6 text-white text-sm leading-relaxed flex-grow">
                                <p className="text-gray-300 text-sm leading-relaxed">{review}</p>
                            </div>
                        </div>
                        :
                        <div
                            className="w-full px-6 h-full flex flex-col rounded-xl overflow-hidden bg-cover bg-center"
                            style={{
                                backgroundImage: `url(${avatar})`,
                                borderRadius: '11px',
                            }}
                        >
                            <div className="py-6 text-white">
                                <h3 className="font-medium text-xl">{name}</h3>
                                <p className="font-light text-sm">{position}</p>
                            </div>

                            <div className="mt-auto pb-6 text-[#EAEBFF]">
                                <p className="text-base font-semibold uppercase tracking-wide">Наше Завдання</p>
                                <p className="text-sm">{task}</p>
                            </div>
                        </div>
                }

            </div>
        </>
    );
}