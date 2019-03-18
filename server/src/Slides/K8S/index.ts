import { intro } from './intro'
import { docker } from './docker'
import { kubernetes } from './kubernetes'
import * as dockerCommands from './dockerActions'
import * as kubernetesActions from './kubernetesActions'

var commands: { [index: string]: Action[] } = { ...dockerCommands, ...kubernetesActions }

var slides = [intro, docker, kubernetes]

export { slides, commands }
