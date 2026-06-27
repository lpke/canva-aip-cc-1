import type { CanvasElementData } from './types';

type InspectorProps = {
  element?: CanvasElementData;
  onChange: (changes: Partial<CanvasElementData>) => void;
};

export default function Inspector({ element, onChange }: InspectorProps) {
  return (
    <aside className="w-64 shrink-0 border-l border-slate-300 bg-white p-4">
      <h2 className="font-semibold text-slate-900">Selection</h2>
      {!element ? (
        <p className="mt-2 text-sm text-slate-500">Select an element.</p>
      ) : (
        <div className="mt-4 flex flex-col gap-4">
          <label className="flex flex-col gap-1 text-sm font-medium text-slate-900">
            Color
            <input
              type="color"
              value={element.color}
              onChange={(event) => onChange({ color: event.target.value })}
              className="h-10 w-full cursor-pointer rounded border border-slate-300 text-base focus:border-slate-700 focus:outline-none"
            />
          </label>
          {element.type === 'text' && (
            <label className="flex flex-col gap-1 text-sm font-medium text-slate-900">
              Text
              <input
                value={element.text ?? ''}
                onChange={(event) => onChange({ text: event.target.value })}
                className="rounded border border-slate-300 px-3 py-2 text-base focus:border-slate-700 focus:outline-none"
              />
            </label>
          )}
        </div>
      )}
    </aside>
  );
}
