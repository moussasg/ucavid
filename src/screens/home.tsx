import { Component, StrictMode } from "react";
import cs from "../styles/home.module.css";
import ScreenHeader, { ScreenFooter } from "../components/foot&head";
import SingleEvent from "../components/SingleEvent";
import SingleGallery from "../components/SingleGallery";

export default class HomeScreen extends Component<any> {
  constructor(props: any) {
    super(props);
    this.state = {
      bannerClicked: false,
    };
  }

  render() {
    const { bannerClicked }: any = this.state;
    return (
      <StrictMode>
        <div
          className={cs.home}
          onClick={() => this.setState({ bannerClicked: true })}
        >
          <video className={cs.banner} autoPlay loop muted>
            <source src={require("../assets/banner.mp4")} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className={cs.bannerContentArea}>
            <div className={cs.bannerContentBody}>
              <div className={cs.header}></div>
            </div>
          </div>
          <div className={cs.loaderPage} />
          <div className={cs.moreBtn}>CLICK ON TO VIEW MORE</div>
          <div className={bannerClicked ? cs.page1_ : cs.page1}>
            {/* <div className={cs.header}></div> */}
            <div className={cs.secBtnList}>
              <div
                className={cs.secBtn}
                onClick={() => {
                  this.props.setPage("academy");
                  setTimeout(
                    () => this.setState({ bannerClicked: false }),
                    1000
                  );
                }}
                style={{
                  backgroundImage:
                    "url(https://www.amsterdamfashionacademy.com/wp-content/uploads/2022/09/Cover-photo-AFA.png)",
                }}
              >
                <div className={cs.secBtnBody}>
                  <div className={cs.secBtnHeader}>ACADEMY</div>
                  <div className={cs.desc}>
                    Avid Hilda is a premier exhibition organizing company based
                    in the vibrant city of Dubai, at the crossroads of
                    innovation and commerce. With an unwavering commitment to
                    excellence and a track record of successful events, we are a
                    trusted partner for businesses seeking to showcase their
                    offerings on a global stage.
                  </div>
                </div>
              </div>
              <div
                className={cs.secBtn}
                onClick={() => {
                  this.props.setPage("agency");
                  setTimeout(
                    () => this.setState({ bannerClicked: false }),
                    1000
                  );
                }}
              >
                <div className={cs.secBtnBody}>
                  <div className={cs.secBtnHeader}>AGENCY</div>
                  <div className={cs.desc}>
                    Our company is dedicated to providing exceptional organizing
                    services for seminars, business conference and alike to
                    ensure that our customers receive top-notch assistance in
                    planning and executing their events. With our expertise in
                    event management, we offer a comprehensive range of services
                    to meet the diverse needs of our clients.
                  </div>
                </div>
              </div>
            </div>
            {/* <div className={cs.text1}>VENUES AND MODERN FACILITIES</div>
            <div className={cs.text2}>
              EXPERIENCE EXCELLENCE IN EVENT ORGANIZATION SERVICE
            </div> */}
          </div>
        </div>
        {bannerClicked && (
          <StrictMode>
            <SingleGallery />
            {/* ///////////////////////////////////////////////////////////////////////// */}
            {/* ///////////////////////////////////////////////////////////////////////// */}
            <div className={cs.section5}>
              <div className={cs.title}>Our Events</div>
              <div className={cs.desc}>
                In the radiant realm of MAN OF THE UNIVERSE, style knows no
                limits. This event transcends the ordinary, inviting men to step
                onto the cosmic catwalk and leave an indelible mark.
              </div>
              <div className={cs.eventsArea}>
                {[1, 1, 1].map((it, k) => (
                  <SingleEvent key={k} />
                ))}
              </div>
              <div className="blackBtn">Explore All Events</div>
            </div>
            <ScreenFooter />
            <ScreenHeader />
          </StrictMode>
        )}
      </StrictMode>
    );
  }
}
