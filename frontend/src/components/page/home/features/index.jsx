import iconChat from '@assets/icon-chat.png';
import iconMoney from '@assets/icon-money.png';
import iconSecurity from '@assets/icon-security.png';
import './styles.css';

function Features() {

    //Tableau des données features
    const features = [
        {
            id: 1,
            image: iconChat,
            alt: "Chat Icon",
            title: "You are our #1 priority",
            paragraph: "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
        },
        {
            id: 2,
            image: iconMoney,
            alt: "Money Icon",
            title: "More savings means higher rates",
            paragraph: "The more you save with us, the higher your interest rate will be!"
        },
        {
            id: 3,
            image: iconSecurity,
            alt: "Security Icon",
            title: "Security you can trust",
            paragraph: "We use top of the line encryption to make sure your data and money is always safe."
        }
    ];

    return (
        <section className="features">
            <h2 className="sr-only">Features</h2>
            {/* Map pour afficher dynamiquement les features */}
            {features.map(feature => (
                <div key={feature.id} className="feature-item">
                    <img src={feature.image} alt={feature.alt} className="feature-icon" />
                    <h3 className="feature-item-title">{feature.title}</h3>
                    <p>{feature.paragraph}</p>
                </div>
            ))}
        </section>
    );
}

export default Features;