var docker: Slides = {
  sections: [
    {
      items: [{ type: 'header2', value: 'Vanliga deployment-problem' }]
    },
    {
      items: [
        { type: 'header2', value: 'Vanliga deployment-problem' },
        { type: 'text', value: 'Komplicerat att installera', fragment: true },
        { type: 'text', value: 'Manuella steg', fragment: true },
        { type: 'text', value: 'Filkopiering', fragment: true },
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
        { type: 'header2', value: 'Vad är Docker?' },
        {
          type: 'text',
          value: 'Alternativ till Virtual Machine',
          fragment: true
        },
        { type: 'text', value: 'App-virtualisering', fragment: true },
        { type: 'text', value: 'Sandbox', fragment: true },
        { type: 'text', value: 'Paketering', fragment: true },
        { type: 'text', value: 'Deployment', fragment: true }
      ]
    },
    {
      items: [
        { type: 'header2', value: 'Image - Container' },
        { type: 'text', value: 'Class - Object', fragment: true },
        { type: 'imageBar', value: 'class.jpg;object.gif', fragment: true }
      ]
    },
    {
      items: [
        { type: 'header2', value: 'Dockerfile' },
        { type: 'text', value: 'FROM', fragment: true },
        { type: 'text', value: 'ADD', fragment: true },
        { type: 'text', value: 'RUN', fragment: true },
        { type: 'text', value: 'CMD', fragment: true }
      ]
    },
    {
      demo: true,
      items: [
        { type: 'header2', value: 'Docker build' },
        { type: 'header5', value: 'index.js' },
        {
          type: 'header6',
          value:
            "console.log('Running demo-application on host: ' + require('fs').readFileSync('/etc/hostname','utf8'))"
        },
        {
          type: 'terminalWide',
          value: 'dockerBuild'
        }
      ]
    },
    {
      items: [
        { type: 'header2', value: 'Livet utanför sandboxen' },
        { type: 'text', value: '4 kommandon till' },
        { type: 'text', value: 'Push', fragment: true },
        { type: 'text', value: 'Pull', fragment: true },
        { type: 'text', value: 'Port', fragment: true },
        { type: 'text', value: 'Volume', fragment: true }
      ]
    }
    // Demo docker 2
  ]
}

export { docker }
