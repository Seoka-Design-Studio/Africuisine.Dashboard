'use client' 
import { Fragment } from "react";
import AuthLogo from "@/components/shared/auth-logo/auth-logo.layout";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Fragment>
      <section id="auth-section" className="flex flex-col items-center">
        <AuthLogo />
        <div id="auth-card" className="w-full max-w-xl space-y-8 bg-white sm:p-8 rounded-lg">{children}</div>
      </section>
    </Fragment>
  )
}