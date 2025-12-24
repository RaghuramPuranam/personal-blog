import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/contact.css";

const Contact = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "contact");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Contact | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="contact" />
				<div className="content-wrapper">
					<div className="contact-logo-container">
						<div className="contact-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="contact-container">
						<div className="title contact-title">
							Let's Collaborate: Connect With Me on Your Next Enterprise Vision
						</div>

						<div className="subtitle contact-subtitle">
							Whether you're looking to discuss architecture patterns, explore microservices solutions, 
							or collaborate on innovative enterprise projects — I'd love to hear from you. With 10+ years 
							of experience building scalable systems, I'm passionate about solving complex problems and 
							sharing knowledge with fellow engineers.
							<br /><br />
							<strong>Reach out directly:</strong> Send me an email at{" "}
							<a href={`mailto:${INFO.main.email}`}>
								{INFO.main.email}
							</a>
							{" "}— I typically respond within 24 hours.
							<br /><br />
							<strong>I'm open to:</strong>
							<br />
							✓ Architecture & design discussions<br />
							✓ Interesting project collaborations<br />
							✓ Mentoring and knowledge sharing<br />
							✓ Open-source contributions<br />
							✓ Technical speaking engagements<br /><br />
							Connect with me on{" "}
							<a
								href={INFO.socials.github}
								target="_blank"
								rel="noreferrer"
							>
								GitHub
							</a>
							{" "}to explore my work, or find me on{" "}
							<a
								href={INFO.socials.linkedin}
								target="_blank"
								rel="noreferrer"
							>
								LinkedIn
							</a>
							{" "}for professional connections. Let's build something amazing together!
						</div>
					</div>

					<div className="socials-container">
						<div className="contact-socials">
							<Socials />
						</div>
					</div>

					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Contact;
