import { combineReducers } from 'redux';

const defaultAppState = {
  langs: {
    orig: 'es',
    trans: 'de'
  },
  voc: 'hueso'
}
const app = (state = defaultAppState, action) => {
  return state;
}

const defaultVocState = {
  hueso: {
    voc: {
      es: 'hueso',
      de: ['Knochen', 'Nuss', 'Kern']
    },
    sentences: [
      {
        es: 'Todos sabemos que es un hueso duro de roer.',
        de: 'Wir wissen alle, dass es eine harte Nuss ist.'
      },
      {
        es: 'El perro que olisquea encuentra el hueso.',
        de: 'Ein Hund, der herumstreunt, findet einen Knochen.'
      },
      {
        es: 'Parece que hay cosas incrustadas en el hueso.',
        de: 'Sieht aus wie Zeug eingebettet in den Knochen.'
      }
    ]
}

}
const voc = (state = defaultVocState, action) => {
  return state;
}

const reducers = combineReducers({
  app,
  voc
});

export default reducers;
