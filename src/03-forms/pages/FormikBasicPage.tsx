import React from 'react'
import '../styles/styles.css';


export const FormikBasicPage = () => {

    
    return (
        <div>
            <h1>Formil Basic</h1>

            <form action="" noValidate={true}>
                <label htmlFor="firstName">First Name</label>
                <input type="text" name= "firstName" />

                <label htmlFor="lastName">Last Name</label>
                <input type="text" name='lastName' />

                <label htmlFor="email">Email address</label>
                <input type="email" name="email" />

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
