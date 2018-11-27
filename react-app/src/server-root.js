const React = require('react')
const { renderToString } = require('react-dom/server')
const App = require('./App')

export default function render() {
	const html = renderToString(
		<App />
	);

	return { html, preloadedState };
}