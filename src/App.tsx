import React, { useEffect, useRef } from 'react'
import { Network } from 'vis-network/standalone/umd/vis-network.min'
import { Options } from 'vis-network/dist/types'

import { data } from './common/resorces'

function App() {
  const networkRef = useRef(null)

  useEffect(() => {
    const container: HTMLElement | null = networkRef.current
    if (!container) return

    const commonOptions: Options = {
      interaction: {
        hover: true
      },
      nodes: {
        shadow: true,
        borderWidth: 2,
        size: 20,
        shape: 'dot',
        scaling: {
          label: {
            min: 8,
            max: 20
          }
        },
        // title: 'node',
        font: {
          // color: '#ffffff',
          face: 'Walter Turncoat',
          size: 16,
          strokeWidth: 1,
          strokeColor: '#222'
        }
      },
      edges: {
        arrows: {
          to: {
            enabled: true,
            scaleFactor: 0.5 // Enable this to make the endpoints smaller/larger
          }
        },
        color: {
          color: '#CCC',
          highlight: '#A22'
        },
        width: 2,
        // length: 25, // arrows length
        hoverWidth: 2
      },
      physics: {
        stabilization: false, // initial stabilization
        barnesHut: {
          springLength: 25 // arrows length
        }
      }
    }

    const options = {
      joinCondition: function (nodeOptions: any) {
        return nodeOptions.cid === 1
      }
    }

    // const focusOptions: FocusOptions = {
    //   scale: 1.5,
    //   animation: {
    //     duration: 500,
    //     easingFunction: 'easeInOutQuad'
    //   }
    // }

    const network = new Network(container, data, commonOptions)
    network.cluster(options)

    // network.on('click', function (params) {
    //   if (params.nodes.length === 1) {
    //     network.focus(params.nodes[0], focusOptions)
    //   }
    // })

    network.on('doubleClick', function (params) {
      if (params.nodes.length === 1) {
        if (network.isCluster(params.nodes[0])) {
          network.openCluster(params.nodes[0], {
            releaseFunction: function (clusterPosition, containedNodesPositions) {
              return containedNodesPositions
            }
          })
        } else {
          network.clusterByConnection(params.nodes[0], {
            processProperties: function (clusterOptions, childNodesOptions) {
              clusterOptions.label = childNodesOptions[0].label + ' [' + childNodesOptions.length + ']'
              return clusterOptions
            }
          })
        }
      }
    })
  }, [])

  return <div id="graph" className="App" ref={networkRef} />
}

export default App
