import { useEffect, useRef, useState } from 'react';
import { Modal as BsModal } from 'bootstrap';

function Modal({ children, open, title, onClose }) {
  const modalEl = useRef(); // {current:  <div className="modal fade" id="modal-register" tabIndex="-1"></div> }
  const [modal, setModal] = useState(null);

  useEffect(() => {
    const modalObj = new BsModal(modalEl.current);
    setModal(modalObj);
  }, []);

  useEffect(() => {
    if (open) {
      return modal?.show();
    }
    if (!open) {
      return modal?.hide();
    }
  }, [open, modal]);

  return (
    <div
      className="modal fade"
      id="modal-register"
      tabIndex="-1"
      ref={modalEl}
      onClick={onClose}
    >
      <div
        className="modal-dialog modal-dialog-centered"
        onClick={(e) => e.stopPropagation()} //stop click inside the div
      >
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="btn-close invisible"></button>
            <h5 className="modal-title">{title}</h5>
            <button
              type="button"
              className="btn-close"
              onClick={onClose}
            ></button>
          </div>
          <div className="modal-body">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
