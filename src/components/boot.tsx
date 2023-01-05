import clsx from "clsx";
import gsap from "gsap";
import { createRef, useEffect, useRef, useState } from "react";

interface BootMessage {
  content: string;
  bold?: boolean;
  wait?: number;
}

const BOOT_MESSAGES: BootMessage[] = [
  {
    content: `- ${process.env.NEXT_PUBLIC_HREF}: loading.`,
  },
  {
    content: "- enter stage: 1",
  },
  {
    content: "=> Welcome!",
    bold: true,
  },
  {
    content: "=> Loading tons and tons of JavaScript..",
    wait: 400,
    bold: true,
  },
  {
    content: "=> Checking calculations..",
    wait: 200,
    bold: true,
  },
  {
    content: "- 1 + 1 == 2 => true",
  },
  {
    content: "- 7 - 3 == 4 => true",
  },
  {
    content: "- 2 * 4 == 8 => true",
  },
  {
    content: "- 3 / 1 == 3 => true",
  },
  {
    content: "=> Checking file integrity..",
    wait: 400,
    bold: true,
  },
  {
    content: "- SHA256 Checksums match",
  },
  {
    content: "=> Hydrating content..",
    wait: 100,
    bold: true,
  },
  {
    content: "=> Decrypting secrets..",
    wait: 100,
    bold: true,
  },
  {
    content: "=> Activating IO interfaces..",
    wait: 100,
    bold: true,
  },
  {
    content: "=> Activating devices..",
    wait: 400,
    bold: true,
  },
  {
    content: "=> Mounting root filesystem..",
    wait: 500,
    bold: true,
  },
  {
    content: "=> Ordering pizza..",
    wait: 200,
    bold: true,
  },
  {
    content: "Added pineapples to order",
    wait: 40,
  },
  {
    content: "Added extra cheese to order",
    wait: 40,
  },
  {
    content: "=> Initialization complete, entering stage 2..",
    wait: 200,
    bold: true,
  },
  {
    content: "- leave stage: 1",
  },
  {
    content: "- enter stage: 2",
  },
  {
    content: "=> Hello world!",
    wait: 1000,
    bold: true,
  },
];

export const Boot: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const divRef = createRef<HTMLDivElement>();
  const bottomRef = createRef<HTMLDivElement>();

  useEffect(() => {
    const update = () => {
      setCurrent((c) => c + 1);
      bottomRef.current?.scrollIntoView();
    };

    let to =
      BOOT_MESSAGES.length > current
        ? setTimeout(() => {
            requestAnimationFrame(update);
          }, BOOT_MESSAGES[current].wait || 100)
        : 0;

    if (BOOT_MESSAGES.length <= current) {
      console.log("end");
      gsap.to(divRef.current, {
        y: -window.innerHeight,
      });
    }

    return () => {
      clearTimeout(to);
    };
  }, [current, bottomRef, divRef]);

  return (
    <div
      className="bg-neutral-900 w-screen h-screen fixed top-0 left-0 p-4 font-mono text-lg overflow-auto z-50"
      ref={divRef}
    >
      {BOOT_MESSAGES.map(
        (message, i) =>
          i <= current && (
            <p
              key={i}
              className={clsx(message.bold ? "text-gray-100" : "text-gray-400")}
            >
              {message.content}
            </p>
          )
      )}

      <div ref={bottomRef} className="h-4" />
    </div>
  );
};
