import { Calendar, Clock, ExternalLink } from 'lucide-react';
import { blogs, BlogPost  } from '../datastore/blogs';

function Blog() {
  return (
    <section className="pt-24 py-20 min-h-screen bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-slate-800 text-center">Blogs</h2>
          <div className="space-y-6">
            {blogs.map((blog: BlogPost) => (
              <article key={blog.id} className="bg-slate-50 p-8 rounded-xl shadow-sm hover-scale">
                <h3 className="text-2xl font-semibold mb-4 text-slate-800">{blog.title}</h3>
                <p className="text-slate-600 mb-4">{blog.excerpt}</p>
                <div className="flex items-center gap-4 text-slate-500 text-sm mt-4">
                    <div className="flex items-center gap-1"> <Calendar size={14} /> <span>{blog.date}</span> </div>
                    <div className="flex items-center gap-1"> <Clock size={14} /> <span>{blog.readTime}</span> </div>
                </div>
                <div className="px-6 py-4 bg-slate-50 border-t border-slate-100">
                    <a href={blog.link} target='_blanck' className="inline-flex items-center gap-2 text-slate-800 hover:text-slate-600 transition-colors">
                    Continue Reading  <ExternalLink size={18} className="mt-0.5" />
                    </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blog;