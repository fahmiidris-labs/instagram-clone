import Image from 'next/image';
import { useState } from 'react';
import { FaFacebookSquare } from 'react-icons/fa';

import iphone from '@/assets/images/iphone-mockup.png';
import appstore from '@/assets/images/app-store.png';
import googleplay from '@/assets/images/google-play.png';

import { Main } from '@/components/main';
import { AppLayout } from '@/components/templates/app-layout';

import type { NextPageWithLayout } from '@/types/app.type';
import { useAuthContext } from '@/hooks/useAuthContext';
import { Link } from '@/components/atoms/link';
import { Stories } from '@/components/parts/home/stories';
import { HiDotsHorizontal } from 'react-icons/hi';

type TContinueWithFacebook = {
    setContinueWithFacebook: (value: boolean) => void;
};

type TPost = {
    username: string;
    profile: string;
    content: {
        image: string;
        caption: string;
    };
};

const links: { title: string; href: string }[] = [
    {
        title: 'Meta',
        href: '#'
    },
    {
        title: 'About',
        href: '#'
    },
    {
        title: 'Blog',
        href: '#'
    },
    {
        title: 'Jobs',
        href: '#'
    },
    {
        title: 'Help',
        href: '#'
    },
    {
        title: 'API',
        href: '#'
    },
    {
        title: 'Privacy',
        href: '#'
    },
    {
        title: 'Terms',
        href: '#'
    },
    {
        title: 'Top Accounts',
        href: '#'
    },
    {
        title: 'Hastags',
        href: '#'
    },
    {
        title: 'Locations',
        href: '#'
    },
    {
        title: 'Instagram Lite',
        href: '#'
    },
    {
        title: 'Beauty',
        href: '#'
    },
    {
        title: 'Dance',
        href: '#'
    },
    {
        title: 'Fitness',
        href: '#'
    },
    {
        title: 'Food & Drink',
        href: '#'
    },
    {
        title: 'Home & Garden',
        href: '#'
    },
    {
        title: 'Music',
        href: '#'
    },
    {
        title: 'Visual Arts',
        href: '#'
    }
];

const suggesionlinks: { title: string; href: string }[] = [
    {
        title: 'About',
        href: '#'
    },
    {
        title: 'Help',
        href: '#'
    },
    {
        title: 'Press',
        href: '#'
    },
    {
        title: 'API',
        href: '#'
    },
    {
        title: 'Privacy',
        href: '#'
    },
    {
        title: 'Terms',
        href: '#'
    },
    {
        title: 'Top Accounts',
        href: '#'
    },
    {
        title: 'Hastags',
        href: '#'
    },
    {
        title: 'Locations',
        href: '#'
    }
];

const suggestions: { username: string; desc: string; image: string }[] = [
    {
        username: '_skaiu187',
        desc: 'Followed by Agung',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
    },
    {
        username: 'jhon_edward12',
        desc: 'Followed by Hapsah',
        image: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
    },
    {
        username: 'siti_alisai1212',
        desc: 'Followed by Gundar',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
    },
    {
        username: 'Fiktori',
        desc: 'Followed by _skaiu187',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
    }
];

const posts: TPost[] = [
    {
        username: 'ergie12',
        profile:
            'https://images.unsplash.com/photo-1600880292630-ee8a00403024?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
        content: {
            caption: 'Awokowokwowkkowwokwokowkowkowkowkwk',
            image: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=860&q=80'
        }
    },
    {
        username: 'agus_332',
        profile:
            'https://images.unsplash.com/photo-1560145393-2f79d01cabc5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80',
        content: {
            caption: 'Hai nama ku agus, kucing di asrama bandung',
            image: 'https://images.unsplash.com/photo-1560145393-2f79d01cabc5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80'
        }
    },
    {
        username: 'agus_332',
        profile:
            'https://images.unsplash.com/photo-1560145393-2f79d01cabc5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80',
        content: {
            caption: 'Hai nama ku agus, kucing di asrama bandung',
            image: 'https://images.unsplash.com/photo-1566765790386-c43812572bc2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80'
        }
    }
];

