import React from 'react';
import { Card, CardHeader, CardBody, Typography, Button } from '@material-tailwind/react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

// Animation variants
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const BlogPost = ({ id, title, image, date, author, summary }) => {
  const navigate = useNavigate();

  const handleReadMore = () => {
    navigate(`/blog/${id}`);
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={cardVariants}
      transition={{ duration: 0.5 }}
    >
      <Card className="max-w-sm mx-auto my-8 shadow-lg h-[30rem] flex flex-col">
        <CardHeader floated={false} className="h-2/3">
          <img src={image} alt={title} className="object-cover h-full w-full rounded-t-lg" />
        </CardHeader>
        <CardBody className="p-4 flex flex-col flex-grow">
          <Typography variant="h5" className="mb-2">
            {title}
          </Typography>
          <Typography className="text-gray-500 mb-4">
            By {author} on {new Date(date).toLocaleDateString()}
          </Typography>
          <Typography className="text-gray-700 mb-4 flex-grow">
            {summary}
          </Typography>
          <Button color="blue" className="mt-4" ripple="light" onClick={handleReadMore}>
            Read More
          </Button>
        </CardBody>
      </Card>
    </motion.div>
  );
};

const Blog = ({ posts }) => {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <Typography variant="h2" className="text-center font-bold mb-8">
          Real Estate Insights
        </Typography>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <BlogPost key={index} {...post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
