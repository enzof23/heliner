import emailjs from "@emailjs/browser";
import { type JSX } from "solid-js";

const SERVICE_ID = import.meta.env.PUBLIC_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.PUBLIC_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.PUBLIC_EMAILJS_PUBLIC_KEY;

export default function () {
  let formRef: HTMLFormElement;

  const sendEmail: JSX.EventHandler<HTMLFormElement, SubmitEvent> = (e) => {
    e.preventDefault();

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef, PUBLIC_KEY).then(
      (result) => {
        console.log(`Result: ${result.text}`);
        console.log(formRef.current);
      },
      (error) => {
        console.log(`Error: ${error.text}`);
      }
    );
  };

  return (
    <form
      ref={(el) => {
        formRef = el;
      }}
      onSubmit={sendEmail}
      class="flex flex-col gap-3"
    >
      <InputGroup name="name">
        <input
          type="text"
          name="name"
          class="flex-1 border-b-2 border-r-2 border-t-2 border-light bg-light/10 outline-none p-1 focus:border-heliner-orange transition-all duration-200"
        />
      </InputGroup>

      <InputGroup name="email">
        <input type="email" name="email" class="flex-1" />
      </InputGroup>

      <InputGroup name="phone">
        <input type="tel" name="phone" class="flex-1" />
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
    <div class="flex">
      <label
        for={name}
        class="self-center min-w-20 capitalize font-medium border-b-2 border-l-2 border-t-2 p-1 border-heliner-orange"
      >
        {name}
      </label>
      {children}
    </div>
  );
}
