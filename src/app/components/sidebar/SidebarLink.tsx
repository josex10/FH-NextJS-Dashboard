"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export interface LinkProps {
  path: string;
  icon: JSX.Element;
  name: string;
  desc: string;
}

const SidebarLinkComponent = ({ path, icon, name, desc }: LinkProps) => {
  const pathname = usePathname();

  return (
    <>
      <Link
        className={`
          w-full px-2 inline-flex space-x-2 items-center border-b border-slate-700 py-3 hover:bg-white/5 transition ease-linear duration-150
          ${pathname === path && "bg-blue-500"}
        `}
        href={path}
      >
        <section>{icon}</section>

        <section className="flex flex-col">
          <span className="text-lg font-bold leading-5 text-white">{name}</span>
          <span className="text-sm text-white/50 hidden md:block">{desc}</span>
        </section>
      </Link>
    </>
  );
};

export default SidebarLinkComponent;
