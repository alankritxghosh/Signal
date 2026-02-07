import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { NavBar } from '@/app/components/NavBar';
import { Footer } from '@/app/components/Footer';
import { blogPosts } from '@/app/data/blogPosts';
import { useEffect } from 'react';

export function BlogPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div 
      className="min-h-screen overflow-x-hidden"
      style={{ background: 'var(--color-bg-primary)' }}
    >
      <NavBar onWaitlistClick={() => {}} />

      <section className="px-6" style={{ paddingTop: '160px', paddingBottom: '96px' }}>
        <div className="max-w-4xl mx-auto">
          {/* Page Header */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 'var(--text-h1)',
              fontWeight: 600,
              color: 'var(--color-text-primary)',
              letterSpacing: '-0.03em',
              lineHeight: 1.1,
              marginBottom: '16px',
            }}
          >
            Blog
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 'var(--text-body-lg)',
              color: 'var(--color-text-secondary)',
              lineHeight: 1.7,
              marginBottom: '64px',
            }}
          >
            Thoughts on email, attention, and building tools that respect both.
          </motion.p>

          {/* Blog Post Cards */}
          <div className="space-y-8">
            {blogPosts.map((post, i) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <Link
                  to={`/blog/${post.slug}`}
                  className="block glass-card p-8 rounded-2xl transition-all hover:translate-y-[-4px]"
                  style={{
                    textDecoration: 'none',
                    background: 'rgba(255, 255, 255, 0.7)',
                    border: '1px solid rgba(255, 255, 255, 0.6)',
                    backdropFilter: 'blur(24px) saturate(180%)',
                    WebkitBackdropFilter: 'blur(24px) saturate(180%)',
                    boxShadow: '0 4px 24px rgba(0, 0, 0, 0.06), inset 0 1px 0 rgba(255, 255, 255, 0.8)',
                  }}
                >
                  {/* Metadata */}
                  <div className="flex items-center gap-3 mb-4">
                    <span 
                      style={{ 
                        fontFamily: "'Inter', sans-serif", 
                        fontSize: '13px', 
                        color: 'var(--color-text-muted)' 
                      }}
                    >
                      {post.date}
                    </span>
                    <span 
                      style={{ 
                        width: 4, 
                        height: 4, 
                        borderRadius: '50%', 
                        background: 'var(--color-text-muted)',
                        display: 'inline-block',
                      }} 
                    />
                    <span 
                      style={{ 
                        fontFamily: "'Inter', sans-serif", 
                        fontSize: '13px', 
                        color: 'var(--color-text-muted)' 
                      }}
                    >
                      {post.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: 'var(--text-h3)',
                      fontWeight: 600,
                      color: 'var(--color-text-primary)',
                      letterSpacing: '-0.02em',
                      lineHeight: 1.3,
                      marginBottom: '12px',
                    }}
                  >
                    {post.title}
                  </h2>

                  {/* Subtitle / Excerpt */}
                  <p 
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: 'var(--text-body)',
                      color: 'var(--color-text-secondary)',
                      lineHeight: 1.7,
                      margin: 0,
                    }}
                  >
                    {post.subtitle}
                  </p>

                  {/* Read more */}
                  <span 
                    className="inline-block mt-4 gradient-text"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '14px',
                      fontWeight: 500,
                    }}
                  >
                    Read more →
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
