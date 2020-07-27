import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../../Context/GlobalState'


const UserList = () => {
    const { users, DeleteUser } = useContext(GlobalContext);
    const allUser = users.map(user => {
        return(
            <tr className='stripe-dark'>
                <td className='pa3'>{user.firstName}</td>
                <td className='pa3'>{user.lastName}</td>
                <td className='pa3'>{user.gender}</td>
                <td className='pa3'>{user.age}</td>
                <td className='pa3'><Link className='f6 link dim br3 pa2 dib dark-gray bg-gold pointer' to={`/edituser/${user.id}`}>Edit User</Link></td>
                <td className='pa3'><p onClick={() => DeleteUser(user.id)} className='f6 link dim br3 pa2 dib white bg-dark-red pointer'>Delete User</p></td>
            </tr>
        )
    })
    
    return (
        <table className='f6 w-100 mw8 center' cellSpacing='0'>
            <thead>
                <tr className='stripe-dark'>
                    <th className='fw6 tl pa3 bg-white'>First Name</th>
                    <th className='fw6 tl pa3 bg-white'>Last Name</th>
                    <th className='fw6 tl pa3 bg-white'>Gender</th>
                    <th className='fw6 tl pa3 bg-white'>Age</th>
                    <th className='fw6 tl pa3 bg-white tc' colSpan='2'>Action</th>
                </tr>
            </thead>
            <tbody className='lh-copy'>
                {users.length > 0 ? allUser : (<tr><td className='fw6 tl pa3 bg-white tc' colSpan='5'>No User</td></tr>)}
            </tbody>
        </table>
    )
}

export default UserList;