export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  link: string;
}

export const blogs: BlogPost[] = [
    {
        id: 1,
        title: "Building Scalable Microservices with .NET Core",
        excerpt: "A deep dive into creating robust microservices architecture using .NET Core and Azure.",
        date: "March 5, 2025",
        readTime: "8 min read",
        link: "#"
      },
      {
        id: 1,
        title: "Building Scalable Microservices with .NET Core",
        excerpt: "A deep dive into creating robust microservices architecture using .NET Core and Azure.",
        date: "March 5, 2025",
        readTime: "8 min read",
        link: "#"
      },
      {
        id: 1,
        title: "Building Scalable Microservices with .NET Core",
        excerpt: "A deep dive into creating robust microservices architecture using .NET Core and Azure.",
        date: "March 5, 2025",
        readTime: "8 min read",
        link: "#"
      }
    ];