import './webcomponents-bundle.js';
import './components/CommandPrompt';

try {
	const root = document.createElement('command-prompt');
	document.body.appendChild(root);
} catch (e) {
	console.error(`ali-ext`, e);
}
