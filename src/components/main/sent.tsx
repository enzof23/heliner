import { type Setter } from "solid-js";

import type { Views } from "../../utils/type";

export default function ({ action }: { action: Setter<Views> }) {
  return (
    <>
      <h2 class="text-pretty text-3xl italic md:text-4xl md:font-medium">
        Thank you for your interest. We will contact you soon to talk more about
        our solutions.
      </h2>

      <button
        class="px-4 py-3 bg-heliner-orange rounded-md font-bold md:self-end md:px-8 md:text-xl md:uppercase"
        onClick={() => action("default")}
      >
        Close
      </button>
    </>
  );
}
