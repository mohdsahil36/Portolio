"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  exact?: boolean;
}

export default function Navlink({
  href,
  children,
  exact = false,
}: NavLinkProps) {
  const pathname = usePathname();
  const isActive = exact ? pathname === href : pathname.startsWith(href);

  return (
    <Link
      href={href}
      className={clsx(
        "font-normal text-sm md:text-md tracking-[1px] text-gray-300 hover:text-white cursor-pointer transition-all ease-in-out delay-150 duration-200",
        {
          "text-white font-bold text-shadow-gray-500": isActive,
        }
      )}
    >
      {children}
    </Link>
  );
}
