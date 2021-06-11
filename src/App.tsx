import React, { useEffect, useRef } from 'react'
import { Network } from 'vis-network/standalone/umd/vis-network.min'
import { Data } from 'vis-network/dist/types'
import { DataInterfaceEdges, Edge } from 'vis-network/dist/types/network/Network'

function App() {
  const networkRef = useRef(null)

  useEffect(() => {
    const container: HTMLElement | null = networkRef.current
    if (!container) return

    const nodes = [
      { id: 1, label: 'Node 1' },
      { id: 2, label: 'Node 2' },
      { id: 3, label: 'Node 3' },
      { id: 4, label: 'Node 4' },
      { id: 5, label: 'Node 5' },
      { id: 6, label: 'Node 6', cid: 1 },
      { id: 7, label: 'Node 7', cid: 1 }
    ]

    const edges: Edge[] | DataInterfaceEdges = [
      {
        from: 1,
        to: 3,
        arrows: {
          to: {
            enabled: true,
            type: 'arrow'
          },
          from: {
            enabled: true,
            type: 'box'
          },
          middle: {
            enabled: true,
            type: 'diamond'
          }
        }
      },
      { from: 1, to: 2 },
      { from: 2, to: 4 },
      { from: 2, to: 5 },
      { from: 3, to: 4 },
      { from: 3, to: 6 },
      { from: 3, to: 7 }
    ]

    const data: Data = {
      nodes: nodes,
      edges: edges
    }

    const commonOptions = {
      // edges: {
      //   arrows: {
      //     to: {
      //       scaleFactor: 5 // Enable this to make the endpoints smaller/larger
      //     }
      //   }
      // },
      physics: {
        stabilization: false, // initial stabilization
        barnesHut: {
          springLength: 100 // arrows length
        }
      }
    }

    const options = {
      joinCondition: function (nodeOptions: any) {
        return nodeOptions.cid === 1
      }
    }

    const network = new Network(container, data, commonOptions)
    network.cluster(options)

    network.on('doubleClick', function (params) {
      if (params.nodes.length === 1) {
        if (network.isCluster(params.nodes[0])) {
          //   is_clicked = false
          network.openCluster(params.nodes[0], {
            releaseFunction: function (clusterPosition, containedNodesPositions) {
              return containedNodesPositions
            }
          })
        }
      }
    })
  }, [])

  return <div className="App" ref={networkRef} />
}

export default App
