import React from "react";
import HeroSub from "@/components/SharedComponent/HeroSub";
import { Metadata } from "next";
import Resume from "@/components/Home/Resume";

export const metadata: Metadata = {
    title: "Resume | Maulid Mwalimu",
};

const ResumePage = () => {
    const breadcrumbLinks = [
        { href: "/home", text: "Home" },
        { href: "/resume", text: "Resume" },
    ];
    return (
        <>
            <HeroSub
                title="Resume"
                description="A summary of my professional experience, education, and the skills I bring to every project."
                breadcrumbLinks={breadcrumbLinks}
            />
            <Resume />
        </>
    );
};

export default ResumePage;
