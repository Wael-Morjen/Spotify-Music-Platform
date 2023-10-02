'use client'

import { useRouter } from "next/navigation";
import { twMerge } from "tailwind-merge";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import Button from "./Button";

interface HeaderProps {
    children: React.ReactNode
    className?: string;
}

const Header = ({
    children,
    className
}: HeaderProps) => {
    const router = useRouter();

    const handleLogout = () => {

    }

    return (
        <div className={twMerge(`
            h-fit
            bg-gradient-to-b
            from-emerald-800
            p-6
        `,
            className
        )}>
            <div
                className="
                    w-full
                    mb-4
                    flex
                    items-center
                    justify-between
                "
            >
                <div
                    className="
                        md:flex
                        hidden
                        items-center
                        gap-x-2
                    "
                >
                    <button
                        onClick={() => router.back()}
                        className=" 
                            rounded-full
                            bg-black
                            items-center
                            justify-center
                            flex
                            hover:opacity-75
                            transition
                        "
                    >
                        <RxCaretLeft size={36} className="text-white" />
                    </button>
                    <button
                        onClick={() => router.forward()}
                        className=" 
                            rounded-full
                            bg-black
                            items-center
                            justify-center
                            flex
                            hover:opacity-75
                            transition
                        "
                    >
                        <RxCaretRight size={36} className="text-white" />
                    </button>
                </div>
                <div className="flex md:hidden gap-x-2 items-center">
                    <button
                        className="
                            rounded-full
                            p-2
                            bg-white
                            flex
                            items-center
                            hover:opacity-75
                            transition
                        "
                    >
                        <HiHome className="text-black" size={24} />
                    </button>
                    <button
                        className="
                            rounded-full
                            p-2
                            bg-white
                            flex
                            items-center
                            hover:opacity-75
                            transition
                        "
                    >
                        <BiSearch className="text-black" size={24} />
                    </button>
                </div>
                <div
                    className="
                        flex
                        justify-between
                        items-center
                        gap-x-4
                    "
                >
                    <>
                        <div>
                            <Button>
                                Sign up
                            </Button>
                        </div>
                    </>
                </div>
            </div>
        </div>
    );
}
 
export default Header;