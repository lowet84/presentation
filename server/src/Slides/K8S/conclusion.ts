var conclusion: Slides = {
  sections: [
    {
      items: [{ type: 'header1', value: 'Slutsats' }]
    },
    {
      items: [
        { type: 'header2', value: 'Vad är docker?' },
        {
          type: 'text',
          value: 'Alternativ till Virtual Machine',
          eng: 'Alternative to Virtual Machine'
        },
        { type: 'text', value: 'Paketering', eng: 'Packaging' },
        { type: 'text', value: 'Deployment' }
      ]
    },
    {
      items: [
        { type: 'header2', value: 'Kubernetes' },
        {
          type: 'text',
          value: 'Orkestrerings-plattform',
          eng: 'Orchestration platform'
        },
        { type: 'text', value: 'Pod - Service - Ingress' },
        { type: 'text', value: 'Skaling', eng: 'Scaling' }
      ]
    },
    {
      items: [{ type: 'header3', value: 'Frågor?', eng: 'Questions?' }]
    }
  ]
}

export { conclusion }
