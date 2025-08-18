import Image from "next/image";
import Link from "next/link";
import CtaSection from "../ctaSection/ctaSection";

export default function Footer() {
  return (
    <footer className="wpo-site-footer">
      {/* <CtaSection /> */}
      <div className="upper-footer">
        <div className="container">
          <div className="row">
            {/* Logo and About */}
            <div className="col col-lg-4 col-md-6 col-12">
              <div className="widget about-widget">
                <div className="logo widget-title">
                  <Link className="site-logo" href="/">
                    {/* <Image
                      src="/images/logo.png"
                      alt="Rehan Akram Logo"
                      width={40}
                      height={40}
                    /> */}
                    Rehan Akram
                  </Link>
                </div>
                <p>
                  Full-Stack Developer specializing in Laravel, ASP.NET Core,
                  and ReactJS. Building scalable, secure, and high-performance
                  applications.
                </p>
                <div className="social-icons">
                  <ul>
                    <li>
                      <Link
                        href="https://facebook.com/"
                        target="_blank"
                        aria-label="Facebook"
                      >
                        <i className="ti-facebook"></i>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://twitter.com/"
                        target="_blank"
                        aria-label="Twitter"
                      >
                        <i className="ti-twitter-alt"></i>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://linkedin.com/in/"
                        target="_blank"
                        aria-label="LinkedIn"
                      >
                        <i className="ti-linkedin"></i>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://github.com/"
                        target="_blank"
                        aria-label="GitHub"
                      >
                        <i className="ti-github"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="col col-lg-2 col-md-6 col-12">
              <div className="widget link-widget">
                <div className="widget-title">
                  <h3>Navigation</h3>
                </div>
                <ul>
                  <li>
                    <Link href="#about">About Me</Link>
                  </li>
                  <li>
                    <Link href="#contact">Contact</Link>
                  </li>
                  <li>
                    <Link href="#portfolio">Projects</Link>
                  </li>
                  <li>
                    <Link href="#blog">Blog</Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Services */}
            <div className="col col-lg-3 col-md-6 col-12">
              <div className="widget link-widget service-link-widget">
                <div className="widget-title">
                  <h3>Services</h3>
                </div>
                <ul>
                  <li>
                    <Link href="#service">Laravel Web Development</Link>
                  </li>
                  <li>
                    <Link href="#service">ASP.NET Core Development</Link>
                  </li>
                  <li>
                    <Link href="#service">ReactJS Frontend Development</Link>
                  </li>
                  <li>
                    <Link href="#service">API Integration & Security</Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Newsletter */}
            <div className="col col-lg-3 col-md-6 col-12">
              <div className="widget newsletter-widget">
                <div className="widget-title">
                  <h3>Newsletter</h3>
                </div>
                <p>
                  Stay updated with the latest in Laravel, ASP.NET, and ReactJS.
                </p>
                <form action="/api/subscribe" method="POST">
                  <div className="input-1">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      placeholder="Email Address *"
                      aria-label="Email Address"
                      required
                    />
                  </div>
                  <div className="submit clearfix">
                    <button type="submit" aria-label="Subscribe">
                      <i className="ti-email"></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Shape */}
        <div className="shadow-shape">
          <svg
            width="1319"
            height="1567"
            viewBox="0 0 1319 1567"
            fill="none"
          >
            <g filter="url(#filter0_f_39_3833)">
              <circle cx="803" cy="803" r="303" fill="#59C378" fillOpacity="0.5" />
            </g>
            <defs>
              <filter
                id="filter0_f_39_3833"
                x="0"
                y="0"
                width="1606"
                height="1606"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="250"
                  result="effect1_foregroundBlur_39_3832"
                />
              </filter>
            </defs>
          </svg>
        </div>
      </div>

      {/* Lower Footer */}
      <div className="lower-footer">
        <div className="container">
          <div className="row">
            <div className="separator"></div>
            <p className="copyright">
              &copy; {new Date().getFullYear()} Rehan Akram. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
