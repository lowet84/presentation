import { intro } from './intro'
import { docker } from './docker'
import { kubernetes } from './kubernetes'
import * as allCommands from './dockerActions'

var commands: { [index: string]: Action[] } = { ...allCommands }

var slides = [intro, docker, kubernetes]

export { slides, commands }
