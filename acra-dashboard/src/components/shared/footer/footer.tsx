'use client' 
import Link from "next/link";
import { Fragment } from "react";

const Footer: React.FC = () => {
    const year = new Date().getFullYear()
    return (
        <Fragment>
            <footer className="p-4 my-6 mx-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 xl:p-8">
                <ul className="flex flex-wrap justify-center w-full items-center h-full mb-6 space-y-1 md:mb-0">
                    <Link href="#" className="text-sm mr-4 font-normal text-gray-500 hover:text-orange-600 hover:font-semibold md:mr-6">
                        Terms & Conditions
                    </Link>
                    <Link href="#" className="text-sm mr-4 font-normal text-gray-500 hover:text-orange-600 hover:font-semibold md:mr-6">
                        Privacy Policy
                    </Link>
                    <Link href="#" className="text-sm mr-4 font-normal text-gray-500 hover:text-orange-600 hover:font-semibold md:mr-6">
                        Cookie Policy
                    </Link>
                </ul>
            </footer>
            <p className="my-10 text-sm text-center text-gray-500"> &copy; {year} <Link href="#" className="text-sm mr-4 font-normal text-gray-500 hover:text-orange-600 hover:font-semibold md:mr-6">ACRA - Recipe Management Dashboard</Link> . All rights reserved.</p>
        </Fragment>
    )
}
export default Footer