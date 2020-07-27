import React from 'react'
import { Link } from 'react-router-dom'
import UserList from './UserList'

const Home = () => {
    return (
        <div>
            <Link className='f6 link dim br3 mh2 ph3 pa2 mb2 dib white bg-blue pointer' to='/adduser'>Add User</Link>
            <UserList />
        </div>
    )
}

export default Home;