import React, { useEffect, useRef } from 'react'
import { Network, parseDOTNetwork } from 'vis-network/standalone/umd/vis-network.min'

function App() {
  const networkRef = useRef(null)

  useEffect(() => {
    const container: HTMLElement | null = networkRef.current
    if (!container) return

    const dotDefault =
      'digraph {\n' +
      ' // Parent nodes\n' +
      ' lines[label="LINES"]; \n' +
      ' ahs[label="ARROW HEADS"]; \n' +
      '\n' +
      ' // Children nodes\n' +
      ' dot[label="both dot"]; \n' +
      ' vee[label="back vee"]; \n' +
      ' diamond[label="diamond and box"]; \n' +
      '\n' +
      ' // Line styles\n' +
      ' lines -- solid[label="solid pink", color="pink"]; \n' +
      ' lines -- penwidth[label="penwidth=5", penwidth=5]; \n' +
      ' lines -- dashed[label="dashed green", style="dashed", color="green"]; \n' +
      ' lines -- dotted[label="dotted purple", style="dotted", color="purple"]; \n' +
      '\n' +
      ' // Arrowhead styles\n' +
      ' ahs -> box[label="box", arrowhead=box]; \n' +
      ' ahs -> crow[label="crow", arrowhead=crow]; \n' +
      ' ahs -> curve[label="curve", arrowhead=curve]; \n' +
      ' ahs -> icurve[label="icurve", arrowhead=icurve]; \n' +
      ' ahs -> normal[label="normal", arrowhead=normal]; \n' +
      ' ahs -> inv[label="inv", arrowhead=inv]; \n' +
      ' ahs -> diamond[label="diamond and box", dir=both, arrowhead=diamond, arrowtail=box]; \n' +
      ' ahs -> dot[label="both dot", dir=both, arrowhead=dot, arrowtail=dot]; \n' +
      ' ahs -> tee[label="tee", arrowhead=tee]; \n' +
      ' ahs -> vee[label="back vee", dir=back, arrowtail=vee]; \n' +
      '}'

    // const nodes = [
    //   { id: 1, label: 'Node 1' },
    //   { id: 2, label: 'Node 2' },
    //   { id: 3, label: 'Node 3' },
    //   { id: 4, label: 'Node 4' },
    //   { id: 5, label: 'Node 5' },
    //   { id: 6, label: 'Node 6', cid: 1 },
    //   { id: 7, label: 'Node 7', cid: 1 }
    // ]

    // const edges = [
    //   { from: 1, to: 3 },
    //   { from: 1, to: 2 },
    //   { from: 2, to: 4 },
    //   { from: 2, to: 5 },
    //   { from: 3, to: 4 },
    //   { from: 3, to: 6 },
    //   { from: 3, to: 7 }
    // ]

    // const data = {
    //   nodes: nodes,
    //   edges: edges
    // }

    const commonOptions = {
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

    const fullData = parseDOTNetwork(dotDefault)
    const network = new Network(container, fullData, commonOptions)
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
