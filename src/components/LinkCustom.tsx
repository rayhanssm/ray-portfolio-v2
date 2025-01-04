import { ILinkCustom } from "@/types/types";
import Link from "next/link";
import React from "react";

function LinkCustom({ text, href, rel, target }: ILinkCustom) {
  return (
    <Link
      className={`w-fit px-6 py-2 rounded-2xl text-sky-950 bg-yellow-500 hover:shadow-lg hover:shadow-yellow-800 hover:-translate-y-1 transition-all ease-in-out`}
      href={href}
      target={target ? "_blank" : ""}
      rel={rel ? "noopener noreferrer" : ""}
    >
      {text}
    </Link>
  );
}

export default LinkCustom;
