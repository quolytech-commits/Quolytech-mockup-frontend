import Link from "next/link";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { getPostBySlug } from "@/lib/blog";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import styles from "./blogPost.module.css";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <main>
      <Navbar />

      <article className={styles.postSection}>
        <div className="container" style={{ maxWidth: 800 }}>
          
          {/* Back Navigation */}
          <Link href="/blog" className={styles.backLink}>
            <ArrowLeft size={16} /> Back to Insights
          </Link>

          {/* Header Metadata */}
          <header className={styles.postHeader}>
            <span className={styles.categoryBadge}>{post.category}</span>
            <h1 className={styles.postTitle}>{post.title}</h1>
            
            <div className={styles.authorRow}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={post.author.img}
                alt={post.author.name}
                className={styles.authorImg}
              />
              <div className={styles.authorMeta}>
                <span className={styles.authorName}>{post.author.name}</span>
                <span className={styles.authorRole}>{post.author.role}</span>
              </div>
            </div>

            <div className={styles.postMeta}>
              <div className={styles.metaItem}>
                <Calendar size={14} />
                <span>{post.date}</span>
              </div>
              <div className={styles.metaItem}>
                <Clock size={14} />
                <span>{post.readTime}</span>
              </div>
            </div>
          </header>

          {/* Hero Banner Image */}
          <div className={styles.bannerWrapper}>
            <span className={styles.noImageText}>No Image</span>
          </div>

          {/* Article Main Body */}
          <div 
            className={styles.postBody} 
            dangerouslySetInnerHTML={{ __html: post.content }} 
          />

        </div>
      </article>

      <Footer />
    </main>
  );
}
