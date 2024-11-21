import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Link from "next/link";

interface NavLink {
    id: number;
    label: string;
    link?: string;
    subItems?: { title: string; href: string }[];
}

const Sidebar: React.FC<{ navLinks: NavLink[] }> = ({ navLinks }) => {
    return (
        <div className="drawer-side z-[9999]">
            <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
            <ul className="menu bg-base-200 min-h-full w-80 p-4">
                <Accordion type="single" collapsible>
                    {navLinks.map((item, idx) => (
                        <AccordionItem key={item.id} value={`item-${item.id}`}>
                            {item.link && idx !== 2 ? (
                                <div className="py-2.5">
                                    <Link href={item.link}>{item.label}</Link>
                                </div>
                            ) : (
                                <>
                                    <AccordionTrigger>{item.label}</AccordionTrigger>
                                    <AccordionContent className="flex flex-col">
                                        {item.subItems?.map((subItem, index) => (
                                            <Link
                                                key={index}
                                                href={subItem.href}
                                                className="block p-3 space-y-1 leading-none no-underline transition-colors rounded-md outline-none select-none hover:bg-gray-300 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                            >
                                                {subItem.title}
                                            </Link>
                                        ))}
                                    </AccordionContent>
                                </>
                            )}
                        </AccordionItem>
                    ))}
                </Accordion>
            </ul>
        </div>
    );
};

export default Sidebar;
