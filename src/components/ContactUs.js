
import React, { useState } from "react";
import Footer from "./Footer";

function ContactUs() {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [query, setQuery] = useState('');
    const [emailError, setEmailError] = useState('');
    const [phoneError, setPhoneError] = useState('');

    const handleFullNameChange = (event) => {
        setFullName(event.target.value);
    };

    const handleEmailChange = (event) => {
        const emailValue = event.target.value;
        setEmail(emailValue);

        // Validate email address
        if (!isValidEmail(emailValue)) {
            setEmailError('Please enter a valid email address');
        } else {
            setEmailError('');
        }
    };

    const isValidEmail = (email) => {
        // Regular expression for email validation (covers a wide range of valid formats)
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email);
    };

    const handlePhoneChange = (event) => {
        const phoneNumber = event.target.value;
        setPhone(phoneNumber);

        // Validate phone number
        if (!isValidPhoneNumber(phoneNumber)) {
            setPhoneError('Please enter a valid phone number');
        } else {
            setPhoneError('');
        }
    };

    const isValidPhoneNumber = (phoneNumber) => {
        // Regular expression for a phone number with country code (starting with digits > 5)
        const phoneRegex = /^\+?[6-9]\d{9}$/;
        return phoneRegex.test(phoneNumber);
    };

    const handleQueryChange = (event) => {
        setQuery(event.target.value);
    };

    const calculateTextareaHeight = () => {
        const lineHeight = 20;
        const minHeightLines = 1;
        const lines = Math.max(minHeightLines, Math.ceil(query.length / 35));
        return `${lines * lineHeight}px`;
    };

    function handleSubmit(e){
        // Validate form fields before submitting
        if (!isValidEmail(email) || !isValidPhoneNumber(phone)) {
            setEmailError(!isValidEmail(email) ? 'Please enter a valid email address' : '');
            setPhoneError(!isValidPhoneNumber(phone) ? 'Please enter a valid phone number' : '');
            return;
        }

        const formEle=document.querySelector("form");
        e.preventDefault();
        const formData = new FormData(formEle);
        fetch("https://script.google.com/macros/s/AKfycbzdAdnIwUzdWkPqK6eQem40xtbgViYa0-xCXCedMwJoV6Ag_CcIDULjN5g1putQX1Ye/exec", {
            method: "POST",
            body: formData
        }).then((res)=>res.json()).then((data)=>{
            console.log(data);
        }).catch((error)=>console.log(error));

        // If validation passes, proceed with form submission
        alert('Form submitted!');
        
        // Clear form fields after submission
        setFullName('');
        setEmail('');
        setPhone('');
        setQuery('');
    };

    return (
        <div className="contact">
            <h1>CONTACT US</h1>
            <h2>Fill out the form</h2>
            <form className="contactPage" onSubmit={handleSubmit}>
                <input
                    required
                    name="Name"
                    type="text"
                    placeholder="Enter Your Full Name"
                    value={fullName}
                    onChange={handleFullNameChange}
                />
                <input
                    required
                    name="EmailId"
                    type="email"
                    placeholder="Enter Your Email ID"
                    value={email}
                    onChange={handleEmailChange}
                />
                {emailError && <p style={{ color: 'red' }}>{emailError}</p>}
                <input
                    required
                    name="PhoneNumber"
                    type="tel"
                    placeholder="Enter Your Phone Number"
                    value={phone}
                    onChange={handlePhoneChange}
                />
                {phoneError && <p style={{ color: 'red' }}>{phoneError}</p>}
                <textarea
                    required
                    name="Query"
                    className="resizable-textarea"
                    value={query}
                    onChange={handleQueryChange}
                    placeholder="Enter Your Query"
                    style={{ minHeight: calculateTextareaHeight(), height: calculateTextareaHeight() }}
                    maxLength={500}
                />
                <button type="submit">Submit</button>
            </form>
            <Footer/>
        </div>
    );
}

export default ContactUs;
