$(document).ready(function(){


document.getElementById("rewind").addEventListener("click", function(){
  
	my_jukebox.rewind();
});


document.getElementById("playButton").addEventListener("click", function(){
  
	my_jukebox.play();
});


document.getElementById("fastforward").addEventListener("click", function(){
  
	my_jukebox.fastforward();
});


document.getElementById("shuffleButton").addEventListener("click", function(){

	my_jukebox.shuffle();
});


document.getElementById("pauseButton").addEventListener("click", function(){

	my_jukebox.pause();
});


document.getElementById("stopButton").addEventListener("click", function(){

	my_jukebox.stop();
});


document.getElementById("nextButton").addEventListener("click", function(){

	my_jukebox.next();
});


document.getElementById("uploadButton").addEventListener('click', function(){
  
	my_jukebox.newSong();
})


function Song(title, url, artist){
	this.title = document.getElementById("title").value,
	this.url = document.getElementById("url").value,
	this.artist = document.getElementById("artist").value
}

function PreSong(title, url, artist){
	this.title = title,
	this.url = url,
	this.artist = artist
}


function Jukebox(){
	var i = 0;
   var adjust=5;   //rewind or fast forward by this amount

	this.songs = [];

	this.next = function(){
		this.pause();	

		i++;
        
        //reset current song selection if over available number
     if(i>=this.songs.length){
       i=0;
      }

		console.log(this.songs[i])
		document.getElementById("current_song").setAttribute("src", this.songs[i].url);
		this.play();
	},

	this.newSong = function(new_song){
		console.log(new_song)
		Song.apply(this, arguments)
		new_song = new Song()
		this.songs.push(new_song);
	},

	this.preload = function(song){
		this.songs.push(song);
	},

	this.play = function(){
		$('#songTitle').text(this.songs[i].title); // jQuery for passing the names to the page
		$('#songArtist').text(this.songs[i].artist);
		document.getElementById("current_song").play();
	},	

this.pause = function(){
		document.getElementById("current_song").pause();
	},

	this.rewind= function(){
     
		console.log('rewind by '+adjust);
      // rewind by adjust seconds
		document.getElementById("current_song").currentTime= document.getElementById("current_song").currentTime-adjust;
	},

	this.fastforward= function(){
     
		console.log('fast forward by '+adjust);
     // fastforward by adjust seconds
		document.getElementById("current_song").currentTime= document.getElementById("current_song").currentTime +adjust;
	},

	this.stop = function(){
		document.getElementById("current_song").pause();
		document.getElementById("current_song").currentTime = 0;
	},

	this.shuffle = function(){
      
    // randomize and assign to i, which is used as current selection played
     i = Math.floor(Math.random()*this.songs.length);
      
     document.getElementById("current_song").setAttribute("src", this.songs[i].url);

		this.play();
	}
};


var my_jukebox = new Jukebox();

var song1 = new PreSong('Super Mario Bros', 'audio/mario_grass.mp3', 'Mario');
var song2 = new PreSong('Super Mario 3', 'http://66.90.91.26/ost/super-mario-bros.-3/tmvgjzmyuz/24-boom-boom.mp3', 'Mario');
var song3 = new PreSong('Street Fighter', 'http://216.227.134.162/ost/street-fighter-2-turbo/qvifdxccss/02.-player-select.mp3', 'SFighter');
var song4 = new PreSong('Donkey Kong Country', 'http://216.227.134.162/ost/super-donkey-kong-3/wjdrkijldv/216-big-boss-blues.mp3', 'DK3');
var song5 = new PreSong('Going Up, Going Down', 'http://216.227.134.162/ost/bioshock-score/btkyjpddhy/01-main-title-going-up-going-down.mp3', 'Bioshock');
var song6 = new PreSong('Nate"s Theme', 'http://66.90.91.26/ost/uncharted/wdqzptbjmv/01-nate-s-theme.mp3', 'Uncharted');
var song7 = new PreSong('Paper Planes', 'audio/Paper_planes.mp3', 'Mia');
var song8 = new PreSong('Afro Intro', 'http://66.90.91.26/ost/afro-samurai/uchzsmipgl/01-the-rza-afro-theme-41st.mp3', 'Rza')

my_jukebox.preload(song1);
my_jukebox.preload(song2);
my_jukebox.preload(song3);
my_jukebox.preload(song4);
my_jukebox.preload(song5);
my_jukebox.preload(song6);
my_jukebox.preload(song7);
my_jukebox.preload(song8);

});


