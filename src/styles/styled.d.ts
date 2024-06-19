import 'styled-components'

declare module "styled-components" {
  export interface DefaulTheme {
    title: string;

    colors: {
      primary: string;
      background: string;
      text: string;
    };
  }
}
