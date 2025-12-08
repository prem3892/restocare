export const ContactForm = () => {
  return (
    <form className="space-y-6">
      {/* contact form section */}
      <div>
        <label htmlFor="name" className="text-sm">
          Full name
        </label>
        <input id="name" type="text" placeholder="" className="w-full p-3 rounded bg-gray-200" />
      </div>
      <div>
        <label htmlFor="email" className="text-sm">
          Email
        </label>
        <input id="email" type="email" className="w-full p-3 rounded bg-gray-200" />
      </div>
      <div>
        <label htmlFor="message" className="text-sm">
          Message
        </label>
        <textarea id="message" rows={3} className="w-full p-3 rounded bg-gray-200"></textarea>
      </div>
      <button
        type="submit"
        className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded bg-[#C00404] text-gray-50
            cursor-pointer hover:bg-white border-2 hover:border-[#C00404] hover:text-[#C00404] hover:shadow-lg transition duration-300"
      >
        Send Message
      </button>
    </form>
  );
};
