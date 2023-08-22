import {
  createSignal,
  Component,
  JSXElement,
  children,
  Show,
  onCleanup,
  onMount,
} from "solid-js";
import { Portal } from "solid-js/web";

export const ImagePopup: Component<{
  children: JSXElement;
}> = (props) => {
  const [isOpen, setIsOpen] = createSignal(false);
  const c = children(() => props.children);
  const [lastSize, setLastSize] = createSignal([0, 0]);
  let ref: HTMLDivElement | undefined = undefined;

  const onResize = () => {
    if (ref && ref.offsetWidth !== 0 && ref.offsetHeight !== 0) {
      setLastSize([ref.offsetWidth, ref.offsetHeight]);
      const _ = lastSize();
    }
  };

  if (typeof window !== "undefined") {
    window.addEventListener("resize", onResize);

    onCleanup(() => {
      window.removeEventListener("resize", onResize);
    });
  }

  onMount(() => {
    onResize();
  });

  return (
    <div
      onClick={() => {
        setIsOpen((prev) => !prev);
      }}
      class="hover:cursor-pointer hover:brightness-75"
    >
      <Show when={isOpen()}>
        <Portal>
          <div class="animate-in fade-in bg-background/90 fixed top-0 left-0 w-screen h-screen z-30 flex justify-center items-center p-4">
            <div class="flex flex-col gap-2">{c()}</div>
          </div>
        </Portal>
      </Show>

      <Show when={!isOpen()}>
        <div ref={ref}>{c()}</div>
      </Show>

      <Show when={isOpen()}>
        <div
          style={{
            width: `${lastSize()[0]}px`,
            height: `${lastSize()[1]}px`,
          }}
          class="bg-muted rounded-lg"
        />
      </Show>
    </div>
  );
};
