var docker: Slides = {
  sections: [
    {
      items: [{ type: 'header2', value: 'Vanliga deployment-problem', eng: 'Common deployment problems' }]
    },
    {
      items: [
        { type: 'header2', value: 'Vanliga deployment-problem', eng: 'Common deployment problems' },
        { type: 'text', value: 'Komplicerat att installera', fragment: true, eng: 'Complex installation' },
        { type: 'text', value: 'Manuella steg', fragment: true , eng: 'Manual steps'},
        { type: 'text', value: 'Filkopiering', fragment: true, eng: 'File copying' },
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
        { type: 'header2', value: 'Vad är Docker?',eng:'What is Docker?' },
        {
          type: 'text',
          value: 'Alternativ till Virtual Machine',
          eng: 'Alternative to Virtual Machine',
          fragment: true
        },
        { type: 'text', value: 'App-virtualisering', fragment: true, eng: 'App-virtualization' },
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
        { type: 'header2', value: 'Livet utanför sandboxen', eng: 'Life outside the Sandbox' },
        { type: 'text', value: '4 kommandon till', eng: '4 more commands' },
        { type: 'text', value: 'Push', fragment: true },
        { type: 'text', value: 'Pull', fragment: true },
        { type: 'text', value: 'Port', fragment: true },
        { type: 'text', value: 'Volume', fragment: true }
      ]
    },
    {
      demo: true,
      items: [
        { type: 'header2', value: 'Docker pull & Run' },
        {
          type: 'terminalWide',
          value: 'dockerPullAndRun'
        }
      ]
    }
  ]
}

export { docker }
