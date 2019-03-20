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

var scale: Action[] = [
  {
    displayName: 'scale0',
    commands: [
      {
        visible: false,
        command: ' kubectl scale deploy demo-deployment --replicas=0'
      }
    ]
  },
  {
    displayName: 'scale1',
    commands: [
      {
        visible: false,
        command: ' kubectl scale deploy demo-deployment --replicas=1'
      }
    ]
  },
  {
    displayName: 'scale2',
    commands: [
      {
        visible: false,
        command: ' kubectl scale deploy demo-deployment --replicas=2'
      }
    ]
  },
  {
    displayName: 'scale3',
    commands: [
      {
        visible: false,
        command: ' kubectl scale deploy demo-deployment --replicas=3'
      }
    ]
  },
  {
    displayName: 'scale4',
    commands: [
      {
        visible: false,
        command: ' kubectl scale deploy demo-deployment --replicas=4'
      }
    ]
  },
  {
    displayName: 'scale5',
    commands: [
      {
        visible: false,
        command: ' kubectl scale deploy demo-deployment --replicas=5'
      }
    ]
  },
  {
    displayName: 'scale6',
    commands: [
      {
        visible: false,
        command: ' kubectl scale deploy demo-deployment --replicas=6'
      }
    ]
  },
  {
    displayName: 'scale7',
    commands: [
      {
        visible: false,
        command: ' kubectl scale deploy demo-deployment --replicas=7'
      }
    ]
  },
  {
    displayName: 'scale8',
    commands: [
      {
        visible: false,
        command: ' kubectl scale deploy demo-deployment --replicas=8'
      }
    ]
  },
  {
    displayName: 'scale9',
    commands: [
      {
        visible: false,
        command: ' kubectl scale deploy demo-deployment --replicas=9'
      }
    ]
  },
  {
    displayName: 'scale10',
    commands: [
      {
        visible: false,
        command: ' kubectl scale deploy demo-deployment --replicas=10'
      }
    ]
  },
  {
    displayName: 'scale11',
    commands: [
      {
        visible: false,
        command: ' kubectl scale deploy demo-deployment --replicas=11'
      }
    ]
  },
  {
    displayName: 'scale12',
    commands: [
      {
        visible: false,
        command: ' kubectl scale deploy demo-deployment --replicas=12'
      }
    ]
  },
  {
    displayName: 'scale13',
    commands: [
      {
        visible: false,
        command: ' kubectl scale deploy demo-deployment --replicas=13'
      }
    ]
  },
  {
    displayName: 'scale14',
    commands: [
      {
        visible: false,
        command: ' kubectl scale deploy demo-deployment --replicas=14'
      }
    ]
  },
  {
    displayName: 'scale15',
    commands: [
      {
        visible: false,
        command: ' kubectl scale deploy demo-deployment --replicas=15'
      }
    ]
  },
  {
    displayName: 'scale16',
    commands: [
      {
        visible: false,
        command: ' kubectl scale deploy demo-deployment --replicas=16'
      }
    ]
  },
  {
    displayName: 'scale17',
    commands: [
      {
        visible: false,
        command: ' kubectl scale deploy demo-deployment --replicas=17'
      }
    ]
  },
  {
    displayName: 'scale18',
    commands: [
      {
        visible: false,
        command: ' kubectl scale deploy demo-deployment --replicas=18'
      }
    ]
  },
  {
    displayName: 'scale19',
    commands: [
      {
        visible: false,
        command: ' kubectl scale deploy demo-deployment --replicas=19'
      }
    ]
  },
  {
    displayName: 'scale10',
    commands: [
      {
        visible: false,
        command: ' kubectl scale deploy demo-deployment --replicas=20'
      }
    ]
  }
]

export { deployment, service, ingress, scale }
