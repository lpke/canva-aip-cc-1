import CanvasElement from './CanvasElement';
import type { CanvasElementData } from './types';

type CanvasProps = {
  elements: CanvasElementData[];
  selectedId?: string;
  onSelect: (id?: string) => void;
  onChange: (id: string, changes: Partial<CanvasElementData>) => void;
};

export default function Canvas({
  elements,
  selectedId,
  onSelect,
  onChange,
}: CanvasProps) {
  return (
    <section className="flex min-w-0 flex-1 items-center justify-center bg-slate-200 p-6">
      <div
        onPointerDown={() => onSelect(undefined)}
        className="relative h-[560px] w-[900px] overflow-hidden border border-slate-300 bg-white"
      >
        {elements.map((element) => (
          <CanvasElement
            key={element.id}
            element={element}
            isSelected={element.id === selectedId}
            onSelect={() => onSelect(element.id)}
            onChange={(changes) => onChange(element.id, changes)}
          />
        ))}
      </div>
    </section>
  );
}
