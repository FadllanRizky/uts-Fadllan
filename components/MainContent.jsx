import { useState } from "react";
import { Heart, MessageCircle, ShoppingCart, Info, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import index from "../data/index.json";

function MainContent({ onAddToCart }) {
  const [popup, setPopup] = useState(null);
  const [liked, setLiked] = useState({});
  const [comments, setComments] = useState({});
  const [showCommentBox, setShowCommentBox] = useState(null);
  const [inputValues, setInputValues] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);

  const toggleLike = (id) => {
    setLiked((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleInputChange = (id, value) => {
    setInputValues((prev) => ({ ...prev, [id]: value }));
  };

  const handleAddComment = (id) => {
    const text = inputValues[id]?.trim();
    if (!text) return;
    setComments((prev) => ({
      ...prev,
      [id]: [...(prev[id] || []), text],
    }));
    setInputValues((prev) => ({ ...prev, [id]: "" }));
  };

  const nextImage = () => {
    setCurrentIndex((prev) =>
      prev === (popup.images?.length || 1) - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? (popup.images?.length || 1) - 1 : prev - 1
    );
  };

  return (
    <main className="bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen py-10 px-6">
      <motion.h1
        className="text-4xl font-semibold text-center text-gray-800 mb-10"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        PuBox Store
      </motion.h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {index.map((item, i) => (
          <motion.div
            key={item.id}
            className="bg-white shadow-xl rounded-2xl overflow-hidden cursor-pointer relative group"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            whileHover={{
              y: -8,
              boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
            }}
          >
            <motion.img
              src={item.image}
              alt={item.brand}
              className="w-full h-60 object-contain bg-gray-50 p-4 transition-transform duration-500 group-hover:scale-105"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            />

            <div className="p-5">
              <h3 className="text-lg font-semibold text-gray-900">{item.brand}</h3>
              <p className="text-sm text-gray-500 mb-2">{item.category}</p>
              <p className="text-gray-600 text-sm line-clamp-2">{item.description}</p>
              <p className="text-xl font-bold text-gray-900 mt-3">
                Rp{item.price.toLocaleString()}
              </p>

              {/* Tombol Aksi */}
              <div className="flex justify-between items-center mt-5">
                <motion.button
                  onClick={() => toggleLike(item.id)}
                  className={`p-2 rounded-full transition ${
                    liked[item.id] ? "bg-red-100 text-red-500" : "hover:bg-gray-100"
                  }`}
                  whileTap={{ scale: 0.85 }}
                  animate={liked[item.id] ? { scale: [1, 1.3, 1] } : {}}
                  transition={{ duration: 0.3 }}
                >
                  <Heart
                    fill={liked[item.id] ? "currentColor" : "none"}
                    className="w-5 h-5"
                  />
                </motion.button>

                <motion.button
                  onClick={() =>
                    setShowCommentBox(showCommentBox === item.id ? null : item.id)
                  }
                  className="p-2 rounded-full hover:bg-gray-100 transition"
                  whileTap={{ scale: 0.9 }}
                >
                  <MessageCircle className="w-5 h-5 text-gray-600" />
                </motion.button>

                <motion.button
                  onClick={onAddToCart}
                  className="p-2 rounded-full hover:bg-gray-100 transition"
                  whileTap={{ scale: 0.9, rotate: 15 }}
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 0.4 }}
                >
                  <ShoppingCart className="w-5 h-5 text-gray-600" />
                </motion.button>

                <motion.button
                  onClick={() => {
                    setPopup(item);
                    setCurrentIndex(0);
                  }}
                  className="p-2 rounded-full hover:bg-gray-100 transition"
                  whileTap={{ scale: 0.9 }}
                >
                  <Info className="w-5 h-5 text-gray-600" />
                </motion.button>
              </div>

              {/* Komentar */}
              <AnimatePresence>
                {showCommentBox === item.id && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="mt-4"
                  >
                    <div className="flex gap-2 items-center">
                      <input
                        type="text"
                        value={inputValues[item.id] || ""}
                        onChange={(e) => handleInputChange(item.id, e.target.value)}
                        placeholder="Tulis komentar..."
                        className="border border-gray-300 rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                      />
                      <motion.button
                        onClick={() => handleAddComment(item.id)}
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                        whileTap={{ scale: 0.9 }}
                      >
                        Kirim
                      </motion.button>
                    </div>

                    <div className="mt-3 space-y-2 max-h-32 overflow-y-auto">
                      <AnimatePresence>
                        {(comments[item.id] || []).map((cmt, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            className="bg-gray-100 rounded-xl px-3 py-2 text-sm text-gray-700 shadow-sm"
                          >
                            💬 {cmt}
                          </motion.div>
                        ))}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Popup Detail dengan Slider */}
      <AnimatePresence>
        {popup && (
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-2xl w-11/12 md:w-2/3 lg:w-1/2 shadow-2xl p-8 relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            >
              <button
                onClick={() => setPopup(null)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>

              {/* Gambar Slider */}
              <div className="relative w-full h-64 flex justify-center items-center bg-gray-100 rounded-xl overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={popup.images ? popup.images[currentIndex] : popup.image}
                    src={popup.images ? popup.images[currentIndex] : popup.image}
                    alt={popup.brand}
                    className="w-full h-64 object-contain absolute"
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.4 }}
                  />
                </AnimatePresence>

                {/* Tombol Next/Prev */}
                {popup.images?.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-2 bg-white/70 hover:bg-white text-gray-700 p-2 rounded-full shadow-md transition"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-2 bg-white/70 hover:bg-white text-gray-700 p-2 rounded-full shadow-md transition"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </>
                )}
              </div>

              <h2 className="text-2xl font-semibold text-gray-900 mt-6">{popup.brand}</h2>
              <p className="text-gray-500 text-sm mb-2">{popup.category}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{popup.description}</p>
              <p className="text-2xl font-bold text-gray-900">
                Rp{popup.price.toLocaleString()}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

export default MainContent;
