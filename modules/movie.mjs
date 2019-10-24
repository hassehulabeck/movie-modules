import {reine, harriet} from './characters.mjs';
import actors from './actors.mjs';

var movies = [{
        name: "Barnens ö",
        year: 1980,
        characters: [reine, harriet],
        actors: [actors[0]]
    },
    {
        name: "Handen som gungar vaggan",
        year: 1989,
        actors: [actors[1]]
    }
]

export default movies;