const Home: NextPageWithLayout = () => {
    const { state } = useAuthContext();

    if (!state.isLoggedIn) {
        return <NotLoggedIn />;
    }

    return (
        <Main className="container relative pt-24">
            <div className="grid grid-cols-12 gap-8">
                <div className="col-span-8">
                    <Stories />
                    <div className="min-h-screen py-5 space-y-4">
                        {posts.map((post, idx) => (
                            <div key={idx} className="flex flex-col">
                                <div className="flex items-center justify-between px-4 py-3 border-t border-gray-300 rounded-t-md border-x">
                                    <div className="flex items-center space-x-3">
                                        <div className="p-[2px] bg-gradient-to-tr from-yellow-400 to-fuchsia-600 rounded-full">
                                            <Link
                                                href={'#'}
                                                className="block p-[2px] bg-white rounded-full"
                                            >
                                                <div className="relative w-[30px] h-[30px] overflow-hidden rounded-full">
                                                    <Image
                                                        src={post.profile}
                                                        alt={'Cat'}
                                                        layout="fill"
                                                        className="object-cover object-center"
                                                    />
                                                </div>
                                            </Link>
                                        </div>
                                        <Link
                                            href={'#'}
                                            className="text-sm font-semibold"
                                        >
                                            {post.username}
                                        </Link>
                                    </div>
                                    <button type="button">
                                        <HiDotsHorizontal className="w-5 h-5" />
                                    </button>
                                </div>
                                <div className="relative border border-gray-300 aspect-square">
                                    <Image
                                        src={post.content.image}
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
                                        <Link
                                            href={'#'}
                                            className="text-sm font-semibold"
                                        >
                                            <span>{post.username}</span>
                                            <span className="ml-2 font-normal">
                                                {post.content.caption}
                                            </span>
                                        </Link>
                                        <div className="text-sm">
                                            Lorem ipsum dolor sit amet
                                            consectetur adipisicing elit.
                                            Veritatis quasi quibusdam magni,
                                            deserunt, dignissimos assumenda iure
                                            consectetur inventore nemo in odit?
                                            Sed dolor a, quod pariatur quas
                                            rerum esse veritatis.
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
                                        <button
                                            type="button"
                                            className="text-sm text-sky-500 "
                                        >
                                            Post
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="w-full col-span-4">
                    <div className="sticky top-[120px]">
                        <div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-4">
                                    <div className="relative aspect-square h-[60px] rounded-full overflow-hidden">
                                        <Image
                                            src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=785&q=80"
                                            alt="Profile Pict"
                                            layout="fill"
                                            className="object-cover object-center"
                                        />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-800">
                                            _fahmiidris.a
                                        </h3>
                                        <p className="text-sm text-gray-500">
                                            Fahmi Idris A
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <button
                                        type="button"
                                        className="text-sm text-sky-500 "
                                    >
                                        Switch
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="pt-5">
                            <div className="flex items-center justify-between">
                                <h3 className="text-sm font-semibold text-gray-500">
                                    Suggestions For You
                                </h3>
                                <Link href="/" className="text-xs">
                                    See All
                                </Link>
                            </div>
                            <div className="flex flex-col py-5 space-y-3">
                                {suggestions.map((suggestion, idx) => (
                                    <div
                                        key={idx}
                                        className="flex items-center justify-between"
                                    >
                                        <div className="flex items-center space-x-4">
                                            <div className="relative aspect-square h-[30px] rounded-full overflow-hidden">
                                                <Image
                                                    src={suggestion.image}
                                                    alt={suggestion.username}
                                                    layout="fill"
                                                    className="object-cover object-center"
                                                />
                                            </div>
                                            <div>
                                                <h3 className="text-sm font-semibold text-gray-800">
                                                    {suggestion.username}
                                                </h3>
                                                <p className="text-xs text-gray-500">
                                                    {suggestion.desc}
                                                </p>
                                            </div>
                                        </div>
                                        <div>
                                            <button
                                                type="button"
                                                className="text-xs text-sky-500 "
                                            >
                                                Follow
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="flex flex-col items-start justify-start max-w-2xl py-3 mx-auto text-gray-400">
                                <ul className="flex flex-wrap justify-start">
                                    {suggesionlinks.map((link, idx) => (
                                        <li key={idx}>
                                            <a
                                                href={link.href}
                                                className="px-1 text-[10px]"
                                            >
                                                {link.title}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                                <span className="pt-5 text-xs uppercase">
                                    © 2022 Instagram Clone from Fahmi Idris
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Main>
    );
};

const NotLoggedIn = () => {
    const [withFacebook, setWithFacebook] = useState<boolean>(false);

    const setContinueWithFacebook = (value: boolean) => {
        setWithFacebook(value);
    };

    return (
        <Main className="container">
            <div className="flex items-center justify-center min-h-screen">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div className="hidden md:block">
                        <div className="relative h-[600px]">
                            <Image
                                src={iphone}
                                alt="Mockup"
                                layout="fill"
                                priority={true}
                                className="object-cover object-center"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col justify-center space-y-4">
                        <div className="w-[350px] border border-gray-200">
                            {withFacebook ? (
                                <ContinueWithFacebook
                                    setContinueWithFacebook={
                                        setContinueWithFacebook
                                    }
                                />
                            ) : (
                                <ContinueWithoutFacebook
                                    setContinueWithFacebook={
                                        setContinueWithFacebook
                                    }
                                />
                            )}
                        </div>
                        {!withFacebook && (
                            <>
                                <div className="w-[350px] border border-gray-200 p-5 text-sm">
                                    <div className="flex items-center justify-center">
                                        <span>Don&apos;t have an account?</span>
                                        <a
                                            href="#"
                                            className="px-2 font-semibold text-sky-500"
                                        >
                                            Sign Up
                                        </a>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center justify-center">
                                    <h3 className="pb-4">Get the app</h3>
                                    <div className="flex items-center space-x-4">
                                        <button
                                            type="button"
                                            className="relative w-full h-full"
                                        >
                                            <Image
                                                src={appstore}
                                                alt="App Store"
                                                width={120}
                                                height={40}
                                                className="object-cover object-center"
                                            />
                                        </button>
                                        <button
                                            type="button"
                                            className="relative w-full h-full"
                                        >
                                            <Image
                                                src={googleplay}
                                                alt="Google Play"
                                                width={135}
                                                height={40}
                                                className="object-cover object-center"
                                            />
                                        </button>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center max-w-2xl pb-10 mx-auto text-gray-400">
                <ul className="flex flex-wrap justify-center">
                    {links.map((link, idx) => (
                        <li key={idx}>
                            <a href={link.href} className="px-2 text-xs">
                                {link.title}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </Main>
    );
};

const ContinueWithFacebook = ({
    setContinueWithFacebook
}: TContinueWithFacebook) => {
    const { dispatch } = useAuthContext();

    return (
        <div className="flex flex-col items-center justify-center p-8">
            <h1 className="text-5xl font-semibold font-instagram">Instagram</h1>
            <div className="flex flex-col items-center justify-center py-6 space-y-5">
                <div className="relative aspect-square h-[100px] rounded-full overflow-hidden">
                    <Image
                        src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=785&q=80"
                        alt="Profile Pict"
                        layout="fill"
                        className="object-cover object-center"
                    />
                </div>
                <button
                    type="button"
                    onClick={() =>
                        dispatch({
                            type: 'LOGIN_SUCCESS',
                            payload: {
                                id: 1,
                                name: 'Fahmi Idris'
                            }
                        })
                    }
                    className="px-6 py-1 text-sm text-white rounded bg-sky-500"
                >
                    Continue as _fahmiidris.a
                </button>
                <div className="flex text-sm">
                    <span className="mr-2">Not _fahmiidris.a?</span>
                    <button
                        type="button"
                        onClick={() => setContinueWithFacebook(false)}
                        className="font-semibold text-sky-500"
                    >
                        Switch accounts
                    </button>
                </div>
            </div>
        </div>
    );
};

const ContinueWithoutFacebook = ({
    setContinueWithFacebook
}: TContinueWithFacebook) => {
    return (
        <div className="flex flex-col items-center justify-center p-8">
            <h1 className="text-5xl font-semibold font-instagram">Instagram</h1>
            <div className="flex flex-col items-center justify-center w-full max-w-full pt-6 space-y-5">
                <form className="w-full px-3 space-y-3">
                    <div className="relative">
                        <div className="relative">
                            <input
                                id="email"
                                name="email"
                                type="text"
                                className="w-full h-[42px] px-3 text-gray-900 placeholder-transparent border border-gray-200 peer focus:outline-none text-[12px] pt-3"
                                placeholder="Phone number, username, or email"
                            />
                            <label
                                htmlFor="email"
                                className="absolute left-0 px-3 text-[12px] text-gray-400 transition-all top-[3px] peer-placeholder-shown:top-3 peer-focus:top-[3px]"
                            >
                                Phone number, username, or email
                            </label>
                        </div>
                    </div>
                    <div className="relative">
                        <input
                            id="password"
                            name="password"
                            type="password"
                            className="w-full h-[42px] px-3 text-gray-900 placeholder-transparent border border-gray-200 peer focus:outline-none text-[12px] pt-3"
                            placeholder="Password"
                        />
                        <label
                            htmlFor="password"
                            className="absolute left-0 px-3 text-[12px] text-gray-400 transition-all top-1 peer-placeholder-shown:top-3 peer-focus:top-1"
                        >
                            Password
                        </label>
                    </div>
                    <div>
                        <button
                            type="button"
                            className="block w-full py-[5px] text-sm text-white rounded bg-sky-500/50"
                        >
                            Log In
                        </button>
                    </div>
                </form>
                <div className="relative w-full px-3 py-3">
                    <hr />
                    <div className="absolute inset-x-0 top-0 flex items-center justify-center">
                        <span className="px-3 font-semibold text-gray-500 bg-white">
                            OR
                        </span>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center space-y-4">
                    <button
                        type="button"
                        onClick={() => setContinueWithFacebook(true)}
                        className="flex items-center justify-center space-x-3 text-sm text-blue-800"
                    >
                        <FaFacebookSquare className="w-5 h-5 text-blue-800" />
                        <span>Log in with Facebook</span>
                    </button>

                    <Link href="/forgot-password" className="text-xs">
                        Forgot Password?
                    </Link>
                </div>
            </div>
        </div>
    );
};

Home.layoutProps = {
    Layout: AppLayout,
    meta: {
        title: 'Instagram'
    }
};

export default Home;
