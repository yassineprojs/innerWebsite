import React, { useState, useEffect } from "react";
// import neverGiveUp from '../../assets/pictures/neverGiveUp.jpg';
// import eePic from "../../assets/pictures/ee.jpg";

const SPEED_MULTIPLIER = 1;

const _F = `>${200 * SPEED_MULTIPLIER}<`;
const _X = `>${500 * SPEED_MULTIPLIER}<`;
const _S = `>${1000 * SPEED_MULTIPLIER}<`;
const _M = `>${2000 * SPEED_MULTIPLIER}<`;

function delay(time) {
  return new Promise(function (resolve) {
    setTimeout(resolve, time);
  });
}

export default function OpenSequence({ setOpen }) {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(true);
  const [showLogin, setShowLogin] = useState(false);

  const getTime = () => {
    const date = new Date();
    const h = date.getHours();
    const m = date.getMinutes();
    const s = date.getSeconds();
    const time =
      h + ":" + (m < 10 ? "0" + m : m) + ":" + (s < 10 ? "0" + s : s);
    return time;
  };

  const NORMAL_SHUTDOWN = `Beginning Pre-login Sequence... ${_F}
    Connecting to HHOS01/13:2000.${_F}.${_F}.${_F}
    |
    Established connection to HH0S01/13:2000, attempting data transfer.
    |
    ${_F}
    |Analyzing data... Done.| ${_F}
    |Packing Transfer... Done.| ${_F}
    |Beginning Transfer...| ${_F}
    |[${getTime()} START]| .${_F}.....${_X}.|............|.${_S}.|......|.${_S}...........${_M} |[Transfer completed.]|


    |(HHOS01/13:200:60099) [DEP_ANALYTICS_SERVER_ON_AFTER_SETUP_MIDDLEWARE] InvalidFormatting: 'onAnalyticsConversion' option received invalid parameters. Please contact a server administrator to resolve the issue.|
    ${_F}
    |(HHOS01/13:200:60099) [SOCKET_FAILED_TO_RESPOND] Connection Refused: Reconnecting... [${getTime()}:00]|
    |(HHOS01/13:200:60099) [SOCKET_FAILED_TO_RESPOND] Connection Refused: Reconnecting... [${getTime()}:01]
    (HHOS01/13:200:60099) [SOCKET_FAILED_TO_RESPOND] Connection Refused: Reconnecting... [${getTime()}:03]
    (HHOS01/13:200:60099) [SOCKET_FAILED_TO_RESPOND] Connection Refused: Reconnecting... [${getTime()}:05]
    (HHOS01/13:200:60099) [SOCKET_FAILED_TO_RESPOND] Connection Refused: Reconnecting... [${getTime()}:08]
    (HHOS01/13:200:60099) [SOCKET_FAILED_TO_RESPOND] Connection Refused: Reconnecting... [${getTime()}:12]
    (HHOS01/13:200:60099) [COMPUTER_successful_LOGIN] Access Granted: Welcome to the System... [${getTime()}:14]. 
    [SUCCESS: Opening_Computer] Initialization Complete: Computer Ready for Use
    |

    logging${_S}.${_S}.${_S}.
    `;

  const typeText = (i, curText, text, setText, callback) => {
    let delayExtra = 0;
    if (i < text.length) {
      if (text[i] === "|") {
        let dumpText = "";
        for (let j = i + 1; j < text.length; j++) {
          if (text[j] === "|") {
            i = j + 1;
            break;
          }
          dumpText += text[j];
        }
        setText(curText + dumpText);
        typeText(i, curText + dumpText, text, setText, callback);
        return;
      }
      if (text[i] === ">") {
        let delayTime = "";
        for (let j = i + 1; j < text.length; j++) {
          if (text[j] === "<") {
            i = j + 1;
            break;
          }
          delayTime += text[j];
        }
        delayExtra = parseInt(delayTime);
      }

      setTimeout(() => {
        setText(curText + text[i]);
        typeText(i + 1, curText + text[i], text, setText, callback);
      }, 20 + delayExtra);
    } else {
      callback();
    }
  };

  useEffect(() => {
    delay(2000).then(() => {
      setLoading(false);
      delay(1000).then(() => {
        typeText(0, "", NORMAL_SHUTDOWN, setText, () => {
          setLoading(true);
          delay(2000).then(() => {
            setOpen(true);
          });
        });
      });
    });
    // eslint-disable-next-line
  }, []);

  return loading ? (
    <div className="open">
      <div className="blinking-cursor" />
    </div>
  ) : (
    <div className="open">
      <p className="text">{text}</p>
    </div>
  );
}
