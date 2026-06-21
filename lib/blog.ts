export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
  readTime: string;
  image: string;
  author: {
    name: string;
    role: string;
    img: string;
  };
}

export const SEED_POSTS: BlogPost[] = [
  {
    slug: "scaling-enterprise-nextjs",
    title: "Scaling Next.js Applications for Enterprise Traffic",
    excerpt: "How we architected a multi-tenant Next.js application to handle over 10M monthly active users with zero-downtime deployments.",
    date: "June 18, 2026",
    category: "Engineering",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
    author: {
      name: "Marcus Aurelius",
      role: "Lead Systems Architect",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80"
    },
    content: `
      <p>Building applications that serve millions of users requires a fundamental shift in how we think about state, caching, and server load. When Quoly Tech was tasked with scaling an enterprise SaaS portal to over 10 million monthly active users, we turned to Next.js as our primary framework. Here is how we achieved zero-downtime, sub-100ms response times globally.</p>
      
      <h2>1. The Architecture of Multi-Tenant Caching</h2>
      <p>In a multi-tenant environment, sharing resources while guaranteeing isolation is key. We implemented a hybrid caching layer using Next.js Incremental Static Regeneration (ISR) combined with an edge Redis cluster. By using route-based key tagging, we could purge cached pages for a specific tenant instantly when they updated their dashboard, without affecting other users.</p>
      
      <h2>2. Optimizing Database Connection Pools</h2>
      <p>A common bottleneck under high concurrency is database exhaustion. Next.js Serverless functions can scale rapidly, but database connection pools do not scale infinitely. We resolved this by placing a connection pooler (PgBouncer) and an database proxy layer between our serverless middleware and our PostgreSQL cluster, reducing connection overhead by 80%.</p>
      
      <h2>3. Edge Middleware for Geo-Routing</h2>
      <p>By leveraging Next.js Edge Middleware, we intercepted incoming requests at the nearest global CDN node. The middleware analyzes the request metadata, validates authentication JWTs, and rewrites the routing paths to serve regionalized content, avoiding round-trips to the origin server in North America.</p>
      
      <blockquote>
        "Scaling isn't about adding more servers. It's about optimizing where data sits and ensuring the edge is as smart as the core."
      </blockquote>
      
      <h2>Conclusion</h2>
      <p>Next.js provides the building blocks for enterprise-grade scalability, but success lies in how you integrate caching, database proxies, and edge networks. By decoupling static layouts and dynamic data nodes, we built a stable platform ready for the next 100M requests.</p>
    `
  },
  {
    slug: "generative-ai-workflow-automation",
    title: "The Role of Generative AI in Modern Workflow Automation",
    excerpt: "Exploring how large language models are transforming manual enterprise workflows into autonomous, self-healing software agents.",
    date: "June 12, 2026",
    category: "AI",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
    author: {
      name: "Sophia Carter",
      role: "Director of AI Solutions",
      img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80"
    },
    content: `
      <p>Generative AI is shifting from a helper tool (copilots) to autonomous workers (agents). In this article, we cover how Quoly Tech deploys LLM agents that read context, trigger APIs, recover from validation failures, and automate tasks that previously required human intervention.</p>
      
      <h2>1. Moving Beyond Static APIs</h2>
      <p>Traditional automation relies on strict API bridges. If a third-party changes a JSON schema, the pipeline breaks. With LLM-powered self-healing middleware, the system dynamically interprets new keys, maps data fields on-the-fly, and flags only structural anomalies to developers, keeping operational downtime to zero.</p>
      
      <h2>2. Agentic Loops and LangGraph</h2>
      <p>Instead of single-prompt inputs, our enterprise AI systems run on agentic loops. The agent receives a task, searches internal documents, generates an API request, verifies the status response, and iterates until the goal is achieved. This loop is managed by graph architectures to prevent infinite loops and limit token consumption.</p>
      
      <h2>3. The Security & Guardrail Paradigm</h2>
      <p>Deploying AI to touch customer data requires strict sandboxes. We employ a double-layer guardrail model: an input filter to strip PII and block prompt injection, and an output validator that checks for hallucinations and validates schema integrity before writing to the database.</p>
      
      <h2>Future Horizons</h2>
      <p>As LLM context windows expand and token costs decrease, manual back-office tasks will decrease. Companies that deploy safe, agentic automation today will lead their industries in operating efficiency tomorrow.</p>
    `
  },
  {
    slug: "crafting-premium-digital-experiences",
    title: "Crafting Premium Digital Experiences: Design Vitals",
    excerpt: "A deep dive into visual hierarchy, neomorphic shadow mathematics, glassmorphism blur parameters, and fluid micro-interactions.",
    date: "June 05, 2026",
    category: "Design",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=800&q=80",
    author: {
      name: "Leo Vance",
      role: "Head of Product Design",
      img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&q=80"
    },
    content: `
      <p>Premium design communicates trust and intelligence immediately. To elevate an interface from average to luxury-tier, we must master visual mathematics: shadows, blurs, micro-animations, and balanced typography scales.</p>
      
      <h2>1. The Mathematics of Neomorphism</h2>
      <p>Neomorphism is about lighting, not colors. An element shouldn't look placed 'on top' of a background; it should look extruded from it. This requires calculating exact dual-shadow properties—a dark shadow offset in the direction of light, paired with a white light glow offset in the opposite direction. By tweaking HSL values, we keep shadows soft, avoiding harsh grays.</p>
      
      <h2>2. High-Performance Glassmorphism</h2>
      <p>Glassmorphic cards require a frosted look that doesn't slow down the browser. We achieve this by matching a semi-transparent white background with -webkit-backdrop-filter blurs. We also place a thin, 1px white border with 0.5 opacity around the card to simulate realistic light catching on the edges of the glass pane.</p>
      
      <h2>3. Damping in Micro-Animations</h2>
      <p>Animations should feel tactile and natural, like physical switches. We avoid standard linear or ease-in-out easing curves for primary interactions. Instead, we use spring physics in Framer Motion (specifying high damping and stiffness parameters) to create hover transitions that scale elements without visual lag.</p>
      
      <blockquote>
        "Luxury in software isn't about complex layouts. It's about polishing simple visual details to absolute perfection."
      </blockquote>
    `
  }
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return SEED_POSTS.find(post => post.slug === slug);
}

export function getAllPosts(): BlogPost[] {
  return SEED_POSTS;
}
