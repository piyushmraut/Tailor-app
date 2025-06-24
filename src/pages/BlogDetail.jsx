// src/pages/BlogDetail.jsx
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { 
  Calendar, 
  Clock, 
  User, 
  ArrowLeft, 
  Share2, 
  Heart, 
  BookOpen,
  Star,
  Award,
  Eye
} from 'lucide-react';
import { blogPosts } from '../data/blogPosts';

const BlogDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isLiked, setIsLiked] = useState(false);
  const [readProgress, setReadProgress] = useState(0);

  useEffect(() => {
    // Simulate loading
    setTimeout(() => {
      const foundPost = blogPosts.find(post => post.id === parseInt(id));
      setPost(foundPost);
      setIsLoading(false);
    }, 800);
  }, [id]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setReadProgress(Math.min(scrollPercent, 100));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-[#BE9278] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600 animate-pulse">Loading article...</p>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center animate-fade-in">
          <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <BookOpen className="w-12 h-12 text-gray-400" />
          </div>
          <h1 className="text-4xl font-serif text-gray-800 mb-4">Post Not Found</h1>
          <p className="text-gray-600 mb-8">The blog post you're looking for doesn't exist.</p>
          <button 
            onClick={() => window.history.back()}
            className="inline-flex items-center px-6 py-3 bg-[#BE9278] text-white rounded-lg hover:bg-[#A67C5A] transition-all duration-300 transform hover:scale-105"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-50">
      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
        <div 
          className="h-full bg-gradient-to-r from-[#BE9278] to-[#D4A574] transition-all duration-300 ease-out"
          style={{ width: `${readProgress}%` }}
        />
      </div>

      {/* Back Button */}
      <div className="fixed top-6 left-6 z-40">
        <button 
          onClick={() => window.history.back()}
          className="group flex items-center justify-center w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
        >
          <ArrowLeft className="w-5 h-5 text-gray-700 group-hover:text-[#BE9278] transition-colors duration-300" />
        </button>
      </div>

      {/* Floating Action Buttons */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 space-y-3">
        <button 
          onClick={() => setIsLiked(!isLiked)}
          className={`group flex items-center justify-center w-12 h-12 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 ${
            isLiked ? 'bg-red-500 text-white' : 'bg-white/90 backdrop-blur-sm text-gray-700'
          }`}
        >
          <Heart className={`w-5 h-5 transition-all duration-300 ${isLiked ? 'fill-current' : ''}`} />
        </button>
        <button className="group flex items-center justify-center w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110">
          <Share2 className="w-5 h-5 text-gray-700 group-hover:text-[#BE9278] transition-colors duration-300" />
        </button>
      </div>

      <div className="py-12 px-4 max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="mb-12 animate-fade-in-up">
          <div className="flex items-center justify-between mb-6">
            <span className="inline-flex items-center text-xs font-medium text-white bg-gradient-to-r from-[#BE9278] to-[#D4A574] px-3 py-1.5 rounded-full shadow-lg animate-bounce-in">
              <Star className="w-3 h-3 mr-1" />
              {post.category}
            </span>
            <div className="flex items-center text-sm text-gray-500 space-x-2">
              <Eye className="w-4 h-4" />
              <span>2.4k views</span>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-serif text-gray-800 mb-6 leading-tight animate-slide-in-right">
            {post.title}
          </h1>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center text-sm text-gray-600 space-x-6">
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4 text-[#BE9278]" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-[#BE9278]" />
                <span>{post.readTime}</span>
              </div>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <div className="flex items-center space-x-1">
                <Heart className="w-4 h-4 text-red-500" />
                <span>124</span>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        <div className="mb-12 group animate-fade-in-up animation-delay-200">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-96 md:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        </div>

        {/* Article Content */}
        <div className="mb-16 animate-fade-in-up animation-delay-400">
          <div 
            className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-gray-800 prose-p:text-gray-700 prose-p:leading-relaxed prose-a:text-[#BE9278] prose-a:no-underline hover:prose-a:underline prose-blockquote:border-l-[#BE9278] prose-blockquote:bg-gray-50 prose-blockquote:rounded-r-lg prose-blockquote:py-4 prose-blockquote:px-6"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>

        {/* Author Section */}
        <div className="mt-16 pt-8 border-t border-gray-200 animate-fade-in-up animation-delay-600">
          <div className="bg-gradient-to-r from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-serif text-gray-800 flex items-center">
                <Award className="w-6 h-6 text-[#BE9278] mr-2" />
                About the Author
              </h3>
            </div>
            
            <div className="flex items-start space-x-6">
              <div className="relative group">
                <div className="w-20 h-20 rounded-full overflow-hidden shadow-lg ring-4 ring-white group-hover:ring-[#BE9278] transition-all duration-300">
                  <img 
                    src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" 
                    alt="Author" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                </div>
              </div>
              
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <h4 className="text-xl font-semibold text-gray-800">Sarah Johnson</h4>
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 mb-3 flex items-center">
                  <User className="w-4 h-4 mr-2 text-[#BE9278]" />
                  Master Tailor with 15 years experience
                </p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Sarah is a renowned fashion expert and master tailor who has worked with luxury brands across Europe. 
                  Her expertise in sustainable fashion and innovative tailoring techniques has made her a sought-after consultant in the industry.
                </p>
                <div className="flex items-center space-x-4 mt-4">
                  <div className="text-sm text-gray-500">
                    <span className="font-medium text-[#BE9278]">156</span> Articles
                  </div>
                  <div className="text-sm text-gray-500">
                    <span className="font-medium text-[#BE9278]">12.5k</span> Followers
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes fade-in-up {
          from { 
            opacity: 0; 
            transform: translateY(30px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        
        @keyframes slide-in-right {
          from { 
            opacity: 0; 
            transform: translateX(50px); 
          }
          to { 
            opacity: 1; 
            transform: translateX(0); 
          }
        }
        
        @keyframes bounce-in {
          0% { 
            opacity: 0; 
            transform: scale(0.3); 
          }
          50% { 
            opacity: 1; 
            transform: scale(1.05); 
          }
          70% { 
            transform: scale(0.9); 
          }
          100% { 
            opacity: 1; 
            transform: scale(1); 
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
        }
        
        .animate-slide-in-right {
          animation: slide-in-right 0.8s ease-out;
        }
        
        .animate-bounce-in {
          animation: bounce-in 0.8s ease-out;
        }
        
        .animation-delay-200 {
          animation-delay: 0.2s;
          opacity: 0;
          animation-fill-mode: forwards;
        }
        
        .animation-delay-400 {
          animation-delay: 0.4s;
          opacity: 0;
          animation-fill-mode: forwards;
        }
        
        .animation-delay-600 {
          animation-delay: 0.6s;
          opacity: 0;
          animation-fill-mode: forwards;
        }
      `}</style>
    </div>
  );
};

export default BlogDetail;