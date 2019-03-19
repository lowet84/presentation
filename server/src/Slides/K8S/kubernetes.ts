var kubernetes: Slides = {
  sections: [
    {
      items: [{ type: 'header3', value: 'Det börjar bli trångt...' }]
    },
    {
      items: [
        { type: 'header3', value: 'Det börjar bli trångt...' },
        { type: 'imageL', value: 'potato.jpg' }
      ]
    },
    {
      items: [
        { type: 'header3', value: 'Det börjar bli trångt...' },
        { type: 'imageL', value: 'server.jpg' }
      ]
    },
    {
      items: [
        { type: 'header3', value: 'Det börjar bli trångt...' },
        { type: 'imageL', value: 'room.jpg' }
      ]
    },
    {
      items: [
        { type: 'header3', value: 'Det börjar bli trångt...' },
        { type: 'imageL', value: 'facebook.jpg' }
      ]
    },
    {
      items: [
        { type: 'imageBar', value: 'actual-potato.png;arrow.png;lule.png' }
      ]
    },
    {
      items: [
        { type: 'header3', value: 'Kubernetes' },
        { type: 'imageL', value: 'k8s.png' }
      ]
    },
    {
      items: [
        { type: 'header3', value: 'Kubernetes' },
        { type: 'text', value: 'Orkestrerings-plattform' },
        { type: 'text', value: 'Startad av Google', fragment: true },
        { type: 'text', value: 'Skalbarhet', fragment: true },
        { type: 'text', value: 'Pålitlighet', fragment: true }
      ]
    },
    {
      items: [
        { type: 'header3', value: 'Kubernetes - struktur' },
        { type: 'text', value: 'Master' },
        { type: 'text', value: 'Node', fragment: true },
        { type: 'text', value: 'Network layer', fragment: true }
      ]
    },
    {
      items: [
        { type: 'header3', value: 'Kubernetes - struktur' },
        { type: 'imageL', value: 'master-node.png' }
      ]
    },
    {
      items: [
        { type: 'header3', value: 'Kubernetes - delar' },
        { type: 'text', value: 'Pod' },
        { type: 'text', value: 'Deployment', fragment: true },
        { type: 'text', value: 'Service', fragment: true },
        { type: 'text', value: 'Ingress', fragment: true }
      ]
    },
    {
      items: [
        { type: 'header3', value: 'Kubernetes - delar' },
        { type: 'imageL', value: 'k8s-overview.png' }
      ]
    },
    {
      demo: true,
      items: [
        { type: 'header2', value: 'Deployment' },
        {
          type: 'terminalWide',
          value: 'deployment'
        }
      ]
    },
    {
      demo: true,
      items: [
        { type: 'header2', value: 'Service' },
        {
          type: 'terminalWide',
          value: 'service'
        }
      ]
    },
    {
      demo: true,
      items: [
        { type: 'header2', value: 'Ingress' },
        {
          type: 'terminalWide',
          value: 'ingress'
        }
      ]
    }
  ]
}

export { kubernetes }
