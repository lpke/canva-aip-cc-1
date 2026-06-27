export type ElementType = 'box' | 'text';

export type CanvasElementData = {
  id: string;
  type: ElementType;
  x: number;
  y: number;
  width: number;
  height: number;
  color: string;
  text?: string;
};
