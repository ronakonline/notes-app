var fs = require('fs');
const chalk = require('chalk');

const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicate = notes.filter((note) => note.title === title)

    if (duplicate == 0) {
        notes.push({
            title: title,
            body: body
        })

        saveNotes(notes)
        console.log(chalk.green.inverse('Note Added!'))
    } else {
        console.log(chalk.red.inverse('Title Already exists!'))
    }

}

const removeNote = (title) => {
    const notes = loadNotes()
    const notetokeep = notes.filter((note) => note.title != title)
    if (notes.length == notetokeep.length) {
        console.log(chalk.red.inverse('Note not Found!'))
    } else {
        console.log(chalk.green.inverse('Note Removed!'))
    }
    saveNotes(notetokeep)

}

const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.green.inverse.bold('Your Notes'))
    notes.forEach((note) => console.log(note.title))
}

const readNote = (title) => {
    const notes = loadNotes()
    const findnote = notes.find((note) => note.title === title)

    debugger

    if (findnote) {
        console.log(chalk.green(findnote.title))
        console.log(findnote.body)
    } else {
        console.log(chalk.red.inverse('Note not found!'))
    }

}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try {
        const databuffer = fs.readFileSync('notes.json')
        const dataJSON = databuffer.toString()
        const data = JSON.parse(dataJSON)
        return data
    } catch (e) {
        return []
    }
}

const getNotes = () => {
    console.log('notes')
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}