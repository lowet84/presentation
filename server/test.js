var commands = {
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
  }

var getOne = async () => {
    var item = commands
    if (process.env.MODE !== 'prod') return item.commands.map(d => d.command)
    var results = []
    for (let index = 0; index < item.commands.length; index++) {
      var command = item.commands[index]
      console.log(command.command)
      var { stdout, stderr } = await exec(command.command)
      if (stdout && stdout.length > 0) {
        var lines = stdout.split(/\r?\n/) || []
        for (let lineIndex = 0; lineIndex < lines.length; lineIndex++) {
          var line = lines[lineIndex] || ''
          console.log(line)
          if (line.length > 0) results.push(line)
        }
      }
    }
    return results
}

var run = async ()=>{
    var result = getOne()
    console.log(result)
}

run()