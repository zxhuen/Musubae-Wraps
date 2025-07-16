import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="container mx-auto px-4 max-w-11/12" id="FooterContainer">
        <footer className="bg-[#3b1e00] text-white py-8 px-6 mt-12">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <h2 className="text-2xl font-bold mb-2 font-['Comic_Neue']">
                Musubae and Wraps
              </h2>
              <p className="text-sm font-['Comic_Neue']">
                Handcrafted Spam Musubi made with love. 🍙
                <br />
                Taste the simplicity, love the flavor.
              </p>
            </div>

            {/* Links */}
            <div>
              <h3 className="text-lg font-semibold mb-2 font-['Comic_Neue']">
                Quick Links
              </h3>
              <ul className="space-y-1 text-sm font-['Comic_Neue']">
                <li>
                  <a href="#Products" className="hover:underline">
                    Products
                  </a>
                </li>

                <li>
                  <a href="#test" className="hover:underline">
                    Back to Top
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-lg font-semibold mb-2 font-['Comic_Neue']">
                Contact
              </h3>
              <p className="text-sm font-['Comic_Neue']">
                📍 Laguna, Santa Rosa
                <br />
                📞 0920 675 0081
                <br />
                📞 0961 905 8822
              </p>
            </div>
          </div>

          {/* Bottom */}
          <div className="mt-8 text-center text-xs text-gray-300 font-['Comic_Neue']">
            &copy; {new Date().getFullYear()} Musubae. All rights reserved.
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
