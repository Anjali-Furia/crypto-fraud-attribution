import React, { useEffect, useRef } from 'react';
import { Network, Options, Node, Edge } from 'vis-network';
import { GraphNode, GraphEdge } from '../../types';
import { GitBranch, Maximize2, RefreshCw } from 'lucide-react';

interface FundFlowGraphProps {
  nodes: GraphNode[];
  edges: GraphEdge[];
}

export const FundFlowGraph: React.FC<FundFlowGraphProps> = ({ nodes, edges }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const networkRef = useRef<Network | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const formattedNodes: Node[] = nodes.map((n) => {
      let color = '#3b82f6'; // Victim blue
      let shape = 'dot';
      let border = '#1d4ed8';

      if (n.group === 'suspect') {
        color = '#ef4444'; // Red
        border = '#b91c1c';
      } else if (n.group === 'intermediary') {
        color = '#f59e0b'; // Amber
        border = '#d97706';
      } else if (n.group === 'vasp') {
        color = '#10b981'; // Green
        border = '#047857';
        shape = 'diamond';
      }

      return {
        id: n.id,
        label: n.label,
        shape: shape,
        size: n.group === 'vasp' ? 30 : 24,
        font: { color: '#ffffff', size: 12, face: 'monospace' },
        color: {
          background: color,
          border: border,
          highlight: { background: color, border: '#ffffff' }
        },
        borderWidth: 3
      };
    });

    const formattedEdges: Edge[] = edges.map((e, idx) => ({
      id: `edge_${idx}`,
      from: e.from,
      to: e.to,
      label: e.label,
      arrows: 'to',
      font: { color: '#fbbf24', size: 10, align: 'top', background: '#090d16' },
      color: { color: '#475569', highlight: '#3b82f6' },
      width: 2,
      smooth: { enabled: true, type: 'cubicBezier', roundness: 0.5 }
    }));

    const options: Options = {
      nodes: {
        shadow: true
      },
      edges: {
        shadow: true
      },
      physics: {
        stabilization: true,
        barnesHut: {
          gravitationalConstant: -3000,
          springLength: 140
        }
      },
      interaction: {
        hover: true,
        zoomView: true,
        dragView: true
      }
    };

    networkRef.current = new Network(containerRef.current, { nodes: formattedNodes, edges: formattedEdges }, options);

    return () => {
      if (networkRef.current) {
        networkRef.current.destroy();
      }
    };
  }, [nodes, edges]);

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-2xl">
      <div className="p-4 border-b border-slate-800 flex items-center justify-between bg-slate-950/60">
        <div className="flex items-center space-x-2">
          <GitBranch className="w-4 h-4 text-amber-400" />
          <h3 className="text-xs font-bold uppercase tracking-wider text-white">Visual Multi-Hop Fund-Flow Graph</h3>
        </div>
        <div className="flex items-center space-x-3 text-[11px]">
          <div className="flex items-center space-x-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
            <span className="text-slate-400">Victim</span>
          </div>
          <div className="flex items-center space-x-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500"></span>
            <span className="text-slate-400">Suspect</span>
          </div>
          <div className="flex items-center space-x-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
            <span className="text-slate-400">Intermediary</span>
          </div>
          <div className="flex items-center space-x-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
            <span className="text-slate-300 font-bold">Exchange / VASP</span>
          </div>
        </div>
      </div>

      <div ref={containerRef} className="h-[360px] w-full bg-slate-950 relative">
        <div className="absolute bottom-3 right-3 text-[10px] text-slate-500 bg-slate-900/90 px-3 py-1 rounded border border-slate-800 pointer-events-none">
          Click nodes to inspect wallet details • Drag to reposition
        </div>
      </div>
    </div>
  );
};
