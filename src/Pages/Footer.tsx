const Footer = () => {
    return ( 
        <footer>
      <p>&copy; {new Date().getFullYear()} Programming Roadmap Blog. All rights reserved.</p>
      <p>
        Built With React and TypeScript.
      </p>
      <p>
        <a href="https://github.com/okedo01" target="_blank" rel="noopener noreferrer" style={{ color: "hsl(0, 0%, 36%)", textDecoration: "none" }}>
          GitHub
        </a>{" "}
        |{" "}
        <a href="#" style={{ color: "hsl(0, 0%, 36%)", textDecoration: "none" }}>
          Contact Us
        </a>
      </p>
    </footer>
     );
}
 
export default Footer;