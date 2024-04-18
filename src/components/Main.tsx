import { Switch, Match, createSignal } from "solid-js";
import { Default, Form, Sent } from "./main/_index";

import type { Views } from "../utils/type";

export default function () {
  const [view, setView] = createSignal<Views>("default");

  return (
    <main class="relative flex-1 grid place-items-center">
      <video
        class="absolute object-cover h-full w-full"
        src="heliner-video.mp4"
        autoplay
        loop
        muted
        playsinline
      ></video>

      <div class="relative flex flex-col gap-4 p-8 max-w-sm rounded-lg bg-neutral-100/60 backdrop-blur-md text-center">
        <Switch>
          <Match when={view() === "default"}>
            <Default action={setView} />
          </Match>

          <Match when={view() === "form"}>
            <Form action={setView} />
          </Match>

          <Match when={view() === "sent"}>
            <Sent action={setView} />
          </Match>
        </Switch>
      </div>
    </main>
  );
}
