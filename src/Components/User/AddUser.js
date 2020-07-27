import React, { useState, useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { GlobalContext } from '../../Context/GlobalState'
import { v4 as uuid } from 'uuid'

const AddUser = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [gender, setGender] = useState('');
    const [age, setAge] = useState('');
    const { AddUser } = useContext(GlobalContext);
    const history = useHistory();

    const onSubmit = () => {
        const newUser = {
            id: uuid(),
            firstName: firstName,
            lastName: lastName,
            gender: gender,
            age: age
        }

        AddUser(newUser);
        history.push('/');
    }

    const onFirstNameChange = (event) => {
        setFirstName(event.target.value)
    }

    const onLastNameChange = (event) => {
        setLastName(event.target.value)
    }

    const onGenderChange = (event) => {
        setGender(event.target.value)
    }

    const onAgeChange = (event) => {
        setAge(event.target.value)
    }

    return (
        <div className='w5 ba br2 pa2'>
            <div className='mv2'>
                <label className='db fw6 lh-copy f6' htmlFor='firstname'>First Name</label>
                <input value={firstName} onChange={onFirstNameChange} type='text' name='firstName' />
            </div>
            <div className='mv2'>
                <label className='db fw6 lh-copy f6' htmlFor='lastname'>Last Name</label>
                <input value={lastName} onChange={onLastNameChange} type='text' name='lastName' />
            </div>
            <div className='mv2'>
                <label className='db fw6 lh-copy f6' htmlFor='age'>Age</label>
                <input value={age} onChange={onAgeChange} type='number' name='age' />
            </div>
            <div className='mv3'>
                <label className='db mv3 fw6 lh-copy f6' htmlFor='gender'>Gender</label>
                    <input type='radio' name='gender' onChange={onGenderChange} value='Male' />
                    <label className='mh3 fw6 lh-copy f6' htmlFor='male'>Male</label>
                    <input type='radio' name='gender' onChange={onGenderChange} value='Female' />
                    <label className='mh2 fw6 lh-copy f6' htmlFor='female'>Female</label>
            </div>
            <div>
                <p onClick={() => onSubmit()} className='f6 link dim br3 mh2 ph3 pa2 mb2 dib white bg-blue pointer'>Add</p>
                <Link to='/' className='f6 link dim br3 mh2 ph3 pa2 mb2 dib white bg-dark-red pointer'>Cancel</Link>
            </div>
        </div>
    )
}

export default AddUser;