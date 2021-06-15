import { Data } from 'vis-network'

export const data: Data = {
  nodes: [
    {
      id: 0,
      label: 'App Service Environment',
      color: '#ffd541',
      title: 'Hi',
      fixed: true
    },
    {
      id: 1,
      label: 'App Service Plan',
      color: '#046069'
      // value: 15
    },
    {
      id: 2,
      label: 'App Service Plan',
      color: '#046069'
      // value: 15
    },
    {
      id: 3,
      label: 'App Service',
      color: '#04c5d9'
      // value: 5
    },
    {
      id: 4,
      label: 'App Service',
      color: '#04c5d9'
      // value: 5
    },
    {
      id: 5,
      label: 'Method'
      // value:4
    },
    {
      id: 6,
      label: 'Method'
      // value:4
    },
    {
      id: 7,
      label: 'Method'
      // value:4
    },
    {
      id: 8,
      label: 'Query',
      color: '#cccccc'
      // value:4
    },
    {
      id: 9,
      label: 'App Service',
      color: '#04c5d9'
      // value: 5
    },
    {
      id: 10,
      label: 'Method'
    },
    {
      id: 11,
      label: 'Method'
    },
    {
      id: 12,
      label: 'Query',
      color: '#cccccc'
      // value:4
    },
    {
      id: 13,
      label: 'Method'
      // value:4
    },
    {
      id: 14,
      label: 'Query',
      color: '#cccccc'
      // value:4
    },
    {
      id: 15,
      label: 'Method'
      // value:4
    }
  ],
  edges: [
    {
      from: 0,
      to: 1,
      color: {
        color: '#ffa6a6',
        highlight: '#f83939',
        hover: '#940909'
      }
    },
    {
      from: 0,
      to: 2,
      color: {
        color: '#ffa6a6',
        highlight: '#f83939',
        hover: '#940909'
      }
    },
    {
      from: 1,
      to: 3,
      color: 'green'
    },
    {
      from: 1,
      to: 4,
      color: 'blue'
    },
    {
      from: 3,
      to: 5,
      color: 'green'
    },
    {
      from: 3,
      to: 6,
      color: 'blue'
    },
    {
      from: 3,
      to: 7,
      color: 'green'
    },
    {
      from: 5,
      to: 8,
      color: 'green'
    },
    {
      from: 2,
      to: 9,
      color: 'green'
    },
    {
      from: 9,
      to: 10,
      color: 'green'
    },
    {
      from: 9,
      to: 11,
      color: 'green'
    },
    {
      from: 11,
      to: 12,
      color: 'green'
    },
    {
      from: 13,
      to: 14,
      color: 'green'
    },
    {
      from: 3,
      to: 9,
      color: 'green'
    },
    {
      from: 9,
      to: 13
      // color: 'green'
    },
    {
      from: 6,
      to: 15
      // color: 'green'
    },
    {
      from: 15,
      to: 8
      // color: 'green'
    }
  ]
}
