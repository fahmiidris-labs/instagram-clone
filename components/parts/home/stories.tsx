import Image from 'next/image';

import { Link } from '@/components/atoms/link';

const stories: { username: string; href: string; image: string }[] = [
    {
        username: 'meong_12',
        href: '#',
        image: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80'
    },
    {
        username: 'meong_12',
        href: '#',
        image: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80'
    },
    {
        username: 'meong_12',
        href: '#',
        image: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80'
    },
    {
        username: 'meong_12',
        href: '#',
        image: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80'
    },
    {
        username: 'meong_12',
        href: '#',
        image: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80'
    },
    {
        username: 'meong_12',
        href: '#',
        image: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80'
    },
    {
        username: 'meong_12',
        href: '#',
        image: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80'
    },
    {
        username: 'meong_12',
        href: '#',
        image: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80'
    },
    {
        username: 'meong_12',
        href: '#',
        image: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80'
    },
    {
        username: 'meong_12',
        href: '#',
        image: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80'
    },
    {
        username: 'meong_12',
        href: '#',
        image: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80'
    },
    {
        username: 'meong_12',
        href: '#',
        image: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80'
    },
    {
        username: 'meong_12',
        href: '#',
        image: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80'
    },
    {
        username: 'meong_12',
        href: '#',
        image: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80'
    },
    {
        username: 'meong_12',
        href: '#',
        image: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80'
    }
];

export const Stories = () => {
    return (
        <div className="p-3 px-3 overflow-hidden border border-gray-300 rounded-md">
            <div>
                <ul className="flex space-x-3">
                    {stories.map((story, idx) => (
                        <li
                            key={idx}
                            className="flex flex-col items-center space-y-1"
                        >
                            <div className="p-[2px] bg-gradient-to-tr from-yellow-400 to-fuchsia-600 rounded-full">
                                <Link
                                    href={story.href}
                                    className="block p-[2px] bg-white rounded-full"
                                >
                                    <div className="relative w-[60px] h-[60px] overflow-hidden rounded-full">
                                        <Image
                                            src={story.image}
                                            alt={story.username}
                                            layout="fill"
                                            className="object-cover object-center"
                                        />
                                    </div>
                                </Link>
                            </div>
                            <Link href={story.href} className="text-[11px]">
                                {story.username}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
