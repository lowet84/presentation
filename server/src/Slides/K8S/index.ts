import { intro } from './intro'
import { docker } from './docker'
import { dockerBuild } from './dockerActions'

var commands: { [index: string]: Action[] } = { dockerBuild }

var slides = [intro, docker]

export { slides, commands }
