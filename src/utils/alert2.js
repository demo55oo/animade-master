import { toast } from "react-toastify";

export const customAlert = (msg, state) => {
  if (state === "success") {
    toast.success(msg || "email sent successfully !", {
      position: toast.POSITION.TOP_RIGHT,
      className: "toast__fiy",
    });
  } else {
    toast.error(msg || "Something wrong !", {
      position: toast.POSITION.TOP_RIGHT,
      className: "toast__fiy",
    });
  }
};
