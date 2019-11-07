import React from 'react';

class ArtistCard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			lyrics: ''
		};
	}

	getLyrics = (e) => {
		e.preventDefault();
		const url = 'https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1';
		fetch(`${url}/track.lyrics.get?track_id=${this.props.track.track_id}&apikey=${process.env.REACT_APP_API_KEY}`)
			.then((response) => response.json())
			.then((data) => {
				console.log(data.message.body.lyrics);
				const lyrics = data.message.body.lyrics;
				this.setState({
					lyrics: lyrics.lyrics_body,
					copyright: lyrics.lyrics_copyright
				});
			});
	};

	render() {
		const { track } = this.props;
		return (
			<div className="card">
				<h2>Artist: {track.artist_name}</h2>
				<p>Album: {track.album_title}</p>
				<p>Track: {track.track_name}</p>
				<button type="submit" onClick={this.getLyrics} className="btn-lyrics">
					Get Lyrics
				</button>
				<pre className="lyrics">
					{this.state.lyrics !== '' ? (
						this.state.lyrics
					) : this.state.copyright === '' ? (
						'no lyrcs on the database'
					) : (
						this.state.copyright
					)}
				</pre>
			</div>
		);
	}
}

export default ArtistCard;
