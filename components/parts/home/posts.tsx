import { Link } from '@/components/atoms/link';
import Image from 'next/image';
import { HiDotsHorizontal } from 'react-icons/hi';

export const Posts = () => {
    return (
        <div>
            <div className="flex-col fleax">
                <div className="flex items-center justify-between px-4 py-3 border-t border-gray-300 rounded-t-md border-x">
                    <div className="flex items-center space-x-3">
                        <div className="p-[2px] bg-gradient-to-tr from-yellow-400 to-fuchsia-600 rounded-full">
                            <Link
                                href={'#'}
                                className="block p-[2px] bg-white rounded-full"
                            >
                                <div className="relative w-[30px] h-[30px] overflow-hidden rounded-full">
                                    <Image
                                        src={
                                            'https://images.unsplash.com/photo-1600880292630-ee8a00403024?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
                                        }
                                        alt={'Cat'}
                                        layout="fill"
                                        className="object-cover object-center"
                                    />
                                </div>
                            </Link>
                        </div>
                        <Link href={'#'} className="text-sm font-semibold">
                            tula_rambeh
                        </Link>
                    </div>
                    <button>
                        <HiDotsHorizontal className="w-5 h-5" />
                    </button>
                </div>
                <div className="relative border border-gray-300 aspect-square">
                    <Image
                        src="https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=860&q=80"
                        alt="Post 1"
                        layout="fill"
                        className="object-cover object-center"
                    />
                </div>
                <div className="px-4 py-3 border-gray-300 border-x ">
                    <div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-4">
                                    <button type="button">
                                        <svg
                                            aria-label="Love"
                                            color="#262626"
                                            fill="#262626"
                                            height={24}
                                            role="img"
                                            viewBox="0 0 24 24"
                                            width={24}
                                        >
                                            <path d="M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z" />
                                        </svg>
                                    </button>
                                    <button type="button">
                                        <svg
                                            aria-label="Comment"
                                            color="#262626"
                                            fill="#262626"
                                            height={24}
                                            role="img"
                                            viewBox="0 0 24 24"
                                            width={24}
                                        >
                                            <path
                                                d="M20.656 17.008a9.993 9.993 0 10-3.59 3.615L22 22z"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                            />
                                        </svg>
                                    </button>
                                    <button type="button">
                                        <svg
                                            aria-label="Share Post"
                                            color="#262626"
                                            fill="#262626"
                                            height={24}
                                            role="img"
                                            viewBox="0 0 24 24"
                                            width={24}
                                        >
                                            <line
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                x1={22}
                                                x2="9.218"
                                                y1={3}
                                                y2="10.083"
                                            />
                                            <polygon
                                                fill="none"
                                                points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334"
                                                stroke="currentColor"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <button>
                                <svg
                                    aria-label="Save"
                                    color="#262626"
                                    fill="#262626"
                                    height={24}
                                    role="img"
                                    viewBox="0 0 24 24"
                                    width={24}
                                >
                                    <polygon
                                        fill="none"
                                        points="20 21 12 13.44 4 21 4 3 20 3 20 21"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                    />
                                </svg>
                            </button>
                        </div>
                        <div className="py-2 text-sm font-semibold">
                            127 likes
                        </div>
                        <Link href={'#'} className="text-sm font-semibold">
                            <span>tula_rambeh</span>
                            <span className="ml-2 font-normal">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Vero, animi?
                            </span>
                        </Link>
                        <div className="text-sm">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Veritatis quasi quibusdam magni, deserunt,
                            dignissimos assumenda iure consectetur inventore
                            nemo in odit? Sed dolor a, quod pariatur quas rerum
                            esse veritatis.
                        </div>
                        <div className="flex flex-col items-start py-2 space-y-2">
                            <button
                                type="button"
                                className="text-xs text-gray-400"
                            >
                                View all 100 comments
                            </button>
                            <span className="text-xs text-gray-400 uppercase">
                                1 Days ago
                            </span>
                        </div>
                    </div>
                </div>
                <div className="px-4 py-3 border border-gray-300 rounded-b-md">
                    <div className="flex items-center space-x-4">
                        <button>
                            <svg
                                aria-label="Emoji"
                                color="#262626"
                                fill="#262626"
                                height={24}
                                role="img"
                                viewBox="0 0 24 24"
                                width={24}
                            >
                                <path d="M15.83 10.997a1.167 1.167 0 101.167 1.167 1.167 1.167 0 00-1.167-1.167zm-6.5 1.167a1.167 1.167 0 10-1.166 1.167 1.167 1.167 0 001.166-1.167zm5.163 3.24a3.406 3.406 0 01-4.982.007 1 1 0 10-1.557 1.256 5.397 5.397 0 008.09 0 1 1 0 00-1.55-1.263zM12 .503a11.5 11.5 0 1011.5 11.5A11.513 11.513 0 0012 .503zm0 21a9.5 9.5 0 119.5-9.5 9.51 9.51 0 01-9.5 9.5z" />
                            </svg>
                        </button>
                        <input
                            type="text"
                            placeholder="Add a comment..."
                            className="block w-full h-8 text-sm focus:outline-none"
                        />
                        <button type="button" className="text-sm text-sky-500 ">
                            Post
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
