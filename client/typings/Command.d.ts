declare interface Action{
    displayName: string
    commands: {command: string, visible: boolean}[]
}