

const theme = {
  colors: {
    primary: "#141819",
    secondary: "#00A8CD",
    text: "#f5f5f5",
    background: "#141819",
    hashtag: "#E34F26",
  },
  fonts: {
    primary: "'Roboto', sans-serif",
  },
  paddings: {
    section: "4.375rem",
  },
};

export const toggleTheme = (value: boolean) => {
  if (value) {
    theme.colors.text = "#000000";
    theme.colors.background = "#ffffff";
  } else {
    theme.colors.text = "#f5f5f5";
    theme.colors.background = "#141819";
  }
};

toggleTheme(false);

export default theme;
