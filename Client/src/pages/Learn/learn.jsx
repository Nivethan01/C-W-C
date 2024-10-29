import React from 'react';
import './Learn.css';

function Learn() {
    return (
        <div className="learn-container">
            <div className="content-section">
                <h2>About Chatly</h2>
                <p>Chatly is a real-time chat application designed to help you connect with friends, family, and communities instantly. Our goal is to provide a simple, secure, and engaging chat experience for everyone.</p>
                
                <h3>Features</h3>
                <ul>
                    <li><strong>Instant Messaging:</strong> Send and receive messages in real-time.</li>
                    <li><strong>Group Chats:</strong> Create group chats with friends, family, or coworkers.</li>
                    <li><strong>Media Sharing:</strong> Share photos, videos, and more with ease.</li>
                    <li><strong>Customizable Profiles:</strong> Personalize your profile with custom usernames and profile pictures.</li>
                    <li><strong>End-to-End Encryption:</strong> Your conversations are private and secure.</li>
                </ul>

                <h3>Why Choose Chatly?</h3>
                <p>Chatly is built with privacy and ease of use in mind. Whether you’re chatting one-on-one or in groups, we provide a seamless and safe chat experience. Our team continuously works to bring you new features and improvements based on your feedback.</p>

                <h3>Getting Started</h3>
                <p>To start chatting on Chatly, click “Get Started” on the home page, create an account, and connect with others in just a few steps!</p>

                <h3>Need Help?</h3>
                <p>If you have any questions or need assistance, feel free to reach out to our support team through the Help section in the app.</p>
            </div>
        </div>
    );
}

export default Learn;
