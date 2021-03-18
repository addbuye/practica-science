let express = require('express')
let science = require('../data/science')




let controller = {
    main:  (req, res) => {
        res.send (science.lista)
    },
    detalle:  (req, res) => {
        let id = req.params.id;
        if (science.lista[id] !== null) {
           res.send (`Hola mi nombre es ${science.lista[id].name} y mi profesión es ${ science.lista[id].profession}`);
        } else {
            res.send ("no econtrmos al cientifico indicado porfavor seleccione a otro");
        }
    },
    bio: (req, res) => {
        let id = req.params.id;
        let ok = req.params.ok;

        if (! science.lista[id]) {
            res.send ('No encontramos al cientifico.')
        } else {
            if (ok === 'ok') {
                res.send (`Mi nombre es ${science.lista[id].name} y mi reseña es ${science.lista[id].review}`);
             }
         
            else {
                res.send (`Si desea saber más de mí escribe "/ok"`)
            }
            
    }

},
    
}




module.exports = controller;