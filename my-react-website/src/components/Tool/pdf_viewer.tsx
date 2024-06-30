import React, { useEffect, useRef } from 'react';
import { getDocument, PDFDocumentProxy, PDFPageProxy } from 'pdfjs-dist/legacy/build/pdf.mjs';

interface PdfViewerProps {
    url: string;
}

const PdfViewer: React.FC<PdfViewerProps> = ({ url }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const loadPdf = async () => {
            const loadingTask = getDocument(url);
            try {
                const pdf: PDFDocumentProxy = await loadingTask.promise;
                console.log('PDF loaded');
                
                const pageNumber = 1;
                const page: PDFPageProxy = await pdf.getPage(pageNumber);
                console.log('Page loaded');
                
                const scale = 1.5;
                const viewport = page.getViewport({ scale });
                const canvas = canvasRef.current;
                if (canvas) {
                    const context = canvas.getContext('2d');
                    if (context) {
                        canvas.height = viewport.height;
                        canvas.width = viewport.width;
                        
                        const renderContext = {
                            canvasContext: context,
                            viewport: viewport
                        };
                        await page.render(renderContext).promise;
                        console.log('Page rendered');
                    }
                }
            } catch (reason) {
                console.error('Error during PDF loading or rendering: ', reason);
            }
        };

        loadPdf();
    }, [url]);

    return (
        <div>
            <canvas ref={canvasRef} style={{ border: '1px solid black', width: '100%', height: 'auto' }} />
        </div>
    );
}

export default PdfViewer;
