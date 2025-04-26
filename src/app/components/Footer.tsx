import Link from "next/link";

export default function FooterSection() {
  return (
    <footer className="footerContent bg-gray-800 text-white py-10">
      <div className="container-fluid mx-auto">
        <div className="row justify-center text-center">
          {/* Social Media Links */}
          <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 mb-4">
            <div className="socialPlugs onlyPK flex justify-center space-x-4">
              <a
                href="https://www.linkedin.com/company/creative-chaos/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-blue-600"
              >
                <i className="fa fa-linkedin" aria-hidden="true"></i>
              </a>
              <a
                href="https://www.instagram.com/creativechaospk/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-pink-600"
              >
                <i className="fa fa-instagram" aria-hidden="true"></i>
              </a>
              <a
                href="https://web.facebook.com/CreativeChaosPK"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-blue-700"
              >
                <i className="fa fa-facebook" aria-hidden="true"></i>
              </a>
              <a
                href="https://www.youtube.com/@creativechaos3152"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-red-600"
              >
                <i className="fa fa-youtube-play" aria-hidden="true"></i>
              </a>
            </div>
          </div>

          {/* Copyright & Legal Links */}
          <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12 text-center mt-4">
            <div className="copyright text-gray-400 text-sm">
              © 2025 Creative Chaos.{" "}
              <Link href="/privacy-policy" className="text-blue-400 hover:text-blue-600">
                Privacy Policy
              </Link>{" "}
              |{" "}
              <Link href="/terms-and-conditions" className="text-blue-400 hover:text-blue-600">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

