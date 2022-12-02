import {Command, Flags} from '@oclif/core'

export default class Pokepedia extends Command {
  static description = 'DO something on pokepedia'

  static examples = [
    `$ oex pokepedia
Let's do something on pokepedia! (./src/commands/pokepedia/index.ts)
`,
  ]

  static flags = {
    with: Flags.string({char: 'f', description: 'Who wants to do something', required: false, default: "you"}),
  }

  //static args = [{name: 'person', description: 'Person to say hello to', required: true}]

  async run(): Promise<void> {
    const {args, flags} = await this.parse(Pokepedia)

    this.log(`Let's do something on pokepedia with ${flags.with}! (./src/commands/pokepedia/index.ts)`)
  }
}
