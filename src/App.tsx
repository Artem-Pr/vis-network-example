import React, { useEffect, useRef } from 'react'
import { Network } from 'vis-network/standalone/umd/vis-network.min'

function App() {
  const networkRef = useRef(null)

  useEffect(() => {
    const nodes = [
      { id: 1, label: 'Node 1' },
      { id: 2, label: 'Node 2' },
      { id: 3, label: 'Node 3' },
      { id: 4, label: 'Node 4' },
      { id: 5, label: 'Node 5' }
    ]

    const edges = [
      { from: 1, to: 3 },
      { from: 1, to: 2 },
      { from: 2, to: 4 },
      { from: 2, to: 5 },
      { from: 3, to: 3 }
    ]

    const data = {
      nodes: nodes,
      edges: edges
    }
    const options = {}

    const container: HTMLElement | null = networkRef.current
    container && new Network(container, data, options)
  }, [])

  return <div className="App" ref={networkRef} />
}

export default App
