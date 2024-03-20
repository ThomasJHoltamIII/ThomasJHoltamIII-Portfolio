import React, { useState } from 'react';
import '../styles/Contact.css';


export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [formErrors, setFormErrors] = useState({
        name: '',
        email: '',
        message: '',
    });

    const validateEmail = (email) => {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\\.,;:\s@"]+\.)+[^<>()[\]\\.,;:\s@"]{2,})$/i;
        return re.test(String(email).toLowerCase());
    }

    const handleBlur = (e) => {
        const { name, value } = e.target;
        let error = '';

        if (!value) {
            error = 'This field is required';
        } else if (name === 'email' && !validateEmail(value)) {
            error = 'Please enter a valid email address';
        }

        setFormErrors({ ...formErrors, [name]: error });
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

        // Clear errors as the user types
        if (formErrors[name]) {
            setFormErrors({ ...formErrors, [name]: '' });
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // Implement form submission logic here
        console.log(formData);
    }

    return (
<div className='hero'>
    <h1>Contact Page</h1>
    <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} onBlur={handleBlur} className="form-control" />
            {formErrors.name && <p className="error">{formErrors.name}</p>}
        </div>
        <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} onBlur={handleBlur} className="form-control" />
            {formErrors.email && <p className="error">{formErrors.email}</p>}
        </div>
        <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" value={formData.message} onChange={handleChange} onBlur={handleBlur} className="form-control"></textarea>
            {formErrors.message && <p className="error">{formErrors.message}</p>}
        </div>
        <button type="submit" className="submit-button">Send</button>
    </form>
</div>

    );
}
