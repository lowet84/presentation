var docker: Slides = {
  sections: [
    {
      items: [
        {
          type: 'header2',
          value: 'Vanliga deployment-problem',
          eng: 'Common deployment problems'
        }
      ]
    },
    {
      items: [
        {
          type: 'header2',
          value: 'Vanliga deployment-problem',
          eng: 'Common deployment problems'
        },
        {
          type: 'text',
          value: 'Komplicerat att installera',
          fragment: true,
          eng: 'Complex installation'
        },
        {
          type: 'text',
          value: 'Manuella steg',
          fragment: true,
          eng: 'Manual steps'
        },
        {
          type: 'text',
          value: 'Filkopiering',
          fragment: true,
          eng: 'File copying'
        },
        { type: 'text', value: 'Dependency-hell', fragment: true }
      ]
    },
    {
      items: [
        { type: 'text', value: '"Works on my machine"' },
        { type: 'imageL', value: 'works-on-my-machine.jpg' }
      ]
    },
    {
      items: [
        { type: 'header2', value: 'Docker' },
        { type: 'imageL', value: 'docker.svg' }
      ]
    },
    {
      items: [
        { type: 'header2', value: 'Vad är Docker?', eng: 'What is Docker?' },
        {
          type: 'text',
          value: 'Alternativ till Virtual Machine',
          eng: 'Alternative to Virtual Machine',
          fragment: true
        },
        {
          type: 'text',
          value: 'App-virtualisering',
          fragment: true,
          eng: 'App-virtualization'
        },
        { type: 'text', value: 'Sandbox', fragment: true },
        { type: 'text', value: 'Paketering', fragment: true, eng: 'Packaging' },
        { type: 'text', value: 'Deployment', fragment: true }
      ]
    },
    {
      items: [
        { type: 'header2', value: 'Image - Container' },
        { type: 'text', value: 'Class - Object', fragment: true },
        { type: 'imageBar', value: 'class.jpg;object.gif', fragment: true }
      ]
    }
  ]
}

export { docker }
