import React from "react";
import Navbar from "./Navbar";

type Props = {
    children: React.ReactNode
}

export default function Layout(props: Props) {
    const { children } = props;
    return (
        <div className="min-h-full">
            <Navbar />
            {/* <header className="bg-white shadow">
                <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Dashboard</h1>
                </div>
            </header> */}
            <main className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
                {children}
            </main>
        </div>
    )
}
