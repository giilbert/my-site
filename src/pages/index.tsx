import { Layout } from "@/components/layout";
import { NextPage } from "next";
import { createRef, useLayoutEffect } from "react";
import { gsap } from "gsap";

const IndexPage: NextPage = () => {
  const ref = createRef<HTMLParagraphElement>();
  useLayoutEffect(() => {
    if (!ref.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ref.current,
        {
          y: -500,
        },
        {
          y: 0,
          scrollTrigger: {
            scrub: 1,
          },
        }
      );
    }, ref.current);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <Layout title="Gilbert Zhang">
      <h1 className="font-bold mt-2 text-5xl">Hey, I&apos;m Gilbert</h1>

      <div className="my-[64rem]" />
      <p ref={ref}>Hello world!</p>
      <div className="my-[64rem]" />
    </Layout>
  );
};

export default IndexPage;
