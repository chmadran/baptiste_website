import './Contact.css';

const Contact = () => {
  return (
    <div className="contact">
        <div className="contact-left">
            <div className="contact-header">
                <h1>CONTACT</h1>
                <div className="contact-title-underline"></div>
            </div>
        </div>
        <div className="contact-right">
            <div className="contact-content">
                <p>bgrimaud@grimaudavocat.com</p>
                <p>+33 6 34 17 61 65</p>
                <p>baptiste.grimaud</p>
        </div>
            <div className="map">
                <p>11 boulevard Sébastopol, 75001 Paris </p>
                <iframe 
                    title="map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.958030406859!2d2.3456875758292988!3d48.859010700663674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1ef0aae6b5%3A0x2e7e26aca40f866f!2s11%20Bd%20de%20S%C3%A9bastopol%2C%2075001%20Paris!5e0!3m2!1sfr!2sfr!4v1737924109345!5m2!1sfr!2sfr"                    
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
