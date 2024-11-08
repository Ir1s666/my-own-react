declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any;
    }
  }
}

export type IReactElement = {
  type: any;
  props: any;
  key: string | null;
}; 