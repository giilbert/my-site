import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { createRef, useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

type IUseGsapTweenBuilder<T extends HTMLElement> = (element: T) => {
  from?: gsap.TweenVars;
  to?: gsap.TweenVars;
};

export const useGsapTween = <T extends HTMLElement>(
  builder: IUseGsapTweenBuilder<T>
) => {
  const ref = createRef<T>();

  useEffect(() => {
    if (!ref.current) return;

    const anim = builder(ref.current);
    if (anim.from && anim.to) {
      gsap.fromTo(ref.current, anim.from, anim.to);
    } else if (anim.from) {
      gsap.from(ref.current, anim.from);
    } else if (anim.to) {
      gsap.to(ref.current, anim.to);
    }
  }, [ref, builder]);

  return ref;
};
