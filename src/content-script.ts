import { createApp } from 'vue';
import CommandPrompt from './components/CommandPrompt.vue';

const rootClassName = 'ali-root-ext';

function init() {
	const root = document.createElement('div');
	root.classList.add(rootClassName);
	document.body.appendChild(root);

	setTimeout(() => {
		const app = createApp(CommandPrompt)
		app.mount(`.${rootClassName}`)
	}, 0);
}

try {
	init();
} catch (e) {
	console.error(`ali-ext`, e);
}
