import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Post = ({post}) => {
    const{id, title, body} = post;

    return (
        <div style={{
            border: '2px solid blue',
            borderRadius: '15px',
            padding: '15px',
            margin: '10px'
        }}>
            <h4>{id}</h4>
            <h4>{title.slice(0, 20)}</h4>
            <p>{body.slice(0, 50)}</p>
            <Link to={`/posts/${id}`}>
                <button>Show Details</button>
            </Link>
        </div>
    );
};
Post.propTypes ={
    post: PropTypes.object,
}

export default Post;