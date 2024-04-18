import { X } from "lucide-solid";
import emailjs from "@emailjs/browser";

import type { Views } from "../../utils/type";
import { type JSX, type Setter } from "solid-js";

const SERVICE_ID = import.meta.env.PUBLIC_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.PUBLIC_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.PUBLIC_EMAILJS_PUBLIC_KEY;

export default function ({ action }: { action: Setter<Views> }) {
  let formRef: HTMLFormElement;

  const sendEmail: JSX.EventHandler<HTMLFormElement, SubmitEvent> = (e) => {
    e.preventDefault();

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef, PUBLIC_KEY).then(
      (result) => {
        console.log(`Result: ${result.text}`);
        console.log(formRef.current);
        () => action("sent");
      },
      (error) => {
        console.log(`Error: ${error.text}`);
      }
    );
  };

  return (
    <>
      <button class="absolute right-4 top-4" onClick={() => action("default")}>
        <X />
      </button>

      <h2 class="text-xl italic font-semibold pt-4">
        Ready to carve your success <br /> with precision beyond compare ?
      </h2>

      <form
        ref={(el) => {
          formRef = el;
        }}
        onSubmit={sendEmail}
        class="flex flex-col gap-2"
      >
        <InputGroup name="name">
          <input type="text" name="name" class="flex-1" />
        </InputGroup>

        {/* change back to type email */}
        <InputGroup name="email">
          <input type="text" name="email" class="flex-1" />
        </InputGroup>

        <InputGroup name="tel">
          <input type="tel" name="tel" class="flex-1" />
        </InputGroup>

        <InputGroup name="company">
          <input type="company" name="company" class="flex-1" />
        </InputGroup>

        <button
          class="px-2 py-3 mb-2 bg-heliner-orange rounded-md font-semibold"
          type="submit"
        >
          Submit
        </button>
      </form>
    </>
  );
}

function InputGroup({
  children,
  name,
}: {
  children: JSX.Element;
  name: string;
}) {
  return (
    <div class="flex gap-1">
      <label for={name} class="min-w-[70px] text-start capitalize">
        {name}
      </label>
      {children}
    </div>
  );
}
