import { intro } from './intro'
import { docker } from './docker'
import * as allCommands from './dockerActions'

var commands: { [index: string]: Action[] } = { ...allCommands }

var slides = [intro, docker]

export { slides, commands }
