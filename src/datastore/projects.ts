export interface Project {
    id: number;
    title: string;
    description: string;
    link: string;
  }

export const projects: Project[] = [
    {
        id: 1,
        title: "DeepSeek.NET Client Library",
        description: "Created and published a .NET client library for DeepSeek AI APIs, featuring synchronous/streaming chat completions.",
        link: "#"
      },
      {
        id: 2,
        title: "DocuChat.ai",
        description: "Built a .NET conversational chatbot integrated with OpenAI and Cosmos DB for document querying.",
        link: "#"
      },
      {
        id: 3,
        title: "Project 3",
        description: "A deep dive into creating robust microservices architecture using .NET Core and Azure.",
        link: "#"
      }
];