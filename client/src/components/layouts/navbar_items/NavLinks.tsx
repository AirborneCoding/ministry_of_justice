import React from "react";
import Link from "next/link";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

interface NavLink {
    id: number;
    label: string;
    link?: string;
    subItems?: { title: string; href: string }[];

}

interface NavLinksProps {
    navLinks: NavLink[];
    locale: string
}

const ListItem = React.forwardRef<HTMLAnchorElement, { title: string; link: string }>(
    ({ title, link, ...props }, ref) => (
        <li>
            <NavigationMenuLink asChild>
                <Link
                    href={link}
                    ref={ref}
                    {...props}
                    className={cn(
                        "block p-3 rounded-md transition hover:bg-gray-100 dark:hover:bg-gray-700"
                    )}
                >
                    <div className="font-medium">{title}</div>
                </Link>
            </NavigationMenuLink>
        </li>
    )
);

ListItem.displayName = "ListItem";

const NavLinks: React.FC<NavLinksProps> = ({ navLinks, locale }) => {
    return (
        <NavigationMenu className="hidden text-white lg:block">
            <NavigationMenuList className={`${locale === "ar" && "!flex-row-reverse"}`}>
                {navLinks.map((item, idx) => (
                    <NavigationMenuItem key={item.id}>
                        {item.link && idx !== 2 ? (
                            <Link href={`${item.link}`} className="cursor-pointer">
                                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                    {item.label}
                                </NavigationMenuLink>
                            </Link>
                        ) : (
                            <>
                                <NavigationMenuTrigger>{item.label}</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="p-4 grid gap-3 md:w-[400px] lg:grid-cols-[.75fr_1fr]">
                                        {item.subItems?.map((subItem, subIndex) => (
                                            <ListItem key={subIndex} link={subItem.href} title={subItem.title} />
                                        ))}
                                    </ul>
                                </NavigationMenuContent>
                            </>
                        )}
                    </NavigationMenuItem>
                ))}
            </NavigationMenuList>
        </NavigationMenu>
    );
};

export default NavLinks;
