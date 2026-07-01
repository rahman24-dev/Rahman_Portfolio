import React, { useState } from 'react'
import styles from './Contactus.module.css'

export default function Contactus() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [status, setStatus] = useState('')

    const handleChange = (e) =>{
        const{name, value} = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };


    const handleSubmit = async (e) => {
        e.preventDefault()
        setStatus('submitting')

        try {
            const response = await fetch("https://formspree.io/f/mgojwzkk", {
                method: 'POST',
                headers:{
                    "Content-Type": "application/json",
                    "Accept": "application/json" 
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    message: formData.message
                })
            });

            if(response.ok){
                setStatus('success');
                    setFormData({name: '', email: '', message: ''})
            }else{
                setStatus('error')
            }
        } catch (error) {
            console.error("Form submission error:", error)
            setStatus('error')
        }
    }



  return (
    <section id="contact" className={styles.contactSection}>
        <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Get In Touch</h2>
            <div className={styles.underline}></div>

            <div className={styles.contactWrapper}>

                {/* left side: Contact information */}
                <div className={styles.contactInfo}>
                    <h3 className={styles.infoTitle}>Let's Connect</h3>
                    <p className={styles.infoText}>I'm currently open to new opportunities in software development, full-stack engineering, and tech management. Whether you have a question or 
                    just want to say hi, I'll try my best to get back to you!
                    </p>

                    <div className={styles.details}>
                        <div className={styles.detailItem}>
                            <span className={styles.icon}>📍</span>
                            <p>Chennai, Tamilnadu, India</p>
                        </div>
                        <div className={styles.detailItem}>
                            <span className={styles.icon}>✉️</span>
                            <p>rahmannnm24@gmail.com</p>
                        </div>
                    </div>
                </div>

                {/* Right Side: The Form */}

                <form className={styles.contactForm} onSubmit={handleSubmit}>
                    <div className={styles.inputGroup}>
                        <label>Name</label>
                        <input 
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Adam milne"
                         />
                    </div>

                    <div className={styles.inputGroup}>
                        <label>E-mail</label>
                        <input 
                        type="text"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="adam@example.com"
                         />
                    </div>

                    <div className={styles.inputGroup}>
                        <label>Name</label>
                        <textarea
                            type="text"
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            placeholder="How Can I Help You?"
                        >
                        </textarea> 

                        <button type="submit" className={styles.submitBtn} disabled={status === 'submmitting'}>
                            {status === 'submitting' ? 'Sending...': 'Send Message'}
                        </button>

                        {status === 'success' && (
                            <p className={styles.successMessage} style={{color: 'green', marginTop: '1rem'}}>
                                Message sent successfully! I'll get back to you soon.
                            </p>
                        )}
                        {status === 'error' && (
                            <p className={styles.errorMessage} style={{color: 'red', marginTop: '1rem'}}>
                                 Oops! There was a problem sending your message. Please try again.
                            </p>
                        )}
                    </div>
                </form>
            </div>
        </div>
    </section>
  )
}

