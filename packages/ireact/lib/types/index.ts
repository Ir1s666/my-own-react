export namespace JSX {
  export interface Element {
    type: any
    props: any
    key: any
  }

  export interface IntrinsicElements {
    [elemName: string]: any
  }
}

export type IReactElement = any