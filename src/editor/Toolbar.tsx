type ToolbarProps = {
  onAddBox: () => void;
  onAddText: () => void;
};

export default function Toolbar({ onAddBox, onAddText }: ToolbarProps) {
  return (
    <aside className="flex w-52 shrink-0 flex-col gap-3 border-r border-slate-300 bg-white p-4">
      <h1 className="text-lg font-semibold text-slate-900">Canva Clone</h1>
      <button
        type="button"
        onClick={onAddBox}
        className="rounded border border-transparent bg-blue-950 px-3 py-2 font-medium text-white hover:brightness-120"
      >
        Add box
      </button>
      <button
        type="button"
        onClick={onAddText}
        className="rounded border border-transparent bg-slate-200 px-3 py-2 font-medium text-slate-700 hover:brightness-102"
      >
        Add text
      </button>
    </aside>
  );
}
