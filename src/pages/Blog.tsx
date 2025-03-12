import { Calendar, Clock, ExternalLink } from 'lucide-react';
import { useEffect, useState } from 'react';
import { BlogPost, fetchBlogPosts } from '../datastore/blogs';

function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPosts, setTotalPosts] = useState(0);
  const postsPerPage = 5;

  useEffect(() => {
    const loadPosts = async () => {
      const data = await fetchBlogPosts();
      setPosts(data);
      setTotalPosts(data.length);
      setLoading(false);
    };
    
    loadPosts();
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  if (loading) return (    
  <section className="pt-24 py-20 min-h-screen bg-white">
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-6">
          <article className="bg-slate-50 p-8 rounded-xl shadow-sm hover-scale">
            <div className="flex items-center text-2xl mb-4 text-slate-800">Loading posts...</div>
            </article>
        </div>
      </div>
    </div>
  </section>);

if (posts.length < 1) return (    
  <section className="pt-24 py-20 min-h-screen bg-white">
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-6">
          <article className="bg-slate-50 p-8 rounded-xl shadow-sm hover-scale">
            <div className="flex items-center text-2xl mb-4 text-slate-800">Failed to fetch posts...</div>
            </article>
        </div>
      </div>
    </div>
  </section>);

  return (
    <section className="pt-24 py-20 min-h-screen bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {currentPosts.map((blog: BlogPost) => (
              <article key={blog.id} className="bg-slate-50 p-8 rounded-xl shadow-sm hover-scale">
                <h3 className="text-2xl font-semibold mb-4 text-slate-800">{blog.title}</h3>
                <p className="text-slate-600 mb-4">{blog.excerpt}</p>
                <div className="flex items-center gap-4 text-slate-500 text-sm mt-4">
                    <div className="flex items-center gap-1"> <Calendar size={14} /> <span>{blog.date}</span> </div>
                    <div className="flex items-center gap-1"> <Clock size={14} /> <span>{blog.readTime}</span> </div>
                </div>
                <div className="px-6 py-4 bg-slate-50 border-t border-slate-100">
                    <a href={blog.link} target='_blank' className="inline-flex items-center gap-2 text-slate-800 hover:text-slate-600 transition-colors">
                    Continue Reading  <ExternalLink size={18} className="mt-0.5" />
                    </a>
                </div>
              </article>
            ))}
          </div>
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: Math.ceil(totalPosts / postsPerPage) }, (_, i) => (
              <button
                key={i + 1}
                onClick={() => paginate(i + 1)}
                className={`px-4 py-2 rounded-md border ${currentPage === i + 1 ? 'bg-slate-800 text-white' : 'bg-white text-slate-800 hover:bg-slate-200'}`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blog;
