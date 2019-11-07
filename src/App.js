import React from 'react';
import SearchBar from './components/SearchBar';

import './app.css';

const App = () => {
	return (
		<div>
			<div className="container">
				<h1 className="header-title">Lyrics Bites</h1>
                <h3>Learn your favourite song one bite at a time</h3>
				<SearchBar />
                
			</div>
		</div>
	);
};

export default App;
