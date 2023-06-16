import Error from '../../components/Error'

function Error404() {
	/* Setting the title of the page. */
	document.title = '404 - Kasa'

	return (
		<div className='content-wrapper'>
		<Error
			title="404"
			subtitle="Oups! La page que "
			subtitle2="vous demandez n'existe pas."
		/>
	</div>
	)
}

export default Error404
