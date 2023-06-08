import PropTypes from "prop-types";
import ReactDOM from "react-dom";
import "./Modal.css";
import { Button } from "@mui/material";

const Modal = ({ show, close, title, children }) => {
  return ReactDOM.createPortal(
    <div
      className={`modalContainer ${show ? "show" : ""}`}
      onClick={() => close()}
    >
      <div className="modal" onClick={(e) => e.stopPropagation}>
        <header className="modal_header">
          <h2 className="modal_header_title">{title}</h2>
          <Button
            role="button"
            aria-label="modal_close_button"
            sx={{ top: "-90px", right: "-30px", fontSize: "1.2rem" }}
            className="close_button close"
            onClick={() => close()}
            variant="text"
            size="small"
          >
            X
          </Button>
        </header>
        <main className="modal_content">{children}</main>
        <footer className="modal_footer">
          <Button
            role="button"
            aria-label="modal_ok_button"
            sx={{
              backgroundColor: "#333333",
              marginTop: "1rem",
              "&:hover": {
                backgroundColor: "#595959",
              },
            }}
            variant="contained"
            className="modal_close"
            onClick={() => close()}
            color="secondary"
          >
            OK
          </Button>
        </footer>
      </div>
    </div>,
    document.getElementById("modal")
  );
};

Modal.propTypes = {
  show: PropTypes.string,
  close: PropTypes.bool,
  title: PropTypes.string,
  children: PropTypes.string,
};

export default Modal;
