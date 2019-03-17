import { fileLines } from '../../util'

var dockerBuild: Action[] = [
  {
    displayName: 'cat index.js',
    commands: [
      { command: 'mkdir -p example1', visible: false },
      {
        command:
          "cd example1 && echo \"console.log('Running demo-application on host: ' + require('fs').readFileSync('/etc/hostname','utf8'))\" > index.js",
        visible: false
      },
      { command: 'cd example1 && cat index.js', visible: true }
    ]
  },
  {
    displayName: 'node index.js',
    commands: [{ command: 'cd example1 && node index.js', visible: true }]
  },
  {
    displayName: 'cat Dockerfile',
    commands: [
      {
        command: `cd example1 && ${fileLines(
          `
FROM node:11-alpine
RUN mkdir /app
ADD index.js /app/index.js
CMD node /app/index.js
              `,
          'Dockerfile'
        )} `,
        visible: false
      },
      { command: 'cd example1 && cat Dockerfile', visible: true }
    ]
  },
  {
    displayName: 'docker build -t docker-demo .',
    commands: [
      {
        command: 'cd example1 && docker build -t docker-demo .',
        visible: false
      }
    ]
  },
  {
    displayName: 'docker run docker-demo',
    commands: [
      {
        command: 'cd example1 && docker run --hostname=container docker-demo',
        visible: false
      }
    ]
  }
]

var dockerPullAndRun: Action[] = [
  {
    displayName: 'docker pull lowet84/k8s2019-port-volume-demo',
    commands: [
      { command: 'docker pull lowet84/k8s2019-port-volume-demo', visible: true }
    ]
  },
  {
    displayName: 'docker run -d -p 3000:3000 lowet84/k8s2019-port-volume-demo',
    commands: [
      {
        command: 'docker rm -f example',
        visible: false
      },
      {
        command:
          'docker run -d -p 3000:3000 --name example lowet84/k8s2019-port-volume-demo',
        visible: true
      }
    ]
  },
  {
    displayName: 'curl http://localhost:3000',
    commands: [{ command: 'curl http://localhost:3000', visible: true }]
  },
  {
    displayName:
      'docker run -d -p 3000:3000 -v /etc/hostname:/etc/hostname lowet84/k8s2019-port-volume-demo',
    commands: [
      {
        command: 'docker rm -f example',
        visible: false
      },
      {
        command:
          'docker run -d -p 3000:3000 -v /etc/hostname:/etc/hostname --name example lowet84/k8s2019-port-volume-demo',
        visible: true
      }
    ]
  },
  {
    displayName: 'curl http://localhost:3000',
    commands: [{ command: 'curl http://localhost:3000', visible: true }]
  }
]

export { dockerBuild, dockerPullAndRun }
