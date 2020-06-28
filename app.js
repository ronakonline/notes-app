var yargs = require('yargs');
var chalk = require('chalk');
const { completion, string, demandOption, argv } = require('yargs');
const notes = require('./notes.js')

yargs.command({
    command: 'add',
    describe: 'Add a note',
    builder: {
        title: {
            describe: "Title of note",
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: "Body of note",
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => notes.addNote(argv.title, argv.body)
})

yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: "Title of note",
            demandOption: true,
            type: string
        }
    },
    handler: (argv) => notes.removeNote(argv.title)
})

yargs.command({
    command: 'list',
    describe: 'List all notes',
    handler: () => notes.listNotes()
})

yargs.command({
    command: 'read',
    describe: 'Reading notes',
    builder: {
        title: {
            describe: "Title of note",
            demandOption: true,
            type: 'string'
        }
    },
    handler: () => notes.readNote(argv.title)
})

yargs.parse();
//console.log(yargs.argv)