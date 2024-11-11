"use client";

import { Button, Link, Chip } from "@nextui-org/react";
import { cn } from "@/lib/utils";
import SectionDivider from "@/components/Divider/Section";
import Image from "next/image";

import ChevronIcon from "@/components/Icons/Chevron";
import TerminalIcon from "@/components/Icons/Terminal";
import HeartIcon from "@/components/Icons/Heart";
import DollarIcon from "@/components/Icons/Dollar";

export default function HomePage() {
    const features = [
        {
            title: "Built for developers",
            description: "Built for engineers, developers, dreamers, thinkers and doers.",
            icon: <TerminalIcon />,
        },
        {
            title: "Ease of use",
            description: "It's as easy as using an Apple, and as expensive as buying one.",
            icon: <TerminalIcon />,
        },
        {
            title: "Pricing like no other",
            description: "Our prices are best in the market. No cap, no lock, no credit card required.",
            icon: <DollarIcon />,
        },
        {
            title: "100% Uptime guarantee",
            description: "We just cannot be taken down by anyone.",
            icon: <TerminalIcon />,
        },
        {
            title: "Multi-tenant Architecture",
            description: "You can simply share passwords instead of buying new seats",
            icon: <TerminalIcon />,
        },
        {
            title: "24/7 Customer Support",
            description: "We are available a 100% of the time. Atleast our AI Agents are.",
            icon: <TerminalIcon />,
        },
        {
            title: "Money back guarantee",
            description: "If you donot like EveryAI, we will convince you to like us.",
            icon: <TerminalIcon />,
        },
        {
            title: "And everything else",
            description: "I just ran out of copy ideas. Accept my sincere apologies",
            icon: <HeartIcon />,
        },
    ];

    const projects = [
        {
            title: "Software Development",
            description: "Custom software solutions, including web and mobile applications, designed to meet unique business needs and drive productivity.",
            image: "/assets/images/software-development.svg",
            link: "/services/software-development",
        },
        {
            title: "Cloud Services and Migration",
            description: "Unlock the potential of the cloud with tailored strategies, seamless migrations, and optimized management for performance and flexibility.",
            image: "/assets/images/cloud-service.svg",
            link: "/services/cloud-services-and-migration",
        },
        {
            title: "Data Architecture and Management",
            description: "Design scalable data models and efficient storage systems that support easy access, high performance, and data integrity.",
            image: "/assets/images/data-architecture.png",
            link: "/services/data-architecture-and-management",
        },
        {
            title: "DevOps and Automation",
            description: "We set up robust Continuous Integration and Continuous Deployment (CI/CD) pipelines to streamline your software development process, ensuring faster, more reliable software delivery.",
            image: "/assets/images/devops.svg",
            link: "/services/devops-and-automation",
        },
        {
            title: "Digital Transformation Consulting",
            description: "We partner with you to create a technology roadmap that aligns with your business objectives, prioritizing scalability, flexibility, and efficiency to support growth.",
            image: "/assets/images/digital-transformation.png",
            link: "/services/digital-transformation-consulting",
        },
    ];

    return (
        <>
            <Link href="https://www.linkedin.com/company/infinia-tech-solutions/" className="mx-auto my-10 flex w-fit items-center gap-2 rounded-full border border-dashed border-gray-300 p-2 text-gray-600 hover:opacity-80">
                <Chip variant="flat" color="primary">
                    New
                </Chip>
                <p>We are now on LinkedIn</p>
                <ChevronIcon className="-rotate-90" size={18} />
            </Link>

            <div className="relative mx-5 my-10 flex flex-col border border-dashed border-gray-300 sm:mx-8">
                <h1 className="px-4 py-6 text-center text-2xl font-black text-gray-700 sm:text-3xl md:text-6xl">Develop Your Dream Software with Us</h1>
                <div className="border-b border-t border-dashed border-gray-300 py-8">
                    <p className="mx-auto max-w-3xl px-4 py-6 text-center text-gray-600">Welcome to Infinia Tech Solutions, where technology and innovation meet to drive your business forward. We specialize in providing cutting-edge solutions across software development, cloud services, data management, DevOps, digital transformation, and business intelligence.</p>
                </div>
                <div className="flex w-full justify-center">
                    <div className="border-l border-r border-dashed border-gray-300 px-0 sm:px-6 md:px-10">
                        <div className="flex gap-4 p-6">
                            <Button color="primary">Explore</Button>
                            <Button className="border-divider border bg-transparent hover:bg-gray-50">Contact Us</Button>
                        </div>
                    </div>
                </div>
                <span className="absolute -bottom-5 -right-5 h-10 w-10 rounded-full border border-dashed border-gray-300 bg-white"></span>
                <span className="absolute -bottom-5 -left-5 h-10 w-10 rounded-full border border-dashed border-gray-300 bg-white"></span>
                <span className="absolute -right-5 -top-5 h-10 w-10 rounded-full border border-dashed border-gray-300 bg-white"></span>
                <span className="absolute -left-5 -top-5 h-10 w-10 rounded-full border border-dashed border-gray-300 bg-white"></span>
            </div>

            <SectionDivider />

            <div className="mx-3 my-8 flex flex-col items-center gap-2 sm:mx-8">
                <h2 className="text-4xl font-bold">Our Services</h2>
                <p className="text-gray-600">We offer a wide range of services to meet your needs.</p>
            </div>
            <div className="relative flex flex-col items-center justify-center gap-5 px-4">
                {projects.map((project) => {
                    return (
                        <div key={project.title} className="sticky top-20 flex w-full max-w-5xl flex-col gap-4 rounded-xl border border-dashed border-gray-300 bg-white p-10 md:w-4/5 md:flex-row">
                            <div className="h-auto w-full shrink-0 overflow-hidden rounded-lg md:h-52 md:w-52">
                                <Image src={project.image} alt={project.title} className="h-full w-full object-cover" width={320} height={320} />
                            </div>
                            <div className="flex flex-col justify-start gap-4 md:justify-center">
                                <h2 className="text-2xl font-bold md:text-3xl">{project.title}</h2>
                                <p className="md:text-large text-base">{project.description}</p>
                                <Button className="w-fit" color="primary" variant="flat" as={Link} href={project.link}>
                                    Explore
                                </Button>
                            </div>
                        </div>
                    );
                })}
            </div>

            <SectionDivider />

            <div className="mx-3 flex flex-col items-center gap-2 sm:mx-8">
                <h2 className="text-4xl font-bold">Why Infinia Tech?</h2>
                <p className="text-gray-600">We are a team of experienced developers who are passionate about building software that is both functional and easy to use.</p>
            </div>
            <div className="max-w-8xl relative z-10 mx-auto grid grid-cols-1 py-10 md:grid-cols-2 lg:grid-cols-4">
                {features.map((feature, index) => (
                    <Feature key={feature.title} {...feature} index={index} />
                ))}
            </div>
        </>
    );
}

const Feature = ({ title, description, icon, index }: { title: string; description: string; icon: React.ReactNode; index: number }) => {
    return (
        <div className={cn("group/feature relative flex flex-col py-10 lg:border-r", (index === 0 || index === 4) && "lg:border-l", index < 4 && "lg:border-b")}>
            {index < 4 && <div className="pointer-events-none absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 to-transparent opacity-0 transition duration-200 group-hover/feature:opacity-100" />}
            {index >= 4 && <div className="pointer-events-none absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 to-transparent opacity-0 transition duration-200 group-hover/feature:opacity-100" />}
            <div className="relative z-10 mb-4 px-10 text-gray-600">{icon}</div>
            <div className="relative z-10 mb-2 px-10 text-lg font-bold">
                <div className="absolute inset-y-0 left-0 h-6 w-1 origin-center rounded-br-full rounded-tr-full bg-neutral-300 transition-all duration-200 group-hover/feature:h-8 group-hover/feature:bg-blue-500" />
                <span className="inline-block text-gray-800 transition duration-200 group-hover/feature:translate-x-2">{title}</span>
            </div>
            <p className="relative z-10 max-w-xs px-10 text-sm text-gray-600">{description}</p>
        </div>
    );
};
