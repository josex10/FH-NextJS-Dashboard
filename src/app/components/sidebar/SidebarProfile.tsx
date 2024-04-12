import Image from "next/image";
import Link from "next/link";

export interface ProfileProps{
    imageUrl: string, 
    name: string
    path: string,
}
export const SidebarProfileComponent= ({imageUrl, name, path}: ProfileProps) => {
  return (
    <>
        <p className="text-slate-500">Welcome back,</p>
        <Link href={path} className="inline-flex space-x-2 items-center">
          <span>
            <Image
              className="rounded-full w-8 h-8"
              src={imageUrl}
              width={50}
              height={50}
              alt=""
            />
          </span>
          <span className="text-sm md:text-base font-bold">{name}</span>
        </Link>
    </>
  )
}
