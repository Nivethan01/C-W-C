import './Home.css';
import { Link } from "react-router-dom";
function Home() {
    return (
        <div className="home-container">
            <div className="overlay">
                <div className="hero-section">
                    <h2>Welcome to Chatly</h2>
                    <p>Connect instantly with friends and communities.</p>
                    <div className="cta-buttons">
                        <Link to="/login" className="primary-btn">Get Started</Link>
                        <Link to="/learn" className="secondary-btn">Learn More</Link>
                    </div>
                    {/* <input type="text" placeholder="Enter your username" className="username-input" /> */}
                </div>
            </div>
        </div>
    );
}

export default Home;
