import '../styles/ContactUs.css'


export default function ContactUs(){
    return (
        <div className="container" id="contact__us">
            <h1 className="contactUs__label theme-text">Get In Touch</h1>
            <form className="contact__form" target="_blank" action='https://formspree.io/f/xoqzwodo' method="POST">
                <div className="form-group">
                    <div className="form-row">
                        <div className="col">
                            <input type="text" name="name" className="form-control input" placeholder="Full Name" autoComplete='off' required />
                        </div>
                        <div className="col">
                            <input type="email" name="email" className="form-control input" placeholder="Email Address" autoComplete='off' required />
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <textarea placeholder="Your Message" className="form-control input" name="message" rows="10" autoComplete='off' required></textarea>
                </div>
                <button type="submit" className="btn btn-lg btn-dark btn-block input mt-0" id="submit_contactform">Submit Form</button>
            </form>
        </div>
    )
}