import { resourcesLinks, platformLinks, communityLinks } from "../constants";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa"; // Import icons

const Footer = () => {
  return (
    <footer className="mt-20 border-t py-10 border-neutral-700">
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        <div>
          <h3 className="text-md font-semibold mb-4">Resources</h3>
          <ul className="space-y-2">
            {resourcesLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-neutral-300 hover:text-white"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-md font-semibold mb-4">Platform</h3>
          <ul className="space-y-2">
            {platformLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-neutral-300 hover:text-white"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-md font-semibold mb-4">Community</h3>
          <ul className="space-y-2">
            {communityLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-neutral-300 hover:text-white"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-8 border-t pt-6 border-neutral-700">
        <div className="flex flex-col items-center">
          <p className="text-neutral-300 text-sm mb-4">
            © {new Date().getFullYear()} Salim. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a
              href="https://github.com/devsalimsk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-300 hover:text-white text-xl"
            >
              <FaGithub /> {/* GitHub Icon */}
            </a>
            <a
              href="https://www.linkedin.com/in/salimthedeveloper/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-300 hover:text-white text-xl"
            >
              <FaLinkedin /> {/* LinkedIn Icon */}
            </a>
            <a
              href="https://www.instagram.com/iam_salim_786/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-300 hover:text-white text-xl"
            >
              <FaInstagram /> {/* Instagram Icon */}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
