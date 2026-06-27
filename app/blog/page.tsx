"use client";

import { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FadeIn } from "@/components/animations/FadeIn";
import { SEED_POSTS } from "@/lib/blog";
import styles from "./blog.module.css";

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Engineering", "AI", "Design"];

  const filteredPosts = selectedCategory === "All"
    ? SEED_POSTS
    : SEED_POSTS.filter(post => post.category === selectedCategory);

  // Take the first post as the featured post (only if posts exist)
  const featuredPost = filteredPosts[0];
  const gridPosts = filteredPosts.slice(1);

  return (
    <main>
      <Navbar />

      <section className={styles.blogSection}>
        <div className="container">
          
          {/* Header */}
          <FadeIn>
            <div className={styles.pageHeader}>
              <h1 className="h1">Blog & Insights</h1>
              <p className="body-text" style={{ maxWidth: 600 }}>
                Thoughts, briefs, and strategies on AI integration, software architectures, and premium digital design.
              </p>

              {/* Category Filter Tabs */}
              <div className={styles.filterTabs}>
                {categories.map(cat => (
                  <button
                    key={cat}
                    type="button"
                    className={`${styles.tabBtn} ${selectedCategory === cat ? styles.activeTabBtn : ""}`}
                    onClick={() => setSelectedCategory(cat)}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </FadeIn>

          {filteredPosts.length === 0 ? (
            <div style={{ padding: "60px 0", textAlign: "center" }}>
              <p className="body-text">No articles found in this category.</p>
            </div>
          ) : (
            <>
              {/* Featured Post Card */}
              {featuredPost && (
                <FadeIn delay={0.1}>
                  <Link href={`/blog/${featuredPost.slug}`}>
                    <div className={styles.featuredCard}>
                      <div className={styles.featuredImgWrapper}>
                        <span className={styles.noImageText}>No Image</span>
                      </div>
                      <div className={styles.featuredInfo}>
                        <h2 className={styles.featuredTitle}>{featuredPost.title}</h2>
                        <p className={styles.featuredExcerpt}>{featuredPost.excerpt}</p>
                        
                        <div className={styles.authorRow}>
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={featuredPost.author.img}
                            alt={featuredPost.author.name}
                            className={styles.authorImg}
                          />
                          <div className={styles.authorMeta}>
                            <span className={styles.authorName}>{featuredPost.author.name}</span>
                            <span className={styles.postMetaText}>
                              {featuredPost.date} · {featuredPost.readTime}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </FadeIn>
              )}

              {/* Grid of remaining posts */}
              {gridPosts.length > 0 && (
                <div className={styles.blogGrid}>
                  {gridPosts.map((post, index) => (
                    <FadeIn key={post.slug} delay={index * 0.05 + 0.15}>
                      <Link href={`/blog/${post.slug}`} style={{ height: "100%", display: "block" }}>
                        <div className={styles.blogCard}>
                          <div className={styles.cardImgWrapper}>
                            <span className={styles.noImageText}>No Image</span>
                          </div>
                          <div className={styles.cardBody}>
                            <h3 className={styles.cardTitle}>{post.title}</h3>
                            <p className={styles.cardExcerpt}>{post.excerpt}</p>

                            <div className={styles.authorRow}>
                              {/* eslint-disable-next-line @next/next/no-img-element */}
                              <img
                                src={post.author.img}
                                alt={post.author.name}
                                className={styles.authorImg}
                              />
                              <div className={styles.authorMeta}>
                                <span className={styles.authorName}>{post.author.name}</span>
                                <span className={styles.postMetaText}>
                                  {post.date} · {post.readTime}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </FadeIn>
                  ))}
                </div>
              )}
            </>
          )}

        </div>
      </section>

      <Footer />
    </main>
  );
}
