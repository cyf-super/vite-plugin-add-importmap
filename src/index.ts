import { Plugin } from 'vite'

interface IPptions {
	importMap?: {
    [key in string]: string
  }
	isAdd?: Boolean
}

function addImportmapPlugin(options: IPptions = {}): Plugin {
	const { importMap, isAdd } = options

	return {
		name: 'vite-plugin-add-importmap',
		transformIndexHtml(html: string) {
			if (isAdd === false || !importMap) return html

			if (!html) {
				console.warn('Can not get html string.')
				return
			}

			const cdnUrlStr = JSON.stringify(importMap)
			const scriptTag =
				`
      <script type="importmap">
        { "imports": ` +
				cdnUrlStr +
				` }
      </script>`
			const updatedHtml = html.replace('</title>', `</title>\n\t${scriptTag}`)

			return updatedHtml
		}
	}
}

export default addImportmapPlugin
