import React from "react";
import bitcoinIconsVerifyFilled from "./bitcoin-icons-verify-filled.svg";
import carbonUserProfileAlt from "./carbon-user-profile-alt.svg";
import materialSymbolsMailOutlineRounded from "./material-symbols-mail-outline-rounded.svg";
import mdiInstagram from "./mdi-instagram.svg";
import mingcuteMetaFill from "./mingcute-meta-fill.svg";
import "./style.css";

export const IphoneProMax = () => {
  return (
    <div className="iphone-pro-max">
      <div className="overlap-group-wrapper">
        <div className="overlap-group">
          <div className="overlap">
            <img
              className="carbon-user-profile"
              alt="Carbon user profile"
              src={carbonUserProfileAlt}
            />
          </div>

          <div className="div">
            <div className="rectangle" />

            <div className="rectangle-2" />

            <div className="text-wrapper">INSTAGRAM</div>

            <div className="rectangle-3" />

            <div className="text-wrapper-2">VOTE</div>

            <img
              className="mdi-instagram"
              alt="Mdi instagram"
              src={mdiInstagram}
            />

            <img
              className="material-symbols"
              alt="Material symbols"
              src={materialSymbolsMailOutlineRounded}
            />

            <div className="text-wrapper-3">HOTMAIL</div>

            <img
              className="mingcute-meta-fill"
              alt="Mingcute meta fill"
              src={mingcuteMetaFill}
            />
          </div>

          <img
            className="bitcoin-icons-verify"
            alt="Bitcoin icons verify"
            src={bitcoinIconsVerifyFilled}
          />
        </div>
      </div>
    </div>
  );
};
