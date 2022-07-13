import React from 'react'
import PDF from './resume_Toler22.pdf'
import { Document, Page, pdfjs } from 'react-pdf'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

const Resume = () => {
	return (
		<div className='aboutme-container'>
			<div id='img'>
				<h1>Resume</h1>
				<Document file={PDF}>
					<Page pageNumber={1} />
				</Document>
			</div>
		</div>
	)
}

export default Resume
