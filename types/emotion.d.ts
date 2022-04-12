import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      primary: string;
      secondary: string;
      background: string;
      accent: string;
      gradient: string;
      horizontalRule: string;
      brightMagenta: string;
      brightSkyBlue: string;
    };
    colorModeTransition: string;
    breakpoints: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
    fonts: {
      inter: string;
    };
  }
}
