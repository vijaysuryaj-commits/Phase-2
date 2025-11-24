import React from 'react'

const Application = () => {
    return (
        <div>
            <h1>Job application form</h1>
            <h2>Section 1</h2>
            <p>All fields are mandatory</p>
            <img src='https://placehold.co/600x400' alt='Placeholder image' />
            <div data-testid="custom-element" style={{
                backgroundColor: 'black',
                width: '100px',
                height: '100px'
            }}></div>
            <hr></hr><span title='close'>X</span><hr></hr>
            <label htmlFor='name'>Name</label>
            <input
                type='text'
                id='name'
                placeholder='Full name'
                value='Vijay'
                onChange={() => { }}
            />
            <label>Bio
                <input type='textarea' placeholder='Bio' id='bio' />
            </label>
            <label>
                Job location
                <select >
                    <option value={'LA'}>LA</option>
                    <option value={'Chennai'}>Chennai</option>
                    <option value={'Banglore'}>Banglore</option>
                    <option value={'Tokyo'}>Tokyo</option>

                </select>
            </label>
            <input type='checkbox' />
            <label>Terms and conditions

            </label>
            <button type='submit'>Submit</button>
        </div>
    )
}

export default Application