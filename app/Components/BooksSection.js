"use client";
import { useState, useEffect, useCallback } from "react";

const STAR = ({ filled }) => (
  <svg className={`w-3.5 h-3.5 ${filled ? "text-amber-400" : "text-slate-200"}`} fill="currentColor" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const BADGE_COLORS = {
  Bestseller: "bg-red-100 text-red-700",
  Classic: "bg-purple-100 text-purple-700",
  Trending: "bg-blue-100 text-blue-700",
  Popular: "bg-green-100 text-green-700",
  Thriller: "bg-gray-800 text-white",
  "Nobel Laureate": "bg-yellow-100 text-yellow-800",
  Poetry: "bg-pink-100 text-pink-700",
  Omnibus: "bg-indigo-100 text-indigo-700",
  Collection: "bg-orange-100 text-orange-700",
  History: "bg-amber-100 text-amber-800",
  Youth: "bg-teal-100 text-teal-700",
  Literary: "bg-rose-100 text-rose-700",
  Pulitzer: "bg-violet-100 text-violet-700",
  Dystopian: "bg-zinc-800 text-white",
  Magic: "bg-fuchsia-100 text-fuchsia-700",
  Finance: "bg-emerald-100 text-emerald-700",
  Science: "bg-cyan-100 text-cyan-700",
  Spiritual: "bg-lime-100 text-lime-800",
  "Non-Fiction": "bg-slate-100 text-slate-700",
};

export default function BooksSection({ onAddToCart }) {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [language, setLanguage] = useState("");
  const [category, setCategory] = useState("");
  const [selectedBook, setSelectedBook] = useState(null);
  const [addedId, setAddedId] = useState(null);

  const categories = [
    "All",
    "Fiction",
    "Classic Literature",
    "Mystery",
    "Romance",
    "Science Fiction",
    "Fantasy",
    "Self-Help",
    "Non-Fiction",
    "History",
    "Poetry",
    "Thriller",
    "Finance",
    "Spirituality",
    "Science",
  ];

  const fetchBooks = useCallback(async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams();
      if (search) params.append("search", search);
      if (language) params.append("language", language);
      if (category && category !== "All") params.append("category", category);
      const res = await fetch(`/api/books?${params.toString()}`);
      const data = await res.json();
      setBooks(data.books || []);
    } catch {
      setBooks([]);
    }
    setLoading(false);
  }, [search, language, category]);

  useEffect(() => {
    const debounce = setTimeout(fetchBooks, 300);
    return () => clearTimeout(debounce);
  }, [fetchBooks]);

  const handleAdd = (book) => {
    onAddToCart(book);
    setAddedId(book.id);
    setTimeout(() => setAddedId(null), 1500);
  };

  return (
    <section id="books" className="bg-slate-50 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-amber-500 font-semibold text-sm uppercase tracking-widest">Our Collection</span>
          <h2 className="text-4xl font-extrabold text-slate-800 mt-2 mb-4">Browse Our Books</h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            Explore Bangladeshi classics, Bengali literature, and world-famous English books all in one place.
          </p>
        </div>

        {/* Search & Filters */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-4 mb-8 flex flex-col md:flex-row gap-3">
          {/* Search */}
          <div className="relative flex-1">
            <svg className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-slate-400 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Search by title, author, or category..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent text-sm"
            />
          </div>

          {/* Language Filter */}
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="px-4 py-3 border border-slate-200 rounded-xl text-slate-700 focus:outline-none focus:ring-2 focus:ring-amber-400 text-sm bg-white"
          >
            <option value="">🌐 All Languages</option>
            <option value="Bengali">🇧🇩 Bengali</option>
            <option value="English">🇬🇧 English</option>
          </select>

          {/* Category Filter */}
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="px-4 py-3 border border-slate-200 rounded-xl text-slate-700 focus:outline-none focus:ring-2 focus:ring-amber-400 text-sm bg-white"
          >
            {categories.map((c) => (
              <option key={c} value={c === "All" ? "" : c}>{c}</option>
            ))}
          </select>

          {/* Clear */}
          {(search || language || category) && (
            <button
              onClick={() => { setSearch(""); setLanguage(""); setCategory(""); }}
              className="px-4 py-3 text-slate-500 hover:text-slate-700 text-sm rounded-xl border border-slate-200 hover:bg-slate-50 transition"
            >
              Clear
            </button>
          )}
        </div>

        {/* Results count */}
        {!loading && (
          <p className="text-slate-500 text-sm mb-6">
            Showing <span className="font-semibold text-slate-700">{books.length}</span> books
            {search && <> for &ldquo;<span className="text-amber-600">{search}</span>&rdquo;</>}
          </p>
        )}

        {/* Books Grid */}
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-sm overflow-hidden animate-pulse">
                <div className="h-56 bg-slate-200" />
                <div className="p-4 space-y-2">
                  <div className="h-4 bg-slate-200 rounded w-3/4" />
                  <div className="h-3 bg-slate-100 rounded w-1/2" />
                  <div className="h-8 bg-slate-200 rounded mt-3" />
                </div>
              </div>
            ))}
          </div>
        ) : books.length === 0 ? (
          <div className="text-center py-20 text-slate-500">
            <svg className="w-16 h-16 mx-auto mb-4 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            <p className="text-xl font-semibold">No books found</p>
            <p className="text-sm mt-1">Try adjusting your search or filters</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {books.map((book) => (
              <div
                key={book.id}
                className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col"
              >
                {/* Cover */}
                <div className="relative h-56 bg-gradient-to-br from-slate-100 to-slate-200 overflow-hidden cursor-pointer" onClick={() => setSelectedBook(book)}>
                  <img
                    src={book.image}
                    alt={book.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.target.src = `https://via.placeholder.com/300x400/1e293b/f59e0b?text=${encodeURIComponent(book.title.slice(0, 20))}`;
                    }}
                  />
                  {/* Badge */}
                  {book.badge && (
                    <span className={`absolute top-2 left-2 text-xs font-semibold px-2.5 py-1 rounded-full ${BADGE_COLORS[book.badge] || "bg-slate-100 text-slate-700"}`}>
                      {book.badge}
                    </span>
                  )}
                  {/* Language Tag */}
                  <span className="absolute top-2 right-2 text-xs bg-black/50 text-white px-2 py-0.5 rounded-full backdrop-blur-sm">
                    {book.language === "Bengali" ? "🇧🇩" : "🇬🇧"} {book.language}
                  </span>
                  {/* Quick View overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="bg-white text-slate-800 text-xs font-semibold px-3 py-1.5 rounded-full">Quick View</span>
                  </div>
                </div>

                {/* Details */}
                <div className="p-4 flex flex-col flex-1">
                  <div className="flex-1">
                    <p className="text-xs text-amber-600 font-medium mb-1">{book.category}</p>
                    <h3 className="font-bold text-slate-800 text-sm leading-snug mb-0.5 line-clamp-2">{book.title}</h3>
                    <p className="text-xs text-slate-500 mb-2">{book.author}</p>
                    {/* Stars */}
                    <div className="flex items-center gap-1 mb-3">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <STAR key={s} filled={s <= Math.round(book.rating)} />
                      ))}
                      <span className="text-xs text-slate-400 ml-1">({book.reviews.toLocaleString()})</span>
                    </div>
                  </div>

                  {/* Price + Button */}
                  <div className="flex items-center justify-between mt-auto">
                    <div>
                      <span className="text-lg font-extrabold text-slate-800">৳{book.price}</span>
                      {book.originalPrice > book.price && (
                        <span className="text-xs text-slate-400 line-through ml-1">৳{book.originalPrice}</span>
                      )}
                    </div>
                    <button
                      onClick={() => handleAdd(book)}
                      className={`px-3 py-2 text-xs font-semibold rounded-xl transition-all duration-200 ${
                        addedId === book.id
                          ? "bg-green-500 text-white scale-95"
                          : "bg-amber-500 hover:bg-amber-600 text-white hover:scale-105"
                      }`}
                    >
                      {addedId === book.id ? "✓ Added" : "+ Cart"}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Book Detail Modal */}
      {selectedBook && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={() => setSelectedBook(null)}>
          <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="flex flex-col sm:flex-row gap-6 p-6">
              {/* Image */}
              <div className="w-full sm:w-48 h-64 flex-shrink-0 rounded-2xl overflow-hidden bg-slate-100">
                <img
                  src={selectedBook.image}
                  alt={selectedBook.title}
                  className="w-full h-full object-cover"
                  onError={(e) => { e.target.src = `https://via.placeholder.com/200x280/1e293b/f59e0b?text=${encodeURIComponent(selectedBook.title.slice(0, 15))}`; }}
                />
              </div>

              {/* Info */}
              <div className="flex-1">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <p className="text-amber-600 text-xs font-semibold uppercase tracking-wider">{selectedBook.category}</p>
                    <h2 className="text-2xl font-extrabold text-slate-800 leading-tight">{selectedBook.title}</h2>
                    <p className="text-slate-500 mt-0.5">by {selectedBook.author}</p>
                  </div>
                  <button onClick={() => setSelectedBook(null)} className="p-2 hover:bg-slate-100 rounded-xl text-slate-400">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <div className="flex items-center gap-2 mb-4">
                  <div className="flex">
                    {[1,2,3,4,5].map((s) => <STAR key={s} filled={s <= Math.round(selectedBook.rating)} />)}
                  </div>
                  <span className="text-sm text-slate-500">{selectedBook.rating} · {selectedBook.reviews.toLocaleString()} reviews</span>
                </div>

                <p className="text-slate-600 text-sm leading-relaxed mb-4">{selectedBook.description}</p>

                <div className="grid grid-cols-2 gap-2 text-xs text-slate-500 mb-4">
                  <span>📖 {selectedBook.pages} pages</span>
                  <span>🏭 {selectedBook.publisher}</span>
                  <span>📦 {selectedBook.stock} in stock</span>
                  <span>{selectedBook.language === "Bengali" ? "🇧🇩" : "🇬🇧"} {selectedBook.language}</span>
                </div>

                <div className="flex items-center gap-4">
                  <div>
                    <span className="text-3xl font-extrabold text-slate-800">৳{selectedBook.price}</span>
                    {selectedBook.originalPrice > selectedBook.price && (
                      <span className="text-sm text-slate-400 line-through ml-2">৳{selectedBook.originalPrice}</span>
                    )}
                    {selectedBook.originalPrice > selectedBook.price && (
                      <span className="ml-2 text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-medium">
                        {Math.round((1 - selectedBook.price / selectedBook.originalPrice) * 100)}% OFF
                      </span>
                    )}
                  </div>
                </div>

                <button
                  onClick={() => { handleAdd(selectedBook); setSelectedBook(null); }}
                  className="mt-4 w-full py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold rounded-2xl hover:from-amber-600 hover:to-orange-600 hover:scale-[1.02] transition-all shadow-md"
                >
                  Add to Cart — ৳{selectedBook.price}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
