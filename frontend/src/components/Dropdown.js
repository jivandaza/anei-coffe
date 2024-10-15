import React, { useState } from 'react';
import {Link} from "react-router-dom";

function Dropdown({ link, sub_links }) {

    const [isOpen, setIsOpen] = useState(false);

    const hasLinks = sub_links && sub_links.length > 0;

    return (
        <Link
            className="flex flex-col h-full px-4 justify-center text-gray-600 text-sm font-semibold hover:text-[#e0c432] relative"
            to={link.href}
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
            onClick={() => setIsOpen(!isOpen)}
        >
            {link.label}

            {isOpen && hasLinks && (
                <div className="absolute top-12 left-0 mt-2 w-56 bg-[#e0c432] z-50">
                    <ul>
                        {sub_links.map((link, index) => (
                            <li key={index} className='hover:shadow-lg'>
                                <Link
                                    to={link.href}
                                    className="block px-4 py-2 text-gray-600 hover:text-white"
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </Link>
    );
}

export default Dropdown;
