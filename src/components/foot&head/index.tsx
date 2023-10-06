import cs from "./index.module.css";

export default function ScreenHeader({}: any) {
  return (
    <div className={cs.header}>
      <div
        className={cs.headLogo}
        onClick={() => (window.location.pathname = "/")}
      />
      <div className={cs.navBar}>
        {/* <a href="#footerDiv">About Us</a>
        <a href="#footerDiv">Contact Us</a> */}
      </div>
    </div>
  );
}

export function ScreenFooter() {
  return (
    <div className={cs.footer} id="footerDiv">
      <div className={cs.contactArea}>
        <div className={cs.contactUsArea}>
          <div
            className={cs.headLogo}
            onClick={() => (window.location.pathname = "/")}
          />
          <div className={cs.text1}>Want to know more enter your mail</div>
          <form className={cs.emailInputArea}>
            <input placeholder="Enter your email" />
            <button>Enter</button>
          </form>
        </div>
        <div className={cs.address}>
          Address,
          <br />
          <br />
          <div style={{ fontSize: 14 }}>
            The prism tower, business bay, Dubai, UAE
            <br />
            +971 456 31119
            <br />
            info@ucfashionweek.com
          </div>
          <div className={cs.socialMedia}>
            <div
              onClick={() =>
                window.open("https://www.facebook.com/universalcouturedxb")
              }
              className={cs.fb}
            />
            <div
              onClick={() =>
                window.open("https://www.instagram.com/universalcoutur")
              }
              className={cs.insta}
            />
            <div
              onClick={() =>
                window.open("https://www.youtube.com/@universalcouturedxb")
              }
              className={cs.yt}
            />
          </div>
        </div>
      </div>
      <div className={cs.copyRight}>
        Copyright © Avid Hilda 2023 | All rights reserved | Designed & Developed
        by avidhilda.com
      </div>
    </div>
  );
}
