import React from 'react';
import { Card, CardHeader, CardBody, Typography, Button } from '@material-tailwind/react';
import { motion } from 'framer-motion';
import { useNavigate, useParams } from 'react-router-dom';

// Animation variants
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

// Sample blog post data (Replace with actual data from your state or props)
const samplePost = {
  title: "Understanding Real Estate Market Trends in 2024",
  image: "https://picsum.photos/800/400",
  date: "2024-08-01",
  author: "Emily Johnson",
  summary: "Stay ahead of the curve by understanding the latest real estate market trends. Explore the key factors shaping the market this year and what they mean for buyers and sellers.",
  content: "The real estate market is constantly evolving, influenced by various factors including economic conditions, interest rates, and demographic shifts. This post provides an in-depth analysis of the current market trends, highlighting key indicators and expert predictions for the remainder of 2024. Whether you're a buyer, seller, or investor, understanding these trends will help you make informed decisions and navigate the market effectively."
};

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // Replace with actual data fetching logic
  const post = samplePost; // Replace this with the blog post data based on the `id` from API or state

  const handleBack = () => {
    navigate('/blogs'); // Change to the route where your blog list is located
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={cardVariants}
      transition={{ duration: 0.5 }}
      className="bg-gray-50 min-h-screen py-12 mt-4 md:mt-12 lg:mt-16"
    >
      <div className="container mx-auto px-4">
        <Button color="blue" onClick={handleBack} className="mb-8">
          Back to Blog List
        </Button>
        <Card className="max-w-4xl mx-auto shadow-lg">
          <CardHeader floated={false} className="h-96">
            <img src={post.image} alt={post.title} className="object-cover h-full w-full rounded-t-lg" />
          </CardHeader>
          <CardBody className="p-6">
            <Typography variant="h3" className="mb-4">
              {post.title}
            </Typography>
            <Typography className="text-gray-500 mb-4">
              By {post.author} on {new Date(post.date).toLocaleDateString()}
            </Typography>
            <Typography className="text-gray-700 mb-6">
              {post.summary}
            </Typography>
            <Typography className="text-gray-900 mb-6">
              {post.content}
            </Typography>
          </CardBody>
        </Card>
      </div>
    </motion.div>
  );
};

export default BlogDetail;
