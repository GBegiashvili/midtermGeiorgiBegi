import React from 'react'

import './index.css'

const PostCard = ({info}) => {
    return <div className='card-main-container'>
        <p>
            {info.title}
        </p>
        <p>
            {info.body}
        </p>
    </div>
}

export default PostCard