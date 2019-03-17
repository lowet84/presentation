declare interface Slides {
  sections: Section[]
}

declare interface Section {
  items: Item[]
  demo?: boolean
}

declare interface Item {
  value: string
  type: string
  fragment?: boolean
  actions?: Action[]
}
