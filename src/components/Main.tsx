import { Switch, Match, createSignal, type Setter, type JSX } from "solid-js";
import { X } from "lucide-solid";

type Views = "default" | "form" | "sent";

export default function () {
  const [view, setView] = createSignal<Views>("default");

  return (
    <main class="flex-1 grid place-items-center">
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
    </main>
  );
}

function Default({ action }: { action: Setter<Views> }) {
  return (
    <Card>
      <h2 class="text-4xl italic">
        Shaping Futures, <br /> Carving Success.
      </h2>

      <p class="text-xl">
        Precision CNC solutions, customised for you, supported locally. Whether
        your project is small or large scale, from prototypes to production
        runs, we're here to help!
      </p>

      <button
        class="px-2 py-3 bg-heliner-orange rounded-md font-semibold"
        onClick={() => action("form")}
      >
        Find out more
      </button>
    </Card>
  );
}

function Form({ action }: { action: Setter<Views> }) {
  return (
    <Card>
      <button class="absolute right-4 top-4" onClick={() => action("default")}>
        <X />
      </button>

      <h2 class="text-xl italic font-semibold pt-4">
        Ready to carve your success <br /> with precision beyond compare ?
      </h2>

      <form action="" class="flex flex-col gap-2">
        <div class="flex gap-1">
          <label for="name" class="min-w-[70px] text-start">
            Name
          </label>
          <input type="text" name="name" class="flex-1" />
        </div>

        <div class="flex gap-1">
          <label for="email" class="min-w-[70px] text-start">
            Email
          </label>
          <input type="email" name="email" class="flex-1" />
        </div>

        <div class="flex gap-1">
          <label for="tel" class="min-w-[70px] text-start">
            Mobile
          </label>
          <input type="tel" name="tel" class="flex-1" />
        </div>

        <div class="flex gap-1">
          <label for="company" class="min-w-[70px] text-start">
            Company
          </label>
          <input type="company" name="company" class="flex-1" />
        </div>
      </form>

      <button
        class="px-2 py-3 mb-2 bg-heliner-orange rounded-md font-semibold"
        onClick={() => action("sent")}
      >
        Submit
      </button>
    </Card>
  );
}

function Sent({ action }: { action: Setter<Views> }) {
  return (
    <Card>
      <h2 class="text-4xl italic">
        Thank you for your interest. We will contact you soon to talk more about
        our solutions.
      </h2>

      <button
        class="px-2 py-3 bg-heliner-orange rounded-md font-semibold"
        onClick={() => action("default")}
      >
        Close
      </button>
    </Card>
  );
}

function Card({ children }: { children: JSX.Element }) {
  return (
    <div class="relative flex flex-col gap-4 p-8 max-w-sm rounded-lg bg-neutral-100/60 backdrop-blur-md text-center">
      {children}
    </div>
  );
}
