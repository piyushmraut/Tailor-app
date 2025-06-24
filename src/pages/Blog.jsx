import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { blogPosts } from "../data/blogPosts";
import { 
  FaBookOpen, 
  FaRegHeart, 
  FaHeart, 
  FaShareAlt, 
  FaRegBookmark, 
  FaSearch, 
  FaFilter, 
  FaStar, 
  FaAward, 
  FaUsers, 
  FaRegEnvelope, 
  FaInstagram, 
  FaFacebook, 
  FaTwitter, 
  FaYoutube, 
  FaGift,
  FaBook,
  FaUser,
  FaCalendarAlt,
  FaClock,
  FaEye,
  FaCommentAlt,
  FaBullseye,
  FaPalette
} from "react-icons/fa";
import { FiScissors } from "react-icons/fi";
import { 
  FiTrendingUp, 
  FiMessageCircle,
  FiChevronRight
} from "react-icons/fi";
import { IoSparkles } from "react-icons/io5";
import { HiOutlineArrowRight } from "react-icons/hi";

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [isVisible, setIsVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [likedPosts, setLikedPosts] = useState(new Set());
  const [bookmarkedPosts, setBookmarkedPosts] = useState(new Set());

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

  const categories = [
    "All",
    "Tailoring Tips",
    "Fashion Trends",
    "Fabric Care",
    "DIY Guides",
  ];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory =
      activeCategory === "All" || post.category === activeCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = blogPosts[0];

  const toggleLike = (postId) => {
    setLikedPosts((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(postId)) {
        newSet.delete(postId);
      } else {
        newSet.add(postId);
      }
      return newSet;
    });
  };

  const toggleBookmark = (postId) => {
    setBookmarkedPosts((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(postId)) {
        newSet.delete(postId);
      } else {
        newSet.add(postId);
      }
      return newSet;
    });
  };

  const stats = [
    {
      icon: FaBookOpen,
      label: "Articles",
      value: "150+",
      color: "text-blue-600",
    },
    {
      icon: FaUser,
      label: "Subscribers",
      value: "5,000+",
      color: "text-green-600",
    },
    { icon: FaHeart, label: "Likes", value: "12,000+", color: "text-red-600" },
    { icon: FaAward, label: "Awards", value: "25+", color: "text-yellow-600" },
  ];

  const socialLinks = [
    { icon: FaInstagram, href: "#", color: "hover:text-pink-600" },
    { icon: FaFacebook, href: "#", color: "hover:text-blue-600" },
    { icon: FaTwitter, href: "#", color: "hover:text-sky-600" },
    { icon: FaYoutube, href: "#", color: "hover:text-red-600" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-gradient-to-br from-gray-50 to-white"
    >
      {/* Floating Particles Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-[#BE9278]/10 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 100 - 50, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="py-12 px-4 max-w-7xl mx-auto relative">
        {/* Enhanced Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative h-[500px] rounded-3xl overflow-hidden mb-20 shadow-2xl"
        >
          <div className="absolute inset-0">
            <img
              src="https://static.thehoneycombers.com/wp-content/uploads/sites/2/2016/05/shutterstock_395053261-copy.jpg"
              alt="Tailoring Workshop"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>
          </div>

          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-center px-4 max-w-4xl"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md rounded-full px-6 py-3 mb-6 text-white"
              >
                <IoSparkles className="w-5 h-5" />
                <span className="text-sm font-medium">
                  Crafting Excellence Since 1990
                </span>
              </motion.div>

              <h1 className="text-5xl md:text-7xl font-serif text-white mb-6 leading-tight">
                Tailor's
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  className="block text-[#BE9278] italic"
                >
                  Journal
                </motion.span>
              </h1>

              <p className="text-gray-200 max-w-2xl mx-auto text-xl mb-8 leading-relaxed">
                Discover the art of tailoring through our expert insights,
                timeless techniques, and inspiring stories from master craftsmen
              </p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#BE9278] text-white px-8 py-4 rounded-full font-medium flex items-center gap-2 shadow-lg hover:shadow-xl transition-all"
                >
                  <FaBookOpen className="w-5 h-5" />
                  Start Reading
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white/20 backdrop-blur-md text-white px-8 py-4 rounded-full font-medium flex items-center gap-2 hover:bg-white/30 transition-all"
                >
                  <FaBullseye className="w-5 h-5" />
                  Explore Categories
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 * index, duration: 0.6 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all"
            >
              <stat.icon className={`w-8 h-8 ${stat.color} mx-auto mb-3`} />
              <div className="text-2xl font-bold text-gray-800">
                {stat.value}
              </div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Search and Filter Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="bg-white rounded-2xl p-6 shadow-lg mb-16"
        >
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="relative flex-grow">
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles, tips, and guides..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#BE9278] focus:border-transparent transition-all"
              />
            </div>
            <div className="flex items-center gap-2">
              <FaFilter className="w-5 h-5 text-gray-400" />
              <span className="text-gray-600 text-sm">Filter by:</span>
            </div>
          </div>
        </motion.div>

        {/* Enhanced Featured Post */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-8">
            <FaStar className="w-6 h-6 text-[#BE9278]" />
            <h2 className="text-3xl font-serif text-gray-800">
              Featured Story
            </h2>
            <div className="flex-grow h-px bg-gradient-to-r from-[#BE9278] to-transparent"></div>
          </div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500"
          >
            <div className="md:flex">
              <div className="md:w-1/2 h-80 md:h-auto relative overflow-hidden">
                <motion.img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                />
                <div className="absolute top-4 left-4">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                    className="bg-gradient-to-r from-[#BE9278] to-[#d4a98a] text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2"
                  >
                    <IoSparkles className="w-4 h-4" />
                    Featured
                  </motion.div>
                </div>
              </div>

              <div className="p-8 md:p-12 md:w-1/2 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-sm font-medium text-white bg-[#BE9278] px-4 py-2 rounded-full">
                    {featuredPost.category}
                  </span>
                  <div className="flex items-center gap-2 text-gray-500 text-sm">
                    <FaCalendarAlt className="w-4 h-4" />
                    {featuredPost.date}
                  </div>
                  <div className="flex items-center gap-2 text-gray-500 text-sm">
                    <FaClock className="w-4 h-4" />
                    {featuredPost.readTime}
                  </div>
                </div>

                <h3 className="text-3xl font-serif text-gray-800 mb-4 leading-tight">
                  {featuredPost.title}
                </h3>

                <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                  {featuredPost.excerpt}
                </p>

                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => toggleLike(featuredPost.id)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all ${
                        likedPosts.has(featuredPost.id)
                          ? "bg-red-100 text-red-600"
                          : "bg-gray-100 text-gray-600 hover:bg-red-100 hover:text-red-600"
                      }`}
                    >
                      <FaHeart
                        className={`w-4 h-4 ${
                          likedPosts.has(featuredPost.id) ? "fill-current" : ""
                        }`}
                      />
                      <span className="text-sm">234</span>
                    </motion.button>

                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 text-gray-600 hover:bg-blue-100 hover:text-blue-600 transition-all"
                    >
                      <FaShareAlt className="w-4 h-4" />
                      <span className="text-sm">Share</span>
                    </motion.button>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => toggleBookmark(featuredPost.id)}
                    className={`p-2 rounded-full transition-all ${
                      bookmarkedPosts.has(featuredPost.id)
                        ? "bg-[#BE9278] text-white"
                        : "bg-gray-100 text-gray-600 hover:bg-[#BE9278] hover:text-white"
                    }`}
                  >
                    <FaRegBookmark
                      className={`w-5 h-5 ${
                        bookmarkedPosts.has(featuredPost.id)
                          ? "fill-current"
                          : ""
                      }`}
                    />
                  </motion.button>
                </div>

                <Link to={`/blog/${featuredPost.id}`} className="group">
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="inline-flex items-center text-[#BE9278] hover:text-[#a9816a] transition-colors font-medium"
                  >
                    Read Full Article
                    <HiOutlineArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </motion.div>
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Enhanced Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-8">
            <FaPalette className="w-6 h-6 text-[#BE9278]" />
            <h2 className="text-3xl font-serif text-gray-800">
              Explore Categories
            </h2>
            <div className="flex-grow h-px bg-gradient-to-r from-[#BE9278] to-transparent"></div>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-2xl font-medium transition-all duration-300 flex items-center gap-2 ${
                  activeCategory === category
                    ? "bg-gradient-to-r from-[#BE9278] to-[#d4a98a] text-white shadow-lg"
                    : "bg-white text-gray-700 hover:bg-gray-50 shadow-md hover:shadow-lg"
                }`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
              >
                {category === "All" && <FaBookOpen className="w-4 h-4" />}
                {category === "Tailoring Tips" && (
                  <FiScissors className="w-4 h-4" />
                )}
                {category === "Fashion Trends" && (
                  <FiTrendingUp className="w-4 h-4" />
                )}
                {category === "Fabric Care" && <FaHeart className="w-4 h-4" />}
                {category === "DIY Guides" && <FaAward className="w-4 h-4" />}
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Enhanced Blog Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-8">
            <FaBookOpen className="w-6 h-6 text-[#BE9278]" />
            <h2 className="text-3xl font-serif text-gray-800">
              {activeCategory === "All" ? "All Articles" : activeCategory}
            </h2>
            <div className="flex-grow h-px bg-gradient-to-r from-[#BE9278] to-transparent"></div>
            <span className="text-gray-500 text-sm">
              {filteredPosts.length} article
              {filteredPosts.length !== 1 ? "s" : ""}
            </span>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.6 }}
                  exit={{ opacity: 0, y: -30 }}
                  layout
                  className="group"
                >
                  <motion.div
                    whileHover={{ y: -8 }}
                    className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <motion.img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

                      <div className="absolute top-4 left-4">
                        <span className="text-xs font-medium text-white bg-[#BE9278] px-3 py-1 rounded-full">
                          {post.category}
                        </span>
                      </div>

                      <div className="absolute top-4 right-4 flex gap-2">
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => toggleBookmark(post.id)}
                          className={`p-2 rounded-full backdrop-blur-md transition-all ${
                            bookmarkedPosts.has(post.id)
                              ? "bg-[#BE9278] text-white"
                              : "bg-white/20 text-white hover:bg-white/30"
                          }`}
                        >
                          <FaRegBookmark
                            className={`w-4 h-4 ${
                              bookmarkedPosts.has(post.id) ? "fill-current" : ""
                            }`}
                          />
                        </motion.button>
                      </div>

                      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                        <div className="flex items-center gap-3 text-white text-sm">
                          <div className="flex items-center gap-1">
                            <FaEye className="w-4 h-4" />
                            <span>1.2k</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <FiMessageCircle className="w-4 h-4" />
                            <span>23</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex justify-between items-center mb-3">
                        <div className="flex items-center gap-2 text-xs text-gray-500">
                          <FaCalendarAlt className="w-3 h-3" />
                          {post.date}
                        </div>
                        <div className="flex items-center gap-2 text-xs text-gray-500">
                          <FaClock className="w-3 h-3" />
                          {post.readTime}
                        </div>
                      </div>

                      <Link to={`/blog/${post.id}`}>
                        <h3 className="text-xl font-serif text-gray-800 mb-3 group-hover:text-[#BE9278] transition-colors leading-tight">
                          {post.title}
                        </h3>
                      </Link>

                      <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => toggleLike(post.id)}
                            className={`flex items-center gap-1 px-3 py-1 rounded-full text-sm transition-all ${
                              likedPosts.has(post.id)
                                ? "bg-red-100 text-red-600"
                                : "bg-gray-100 text-gray-600 hover:bg-red-100 hover:text-red-600"
                            }`}
                          >
                            <FaHeart
                              className={`w-3 h-3 ${
                                likedPosts.has(post.id) ? "fill-current" : ""
                              }`}
                            />
                            <span>42</span>
                          </motion.button>

                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="flex items-center gap-1 px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-600 hover:bg-blue-100 hover:text-blue-600 transition-all"
                          >
                            <FaShareAlt className="w-3 h-3" />
                          </motion.button>
                        </div>

                        <Link to={`/blog/${post.id}`} className="group/link">
                          <motion.div
                            whileHover={{ x: 3 }}
                            className="flex items-center text-sm text-[#BE9278] hover:text-[#a9816a] transition-colors font-medium"
                          >
                            Read more
                            <FiChevronRight className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform" />
                          </motion.div>
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Master Craftsmen Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-8">
            <FaAward className="w-6 h-6 text-[#BE9278]" />
            <h2 className="text-3xl font-serif text-gray-800">
              Master Craftsmen
            </h2>
            <div className="flex-grow h-px bg-gradient-to-r from-[#BE9278] to-transparent"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.6 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all"
              >
                <div className="w-20 h-20 bg-gradient-to-r from-[#BE9278] to-[#d4a98a] rounded-full mx-auto mb-4 flex items-center justify-center">
                  <FaUser className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-serif text-gray-800 mb-2">
                  Master Tailor {item}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  30+ years of experience in bespoke tailoring
                </p>
                <div className="flex justify-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className="w-4 h-4 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-[#BE9278] hover:text-[#a9816a] font-medium text-sm"
                >
                  View Profile
                </motion.button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Enhanced Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="relative mb-20"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#BE9278] to-[#d4a98a] rounded-3xl"></div>
          <div className="absolute inset-0 bg-black/10 rounded-3xl"></div>
          <div className="relative bg-gradient-to-r from-[#BE9278] to-[#d4a98a] rounded-3xl p-8 md:p-12 text-center text-white overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full opacity-10">
              <div className="absolute top-10 left-10 w-20 h-20 border-2 border-white rounded-full"></div>
              <div className="absolute bottom-10 right-10 w-16 h-16 border-2 border-white rounded-full"></div>
              <div className="absolute top-20 right-20 w-12 h-12 border-2 border-white rounded-full"></div>
            </div>

            <div className="relative max-w-3xl mx-auto">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.3, duration: 0.5 }}
                className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md rounded-full px-6 py-3 mb-6"
              >
                <FaGift className="w-5 h-5" />
                <span className="text-sm font-medium">
                  Exclusive Content & Tips
                </span>
              </motion.div>

              <h3 className="text-3xl md:text-4xl font-serif mb-4">
                Join Our Crafting Community
              </h3>
              <p className="mb-8 text-lg opacity-90 leading-relaxed">
                Get the latest tailoring tips, exclusive patterns,
                behind-the-scenes content, and special offers delivered straight
                to your inbox every week.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto mb-6">
                <div className="relative flex-grow">
                  <FaRegEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full pl-12 pr-4 py-4 rounded-2xl focus:outline-none focus:ring-4 focus:ring-white/30 text-gray-800 text-lg"
                  />
                </div>
                <motion.button
                  className="bg-white text-[#BE9278] font-semibold py-4 px-8 rounded-2xl hover:bg-gray-100 transition-colors flex items-center gap-2 justify-center whitespace-nowrap"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <IoSparkles className="w-5 h-5" />
                  Subscribe Now
                </motion.button>
              </div>

              <p className="text-sm opacity-75">
                ✨ 5,000+ tailors already subscribed • No spam, unsubscribe
                anytime
              </p>
            </div>
          </div>
        </motion.div>

        {/* Popular Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-8">
            <IoSparkles className="w-6 h-6 text-[#BE9278]" />
            <h2 className="text-3xl font-serif text-gray-800">Popular Tags</h2>
            <div className="flex-grow h-px bg-gradient-to-r from-[#BE9278] to-transparent"></div>
          </div>

          <div className="flex flex-wrap gap-3">
            {[
              "Tailoring",
              "Fashion",
              "Sewing",
              "Measurements",
              "Fabrics",
              "Design",
              "Patterns",
              "Alterations",
              "Bespoke",
              "Vintage",
              "Modern",
              "Techniques",
            ].map((tag, index) => (
              <motion.button
                key={tag}
                className="px-4 py-2 bg-white text-gray-700 rounded-2xl text-sm border-2 border-gray-100 hover:border-[#BE9278] hover:text-[#BE9278] transition-all shadow-sm hover:shadow-md"
                whileHover={{
                  scale: 1.05,
                  y: -2,
                  backgroundColor: "#BE9278",
                  color: "white",
                  borderColor: "#BE9278",
                }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.05 * index, duration: 0.3 }}
              >
                #{tag}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Enhanced Instagram Preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.6 }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-8">
            <FaInstagram className="w-6 h-6 text-[#BE9278]" />
            <h2 className="text-3xl font-serif text-gray-800">
              Behind the Scenes
            </h2>
            <div className="flex-grow h-px bg-gradient-to-r from-[#BE9278] to-transparent"></div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 text-[#BE9278] hover:text-[#a9816a] font-medium"
            >
              Follow Us
              <HiOutlineArrowRight className="w-4 h-4" />
            </motion.button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              "https://images.unsplash.com/photo-1604671801908-6f0c6a092c05?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80",
              "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80",
              "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80",
              "https://ronmastertailors.com.sg/wp-content/uploads/2021/11/tailor-sewing-jacket-closeup-ALYJDBW-1024x683-1.jpg",
              "https://5.imimg.com/data5/RS/OV/KI/SELLER-48111589/men-fashion-clothing-tailoring-services-1000x1000.png",
              "https://th.bing.com/th/id/OIP.L2SZLEkhqV_lU-5SI1FUkAHaE6?r=0&rs=1&pid=ImgDetMain",
            ].map((url, index) => (
              <motion.div
                key={index}
                className="relative aspect-square overflow-hidden rounded-2xl group cursor-pointer"
                whileHover={{ scale: 1.05, y: -5 }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
              >
                <img
                  src={url}
                  alt={`Tailoring image ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="flex items-center justify-between text-white text-sm">
                      <div className="flex items-center gap-2">
                        <FaHeart className="w-4 h-4" />
                        <span>{Math.floor(Math.random() * 100) + 50}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FiMessageCircle className="w-4 h-4" />
                        <span>{Math.floor(Math.random() * 20) + 5}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                    className="bg-white/20 backdrop-blur-md rounded-full p-3"
                  >
                    <FaInstagram className="w-6 h-6 text-white" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Social Media & Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="bg-white rounded-3xl p-8 shadow-lg mb-20"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-serif text-gray-800 mb-4">
              Connect With Us
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Join our community of passionate tailors and fashion enthusiasts
              across all platforms
            </p>
          </div>

          <div className="flex justify-center gap-6">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                className={`p-4 bg-gray-100 rounded-2xl text-gray-600 ${social.color} transition-all hover:shadow-lg`}
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
              >
                <social.icon className="w-8 h-8" />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-gray-50 to-white rounded-3xl p-12 border-2 border-gray-100">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1.7, duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-[#BE9278]/10 text-[#BE9278] rounded-full px-6 py-3 mb-6 font-medium"
            >
              <FiScissors className="w-5 h-5" />
              <span>Ready to Start Your Journey?</span>
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-serif text-gray-800 mb-6">
              Master the Art of
              <span className="block text-[#BE9278] italic">Tailoring</span>
            </h2>

            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Whether you're a beginner picking up your first needle or a
              seasoned professional looking to refine your craft, our
              comprehensive guides and expert insights will help you create
              masterpieces that stand the test of time.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#BE9278] text-white px-8 py-4 rounded-2xl font-semibold flex items-center gap-2 shadow-lg hover:shadow-xl transition-all"
              >
                <FaBookOpen className="w-5 h-5" />
                Start Learning Today
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white border-2 border-[#BE9278] text-[#BE9278] px-8 py-4 rounded-2xl font-semibold flex items-center gap-2 hover:bg-[#BE9278] hover:text-white transition-all"
              >
                <FaUsers className="w-5 h-5" />
                Join Community
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Blog;