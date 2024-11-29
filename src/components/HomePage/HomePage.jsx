import { Link } from 'react-router-dom';

function HomePage() {
    return (
        <div className="home-page">
            <header className="hero-section">
                <div className="hero-content">
                    <h1>ברוכים הבאים ל-ParkWise</h1>
                    <p>מצאו חניה במהירות ובקלות בעיר שלכם!</p>
                    <Link to="/parking-areas" className="cta-button">
                        חפשו חניה
                    </Link>
                </div>
            </header>

            <section className="features-section">
                <div className="features">
                    <div className="feature">
                        <h3>חיפוש חניונים</h3>
                        <p>מצאו חניונים קרובים בזמן אמת לפי מיקום או כתובת.</p>
                    </div>
                    <div className="feature">
                        <h3>ניהול חניונים</h3>
                        <p>ממשק מתקדם לניהול חניונים, מחירים וזמינות.</p>
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
