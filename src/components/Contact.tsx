const Contact = () => {
  return (
    <div>
        <div className="absolute inset-0 cyber-gradient opacity-30"></div>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <h2 className="text-3xl font-bold mb-12 text-center neon-text">Get In Touch</h2>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300">Name</label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full rounded-md bg-gray-800/50 border-gray-700 text-white focus:border-[#0fa] focus:ring focus:ring-[#0fa] focus:ring-opacity-50 transition-all duration-300"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full rounded-md bg-gray-800/50 border-gray-700 text-white focus:border-[#0fa] focus:ring focus:ring-[#0fa] focus:ring-opacity-50 transition-all duration-300"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300">Message</label>
              <textarea
                id="message"
                rows={4}
                className="mt-1 block w-full rounded-md bg-gray-800/50 border-gray-700 text-white focus:border-[#0fa] focus:ring focus:ring-[#0fa] focus:ring-opacity-50 transition-all duration-300"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full cyber-border bg-gray-800/50 text-[#0fa] py-2 px-4 rounded-md transition-all duration-300 hover:neon-box hover:scale-105"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
    </div>
  )
}

export default Contact