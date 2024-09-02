import React from "react"
import { Link } from "gatsby"

const PostLink = ({ post }) => (
    <Link className="px-5 py-5 mb-5 block hover:text-orange-600 hover:bg-orange-100 hover:border hover:border-orange-300 hover:rounded-lg transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none delay-300"  to={post.frontmatter.slug}>
      <span className="font-semibold text-xl">{post.frontmatter.title}</span> <br/> 
      <span className="text-gray-400 text-sm">{post.frontmatter.date}</span>
    </Link>
)

export default PostLink