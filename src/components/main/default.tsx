import { type Setter } from "solid-js";
import type { Views } from "../../utils/type";

export default function ({ action }: { action: Setter<Views> }) {
  return (
    <>
      <h2 class="text-4xl italic font-semibold md:text-6xl md:font-medium">
        Shaping Futures, Carving Success.
      </h2>

      <p class="text-pretty text-xl md:text-2xl">
        Precision CNC solutions, customised for you, supported locally. Whether
        your project is small or large scale, from prototypes to production
        runs, we're here to help!
      </p>

      <button
        class="px-4 py-3 bg-heliner-orange rounded-md font-bold md:self-end md:px-8 md:text-xl md:uppercase"
        onClick={() => action("form")}
      >
        Find out more
      </button>
    </>
  );
}
