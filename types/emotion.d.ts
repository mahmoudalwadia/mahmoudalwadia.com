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
    };
    breakpoints: string[];
    fonts: {
      inter: string;
    };
  }
}
