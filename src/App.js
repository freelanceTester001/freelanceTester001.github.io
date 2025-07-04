import React from 'react';

// Main App component for the portfolio website
const App = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-inter antialiased">
      {/* Header/Navigation */}
      <header className="bg-gray-800 shadow-lg py-4 px-6 md:px-12">
        {/* Adjusted max-w-7xl for wider content on large screens */}
        <nav className="container mx-auto max-w-7xl flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-blue-400 hover:text-blue-300 transition-colors duration-300">
            Syed Hanzalah Hussain
          </a>
          <ul className="flex space-x-6">
            <li><a href="#about" className="text-lg hover:text-blue-400 transition-colors duration-300">About</a></li>
            <li><a href="#skills" className="text-lg hover:text-blue-400 transition-colors duration-300">Skills</a></li>
            <li><a href="#experience" className="text-lg hover:text-blue-400 transition-colors duration-300">Experience</a></li>
            <li><a href="#services" className="text-lg hover:text-blue-400 transition-colors duration-300">Services</a></li>
            <li><a href="#contact" className="text-lg hover:text-blue-400 transition-colors duration-300">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="about" className="relative h-screen flex items-center justify-center text-center bg-cover bg-center"
        style={{ backgroundImage: "url('https://placehold.co/1920x1080/1a202c/e2e8f0?text=Secure+Your+Future')" }}>
        <div className="absolute inset-0 bg-black opacity-70"></div> {/* Overlay for better text readability */}
        <div className="relative z-10 p-8 rounded-lg shadow-2xl bg-gray-800 bg-opacity-80 max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4 leading-tight">
            Syed Hanzalah Hussain
          </h1>
          <p className="text-2xl md:text-3xl text-blue-300 mb-6">
            Web Application Penetration Tester | eWPTXv3 Certified
          </p>
          <p className="text-lg md:text-xl text-gray-300 mb-8">
            Specializing in identifying and mitigating critical vulnerabilities to secure your digital assets.
            Bringing 4 years of experience, real-world bug bounty success, and a passion for proactive security.
          </p>
          <a href="#contact" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105">
            Let's Secure Your Application
          </a>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 bg-gray-900">
        {/* Adjusted max-w-7xl for wider content on large screens */}
        <div className="container mx-auto max-w-7xl px-6 md:px-12 text-center">
          <h2 className="text-4xl font-bold text-blue-400 mb-10">My Expertise</h2>
          {/* Flex container to center the grid */}
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Skill Card 1 */}
              <div className="bg-gray-800 p-8 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1">
                <h3 className="text-2xl font-semibold text-white mb-4">Web Application Penetration Testing</h3>
                <p className="text-gray-300">
                  In-depth assessment of web applications following OWASP Top 10, SANS Top 25, and custom methodologies.
                </p>
              </div>
              {/* Skill Card 2 */}
              <div className="bg-gray-800 p-8 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1">
                <h3 className="text-2xl font-semibold text-white mb-4">API Security Testing</h3>
                <p className="text-gray-300">
                  Comprehensive security analysis of RESTful and GraphQL APIs, identifying vulnerabilities in authentication, authorization, and data handling.
                </p>
              </div>
              {/* Skill Card 3 */}
              <div className="bg-gray-800 p-8 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1">
                <h3 className="text-2xl font-semibold text-white mb-4">Vulnerability Assessment & Reporting</h3>
                <p className="text-gray-300">
                  Identifying, analyzing, and documenting security flaws with clear, actionable remediation steps.
                </p>
              </div>
              {/* Skill Card 4 */}
              <div className="bg-gray-800 p-8 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1">
                <h3 className="text-2xl font-semibold text-white mb-4">eWPTXv3 Certified</h3>
                <p className="text-gray-300">
                  Validated advanced skills in web application penetration testing, including complex scenarios and modern web technologies.
                  <br />
                  <a href="https://certs.ine.com/441a972e-cd8e-4bd8-b7bd-665a0bed0b8c" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline text-sm">Verify Certification</a>
                </p>
              </div>
              {/* Skill Card 5 - Bug Bounty & HOF Recognition - Shortened description and removed col-span to make it look like other square cards */}
              <div className="bg-gray-800 p-8 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1">
                <h3 className="text-2xl font-semibold text-white mb-4">Bug Bounty & HOF Recognition</h3>
                <p className="text-gray-300">
                  Proven ability to find critical vulnerabilities in real-world applications, recognized by multiple bounties and Hall of Fames.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 bg-gray-800">
        {/* Adjusted max-w-7xl for wider content on large screens */}
        <div className="container mx-auto max-w-7xl px-6 md:px-12 text-center">
          <h2 className="4xl font-bold text-blue-400 mb-10">My Journey</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-900 p-8 rounded-lg shadow-xl mb-8 text-left"> {/* Added text-left here */}
              <h3 className="text-3xl font-semibold text-white mb-4 text-center">4 Years of Dedicated Experience</h3> {/* Centered title */}
              <p className="text-lg text-gray-300 mb-4">
                Over four years, I have honed my skills in various aspects of cybersecurity, with a strong focus on offensive security and web application penetration testing. My work has involved:
              </p>
              {/* Removed list-inside, added custom padding for better control */}
              <ul className="list-disc text-gray-300 space-y-2 pl-5 sm:pl-8">
                <li>Conducting comprehensive security assessments for diverse web applications.</li>
                <li>Identifying and exploiting critical vulnerabilities, including business logic flaws and complex injection techniques.</li>
                <li>Developing detailed, actionable reports for developers and stakeholders.</li>
                <li>Collaborating with development teams to ensure effective remediation of security issues.</li>
              </ul>
            </div>
            <div className="bg-gray-900 p-8 rounded-lg shadow-xl text-left"> {/* Added text-left here */}
              <h3 className="text-3xl font-semibold text-white mb-4 text-center">Recognized Impact: Bug Bounties & Hall of Fames</h3> {/* Centered title */}
              {/* Changed to list-none for custom bullet-like appearance with padding */}
              <ul className="list-none text-gray-300 space-y-4">
                <li className="relative pl-6"> {/* Added relative and pl-6 for custom bullet */}
                  <span className="absolute left-0 top-0 text-blue-300 text-xl">•</span> {/* Custom bullet */}
                  <span className="font-semibold text-blue-300">Bug Bounty - Monetary Reward (Growthbook)</span>
                  <p className="text-sm text-gray-400 mt-1">Issued by www.growthbook.io · Nov 2024</p>
                  <p className="text-sm text-gray-300 mt-1">Identified and reported a security vulnerability to growthbook.com with a severity rating of 5.5, earning a bounty reward. Specific details are undisclosed due to responsible disclosure policy.</p>
                </li>
                <li className="relative pl-6">
                  <span className="absolute left-0 top-0 text-blue-300 text-xl">•</span>
                  <span className="font-semibold text-blue-300">Bug Bounty - Hall Of Fame (eur.nl)</span>
                  <p className="text-sm text-gray-400 mt-1">Issued by eur.nl (University) · Apr 2024</p>
                  <p className="text-sm text-gray-300 mt-1">Identified and reported a security vulnerability on eur.nl, earning a place in their Hall of Fame. Specific details are undisclosed due to responsible disclosure policy.</p>
                </li>
                <li className="relative pl-6">
                  <span className="absolute left-0 top-0 text-blue-300 text-xl">•</span>
                  <span className="font-semibold text-blue-300">Bug Bounty - Hall Of Fame and Monetary Reward (Looka.com)</span>
                  <p className="text-sm text-gray-400 mt-1">Issued by Looka.com · Nov 2023</p>
                  <p className="text-sm text-gray-300 mt-1">Identified and reported a critical vulnerability on Looka.com with a severity rating of 9.5, earning both a Hall of Fame recognition and a bounty reward. Specific details are undisclosed due to responsible disclosure policy.</p>
                </li>
                <li className="relative pl-6">
                  <span className="absolute left-0 top-0 text-blue-300 text-xl">•</span>
                  <span className="font-semibold text-blue-300">Bug Bounty - Hall Of Fame (Lucid Motors)</span>
                  <p className="text-sm text-gray-400 mt-1">Issued by lucidmotors.com · Jul 2022</p>
                  <p className="text-sm text-gray-300 mt-1">Reported an email address disclosure vulnerability with a severity rating of 2.5 - 3.0, earning a place in the Hall of Fame on the Bugcrowd program.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-gray-900">
        {/* Adjusted max-w-7xl for wider content on large screens */}
        <div className="container mx-auto max-w-7xl px-6 md:px-12 text-center">
          <h2 className="text-4xl font-bold text-blue-400 mb-10">My Services: Focused Pentesting for Startups</h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            I offer specialized, short-term web application penetration testing projects designed specifically for startups. Get a comprehensive security assessment and actionable report within 1-2 weeks.
          </p>
          {/* Changed md:grid-cols-2 to md:grid-cols-1 for stacking on medium screens to avoid empty space */}
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <div className="bg-gray-800 p-8 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1">
              <h3 className="text-2xl font-semibold text-white mb-4">Rapid Web App Pentest (1-2 Weeks)</h3>
              {/* Shortened description */}
              <p className="text-gray-300 mb-4">
                A focused, intensive security audit to quickly identify critical vulnerabilities and provide immediate remediation guidance for your web application.
              </p>
              {/* Added pl-5 for consistent indentation */}
              <ul className="list-disc text-left text-gray-400 text-sm pl-5">
                <li>OWASP Top 10 focused assessment</li>
                <li>Manual and automated testing techniques</li>
                <li>Clear, concise vulnerability report</li>
                <li>Prioritized remediation steps</li>
              </ul>
            </div>
            {/* Service Card 2 */}
            <div className="bg-gray-800 p-8 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1">
              <h3 className="text-2xl font-semibold text-white mb-4">API Security Review</h3>
              <p className="text-gray-300 mb-4">
                Dedicated assessment of your application's APIs to uncover authentication bypasses, insecure data exposure, and business logic flaws.
              </p>
              {/* Added pl-5 for consistent indentation */}
              <ul className="list-disc text-left text-gray-400 text-sm pl-5">
                <li>Authentication & Authorization bypass testing</li>
                <li>Data exposure and injection vulnerability checks</li>
                <li>Rate limiting and resource exhaustion analysis</li>
                <li>Detailed API security report</li>
              </ul>
            </div>
            {/* Service Card 3 (Post-Pentest Remediation Support) - Shortened description and removed col-span-2 to make it normal */}
            <div className="bg-gray-800 p-8 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1">
              <h3 className="text-2xl font-semibold text-white mb-4">Post-Pentest Remediation Support</h3>
              {/* Shortened description */}
              <p className="text-gray-300 mb-4">
                Guidance and re-testing to ensure identified vulnerabilities are effectively patched and do not re-emerge, providing lasting security improvements.
              </p>
              {/* Added pl-5 for consistent indentation */}
              <ul className="list-disc text-left text-gray-400 text-sm pl-5">
                <li>Vulnerability verification re-testing</li>
                <li>Remediation strategy discussions</li>
                <li>Continuous security improvement advice</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-800">
        {/* Adjusted max-w-7xl for wider content on large screens */}
        <div className="container mx-auto max-w-7xl px-6 md:px-12 text-center">
          <h2 className="text-4xl font-bold text-blue-400 mb-10">Get in Touch</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Ready to secure your web application? Let's discuss your project.
            Fill out the form below or reach out directly.
          </p>
          <div className="max-w-xl mx-auto bg-gray-900 p-8 rounded-lg shadow-xl">
            {/* Formspree integrated form */}
            <form action="https://formspree.io/f/mnnvrkjg" method="POST" className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-left text-lg font-medium text-gray-200 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full p-3 rounded-md bg-gray-700 border border-gray-600 text-white focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-left text-lg font-medium text-gray-200 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full p-3 rounded-md bg-gray-700 border border-gray-600 text-white focus:ring-blue-500 focus:border-blue-500"
                  placeholder="syedfreelancepentester@gmail.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-left text-lg font-medium text-gray-200 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  className="w-full p-3 rounded-md bg-gray-700 border border-gray-600 text-white focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Tell me about your project and security needs..."
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                Send Message
              </button>
            </form>
            <p className="text-gray-400 mt-8">
              You can also reach me directly at: <a href="mailto:syedfreelancepentester@gmail.com" className="text-blue-400 hover:underline">syedfreelancepentester@gmail.com</a>
            </p>
            <p className="text-gray-400 mt-2">
              Connect with me on LinkedIn: <a href="https://www.linkedin.com/in/ghostbalde/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">linkedin.com/in/ghostbalde/</a>
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-8 px-6 md:px-12 text-center text-gray-500 text-sm">
        <div className="container mx-auto">
          &copy; {new Date().getFullYear()} Syed Hanzalah Hussain. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default App;
