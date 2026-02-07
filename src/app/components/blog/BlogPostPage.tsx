import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { useEffect } from 'react';
import { NavBar } from '@/app/components/NavBar';
import { Footer } from '@/app/components/Footer';
import { blogPosts } from '@/app/data/blogPosts';

export function BlogPostPage() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return (
      <div 
        className="min-h-screen overflow-x-hidden"
        style={{ background: 'var(--color-bg-primary)' }}
      >
        <NavBar onWaitlistClick={() => {}} />
        <div className="px-6" style={{ paddingTop: '160px', paddingBottom: '96px' }}>
          <div className="max-w-3xl mx-auto text-center">
            <h1 
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 'var(--text-h2)',
                fontWeight: 600,
                color: 'var(--color-text-primary)',
                marginBottom: '16px',
              }}
            >
              Post not found
            </h1>
            <p 
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 'var(--text-body-lg)',
                color: 'var(--color-text-secondary)',
                marginBottom: '32px',
              }}
            >
              The blog post you're looking for doesn't exist.
            </p>
            <Link
              to="/blog"
              className="gradient-text"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '16px',
                fontWeight: 500,
                textDecoration: 'none',
              }}
            >
              ← Back to Blog
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div 
      className="min-h-screen overflow-x-hidden"
      style={{ background: 'var(--color-bg-primary)' }}
    >
      <NavBar onWaitlistClick={() => {}} />

      <article className="px-6" style={{ paddingTop: '140px', paddingBottom: '96px' }}>
        <div className="max-w-3xl mx-auto">
          {/* Back Link */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            <Link
              to="/blog"
              className="inline-block transition-colors"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '14px',
                color: 'var(--color-text-tertiary)',
                textDecoration: 'none',
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-text-primary)'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-text-tertiary)'}
            >
              ← Back to Blog
            </Link>
          </motion.div>

          {/* Post Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            className="mt-8 mb-16"
          >
            {/* Metadata */}
            <div className="flex items-center gap-3 mb-6">
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
            <h1 
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 'var(--text-h1)',
                fontWeight: 600,
                color: 'var(--color-text-primary)',
                letterSpacing: '-0.03em',
                lineHeight: 1.1,
                marginBottom: '24px',
              }}
            >
              {post.title}
            </h1>

            {/* Decorative Gradient Line */}
            <div 
              style={{
                width: '60px',
                height: '3px',
                borderRadius: '2px',
                background: 'var(--color-accent-gradient)',
              }} 
            />
          </motion.div>

          {/* Post Body - Scroll-triggered sections */}
          {post.sections.map((section, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              className="mb-12"
            >
              {section.heading && (
                <h2 
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 'var(--text-h3)',
                    fontWeight: 600,
                    color: 'var(--color-text-primary)',
                    letterSpacing: '-0.02em',
                    lineHeight: 1.3,
                    marginBottom: '20px',
                  }}
                >
                  {section.heading}
                </h2>
              )}

              {section.paragraphs.map((para, j) => (
                <p
                  key={j}
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 'var(--text-body-lg)',
                    color: 'var(--color-text-secondary)',
                    lineHeight: 1.8,
                    marginBottom: '16px',
                  }}
                >
                  {para}
                </p>
              ))}

              {/* Pull Quote */}
              {section.pullQuote && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.98 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                  className="blog-pull-quote my-10"
                >
                  <p 
                    className="gradient-text"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: 'var(--text-h4)',
                      fontWeight: 600,
                      lineHeight: 1.4,
                      letterSpacing: '-0.01em',
                      textAlign: 'center',
                      margin: 0,
                    }}
                  >
                    {section.pullQuote}
                  </p>
                </motion.div>
              )}

              {/* Section Divider (except after last section) */}
              {i < post.sections.length - 1 && section.heading && (
                <div className="blog-section-divider mt-12" />
              )}
            </motion.div>
          ))}

          {/* End-of-Post CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="glass-panel mt-20 p-10 rounded-2xl text-center"
            style={{
              background: 'rgba(255, 255, 255, 0.7)',
              border: '1px solid rgba(255, 255, 255, 0.6)',
              backdropFilter: 'blur(24px) saturate(180%)',
              WebkitBackdropFilter: 'blur(24px) saturate(180%)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.06), inset 0 1px 0 rgba(255, 255, 255, 0.8)',
            }}
          >
            <p 
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 'var(--text-body-lg)',
                fontWeight: 500,
                color: 'var(--color-text-primary)',
                lineHeight: 1.6,
                marginBottom: '8px',
              }}
            >
              Signal removes the noise that makes judgment impossible.
            </p>
            <p 
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '15px',
                color: 'var(--color-text-secondary)',
                lineHeight: 1.6,
                marginBottom: '24px',
              }}
            >
              Join the waitlist and be the first to experience an inbox that finally makes sense.
            </p>
            <Link
              to="/"
              className="glow-button inline-block px-6 py-3 text-white font-medium text-sm rounded-xl transition-all hover:scale-105"
              style={{
                fontFamily: "'Inter', sans-serif",
                background: 'var(--color-accent-gradient)',
                textDecoration: 'none',
              }}
            >
              Join the Waitlist
            </Link>
          </motion.div>
        </div>
      </article>

      <Footer />
    </div>
  );
}
