const todos = [
    { 
        text: 'Dig flower bed',
        completed: true
    }, 
    {
        text: 'put down weed cover',
        completed: false
    },
        text: 'power wash',
        completed: false
    }, 
    {
        text: 'plant veggies',
        completed: false
    },
    {
        text: 'window pots',
        completed: true
    }
];

//1. convert strings to object
//2. create function to remove todo by text value

deleteTodo(todos, 'Power Wash')


console.log(todos)