import { type Setter } from "solid-js";
import type { Views } from "../../utils/type";

export default function ({ action }: { action: Setter<Views> }) {
  return (
    <>
      <h2 class="text-pretty text-4xl italic font-semibold md:text-6xl md:font-semibold md:leading-tight">
        We Automate Door Manufacturing.
      </h2>

      <ul class="list-disc list-inside text-lg font-normal md:text-2xl">
        <li>Customised for you</li>
        <li>Local solutions</li>
        <li>Local support</li>
      </ul>

      <button
        class="px-4 py-3 bg-heliner-orange rounded-md font-bold md:self-end md:px-8 md:text-xl md:uppercase"
        onClick={() => action("form")}
      >
        Find out more
      </button>
    </>
  );
}
