'use client'
import Image from "next/image"
import Link from "next/link"
const AuthLogo: React.FC = () => {
    return ( 
        <div id="auth-logo" className="flex flex-col items-center justify-center px-6 pt-8 mx-auto">
            <Link href="/auth/sign-in" className="flex items-center justify-center mb-8 text-2xl text-gray-950 font-semibold lg:mb-10">
                <Image className="mr-4 h-11 text-orange-600" width={44} height={44} src="/svg/logo.svg" alt="Africuisine Logo" />
                <span className="">ACRA - Recipe Management Dashboard</span>
            </Link>
        </div>
    )
}
export default AuthLogo