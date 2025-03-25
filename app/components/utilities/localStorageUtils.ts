const isClient = typeof window !== "undefined"; // Kollar om vi är i en webbläsare

export const saveToLocalStorage = (key: string, value: any) => {
  if (!isClient) return; // Säkerhetskontroll

  try {
    const valueToString = JSON.stringify(value);
    localStorage.setItem(key, valueToString);
  } catch (error) {
    console.error("Error saving to LocalStorage", error);
  }
};

export const loadFromLocalStorage = (key: string) => {
  if (!isClient) return undefined; // Säkerhetskontroll

  try {
    const getValue = localStorage.getItem(key);
    if (getValue === null) return undefined;
    return JSON.parse(getValue);
  } catch (error) {
    console.error("Error loading from localStorage", error);
    return undefined;
  }
};

export const removeFromLocalStorage = (key: string) => {
  if (!isClient) return; // Säkerhetskontroll

  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error("Error removing from localStorage", error);
  }
};
