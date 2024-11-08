import type { IReactElement } from '../types/index.ts';

export const createElement = (type: any, props: any, ...children: any[]): IReactElement => {

  return {
    type,
    props: {
      ...props,
      children: children.length <= 1 ? children[0] : children,
    },
    key: props?.key || null,
  };
};

export const iReact = {
  createElement,
};