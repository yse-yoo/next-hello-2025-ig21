'use client'

import React from 'react'

export default function Nav() {
    return (
        <nav className="bg-white shadow-md">
            <ul className="flex space-x-6 px-6 py-4">
                <li>
                    <a href="/" className="text-blue-600 hover:underline">Home</a>
                </li>
                <li>
                    <a href="/profile" className="text-blue-600 hover:underline">Profile</a>
                </li>
                <li>
                    <a href="/thread" className="text-blue-600 hover:underline">Thread</a>
                </li>
            </ul>
        </nav>
    )
}