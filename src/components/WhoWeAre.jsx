import img5 from "../assets/05.jpg";

export default function WhoWeAre() {
  return (
    <section className="py-8">
      <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8">
        <div className="grid items-center gap-10 rounded-3xl bg-[#F5F5F3] p-6 sm:p-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          {/* Left: person image with green tilted decoration */}
          <div className="relative mx-auto w-full max-w-sm">
            <div className="absolute -bottom-5 -left-4 h-[92%] w-[92%] -rotate-5 bg-lime-400" />

            <img
              src={img5}
              alt="MAC team member"
              className="relative h-[380px] w-full object-cover shadow-sm transition-transform duration-500 hover:scale-[1.02]"
            />
          </div>

          {/* Right: content */}
          <div>
            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl text-black">
              Who We <span className="text-lime-400">Are.</span>
            </h2>

            <p className="mt-7 max-w-lg text-sm leading-6 text-zinc-500">
              At Sunstream Digital, we're all about illuminating your brand with
              bold, innovative marketing strategies. Our team combines creativity
              with cutting-edge technology to craft digital campaigns that
              captivate and convert. Whether you're looking to grow your online
              presence or launch a new product, we're here to help you shine.
            </p>

            <p className="mt-6 max-w-lg text-sm leading-6 text-zinc-500">
              At Sunstream Digital, our success is defined by the results we
              deliver. From innovative campaigns to record-breaking growth, we've
              partnered with brands to help them reach new heights.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
