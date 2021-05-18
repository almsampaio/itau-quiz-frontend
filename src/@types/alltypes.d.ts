import { AriaAttributes, DOMAttributes } from 'react';
import { RegisterOptions } from 'react-hook-form';

declare module 'react-router-dom';

declare module 'react' {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    register?: RegisterOptions;
  }
}
