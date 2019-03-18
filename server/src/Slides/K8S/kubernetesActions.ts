import { fileLines } from '../../util'

var deployment: Action[] = [
  {
    displayName: 'cat deployment.yaml',
    commands: [
      { command: 'mkdir -p example2', visible: false },
      {
        command: `cd example2 && ${fileLines(
          `
kind: Deployment
apiVersion: extensions/v1beta1
metadata:
  name: demo-deployment
spec:
  replicas: 1
  template:
    metadata:
      labels:
        name: demo-app
    spec:
      containers:
      - image: lowet84/k8s2019-demo:arm
        imagePullPolicy: Always
        name: demo
        volumeMounts:
        - mountPath: /etc/hostname
          name: hostname
      volumes:
      - name: hostname
        hostPath:
          path: /etc/hostname
              `,
          'deployment.yaml'
        )} `,
        visible: false
      },
      { command: 'cd example2 && cat deployment.yaml', visible: true }
    ]
  },
  {
    displayName: 'kubectl apply -f deployment.yaml',
    commands: [
      {
        command: 'cd example2 && kubectl delete -f deployment.yaml',
        visible: false
      },
      {
        command: 'cd example2 && kubectl apply -f deployment.yaml',
        visible: false
      }
    ]
  },
  {
    displayName: 'kubectl get deploy',
    commands: [{ command: 'kubectl get deploy', visible: false }]
  }
]
var service: Action[] = []
var ingress: Action[] = []

export { deployment, service, ingress }
