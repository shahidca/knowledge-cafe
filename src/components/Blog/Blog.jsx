import PropTypes from 'prop-types';
const Blog = ({ blog }) => {
    const { cover_photo, title, author_img, author, post_date,reading_time,hashtag } = blog
    return (
        <div className='my-6 py-6'>
            <div><img className='w-full h-[450px] object-cover ' src={cover_photo} alt="" /></div>
            <div className='flex justify-between items-center my-6'>
                <div className='flex gap-4 items-center'>

                    <div className=''><img className='w-14 h-14 rounded-full ' src={author_img} alt="" /></div>

                    <div>
                        <h4 className='text-2xl font-bold'>{author}</h4>
                        <p className='text-gray-500 font-semibold '>{post_date}</p>
                    </div>
                </div>
                {/* read time */}
                <div>
                    <p className='text-gray-500 font-semibold'>{reading_time} min read</p>
                </div>
                
            </div>
            <h2 className='text-4xl font-bold'>{title}</h2>
            <p className='text-gray-500 font-semibold my-6 '>{hashtag}</p>
                    <a className='text-[#6047EC] underline mb-6' href="">Mark as read</a>
                    <hr />
            
        </div>
    );
};
Blog.propTypes = {
    blog: PropTypes.object.isRequired
};
export default Blog;