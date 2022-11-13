import { defineCustomElement } from 'vue'

import CommandPrompt from './CommandPrompt.vue'

window.customElements.define('command-prompt', defineCustomElement(CommandPrompt));