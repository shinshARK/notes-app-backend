// const { 

//     addNoteHandler, 
//     getAllNotesHandler, 
//     getNoteByIdHandler, 
//     editNoteByIdHandler,
//     deleteNotebyIdHandler

//  } = require('./handler');
 
import {
    addNoteHandler,
    getAllNotesHandler,
    getNoteByIdHandler,
    editNoteByIdHandler,
    deleteNotebyIdHandler
} from './handler.js'

const routes = [
    {
      method: 'POST',
      path: '/notes',
      handler: addNoteHandler,
    },
    {
        method: 'GET',
        path: '/notes',
        handler: getAllNotesHandler,
    },
    {
        method: 'GET',
        path: '/notes/{id}',
        handler: getNoteByIdHandler,
    },
    {
        method: 'PUT',
        path: '/notes/{id}',
        handler: editNoteByIdHandler,
    },
    {
        method: 'DELETE',
        path: '/notes/{id}',
        handler: deleteNotebyIdHandler,
    }
];
    
// module.exports = routes

export default routes