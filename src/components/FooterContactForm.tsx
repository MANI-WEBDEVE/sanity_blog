import React from "react";

export default function FooterContactForm() {
  return (
    <form className="bg-purple-800/20 px-6 sm:px-8 lg:px-12 py-6 w-full md:w-1/2 ">
      <div className="w-full">
        <h2 className="text-3xl font-bold mb-5 text-dark text-center uppercase">
          <span className="uppercase text-blue-600 font-thin">reach</span> us
        </h2>
        <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row gap-4 mb-4">
          <input
            type="text"
            placeholder="Name"
            name="name"
            className="w-full px-3 py-2  text-dark placeholder-gray-400 bg-neutral-600/15 "
          />

          <input
            type="email"
            placeholder="Email"
            required
            name="email"
            className="w-full px-3 py-2  text-dark placeholder-gray-400 bg-neutral-600/15 "
          />
        </div>

        <textarea
          rows={3}
          placeholder="Message"
          name="message"
          className="mb-4 w-full px-3 py-2  text-dark placeholder-gray-400 bg-neutral-600/15 "
        />

        <button className="px-12 py-3 text-xl font-semibold border-2 border-dark  text-light hover:text-dark uppercase transition-all duration-150 ease-linear bg-blue-600/60 hover:bg-light rounded-lg block mx-auto">
          Submit
        </button>
      </div>
    </form>
  );
}
