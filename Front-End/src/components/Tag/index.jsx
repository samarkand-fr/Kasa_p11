/**
 * Renders a tag component.
 * @function Tag
 * @param {string} tagName - The name of the tag.
 * @returns {ReactNode} JSX injected in the DOM.
 */

function Tag({ tagName }) {
	return <div className="tag">{tagName}</div>
}

export default Tag
