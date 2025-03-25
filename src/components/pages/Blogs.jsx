import React from "react";
import { Blog } from "../elements";

const blogPosts = [
  {
    id: 1,
    title: "Top 5 Neighborhoods for Real Estate Investment",
    image: "https://picsum.photos/200/300",
    date: "2024-08-28",
    author: "Jane Doe",
    summary: "Discover the top neighborhoods for real estate investment in 2024. Learn about the trends, growth areas, and future prospects of each location.",
    content: "Investing in real estate requires a deep understanding of market trends and neighborhood dynamics. In this post, we explore the five most promising neighborhoods for real estate investment. From high growth potential to affordability, these areas offer various opportunities for investors looking to maximize returns. Our comprehensive analysis includes recent market data, neighborhood amenities, and future development plans."
  },
  {
    id: 2,
    title: "How to Prepare Your Home for a Quick Sale",
    image: "https://picsum.photos/200/300",
    date: "2024-08-15",
    author: "John Smith",
    summary: "Selling your home quickly can be a challenge. Here are some tips and strategies to ensure a fast and successful sale, from staging to pricing.",
    content: "Preparing your home for a quick sale involves more than just setting the right price. Staging your home effectively, making necessary repairs, and presenting it well in listings are all crucial steps. This post covers actionable tips to enhance your home's appeal and attract potential buyers quickly. We also discuss common pitfalls and how to avoid them to ensure a smooth selling process."
  },
  {
    id: 3,
    title: "Understanding Real Estate Market Trends in 2024",
    image: "https://picsum.photos/200/300",
    date: "2024-08-01",
    author: "Emily Johnson",
    summary: "Stay ahead of the curve by understanding the latest real estate market trends. Explore the key factors shaping the market this year and what they mean for buyers and sellers.",
    content: "The real estate market is constantly evolving, influenced by various factors including economic conditions, interest rates, and demographic shifts. This post provides an in-depth analysis of the current market trends, highlighting key indicators and expert predictions for the remainder of 2024. Whether you're a buyer, seller, or investor, understanding these trends will help you make informed decisions and navigate the market effectively."
  },
  {
    id: 4,
    title: "Benefits of Investing in Commercial Real Estate",
    image: "https://picsum.photos/200/300",
    date: "2024-07-20",
    author: "Alice Brown",
    summary: "Explore the advantages of investing in commercial real estate, from steady income streams to long-term appreciation. Learn why it might be a smart move for your investment portfolio.",
    content: "Commercial real estate offers unique advantages compared to residential investments, including higher income potential and longer lease terms. This post delves into the benefits of commercial real estate investment, such as diversification, tax advantages, and the potential for significant capital appreciation. We also discuss the risks involved and provide tips for getting started in this sector."
  }
];

const Blogs = () => {
  return (
    <div className="mt-12 md:mt-16 lg:mt-20 bg-gradient-to-t from-blue-400 to-blue-100">
      <Blog posts={blogPosts} />
    </div>
  );
};

export default Blogs;
