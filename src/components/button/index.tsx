import Link from "next/link";
import React from "react";

export default function ButtonComponent({
  href,
  className,
  children,
}: {
  href: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <Link href={href} className={`px-5 py-2.5 rounded-3xl ${className}`}>
      {children}
    </Link>
  );
}
