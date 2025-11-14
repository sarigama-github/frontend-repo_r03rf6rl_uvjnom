import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('')

  const submit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    try {
      // This demo just simulates a send
      await new Promise((r) => setTimeout(r, 700))
      setStatus('Message sent! We will get back to you shortly.')
    } catch (e) {
      setStatus('Something went wrong. Please try again.')
    }
  }

  return (
    <section id="contact" className="relative bg-[#0a0f1a] py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-semibold text-white">Contact Us</h2>
        <p className="text-gray-400 mt-2 max-w-xl">We'd love to hear from you. Send us a message and we'll respond within 24 hours.</p>
        <form onSubmit={submit} className="mt-10 grid md:grid-cols-2 gap-6 bg-white/5 border border-white/10 rounded-xl p-6">
          <div className="grid gap-2">
            <label className="text-gray-300 text-sm">Full Name</label>
            <input required className="bg-black/30 border border-white/10 rounded-md px-3 py-2 text-white placeholder:text-gray-500" placeholder="John Doe" />
          </div>
          <div className="grid gap-2">
            <label className="text-gray-300 text-sm">Email</label>
            <input type="email" required className="bg-black/30 border border-white/10 rounded-md px-3 py-2 text-white placeholder:text-gray-500" placeholder="john@company.com" />
          </div>
          <div className="md:col-span-2 grid gap-2">
            <label className="text-gray-300 text-sm">Message</label>
            <textarea required rows={5} className="bg-black/30 border border-white/10 rounded-md px-3 py-2 text-white placeholder:text-gray-500" placeholder="How can we help?" />
          </div>
          <div className="md:col-span-2 flex items-center gap-4">
            <button type="submit" className="inline-flex items-center justify-center px-5 py-2.5 rounded-md bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium shadow">
              Send Message
            </button>
            <span className="text-gray-400 text-sm">{status}</span>
          </div>
        </form>
      </div>
    </section>
  )
}
