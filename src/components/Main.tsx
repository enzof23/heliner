import { Switch, Match, createSignal, type JSX } from "solid-js";
import { Default, Form, Sent } from "./main/_index";

import type { Views } from "../utils/type";

export default function () {
  const [view, setView] = createSignal<Views>("form");

  return (
    <div class="flex-1 flex items-center justify-center z-10 md:justify-start">
      <Switch>
        <Match when={view() === "default"}>
          <FormWrapper>
            <Default action={setView} />
          </FormWrapper>
        </Match>

        <Match when={view() === "form"}>
          <FormWrapper>
            <Form action={setView} />
          </FormWrapper>
        </Match>

        <Match when={view() === "sent"}>
          <FormWrapper>
            <Sent action={setView} />
          </FormWrapper>
        </Match>
      </Switch>
    </div>
  );
}

function FormWrapper({ children }: { children: JSX.Element }) {
  return (
    <div class="flex-1 flex flex-col px-4 py-6 gap-6 max-w-lg md:ml-16 md:py-12 md:px-10 md:max-w-[630px] md:rounded-lg md:bg-neutral-100/60 md:backdrop-blur-md">
      {children}
    </div>
  );
}
