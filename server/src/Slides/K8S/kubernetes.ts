var kubernetes: Slides = {
  sections: [
    {
      items: [{ type: 'header3', value: 'Det börjar bli trångt...', eng: 'It\'s getting crowded...' }]
    },
    {
      items: [
        { type: 'header3', value: 'Det börjar bli trångt...', eng: 'It\'s getting crowded...' },
        { type: 'imageL', value: 'potato.jpg' }
      ]
    },
    {
      items: [
        { type: 'header3', value: 'Det börjar bli trångt...', eng: 'It\'s getting crowded...' },
        { type: 'imageL', value: 'server.jpg' }
      ]
    },
    {
      items: [
        { type: 'header3', value: 'Det börjar bli trångt...', eng: 'It\'s getting crowded...' },
        { type: 'imageL', value: 'room.jpg' }
      ]
    },
    {
      items: [
        { type: 'header3', value: 'Det börjar bli trångt...', eng: 'It\'s getting crowded...' },
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
        { type: 'text', value: 'Orkestrerings-plattform', eng: 'Orchestration-platform' },
        { type: 'text', value: 'Startad av Google', fragment: true, eng: 'Started by Google' },
        { type: 'text', value: 'Skalbarhet', fragment: true, eng: 'Scalability' },
        { type: 'text', value: 'Pålitlighet', fragment: true, eng: 'Reliability' }
      ]
    },
    {
      items: [
        { type: 'header3', value: 'Kubernetes - struktur', eng: 'Kubernetes - structure' },
        { type: 'text', value: 'Master' },
        { type: 'text', value: 'Node', fragment: true },
        { type: 'text', value: 'Network layer', fragment: true }
      ]
    },
    {
      items: [
        { type: 'header3', value: 'Kubernetes - struktur', eng: 'Kubernetes - structure' },
        { type: 'imageL', value: 'master-node.png' }
      ]
    },
    {
      items: [
        { type: 'header3', value: 'Kubernetes - delar', eng: 'Kubernetes - parts' },
        { type: 'text', value: 'Pod' },
        { type: 'text', value: 'Deployment', fragment: true },
        { type: 'text', value: 'Service', fragment: true },
        { type: 'text', value: 'Ingress', fragment: true }
      ]
    },
    {
      items: [
        { type: 'header3', value: 'Kubernetes - delar', eng: 'Kubernetes - parts' },
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
