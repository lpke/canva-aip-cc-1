import { useMemo, useState } from 'react';
import Canvas from '../editor/Canvas';
import Inspector from '../editor/Inspector';
import Toolbar from '../editor/Toolbar';
import type { CanvasElementData, ElementType } from '../editor/types';

export default function HomePage() {
  const [elements, setElements] = useState<CanvasElementData[]>([]);
  const [selectedId, setSelectedId] = useState<string>();

  const selectedElement = useMemo(
    () => elements.find((element) => element.id === selectedId),
    [elements, selectedId],
  );

  function addElement(type: ElementType) {
    const id = crypto.randomUUID();
    const element: CanvasElementData = {
      id,
      type,
      x: 80 + elements.length * 16,
      y: 80 + elements.length * 16,
      width: type === 'box' ? 160 : 220,
      height: type === 'box' ? 120 : 56,
      color: type === 'box' ? '#2563eb' : '#0f172a',
      text: type === 'text' ? 'Text' : undefined,
    };

    setElements((currentElements) => [...currentElements, element]);
    setSelectedId(id);
  }

  function updateElement(id: string, changes: Partial<CanvasElementData>) {
    setElements((currentElements) =>
      currentElements.map((element) =>
        element.id === id ? { ...element, ...changes } : element,
      ),
    );
  }

  return (
    <div className="flex min-h-screen bg-slate-200 text-slate-900">
      <Toolbar
        onAddBox={() => addElement('box')}
        onAddText={() => addElement('text')}
      />
      <Canvas
        elements={elements}
        selectedId={selectedId}
        onSelect={setSelectedId}
        onChange={updateElement}
      />
      <Inspector
        element={selectedElement}
        onChange={(changes) => selectedId && updateElement(selectedId, changes)}
      />
    </div>
  );
}
