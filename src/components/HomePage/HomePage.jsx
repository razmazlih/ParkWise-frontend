import { Link } from 'react-router-dom';
import '../styles/HomePage/HomePage.css';

function HomePage() {
    return (
        <div className="home-page">
            <header className="hero-section">
                <div className="hero-content">
                    <h1 className="hero-title">ברוכים הבאים ל-ParkWise</h1>
                    <p className="hero-description">
                        מצאו חניה במהירות ובקלות בעיר שלכם!
                    </p>
                    <Link to="/parking-areas" className="cta-button">
                        חפשו חניה
                    </Link>
                </div>
            </header>

            <section className="features-section">
                <div className="features">
                    <div className="feature">
                        <h3 className="feature-title">חיפוש חניונים</h3>
                        <p className="feature-description">
                            מצאו חניונים קרובים בזמן אמת לפי מיקום או כתובת.
                        </p>
                    </div>
                    <div className="feature">
                        <h3 className="feature-title">ניהול חניונים</h3>
                        <p className="feature-description">
                            ממשק מתקדם לניהול חניונים, מחירים וזמינות.
                        </p>
                    </div>
                </div>
            </section>

            <footer className="footer">
                <p>&copy; 2024 ParkWise. כל הזכויות שמורות.</p>
            </footer>
        </div>
    );
}

export default HomePage;
