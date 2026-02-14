import React from "react";

export function Quote() {
  return (
    <figure className="mx-auto flex max-w-3xl flex-col items-center px-4 py-12 text-center">
      <blockquote className="text-3xl leading-[1.1] font-medium tracking-tighter text-balance md:text-5xl md:text-wrap">
        <span>&quot;AI was already doing all my</span>
        <span className="text-muted-foreground/50">
          {" "}work at my software engineering job, now it&apos;s doing everything in my routine for me too.&quot;
        </span>
      </blockquote>
      <figcaption className="mt-10">
        <span className="block font-semibold tracking-tight md:text-xl">John Doe</span>
        <span className="text-muted-foreground mt-1 block text-xs tracking-tighter md:text-xl">
          Staff Engineer · Acme Inc.
        </span>
      </figcaption>
    </figure>
  );
}
