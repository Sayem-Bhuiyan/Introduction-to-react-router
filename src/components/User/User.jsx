import PropTypes from 'prop-types';

const User = ({user}) => {
    const {id, name, username, phone} = user;
    const divStyle = {
        border: '2px solid yellow',
        padding: '5px',
        margin: '10px',
        textAlign: 'center',
        borderRadius: '15px'
    }
    return (
        <div style={divStyle}>
            <h4>{id}</h4>
            <h3>Name: {name}</h3>
            <h4>Phone: {phone.split(' ')[0]}</h4>
            <p>UserName: {username}</p>
        </div>
    );
};
User.propTypes = {
    user: PropTypes.object,
}

export default User;