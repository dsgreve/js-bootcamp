const notes = [ 
    {
        title: 'My next trip',
        body: 'I would like to go to Spain',
        product: 'car'
    },
    {
        title: 'Habits to work on',
        body: 'Excercise. Sleep. Clean Eating',
        product: 'car'
    },
    {
        title: ' modifications',
        body: 'New monitor, desktop computer, white board',
        product: 'bike'
    }
]

const findNote = function(notes, noteTitle){
    return notes.find(function(note, index) {
        return note.title.toLowerCase() === noteTitle.toLowerCase()
    })
}

// const findNote = function(notes, noteTitle){
//     const index = notes.findIndex(function(note, index) {
//         return note.title.toLowerCase() === noteTitle.toLowerCase()
//     })
//     return notes[index]
// }

const note = findNote(notes, 'Habits to work on')
console.log(note);
