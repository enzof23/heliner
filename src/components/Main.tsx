import Form from "./Form";

export default function () {
  return (
    <section class="flex-1 flex items-center gap-12 px-12">
      {/* Left Section */}
      <div class="flex-1 flex flex-col gap-4 text-dark max-w-2xl">
        <h2 class="text-5xl font-bold italic">
          Shaping Futures, Carving Success.
        </h2>

        <p class="font-medium leading-5 max-w-xl">
          Precision CNC solutions, customised for you, supported locally.
          Whether your project is small or large scale, from prototypes to
          production runs, we're here to help!
        </p>

        <div class="flex flex-col gap-6 p-8 max-w-xl rounded-md bg-dark/20">
          <h3 class="text-2xl italic font-bold text-center">
            Ready to carve your success <br /> with precision beyond compare ?
          </h3>

          <Form />
        </div>
      </div>

      {/* Video */}
      <div class="flex-1 flex max-h-[600px]">
        <video
          class="object-cover"
          src="heliner-video.mp4"
          autoplay
          loop
          muted
          playsinline
        ></video>
      </div>
    </section>
  );
}
