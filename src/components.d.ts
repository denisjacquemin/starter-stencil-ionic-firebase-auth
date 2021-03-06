/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface AppEmailpwdSignin {}
  interface AppEmailpwdSignup {}
  interface AppRoot {}
  interface AppSigned {}
  interface AppWelcome {}
}

declare global {


  interface HTMLAppEmailpwdSigninElement extends Components.AppEmailpwdSignin, HTMLStencilElement {}
  var HTMLAppEmailpwdSigninElement: {
    prototype: HTMLAppEmailpwdSigninElement;
    new (): HTMLAppEmailpwdSigninElement;
  };

  interface HTMLAppEmailpwdSignupElement extends Components.AppEmailpwdSignup, HTMLStencilElement {}
  var HTMLAppEmailpwdSignupElement: {
    prototype: HTMLAppEmailpwdSignupElement;
    new (): HTMLAppEmailpwdSignupElement;
  };

  interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {}
  var HTMLAppRootElement: {
    prototype: HTMLAppRootElement;
    new (): HTMLAppRootElement;
  };

  interface HTMLAppSignedElement extends Components.AppSigned, HTMLStencilElement {}
  var HTMLAppSignedElement: {
    prototype: HTMLAppSignedElement;
    new (): HTMLAppSignedElement;
  };

  interface HTMLAppWelcomeElement extends Components.AppWelcome, HTMLStencilElement {}
  var HTMLAppWelcomeElement: {
    prototype: HTMLAppWelcomeElement;
    new (): HTMLAppWelcomeElement;
  };
  interface HTMLElementTagNameMap {
    'app-emailpwd-signin': HTMLAppEmailpwdSigninElement;
    'app-emailpwd-signup': HTMLAppEmailpwdSignupElement;
    'app-root': HTMLAppRootElement;
    'app-signed': HTMLAppSignedElement;
    'app-welcome': HTMLAppWelcomeElement;
  }
}

declare namespace LocalJSX {
  interface AppEmailpwdSignin {}
  interface AppEmailpwdSignup {}
  interface AppRoot {}
  interface AppSigned {}
  interface AppWelcome {}

  interface IntrinsicElements {
    'app-emailpwd-signin': AppEmailpwdSignin;
    'app-emailpwd-signup': AppEmailpwdSignup;
    'app-root': AppRoot;
    'app-signed': AppSigned;
    'app-welcome': AppWelcome;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'app-emailpwd-signin': LocalJSX.AppEmailpwdSignin & JSXBase.HTMLAttributes<HTMLAppEmailpwdSigninElement>;
      'app-emailpwd-signup': LocalJSX.AppEmailpwdSignup & JSXBase.HTMLAttributes<HTMLAppEmailpwdSignupElement>;
      'app-root': LocalJSX.AppRoot & JSXBase.HTMLAttributes<HTMLAppRootElement>;
      'app-signed': LocalJSX.AppSigned & JSXBase.HTMLAttributes<HTMLAppSignedElement>;
      'app-welcome': LocalJSX.AppWelcome & JSXBase.HTMLAttributes<HTMLAppWelcomeElement>;
    }
  }
}


