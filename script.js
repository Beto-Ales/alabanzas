// import songsBook from './data/songsBook.js'
import allSongs from './functionality/test.js'
// import {playlist, add, remove} from './functionality/playList.js'

// variables and setVariables to index song & verse
const controllLyrics = {
  song: 0,
  verse: 0,
  
  // set song
  nextSong() {
    ++this.song
  },
  previousSong() {
    --this.song
  },
  restartSong() {
    this.song = 0
  },

  // set verse
  nextVerse() {
    ++this.verse
  },
  previousVerse() {
    --this.verse
  },
  restartVerse() {
    this.verse = 0
  }
}

// idea
// ----
// create let = [] and push the id of the song we want to add to playlist
// then iterate the array 0 based to select songs by id



// variable iterate lyrics[] to show different verses of the song
// let verse = 0;
// const zeroVerse = () => {
//   verse = 0
// }
// const plusVerse = () => {
//   ++verse
// }
// const minusVerse = () => {
//   --verse
// }

// // variable indexes differents songs
// let song = 1;
// const plusSong = () => {
//   ++song
// }
// const minusSong = () => {
//   --song
// }

// // load all the songs or the playlist
// let singing = songsBook

// // new playlist will start if functionallity is active
// let playlistActive = false

// containers order in html matters!!!
// -----------------------------------

// container for the key of the song
const keyContainer = document.querySelector('#key')

// container for the verse of the song
const verseContainer = keyContainer.nextElementSibling

// div container for dots indicating verse
const verseDotsContainer = verseContainer.nextElementSibling

// -----------------------------------
// containers order in html matters!!!





// const setSinging = () => {
//   singing = playlistActive ? playlist : songsBook
// }

const nextSong = () => {
  if (Object.keys(allSongs).length - 1 > controllLyrics.song) {
    controllLyrics.nextSong()
    controllLyrics.restartVerse() // start a new song with the first verse
    loadLyrics(allSongs, true, false, verseContainer, controllLyrics.song, controllLyrics.verse, keyContainer, 'lyrics')
  }
}

const previousSong = () => {
  if (controllLyrics.song > 0) {
    controllLyrics.previousSong()
    controllLyrics.restartVerse()
    loadLyrics(allSongs, true, false, verseContainer, controllLyrics.song, controllLyrics.verse, keyContainer, 'lyrics')
  }
}

const nextVerse = () => {
  if (allSongs[controllLyrics.song]['lyrics'].length - 1 > controllLyrics.verse) {
    controllLyrics.nextVerse()
    loadLyrics(allSongs, false, false, verseContainer, controllLyrics.song, controllLyrics.verse, keyContainer, 'lyrics')
  }
}

const previousVerse = () => {
  if (controllLyrics.verse > 0) {
    controllLyrics.previousVerse()
    loadLyrics(allSongs, false, true, verseContainer, controllLyrics.song, controllLyrics.verse, keyContainer, 'lyrics')
  }
}

// program starts here
// --------------------

import { loadLyrics, arrowDown, arrowLeft, arrowRight, arrowUp } from './functionality/loadLyrics.js'
// import { add } from './functionality/playList.js';

// check if should be load the songsBook or the playlist obj ***
loadLyrics(allSongs, true, false, verseContainer, controllLyrics.song, controllLyrics.verse, keyContainer, 'lyrics')

// event listeners commands
// ------------------------
document.addEventListener('keydown', function(){

  switch (event.key) {
    case 'ArrowRight':
      nextSong()
      break;
    
    case 'ArrowLeft':
      // arrowLeft(allSongs, verseContainer, controllLyrics.song, keyContainer, controllLyrics.previousSong, controllLyrics.restartVerse)   // previous song
      previousSong()
      break;

    case 'ArrowDown':
      // arrowDown(allSongs, verseContainer, controllLyrics.song, controllLyrics.verse, keyContainer, controllLyrics.nextVerse, 'lyrics')   // next verse
      nextVerse()
      break;
    
    case 'ArrowUp':
      // arrowUp(allSongs, verseContainer, controllLyrics.song, controllLyrics.verse, keyContainer, controllLyrics.previousVerse)   // previous verse
      previousVerse()
      break;

    case 'k':
      keyContainer.classList.toggle('showHide')   // show/hide key of the song
      break;

    case 'p':
      playlistActive = !playlistActive    // toogle start/stop new playlist
      break;

    case 'a':
      add(singing[song], song, playlistActive)    // add song to playlist
      console.log(playlist)
      break;

    case 'r':
      remove(singing[song], song, playlistActive)    // remove song from playlist
      console.log(playlist)
      break;

    case 's':
      setSinging()
      console.log(singing)
      break;
  
    default:
      break;
  }

})

// import ListArray from './functionality/list.js';

// // const beto = new ListArray()
// // replace songsbook
// const betoArray = new ListArray()

// betoArray.addSong('0', 'beto arr')
// betoArray.addSong('1', 'beto arr')
// betoArray.addSong('2', 'beto arr')

// betoArray.removeSong(1)

// console.log(betoArray.songs)
// console.log(betoArray.songs[0])


// before github
// ------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------

// variable to choose between different playlists
// let songsList = songsBook


// --------------------------------------------
// songs book selector obj with setter & getter
//      const songsBookPicker = {

//        list: songsBook,

//        set selectSongBook(songBook) {
//          this.list = songBook
//        },

//        get list() {return this.list}

//      }
// --------------------------------------------
  

// -------------------
// song ordered by key
// console.log(songsBook[1]['key'], songsBook[2]['key'], songsBook[3]['key']);
// ---------------------------------------------------------------

//   info

// javascript use dynamic object property

    // https://www.codegrepper.com/code-examples/javascript/javascript+use+dynamic+object+property

// The 3 ways to access the object value

    // https://www.samanthaming.com/tidbits/37-dynamic-property-name-with-es6/

// A Full List of Key Event Values

    // https://www.freecodecamp.org/news/javascript-keycode-list-keypress-event-key-codes/

// Fitting Text to a Container

    // https://css-tricks.com/fitting-text-to-a-container/

// Font scaling based on width of container

    // https://stackoverflow.com/questions/16056591/font-scaling-based-on-width-of-container
