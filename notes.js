const fs = require('fs')
const chalk = require('chalk')

const getNotes = () => {
    return "Your notes.."
}
const addNote = (title, body) => {
    const notes = loadNotes()
    // const duplicateNotes = notes.filter((note)=> note.title ===title)
    const duplicateNote = notes.find(note => note.title === title)
    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse("New note Added"))
    } else {
        console.log(chalk.red.inverse("Note title taken"))
    }
}
const removeNote = (title) => {
    const notes = loadNotes()
    const notesToKeep = notes.filter((note) => note.title !== title)
    // saveNotes(notesToKeep);
    console.log(notesToKeep)
    if (notes.length > notesToKeep.length) {
        console.log(chalk.bgGreen("Note Removed"))
        saveNotes(notesToKeep);
        // console.log(notesToKeep)
    } else {
        console.log(chalk.red.inverse("No Note Found"))
    }
    // console.log(title)
    // console.log("Remove Note")
}
const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}
const loadNotes = () => {
    try {
        const dataBufefr = fs.readFileSync('notes.json')
        const dataString = dataBufefr.toString()
        return JSON.parse(dataString)
    } catch (error) {
        return []
    }
}
const listNotes = () => {
    const notes = loadNotes()
    console.log("Here is All the Notes You Have")
    var x = 1
    notes.forEach((note) => {
        console.log(chalk.green("=========="+x+"=========="))
        console.log(chalk.blue(note.title) + "\n")
        console.log(chalk.magenta(note.body))
        x++
    });
    // console.log(notes)
}

const readNote = (title) =>{

    const notes = loadNotes();
    const theNote = notes.find(note => note.title === title)
    if(theNote){
    console.log(chalk.blue(theNote.title) + "\n")
    console.log(chalk.magenta(theNote.body))}
    else{
        console.log(chalk.red.inverse("Nothing Found"))
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}