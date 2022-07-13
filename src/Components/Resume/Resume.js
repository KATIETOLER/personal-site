import React from 'react'
import PDF from './resume_Toler22.pdf'
import { Document, Page, pdfjs } from 'react-pdf'
import './Resume.css'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

const Resume = () => {
	return (
		<div className='resume-container'>
			<div id='img'>
				<h1>Resume</h1>
				<Document
					file={PDF}
					onContextMenu={(e) => e.preventDefault()}
					className='pdf'>
					<Page pageNumber={1} />
				</Document>
			</div>
		</div>
	)
}

export default Resume
