import Image from 'next/image';
import { useEffect, useState } from 'react';

export const Stories = () => {
    return (
        <div className="p-3 px-3 overflow-hidden border border-gray-300 rounded-md">
            <div>
                <ul className="flex space-x-3">
                    {[1, 2, 3, 4, 5].map(idx => (
                        <li
                            key={idx}
                            className="flex flex-col items-center space-y-1"
                        >
                            <div className="p-[2px] bg-gradient-to-tr from-yellow-400 to-fuchsia-600 rounded-full">
                                <a
                                    href="#"
                                    className="block p-[2px] bg-white rounded-full"
                                >
                                    <div className="relative w-[60px] h-[60px] overflow-hidden rounded-full">
                                        <Image
                                            src="https://images.unsplash.com/photo-1574158622682-e40e69881006?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
                                            alt="Cat"
                                            layout="fill"
                                            className="objecy"
                                        />
                                    </div>
                                </a>
                            </div>
                            <a href="#" className="text-[11px]">
                                Meong 1
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
