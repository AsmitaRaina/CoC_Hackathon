import {Link} from 'react-router-dom';
const BlogList = ({blogs, title}) => {
        
    return (  
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map((blog)=>(
                <div className="blog-preview" key = {blog.id}>
                    <Link to = {`/blogs/${blog.id}`}>
                    <h2>{blog.venue}</h2>
                    <p>Organiser: {blog.organiser}</p>
                    <p> {blog.start_time} to {blog.end_time}</p>
                    <p>{blog.date}</p>
                    </Link>
                </div>
            ))}
        </div>
    );
}
 
export default BlogList;