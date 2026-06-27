import type { PointerEvent } from 'react';
import type { CanvasElementData } from './types';

type CanvasElementProps = {
  element: CanvasElementData;
  isSelected: boolean;
  onSelect: () => void;
  onChange: (changes: Partial<CanvasElementData>) => void;
};

export default function CanvasElement({
  element,
  isSelected,
  onSelect,
  onChange,
}: CanvasElementProps) {
  function startDrag(event: PointerEvent<HTMLDivElement>) {
    if ((event.target as HTMLElement).dataset.resizeHandle) return;

    event.preventDefault();
    event.stopPropagation();
    onSelect();

    const startX = event.clientX;
    const startY = event.clientY;
    const startLeft = element.x;
    const startTop = element.y;

    function move(pointerEvent: globalThis.PointerEvent) {
      onChange({
        x: startLeft + pointerEvent.clientX - startX,
        y: startTop + pointerEvent.clientY - startY,
      });
    }

    window.addEventListener('pointermove', move);
    window.addEventListener(
      'pointerup',
      () => window.removeEventListener('pointermove', move),
      { once: true },
    );
  }

  function startResize(event: PointerEvent<HTMLDivElement>) {
    event.preventDefault();
    event.stopPropagation();
    onSelect();

    const startX = event.clientX;
    const startY = event.clientY;
    const startWidth = element.width;
    const startHeight = element.height;

    function move(pointerEvent: globalThis.PointerEvent) {
      onChange({
        width: Math.max(40, startWidth + pointerEvent.clientX - startX),
        height: Math.max(32, startHeight + pointerEvent.clientY - startY),
      });
    }

    window.addEventListener('pointermove', move);
    window.addEventListener(
      'pointerup',
      () => window.removeEventListener('pointermove', move),
      { once: true },
    );
  }

  return (
    <div
      onPointerDown={startDrag}
      style={{
        left: element.x,
        top: element.y,
        width: element.width,
        height: element.height,
        backgroundColor: element.type === 'box' ? element.color : 'transparent',
        color: element.color,
      }}
      className={`absolute flex items-center justify-center border text-center text-xl select-none ${
        isSelected
          ? 'cursor-move border-blue-950'
          : 'cursor-pointer border-transparent'
      }`}
    >
      {element.type === 'text' ? element.text : null}
      {isSelected && (
        <div
          data-resize-handle
          onPointerDown={startResize}
          className="absolute -right-1.5 -bottom-1.5 h-3 w-3 cursor-nwse-resize rounded-sm border border-blue-950 bg-white"
        />
      )}
    </div>
  );
}
