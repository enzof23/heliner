import emailjs from "@emailjs/browser";

import type { Views } from "../../utils/type";
import { createSignal, type JSX, type Setter } from "solid-js";

const SERVICE_ID = import.meta.env.PUBLIC_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.PUBLIC_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.PUBLIC_EMAILJS_PUBLIC_KEY;

export default function ({ action }: { action: Setter<Views> }) {
  let formRef: HTMLFormElement;
  const [sending, setSending] = createSignal<boolean>(false);

  const sendEmail: JSX.EventHandler<HTMLFormElement, SubmitEvent> = async (
    e
  ) => {
    e.preventDefault();
    setSending(true);

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef, PUBLIC_KEY).then(
      (result) => {
        console.log(`Result: ${result.text}`);
        setSending(false);
        action("sent");
      },
      (error) => {
        console.log(`Error: ${error.text}`);
        setSending(false);
      }
    );
  };

  return (
    <>
      <h2 class="text-pretty text-lg sm:text-2xl md:text-center italic font-semibold md:text-3xl">
        Ready to carve your success with precision beyond compare?
      </h2>

      <form
        ref={(el) => {
          formRef = el;
        }}
        onSubmit={sendEmail}
        class="flex flex-col gap-3 md:text-lg"
      >
        <InputGroup name="name">
          <input required type="text" name="name" class="input" />
        </InputGroup>

        {/* change back to type email */}
        <InputGroup name="email">
          <input required type="email" name="email" class="input" />
        </InputGroup>

        <InputGroup name="mobile">
          <input
            required
            type="tel"
            name="mobile"
            class="input"
            pattern="[0-9]\d{7,10}"
            title="Please enter a valid New Zealand phone number"
          />
        </InputGroup>

        <InputGroup name="company">
          <input required type="company" name="company" class="input" />
        </InputGroup>

        <button
          disabled={sending()}
          class="px-4 py-3 bg-heliner-orange rounded-md font-bold md:self-end md:px-8 md:text-xl md:uppercase"
          type="submit"
        >
          {sending() ? "Sending" : "Submit"}
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
    <div class="flex gap-2 items-center">
      <label
        for={name}
        class="min-w-[73px] md:min-w-[82px] md:text-end font-medium capitalize"
      >
        {name}
      </label>
      {children}
    </div>
  );
}
