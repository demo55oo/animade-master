import { toast } from "react-toastify";

export const customAlert = (msg, state) => {
  if (state === "success") {
    toast.success(msg || "success !", {
      position: toast.POSITION.TOP_RIGHT,
      className: "toast__fiy",
    });
  } else {
    toast.error(msg || "Some thing wrong !", {
      position: toast.POSITION.TOP_RIGHT,
      className: "toast__fiy",
    });
  }
};
