import React from 'react'

const Contact: React.FC = () => (
  <form
    action="https://formspree.io/f/xzzvkzea"
    method="POST"
    className="space-y-6"
  >
    <div className="grid sm:grid-cols-2 gap-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
          Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full px-4 py-3 border rounded-lg border-gray-300 focus:ring-2 focus:ring-blue-500"
          placeholder="Your full name"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
          Email *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full px-4 py-3 border rounded-lg border-gray-300 focus:ring-2 focus:ring-blue-500"
          placeholder="your.email@example.com"
        />
      </div>
    </div>

    <div>
      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
        Message *
      </label>
      <textarea
        id="message"
        name="message"
        rows={5}
        required
        className="w-full px-4 py-3 border rounded-lg border-gray-300 focus:ring-2 focus:ring-blue-500 resize-vertical"
        placeholder="Tell me about your project or just say hello..."
      />
    </div>

    <input type="hidden" name="_captcha" value="false" />
    <input type="hidden" name="_next" value="https://leslyvj.github.io/#thanks" />

    <button
      type="submit"
      className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 bg-black text-white font-medium rounded-lg hover:bg-gray-800 transition"
    >
      Send Message
    </button>
  </form>
)

export default Contact
