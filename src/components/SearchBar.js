import React from 'react';
import ArtistCard from './ArtistCard';
import Loader from './Loader';

class SearchBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			track_list: [],
			value: '',
			trackTitle: []
		};
	}

	getTrack = (e) => {
		e.preventDefault();
		const url = 'https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1';
		this.setState({ isLoading: true });
		fetch(
			`${url}/track.search?q_artist=${this.state
				.trackTitle}&page_size=5&page=1&f_has_lyrics=1&s_track_rating=desc&album.get?&apikey=${process.env
				.REACT_APP_KEY}`
		)
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				const tracks = data.message.body.track_list;
				console.log(tracks);
				this.setState({
					track_list: tracks,
					isLoading: false
				});
			})
			.catch((err) => {
				console.log('Error ', err.message);
			});
		this.setState({ trackTitle: '' });
	};

	handleChange = (e) => {
		this.setState({
			trackTitle: e.target.value
		});
	};

	getLyricsSelected = (e) => {
		const newValue = e.target.value;
		if (newValue === 'q_artist') {
			this.setState({
				valore: newValue,
				value: newValue
			});
			console.log(newValue);
		} else if (newValue === 'q_track') {
			this.setState({
				valore: newValue,
				value: newValue
			});
			console.log(newValue);
		} else {
			this.setState({
				valore: newValue,
				value: newValue
			});
			console.log(newValue);
		}
	};

	render() {
		return (
			<div className="search-bar">
				<div className="field">
					<form onSubmit={this.getTrack} className="form-u">
						<label>Search a song</label>
						<select value={this.state.value} onChange={this.getLyricsSelected}>
							<option value="q_artist">By Artist</option>
							<option value="q_track">By Song</option>
							<option value="q_lyrics">By Word</option>
						</select>
						<input
							type="text"
							name="trackTitle"
							autoComplete="on"
							placeholder="search..."
							value={this.state.trackTitle}
							onChange={this.handleChange}
						/>
						<button type="submit">Get Songs</button>
					</form>
				</div>

				{this.state.isLoading ? (
					<Loader />
				) : this.state.track_list ? (
					this.state.track_list.map((item) => {
						return <ArtistCard key={item.track.track_id} track={item.track} />;
					})
				) : (
					<Loader />
				)}
			</div>
		);
	}
}

export default SearchBar;
