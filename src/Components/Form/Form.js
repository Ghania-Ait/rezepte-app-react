import React from 'react';
import './form.css'


export function Form(props) {
    

    return (
        <div className='form'>
            <h1 className="title-contact">Contact Us:</h1>

            <form className="container-form">
              <label htmlFor='title'>Title</label>
              <input type="text" id='title' placeholder='Enter your name'/>

              <label htmlFor='title'>Your Message </label>
              <textarea id='title' placeholder='Your Message'></textarea>
              <button id='submit'>Send a Message</button>
            </form>
        </div>
    )
}
export default Form;
