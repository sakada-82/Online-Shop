import React from "react";

export default function Footer() {
  return (
    <footer
      className="bg-white text-dark pt-5 pb-4 border-top mt-5"
      style={{ fontSize: "14px" }}
    >
      <div className="container">
        <div className="row g-4 mb-4 text-start">
          <div className="col-6 col-sm-4 col-md-2">
            <h6
              className="fw-bold text-uppercase mb-3"
              style={{ letterSpacing: "0.5px" }}
            >
              LOYALTY
            </h6>
            <ul className="list-unstyled d-flex flex-column gap-2">
              <li>
                <a
                  href="#"
                  className="text-decoration-none text-dark d-flex align-items-center gap-2"
                >
                  <i className="bi bi-heart-fill small"></i> Membership &
                  Benefits
                </a>
              </li>
            </ul>
          </div>

          <div className="col-6 col-sm-4 col-md-2">
            <h6
              className="fw-bold text-uppercase mb-3"
              style={{ letterSpacing: "0.5px" }}
            >
              FOLLOW US
            </h6>
            <ul className="list-unstyled d-flex flex-column gap-2">
              <li>
                <a
                  href="https://web.facebook.com/thibaut.da.2025"
                  className="text-decoration-none text-dark d-flex align-items-center gap-2"
                >
                  <i className="bi bi-facebook"></i> Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/sakada142/"
                  className="text-decoration-none text-dark d-flex align-items-center gap-2"
                >
                  <i className="bi bi-instagram"></i> Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.tiktok.com/@mhmhhhh6"
                  className="text-decoration-none text-dark d-flex align-items-center gap-2"
                >
                  <i className="bi bi-tiktok"></i> TikTok
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/@ThoDo-e7d"
                  className="text-decoration-none text-dark d-flex align-items-center gap-2"
                >
                  <i className="bi bi-youtube"></i> Youtube
                </a>
              </li>
            </ul>
          </div>
          <div className="col-6 col-sm-6 col-md-3">
            <h6
              className="fw-bold text-uppercase mb-3"
              style={{ letterSpacing: "0.5px" }}
            >
              CUSTOMER SERVICES
            </h6>
            <ul className="list-unstyled d-flex flex-column gap-2">
              <li>
                <a
                  href="#"
                  className="text-decoration-none text-dark d-flex align-items-center gap-2"
                >
                  <i className="bi bi-question-circle"></i> Online exchange
                  policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-decoration-none text-dark d-flex align-items-center gap-2"
                >
                  <i className="bi bi-shield-lock"></i> Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-decoration-none text-dark d-flex align-items-center gap-2"
                >
                  <i className="bi bi-chat-left-dots"></i> FAQs & guides
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-decoration-none text-dark d-flex align-items-center gap-2"
                >
                  <i className="bi bi-geo-alt"></i> Find a store
                </a>
              </li>
            </ul>
          </div>
          <div className="col-12 col-sm-6 col-md-3">
            <h6
              className="fw-bold text-uppercase mb-3"
              style={{ letterSpacing: "0.5px" }}
            >
              CONTACT US
            </h6>
            <ul className="list-unstyled d-flex flex-column gap-2">
              <li>
                <a
                  href="mailto:customer.care@zandokh.com"
                  className="text-decoration-none text-dark d-flex align-items-center gap-2 text-truncate d-block"
                >
                  <i className="bi bi-envelope"></i> simmulsakada.wu@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+855 93 638 500"
                  className="text-decoration-none text-dark d-flex align-items-center gap-2"
                >
                  <i className="bi bi-telephone"></i> (+855) 093 638 500
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-decoration-none text-dark d-flex align-items-center gap-2"
                >
                  <i className="bi bi-telegram"></i> Telegram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="row mt-5 mb-4 text-start">
          <div className="col-12">
            <h6
              className="fw-bold text-uppercase mb-3"
              style={{ letterSpacing: "0.5px" }}
            >
              WE ACCEPT
            </h6>
            <div
              className="d-flex flex-wrap gap-3 align-items-center"
              style={{ opacity: 0.9 }}
            >

              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRItLnYXTbs2TreONAKSnAQYxNVsT7jP4iNDqIjNEybpw&s=10"
                alt="KHQR"
                style={{ height: "26px", objectFit: "contain" }}
                className="img-fluid border rounded px-1 bg-white"
              />
              <img
                src="https://i.pinimg.com/1200x/9c/14/17/9c14173c8391e310439e1b69d19f64ff.jpg"
                alt="VISA"
                style={{ height: "22px", objectFit: "contain" }}
                className="img-fluid"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Mastercard_2019_logo.svg"
                alt="MasterCard"
                style={{ height: "25px", objectFit: "contain" }}
                className="img-fluid"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/1/1b/UnionPay_logo.svg"
                alt="UnionPay"
                style={{ height: "24px", objectFit: "contain" }}
                className="img-fluid"
              />
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrpkcDMmF32XjZXRj6om4TdVADZmau9JbfcWN3Q4ACDQ&s=10"
                alt="Wing"
                style={{ height: "24px", objectFit: "contain" }}
                className="img-fluid"
              />
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN8-0AdduVZTr5hnKjAXp4xEClELQ4mVh_jBkf8pWfyw&s=10"
                alt="ABA Bank"
                style={{ height: "30px", objectFit: "contain" }}
                className="img-fluid"
              />
              <span
                className="text-muted small d-flex align-items-center gap-1 border rounded px-2 py-1 bg-light fw-medium"
                style={{ fontSize: "12px" }}
              >
                <i className="bi bi-cash-coin text-dark fs-6"></i> Cash on
                Delivery
              </span>
            </div>
          </div>
        </div>
        <hr className="my-4 text-muted" />
        <div className="row">
          <div className="col-12 text-end text-muted small">
            <span>© 2015 - 2026 Online Shop. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
