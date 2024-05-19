import { Fragment } from "react";

export default function AuthLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <Fragment>
        <div className="container mx-auto">{children}</div>
      </Fragment>
    )
  }