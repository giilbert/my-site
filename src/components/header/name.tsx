"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const Name: React.FC = () => {
  const [name, setName] = useState("");
  const [blink, setBlink] = useState(false);

  useEffect(() => {
    async function run() {
      setName("");

      // type in "Glibe" letter by letter
      for (const letter of "Glibe") {
        setName((name) => name + letter);
        await sleep(60);
      }

      await sleep(200);

      // remove 4 letters from the end
      for (let i = 0; i < 4; i++) {
        setName((name) => name.slice(0, -1));
        await sleep(70);
      }

      await sleep(200);

      // type in "ilbert Zhang" letter by letter
      for (const letter of "ilbert Zhang") {
        setName((name) => name + letter);
        await sleep(60);
      }

      setBlink(true);
    }

    run();
  }, []);

  return (
    <div className="flex items-center h-[24px]">
      <h1 className="text-2xl font-medium">{name}</h1>
      <div
        className={cn(
          "ml-1 mt-1 h-[24px] w-2.5 bg-foreground",
          blink && "animate-blink"
        )}
      />
    </div>
  );
};
