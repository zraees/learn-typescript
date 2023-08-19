/*
    40. Album: Write a function called make_album() that builds a Object
    describing a music album. The function should take in an artist name and an
    album title, and it should return a Object containing these two pieces of
    information. Use the function to make three dictionaries representing different
    albums. Print each return value to show that Objects are storing the
    album information correctly.
    Add an optional parameter to make_album() that allows you to store the
    number of tracks on an album. If the calling line includes a value for the number
    of tracks, add that value to the album’s Object. Make at least one new
    function call that includes the number of tracks on an album.
*/
function make_album(artist_name, album_title, num_of_tracks) {
    if (num_of_tracks !== null && num_of_tracks !== void 0 ? num_of_tracks : 0 > 0)
        return { artist_name: artist_name, album_title: album_title, num_of_tracks: num_of_tracks };
    else
        return { artist_name: artist_name, album_title: album_title };
}
var albums = [];
albums.push(make_album('Atif', 'Jal'));
albums.push(make_album('Sahar', 'Jal2'));
albums.push(make_album('Amir', 'Jal3'));
albums.forEach(function (Ele) { return console.log("artist name ".concat(Ele.artist_name, ", album_title ").concat(Ele.album_title)); });
albums.push(make_album('Zubair', 'Water', 10));
var last_album = albums.pop();
console.log("artist name ".concat(last_album.artist_name, ", album_title ").concat(last_album.album_title, ", number of tracks ").concat(last_album.num_of_tracks));
