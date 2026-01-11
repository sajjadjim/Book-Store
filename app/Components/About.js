export default function About() {
  return (
    <section className="py-16  bg-[#DCD7C9]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-20">
        
        {/* Image */}
        <div className="flex-1">
          <img
            src="https://cdn.pixabay.com/photo/2016/02/16/21/07/christmas-background-1204029_1280.jpg"
            alt="About Bookstore"
            className="rounded-lg shadow-2xl"
          />
        </div>

        {/* Text */}
        <div className="flex-1 text-center lg:text-left">
          <h2 className="text-4xl font-bold mb-4">About Our BookStore</h2>
          <p className="text-lg mb-6">
            At <span className="font-semibold">BookStore</span>, we believe that every book 
            holds the power to inspire, educate, and transform lives. 
            From timeless classics to the latest bestsellers, we offer a wide 
            collection that caters to readers of all ages and interests.
          </p>
          <p className="text-lg mb-6">
            Whether you are looking for your next adventure, romance, or 
            a deep dive into history and science, our shelves are always 
            ready to welcome you.
          </p>
          <button className="btn btn-outline">Learn More</button>
        </div>
      </div>
    </section>
  )
}
