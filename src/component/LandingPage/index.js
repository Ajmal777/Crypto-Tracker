import React from "react";
import "./style.css";
import Button from "../Common/Button";
import Gradient from "../../assets/gradient.png";
import iPhone from "../../assets/iphone.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
function MainComponent() {
    return (
        <div className="flex-info">
            <div className="left-component">
                <motion.h1
                    className="track-crypto-heading"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    Track Crypto
                </motion.h1>
                <motion.h1
                    className="real-time-heading"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.3 }}
                >
                    Real Time.
                </motion.h1>
                <motion.p
                    className="info-text"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.6 }}
                >
                    Track crypto through a public api in real time. Visit the
                    dashboard to do so!
                </motion.p>
                <motion.div
                    className="btn-flex"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.9 }}
                >
                    <Link to="/dashboard">
                        <Button text="Dashboard" />
                    </Link>
                    <Button text="share" outLined={true} />
                </motion.div>
            </div>
            <div className="phone-container">
                <motion.img
                    src={iPhone}
                    className="iphone"
                    animate={{ y: [0, 10, 0]}}
                    transition={{ repeat: Infinity , ease: "easeInOut", duration: 3 }}
                />
                <img src={Gradient} className="gradient" />
            </div>
        </div>
    );
}

export default MainComponent;
