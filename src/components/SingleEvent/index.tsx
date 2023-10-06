import cs from "./index.module.css";
import { StrictMode, useState } from "react";

export default function SingleEvent() {
  const [selected, setselected] = useState(false);
  return (
    <StrictMode>
      <div
        className={cs.event}
        onClick={() => (window.location.pathname = "singleEvent")}
      >
        <div className={cs.img} />
        <div className={cs.detgailsArea}>
          <div className={cs.eventTitle}>
            Dubai Design Week
            <div className={cs.eventdate}>10-10-2023</div>
          </div>
          <div className={cs.eventDesc}>ARTS & CULTURE</div>
        </div>
        <div className={cs.locationArea}>
          Sheikh Mohammed Bin Rashid, Near Burj Khalifa, Downtown Dubai - Dubai
        </div>
      </div>
      {/* <div className={cs.popup} style={!selected ? { display: "none" } : {}}>
        <div className={cs.popupBody}>
          <div className={cs.popDetailsArea}>
            <div className={cs.popHeader}>
              Title
              <div className={cs.xBtn} onClick={() => setselected(false)} />
            </div>
          </div>
        </div>
      </div> */}
    </StrictMode>
  );
}
