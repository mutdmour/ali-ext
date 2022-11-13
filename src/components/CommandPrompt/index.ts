import { defineCustomElement } from 'vue'

import CommandPrompt from './CommandPrompt.ce.vue'

window.customElements.define('command-prompt', defineCustomElement(CommandPrompt));