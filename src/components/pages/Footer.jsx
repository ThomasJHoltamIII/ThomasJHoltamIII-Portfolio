import React from 'react';
import '../styles/Footer.css';

export default function Footer() {
  return (
        <footer className="footer">
            <div className="contact-section">
                <h3>Contact Me!</h3>
                <p>Email: ThomasJHoltamIII@gmail.com</p>
                <p>Phone: 720-341-5480</p>
            </div>
            <div className="links">
                <a href="https://github.com/ThomasJHoltamIII">Github</a>
                <a href="#placeholder">linkedIn</a>
                {/* <a href="#link3">#</a> */}
            </div>
        </footer>
    );
};
