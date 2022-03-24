const Form = () => (
  <div className=" lg:2/5 md:w-1/2">
    <h2 className="mb-5 text-center text-3xl font-black">
      {' '}
      <span className="font-bold text-indigo-600">Patient</span> Info
    </h2>
    <form className="mb-10 rounded-lg bg-white py-10 px-5 shadow-md">
      <div className="mb-5">
        <label
          htmlFor="pet"
          className="block font-bold uppercase text-gray-700"
        >
          Pet Name
          <input
            id="pet"
            type="text"
            placeholder="Buddy"
            className="mt-2 w-full rounded-md border-2 p-2 placeholder-gray-400"
          />
        </label>
      </div>
      <div className="mb-5">
        <label
          htmlFor="owner"
          className="block font-bold uppercase text-gray-700"
        >
          Owner&apos;s Name
          <input
            id="owner"
            type="text"
            placeholder="John Doe"
            className="mt-2 w-full rounded-md border-2 p-2 placeholder-gray-400"
          />
        </label>
      </div>
      <div className="mb-5">
        <label
          htmlFor="email"
          className="block font-bold uppercase text-gray-700"
        >
          Email
          <input
            id="email"
            type="email"
            placeholder="j.dow@email.com"
            className="mt-2 w-full rounded-md border-2 p-2 placeholder-gray-400"
          />
        </label>
      </div>
      <div className="mb-5">
        <label
          htmlFor="entry"
          className="block font-bold uppercase text-gray-700"
        >
          Entry Date
          <input
            id="entry"
            type="date"
            className="mt-2 w-full rounded-md border-2 p-2 placeholder-gray-400"
          />
        </label>
      </div>
      <div className="mb-5">
        <label
          htmlFor="symptoms"
          className="block font-bold uppercase text-gray-700"
        >
          Symptoms
          <textarea
            id="symptoms"
            className="mt-2 w-full rounded-md border-2 p-2 placeholder-gray-400"
            placeholder="Decreased Appetite ..."
          />
        </label>
      </div>
      <input
        type="submit"
        className="w-full cursor-pointer bg-indigo-600 p-3 font-bold uppercase text-white transition-colors hover:bg-indigo-700"
        value="Add Patient"
      />
    </form>
  </div>
);

export default Form;
