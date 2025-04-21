import React, { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import { motion } from "framer-motion";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Base_Url } from "../../utils/Api";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleBack = () => {
    navigate("/blogs");
  };

  useEffect(() => {
    if (!id) return;

    axios
      .get(`${Base_Url}/home/blogs/${id}`)
      .then((res) => {
        const blog = res.data;
        setPost({
          title: blog.title,
          image: blog.image,
          date: blog.createdAt,
          author: "Viva Vista Team", // update if API gives author
          summary:
            blog.content
              ?.replace(/<[^>]+>/g, "")
              .slice(0, 200)
              .trim() + "...",
          content: blog.content, // HTML content (you may render it as HTML if needed)
        });
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching blog:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="text-center text-xl py-20 bg-gray-50 min-h-screen">
        Loading blog...
      </div>
    );
  }

  if (!post) {
    return (
      <div className="text-center text-xl py-20 text-red-500">
        Blog not found.
      </div>
    );
  }

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
            <img
              src={post.image}
              alt={post.title}
              className="object-cover h-full w-full rounded-t-lg"
            />
          </CardHeader>
          <CardBody className="p-6">
            <Typography variant="h3" className="mb-4">
              {post.title}
            </Typography>
            <Typography className="text-gray-500 mb-4">
              By {post.author} on{" "}
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </Typography>
            <Typography className="text-gray-700 mb-6">
              {post.summary}
            </Typography>
            <Typography
              className="text-gray-900 prose prose-blue max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </CardBody>
        </Card>
      </div>
    </motion.div>
  );
};

export default BlogDetail;
