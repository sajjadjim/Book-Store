export default function Newsletter() {
  return (
    <section className="py-16 bg-[#DCD7C9]">
      <div className="max-w-3xl mx-auto text-center px-6">
        <h2 className="text-4xl font-bold mb-4">Subscribe to Our Newsletter</h2>
        <p className="text-lg mb-8">
          Get the latest book releases, reading tips, and special offers 
          delivered straight to your inbox.
        </p>

        <form className="flex flex-col sm:flex-row gap-4 justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="input input-bordered w-full sm:w-2/3"
            required
          />
          <button type="submit" className="btn  bg-[#A27B5C]">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  )
}
