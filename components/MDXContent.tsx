"use client";

import { getMDXComponent } from "mdx-bundler/client";
import { useMemo } from "react";

type Props = {
  code: string;
};

export default function MDXContent({ code }: Props) {
  const Component = useMemo(() => getMDXComponent(code), [code]);
  return <Component />;
}
