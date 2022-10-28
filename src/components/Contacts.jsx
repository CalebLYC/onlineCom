import React from 'react';

function Contacts(props) {
    return (
        <section className="contact " id="contacts">
            <div className="section-title pt-5" data-aos="fade-up">
                <h2 className="text-primary">Contact</h2>
            </div>

            <div>
                <iframe title='Localisation map' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameBorder="0" allowFullScreen></iframe>
            </div>

            <div className="row mt-5">

                <div className="col-lg-4" data-aos="fade-right">
                    <div className="info">
                        <div className="address">
                            <i className="bi bi-geo-alt"></i>
                            <h4>Adresse:</h4>
                            <p>Lome BP 535022</p>
                        </div>

                        <div className="email">
                            <i className="bi bi-envelope"></i>
                            <h4>Email:</h4>
                            <p><a href="mailto:caleblyc@gmail.com">caleblyc@gmail.com</a></p>
                        </div>

                        <div className="phone">
                            <i className="bi bi-phone"></i>
                            <h4>Téléphone:</h4>
                            <p>+228 91982996</p>
                        </div>

                    </div>

                </div>

                <div className="col-lg-8 mt-5 mt-lg-0" data-aos="fade-left">

                    <form action="forms/contact.php" method="post" className="php-email-form">
                        <div className="row">
                            <div className="col-md-6 form-group">
                                <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
                            </div>
                            <div className="col-md-6 form-group mt-3 mt-md-0">
                                <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
                            </div>
                        </div>
                        <div className="form-group mt-3">
                            <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
                        </div>
                        <div className="form-group mt-3">
                            <textarea className="form-control" name="message" rows="5" placeholder="Message" required></textarea>
                        </div>
                        <div className="my-3">
                            <div className="loading">Loading</div>
                            <div className="error-message"></div>
                            <div className="sent-message">Votre message a été envoyé. Merci!</div>
                        </div>
                        <div className="text-center"><button type="submit">Envoyer le message</button></div>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Contacts;