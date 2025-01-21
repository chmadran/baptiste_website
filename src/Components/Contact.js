import './Contact.css';

const Contact = () => {
  return (
    <div className="contact">
        <div className="contact_left">
            <div className="contact_header">
                <h1>CONTACT</h1>
                <div className="title-underline"></div>
            </div>
        </div>
        <div className="contact_right">
            <div className="contact_content">
                <h2> EMAIL </h2>
                <p>bgrimaud@grimaudavocat.com</p>

                <h2> TELEPHONE </h2>
                <p>+33 6 01 02 03 04</p>

                <h2> ADRESSE </h2>
                <p>47 bd Gambetta, 87000 Limoges, France </p>
        </div>
            <div className="map">
                <iframe 
                    title="map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5560.2950149701965!2d1.2536865756405917!3d45.828329009070664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f934afa722ed29%3A0xaa17df25ccad86b6!2s47%20Bd%20Gambetta%2C%2087000%20Limoges!5e0!3m2!1sfr!2sfr!4v1736327394665!5m2!1sfr!2sfr" 
                    allowfullscreen="" 
                    loading="lazy" 
                    referrerpolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
        </div>
    </div> 
  );
}

export default Contact;
