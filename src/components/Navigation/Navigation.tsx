"use client";

import { Button, Link, Navbar, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenuItem, NavbarMenu, Accordion, AccordionItem, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Divider } from "@nextui-org/react";
import { useState } from "react";
import { useRouter } from "nextjs-toploader/app";

import Settings from "@/../../settings.json";
import LogoIcon from "@/components/Icons/Logo";
import ChevronIcon from "@/components/Icons/Chevron";

const Navigation = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const router = useRouter();

    const generateNavItems = (NavItems: any) => {
        return NavItems.map((item: any) => {
            if (item.submenus) {
                return (
                    <Dropdown key={item.name} className="border-divide mt-5 border shadow-sm">
                        <NavbarItem>
                            <DropdownTrigger>
                                <Button disableRipple variant="light" endContent={<ChevronIcon size={16} />} className="text-medium duration-00 data-[hover=true]:bg-default-100 h-fit cursor-pointer rounded-lg px-3 py-1 text-gray-700 transition-colors ease-linear">
                                    {item.name}
                                </Button>
                            </DropdownTrigger>
                        </NavbarItem>
                        <DropdownMenu aria-label="features">
                            {item.submenus.map((subItem: any) => {
                                return (
                                    <DropdownItem key={subItem.name} onPress={() => router.push(`${subItem.url}`)} className="data-[hover=true]:bg-default-100 text-gray-700">
                                        {subItem.name}
                                    </DropdownItem>
                                );
                            })}
                        </DropdownMenu>
                    </Dropdown>
                );
            } else {
                return (
                    <NavbarItem key={item.name}>
                        <Link color="foreground" href={item.url} className="duration-00 hover:bg-default-100 rounded-lg px-3 py-1 text-gray-700 transition-colors ease-linear">
                            {item.name}
                        </Link>
                    </NavbarItem>
                );
            }
        });
    };

    const generateMobileNavItems = (NavItems: any) => {
        return NavItems.map((item: any) => {
            if (item.submenus) {
                return (
                    <Accordion key={item.name} className="-px-2 py-3" itemClasses={{ trigger: "py-0 text-xl", title: "text-xl text-gray-700", content: "flex flex-col gap-2 mt-1" }}>
                        <AccordionItem title={item.name}>
                            {item.submenus.map((subItem: any) => {
                                return (
                                    <Link key={subItem.name} href={subItem.url} onPress={() => setIsMenuOpen(false)} className="w-full px-2 py-0.5 text-lg text-gray-600">
                                        {subItem.name}
                                    </Link>
                                );
                            })}
                        </AccordionItem>
                    </Accordion>
                );
            } else {
                return (
                    <NavbarMenuItem key={item.name}>
                        <Link color="foreground" href={item.url} onPress={() => setIsMenuOpen(false)} className="w-full py-3 text-xl text-gray-700">
                            {item.name}
                        </Link>
                    </NavbarMenuItem>
                );
            }
        });
    };

    return (
        <Navbar isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen} maxWidth="2xl" isBordered isBlurred={false} position="sticky">
            <NavbarContent>
                <Link href="/" className="flex items-center gap-3">
                    <LogoIcon size={32} />
                    <Divider orientation="vertical" className="hidden h-8 md:block" />
                    <p className="hidden text-2xl font-semibold tracking-wide md:block">Infinia Tech</p>
                </Link>
            </NavbarContent>
            <NavbarContent justify="end" className="!grow-0 gap-4">
                <NavbarContent justify="end" className="hidden !grow-0 gap-1 md:flex">
                    {generateNavItems(Settings.navigation)}
                </NavbarContent>
                <NavbarMenuToggle className="md:hidden" />
                <Divider orientation="vertical" className="h-8" />
                <Button color="primary" size="sm">
                    Get in touch
                </Button>
            </NavbarContent>
            <NavbarMenu className="divide-default border-divider gap-0 divide-y overflow-hidden border-t bg-white pt-2">{generateMobileNavItems(Settings.navigation)}</NavbarMenu>
        </Navbar>
    );
};

export default Navigation;
