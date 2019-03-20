var reset: Action[] = [
  {
    displayName: 'kubectl get pods',
    commands: [{ visible: true, command: 'kubectl get pods' }]
  },
  {
    displayName: 'kubectl get nodes',
    commands: [{ visible: true, command: 'kubectl get nodes' }]
  },
  {
    displayName: 'docker ps',
    commands: [{ visible: true, command: 'docker ps' }]
  },
  {
    displayName: 'kubectl get all',
    commands: [{ visible: true, command: 'kubectl get all' }]
  },
  {
    displayName: 'docker rm -f $(docker ps -a -q)',
    commands: [{ visible: true, command: 'docker rm -f $(docker ps -a -q)' }]
  },
  {
    displayName: 'docker system prune -f',
    commands: [{ visible: true, command: 'docker system prune -f' }]
  },
  {
    displayName: 'kubectl delete ing/demo-ingress',
    commands: [{ visible: true, command: 'kubectl delete ing/demo-ingress' }]
  },
  {
    displayName: 'kubectl delete svc/demo-service',
    commands: [{ visible: true, command: 'kubectl delete svc/demo-service' }]
  },
  {
    displayName: 'kubectl delete deploy/demo-deployment',
    commands: [
      { visible: true, command: 'kubectl delete deploy/demo-deployment' }
    ]
  }
]

export { reset }

// { command: [{ value: 'kubectl get pods ' }] },
// { command: [{ value: 'kubectl get nodes ' }] },
// { command: [{ value: 'docker ps' }] },
// { command: [{ value: 'kubectl get all' }] },
// { command: [{ value: 'docker rm -f docker-demo' }] },
// { command: [{ value: 'docker rm -f example2' }] },
// { command: [{ value: 'docker rmi -f docker-demo' }] },
// { command: [{ value: 'docker system prune -f' }] },
// { command: [{ value: 'kubectl delete ing/demo-ingress' }] },
// { command: [{ value: 'kubectl delete svc/demo-service' }] },
// { command: [{ value: 'kubectl delete deploy/demo-deployment' }] },
// { command: [{ value: 'kubectl get pods ' }] },
