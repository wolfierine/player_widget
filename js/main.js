var back_to_song = document.getElementById('back-to-song'),
	hamburger = document.getElementById('menu'),
	play_view = document.getElementById('play-view'),
	play_pause_buttons = document.getElementById('playpause'),
	playlist = document.getElementById('playlist'),
	prev = document.getElementById('prev'),
	next = document.getElementById('next');
	artist = document.getElementById('song-artist'),
	song = document.getElementById('song-name'),
	song_theme = document.getElementById('song-theme');

//show playlist
hamburger.addEventListener("click", function(){
	play_view.classList.add('hide');
}, false);

//hide playlist
back_to_song.addEventListener("click", function(){
	play_view.classList.remove('hide');
}, false);

//toggle play/pause buttons
play_pause_buttons.addEventListener("click", function(){
	this.classList.toggle('play-pause');
}, false);


var songs = [
	{	
		artist: "Icona Pop",
		title: "Still Dont't Know",
		time: "3:15",
		albumImage: "1.jpeg"
	},
	{	
		artist: "LP",
		title: "Other People",
		time: "4:25",
		albumImage: "2.jpeg"
	},
	{	
		artist: "Twenty One Pilots",
		title: "The Run And Go",
		time: "3:12",
		albumImage: "3.jpeg"
	},
	{	
		artist: "Alvaro Soler",
		title: "El Mismo Sol",
		time: "4:12",
		albumImage: "4.jpeg"
	},
	{	
		artist: "Steppenwolf",
		title: "Born To Be Wild",
		time: "2:57",
		albumImage: "5.jpeg"
	},
	{	
		artist: "Bring Me The Horizon",
		title: "Throne",
		time: "3:04",
		albumImage: "6.jpeg"
	},
	{	
		artist: "Shinedown",
		title: "Cut The Cord",
		time: "4:01",
		albumImage: "7.jpeg"
	},
	{	
		artist: "Pop Evil",
		title: "Footsteps",
		time: "3:20",
		albumImage: "8.jpeg"
	},
	{	
		artist: "Terrific Sunday",
		title: "Bombs Away",
		time: "3:45",
		albumImage: "9.jpeg"
	},
	{	
		artist: "Muse",
		title: "Psycho",
		time: "4:05",
		albumImage: "10.jpeg"
	},
	{	
		artist: "Franz Ferdinand",
		title: "Take Me Out",
		time: "2:40",
		albumImage: "11.jpeg"
	},
	{	
		artist: "X Ambassadors",
		title: "Jungle",
		time: "3:15",
		albumImage: "12.jpeg"
	},
	{	
		artist: "Three Days Grace",
		title: "Animal I Have Become",
		time: "3:18",
		albumImage: "13.jpeg"
	},

];




//create playlist 
for(var i = 0; i<songs.length; i++){
	var li = document.createElement("li");
	playlist.appendChild(li);
	li.id = i;
	li.innerHTML = '<div class="song-details"><a href="#" class="song"><span class="song-time">'+songs[i].time+' </span> | <h3>'+songs[i].artist+'</h3><h2>'+songs[i].title+'</h2></a></div><div class="song-function"><a href="#"><i class="fa fa-share-alt fa-2x" aria-hidden="true"></i></a><a href="#"><i class="fa fa-heart fa-2x" aria-hidden="true"></i></a></div>';

}


//set default playing song
var index = 0;
artist.innerHTML = songs[index].artist;
song.innerHTML = songs[index].title;

//add click event on every playlist's item
single_song = playlist.getElementsByTagName("li");
for(var j = 0; j<single_song.length; j++){
	single_song[j].addEventListener('click', function(){
		//hide playlist
		play_view.classList.remove('hide');

		var id = this.id;
		var picked_song = document.getElementById(id);
		//set artist and song's title of front view
		var t_song_artist = picked_song.getElementsByTagName("h3")[0].innerHTML;
		var t_song_title = picked_song.getElementsByTagName("h2")[0].innerHTML;
		artist.innerHTML = t_song_artist;
		song.innerHTML = t_song_title;
		//set song's background
		var x = songs[id].albumImage;
		song_theme.style.backgroundImage = "url('images/" + x + "')";
		//set new index for nav buttons
		index = id;
	}, false);
}

//add click event for next button
next.addEventListener("click", function(){
	index++;
	if(index < songs.length){
		//set artist and song's title of front view
		artist.innerHTML = songs[index].artist;
		song.innerHTML = songs[index].title;
		//set song's background
		song_theme.style.backgroundImage = "url('images/" + songs[index].albumImage + "')";
	} else {
		index = 0;
		//set artist and song's title of front view
		artist.innerHTML = songs[index].artist;
		song.innerHTML = songs[index].title;
		//set song's background
		song_theme.style.backgroundImage = "url('images/" + songs[index].albumImage + "')";
	}
}, false);

//add click event for prev button
prev.addEventListener("click", function(){
	if(index === 0){
		index = songs.length-1;
		//set artist and song's title of front view
		artist.innerHTML = songs[index].artist;
		song.innerHTML = songs[index].title;
		//set song's background
		song_theme.style.backgroundImage = "url('images/" + songs[index].albumImage + "')";
	} else {
		index--;
		//set artist and song's title of front view
		artist.innerHTML = songs[index].artist;
		song.innerHTML = songs[index].title;
		//set song's background
		song_theme.style.backgroundImage = "url('images/" + songs[index].albumImage + "')";
	}
}, false);



//progress bar
  var progressbar = document.getElementById('progressbar'),
    	max = progressbar.getAttribute('max'),
    	time = (1000/max)*5,  
      	value = progressbar.value;
 
  var loading = function() {
      	value += 1;
      	addValue = progressbar.value = value;
 
      if (value == max) {
          clearInterval(animate);                
      }
  };
 
 play_pause_buttons.addEventListener("click", function(){
  	var animate = setInterval(function() {
    	loading();
  	}, time);
  }, false);

  
