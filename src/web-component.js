import mediaUrlParser from './media-url-parser.js'

export default class MediaUrlParser extends HTMLElement {
	static get observedAttributes() {
		return ['url', 'data']
	}
	get url() {
		return this.getAttribute('url')
	}
	set url(str) {
		if (str) {
			this.setAttribute('url', str)
		} else {
			this.removeAttribute('url', str)
		}
	}

	get data() {
		return JSON.parse(this.getAttribute('data'))
	}
	set data(obj) {
		if (obj) {
			this.setAttribute('data', JSON.stringify(obj))
		} else {
			this.removeAttribute('data')
		}
	}

	attributeChangedCallback(attrName) {
		if (attrName === 'url') {
			this.parseUrl()
		}
		this.render()
	}

	/* prepare elements */
	connectedCallback() {
		/* input */
		this.$input = document.createElement('input')
		this.$input.name = 'url'
		this.$input.placeholder = 'https://{youtube,soundcloud...}.com/:media_id'
		this.$input.addEventListener('input', this.onInput.bind(this))
		if (this.url) {
			this.$input.value = this.url
		}

		/* output */
		this.$output = document.createElement('output')

		/* render it all */
		this.append(this.$input)
		this.append(this.$output)
	}

	onInput({target}) {
		const { name, value } = target
		if (name === 'url') {
			this.url = value
			this.parseUrl()
		}
	}

	parseUrl() {
		if (this.url) {
			this.data = mediaUrlParser(this.url)
		} else {
			this.data = null
		}
	}

	render() {
		if (this.data) {
			this.$output.innerText = JSON.stringify(this.data)
		} else {
			this.$output.innerText = ''
		}
	}
}
