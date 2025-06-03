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
	const [message, setMessage] = useState("");
	const handleSubmit = (e) => {
		e.preventDefault();

		// clear the previous UI on button click:

		setMessage("");
		setDefinition("");

		if (!word) {
			setMessage("Word not found in the dictionary.");
			return;
		}
		const definition = dictionary.find(
			(pair) => pair.word.toLowerCase() == word.toLowerCase()
		);
		if (definition) {
			setDefinition(definition["meaning"]);
		} else {
			setMessage("Word not found in the dictionary.");
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
				{definition && <p>{definition}</p>}
				{message && <p>{message}</p>}
			</div>
		</div>
	);
}

export default App;
