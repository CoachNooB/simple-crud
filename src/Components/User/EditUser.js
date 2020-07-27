import React, { useState, useContext, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { GlobalContext } from '../../Context/GlobalState'


const EditUser = (props) => {
    const [selectedUser, setSelectedUser] = useState({
        id: '',
        firstName: '',
        lastName: '',
        gender: '',
        age: ''
    });
    const { users, EditUser } = useContext(GlobalContext);
    const history = useHistory();
    const currentId = props.match.params.id;

    useEffect(() => {
        const userId = currentId;
        const selectedUser = users.find(user => user.id === userId)
        setSelectedUser(selectedUser)
    }, [currentId, users])

    const onSubmit = () => {
        EditUser(selectedUser);
        history.push('/');
    }

    const onFirstNameChange = (event) => {
        setSelectedUser({...selectedUser, [event.target.name]: event.target.value})
    }

    const onLastNameChange = (event) => {
        setSelectedUser({...selectedUser, [event.target.name]: event.target.value})
    }

    const onGenderChange = (event) => {
        setSelectedUser({...selectedUser, [event.target.name]: event.target.value})
    }

    const onAgeChange = (event) => {
        setSelectedUser({...selectedUser, [event.target.name]: event.target.value})
    }

    return (
        <div className='w5 ba br2 pa2'>
            <div className='mv2'>
                <label className='db fw6 lh-copy f6' htmlFor='firstname'>First Name</label>
                <input value={selectedUser.firstName} onChange={onFirstNameChange} type='text' name='firstName' />
            </div>
            <div className='mv2'>
                <label className='db fw6 lh-copy f6' htmlFor='lastname'>Last Name</label>
                <input value={selectedUser.lastName} onChange={onLastNameChange} type='text' name='lastName' />
            </div>
            <div className='mv2'>
                <label className='db fw6 lh-copy f6' htmlFor='age'>Age</label>
                <input value={selectedUser.age} onChange={onAgeChange} type='number' name='age' />
            </div>
            <div className='mv3'>
                <label className='db mv3 fw6 lh-copy f6' htmlFor='gender'>Gender</label>
                    <input type='radio' name='gender' onChange={onGenderChange} value='Male' />
                    <label className='mh3 fw6 lh-copy f6' htmlFor='male'>Male</label>
                    <input type='radio' name='gender' onChange={onGenderChange} value='Female' />
                    <label className='mh2 fw6 lh-copy f6' htmlFor='female'>Female</label>
            </div>
            <div>
                <p onClick={onSubmit} className='f6 link dim br3 mh2 ph3 pa2 mb2 dib black bg-gold pointer'>Edit User</p>
                <Link to='/' className='f6 link dim br3 mh2 ph3 pa2 mb2 dib white bg-dark-red pointer'>Cancel</Link>
            </div>
        </div>
    )
}

export default EditUser;