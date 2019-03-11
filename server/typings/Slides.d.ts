declare interface Slides {
  sections: Section[]
}

declare interface Section {
  items: Item[]
}

declare interface Item {
  value: string
  type: string
  fragment?: boolean
  actions?: { items: Action[]; id: string }
}
