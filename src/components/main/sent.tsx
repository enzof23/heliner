import { type Setter } from "solid-js";

import type { Views } from "../../utils/type";

export default function ({ action }: { action: Setter<Views> }) {
  return (
    <>
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
    </>
  );
}
