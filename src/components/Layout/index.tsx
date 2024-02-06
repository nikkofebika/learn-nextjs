import React, { Fragment } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

type Props = {
    children: React.ReactNode
}

export default function Layout(props: Props) {
    const { children } = props;
    return (
        <Fragment>
            <Navbar />
            <main>
                {children}
            </main>
            <Footer />
        </Fragment>
    )
}
