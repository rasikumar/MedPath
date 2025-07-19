const KEY = "popupShownAt";
const ONE_HOUR = 60 * 60 * 1000;

export const getFullyear = () => {
  return new Date().getFullYear();
};

export const hasPopupShownRecently = () => {
  if (typeof window === "undefined") return true; // prevent SSR issues

  const storedTime = sessionStorage.getItem(KEY);
  if (!storedTime) return false;

  return Date.now() - parseInt(storedTime) < ONE_HOUR;
};

export const markPopupAsShown = () => {
  if (typeof window !== "undefined") {
    sessionStorage.setItem(KEY, Date.now().toString());
  }
};

export const validateIndianMobile = (value) => {
  if (!value) return false;

  // Remove all non-digit characters
  const digitsOnly = value.replace(/\D/g, "");

  // Check if it's exactly 10 digits and starts with 6-9
  return digitsOnly.length === 10 && /^[6-9]/.test(digitsOnly);
};
