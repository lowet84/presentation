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
      - image: lowet84/k8s2019-demo:amd64
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
        visible: true
      }
    ]
  },
  {
    displayName: 'kubectl get deploy',
    commands: [{ command: 'kubectl get deploy', visible: true }]
  }
]
var service: Action[] = [
  {
    displayName: 'cat service.yaml',
    commands: [
      { command: 'mkdir -p example2', visible: false },
      {
        command: `cd example2 && ${fileLines(
          `
kind: Service
apiVersion: v1
metadata:
  name: demo-service
spec:
  selector:
    name: demo-app
  ports:
    - protocol: TCP
      port: 3000
      name: web
              `,
          'service.yaml'
        )} `,
        visible: false
      },
      { command: 'cd example2 && cat service.yaml', visible: true }
    ]
  },
  {
    displayName: 'kubectl apply -f service.yaml',
    commands: [
      {
        command: 'cd example2 && kubectl delete -f service.yaml',
        visible: false
      },
      {
        command: 'cd example2 && kubectl apply -f service.yaml',
        visible: true
      }
    ]
  },
  {
    displayName: 'kubectl get svc',
    commands: [{ command: 'kubectl get svc', visible: true }]
  }
]
var ingress: Action[] = [
  {
    displayName: 'cat ingress.yaml',
    commands: [
      { command: 'mkdir -p example2', visible: false },
      {
        command: `cd example2 && ${fileLines(
          `
apiVersion: extensions/v1beta1
kind: Ingress
metadata:
  name: demo-ingress
spec:
  rules:
  - host: k8sdemo.duckdns.org
    http:
      paths:
      - backend:
          serviceName: demo-service
          servicePort: 3000
              `,
          'ingress.yaml'
        )} `,
        visible: false
      },
      { command: 'cd example2 && cat ingress.yaml', visible: true }
    ]
  },
  {
    displayName: 'kubectl apply -f ingress.yaml',
    commands: [
      {
        command: 'cd example2 && kubectl delete -f ingress.yaml',
        visible: false
      },
      {
        command: 'cd example2 && kubectl apply -f ingress.yaml',
        visible: true
      }
    ]
  },
  {
    displayName: 'kubectl get ing',
    commands: [{ command: 'kubectl get ing', visible: true }]
  }
]

export { deployment, service, ingress }
