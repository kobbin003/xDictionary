import { useState } from "react";
import "./App.css";

const dictionary = [
	{
		word: "React",
		meaning: "A JavaScript library for building user interfaces.",
	},

	{ word: "Component", meaning: "A reusable building block in React." },

	{ word: "State", meaning: "An object that stores data for a component." },
];

function App() {
	const [word, setWord] = useState("");
	const [definition, setDefinition] = useState("");
	const handleSubmit = (e) => {
		e.preventDefault();
		const definition = dictionary.find(
			(pair) => pair.word.toLowerCase() == word.toLowerCase()
		);
		if (definition) {
			setDefinition(definition["meaning"]);
		} else {
			setDefinition("Word not found in the dictionary.");
		}
	};

	const handleInputChange = (e) => {
		setWord(e.target.value);
	};
	return (
		<div>
			<h1>Dictionary App</h1>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					name="word"
					id="word"
					value={word}
					onChange={handleInputChange}
				/>
				<button type="submit">Search</button>
			</form>
			<div>
				<h3>Defintion:</h3>
				<p>{definition}</p>
			</div>
		</div>
	);
}

export default App;
