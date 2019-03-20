import { intro } from './intro'
import { docker } from './docker'
import { kubernetes } from './kubernetes'
import { conclusion } from './conclusion'
import { reset } from './reset'

import * as dockerCommands from './dockerActions'
import * as kubernetesActions from './kubernetesActions'
import * as resetActions from './resetActions'

var commands: { [index: string]: Action[] } = {
  ...dockerCommands,
  ...kubernetesActions,
  ...resetActions
}

var slides = [reset, intro, docker, kubernetes, conclusion]

export { slides, commands }
