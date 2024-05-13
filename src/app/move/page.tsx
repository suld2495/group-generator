'use client';

import { useEffect, useState } from "react";
import Modal from "../_components/modal/Modal";

const Move = () => {
  const [popup, setPopup] = useState(false);
  const VISIT_BEFORE = typeof window !== "undefined" ? localStorage.getItem("visit_before") : null;

  useEffect(() => {
    if (VISIT_BEFORE === null) {
      setPopup(false);
    } else {
      setPopup(true);
    }
  }, [VISIT_BEFORE]);

  return (
    <>
      {popup && <Modal />}
    </>
  )
};

export default Move;