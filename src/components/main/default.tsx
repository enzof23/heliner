import { type Setter } from "solid-js";
import type { Views } from "../../utils/type";

export default function ({ action }: { action: Setter<Views> }) {
  return (
    <>
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
    </>
  );
}
