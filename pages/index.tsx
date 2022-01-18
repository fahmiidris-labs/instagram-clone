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

type TContinueWithFacebook = {
    setContinueWithFacebook: (value: boolean) => void;
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
                    <div className="min-h-screen pt-5">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Dolore id possimus omnis molestias? Rerum
                        repellendus eveniet dolorem explicabo facere, sapiente
                        esse asperiores obcaecati, molestiae labore vitae est
                        itaque, mollitia dolorum.
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
                            <div className="flex flex-col pt-5 space-y-3">
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
                        </div>
                    </div>
                </div>
            </div>
        </Main>
    );
};

const NotLoggedIn = () => {
    const [withFacebook, setWithFacebook] = useState<boolean>(true);

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
