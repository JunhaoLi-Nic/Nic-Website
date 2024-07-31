import * as pdfjsLib from 'pdfjs-dist/legacy/build/pdf';
import 'pdfjs-dist/legacy/build/pdf.worker';

import React, { useEffect, useRef } from 'react';
import './resume.css';
import Header from '@components/Header/header';
import Footer from '@components/footer';



const Resume: React.FC = () => {
    // Correctly use useRef with an initial value of null
    const renderTaskRef = useRef<pdfjsLib.PDFRenderTask | null>(null);

    useEffect(() => {
        pdfjsLib.GlobalWorkerOptions.workerSrc = 'pdfjs-dist/legacy/build/pdf.worker.js';

        const loadPdf = async () => {
            const url = './src/assets/Resume.pdf';
            const loadingTask = pdfjsLib.getDocument(url);

            try {
                const pdf = await loadingTask.promise;
                console.log('PDF loaded');

                const page = await pdf.getPage(1);
                console.log('Page loaded');

                const scale = window.devicePixelRatio || 1; // Use device pixel ratio for high DPI screens
                const viewport = page.getViewport({ scale: scale * 1.5 });

                const canvas = document.getElementById('resumeCanvas') as HTMLCanvasElement;
                const context = canvas.getContext('2d');
                if (context) {
                    canvas.style.width = viewport.width + 'px';
                    canvas.style.height = viewport.height + 'px';
                    canvas.height = viewport.height * scale;
                    canvas.width = viewport.width * scale;

                    if (renderTaskRef.current) {
                        // Cancel the previous render task if it exists
                        renderTaskRef.current.cancel();
                    }

                    const renderContext = {
                        canvasContext: context,
                        viewport: viewport
                    };
                    renderTaskRef.current = page.render(renderContext);
                    await renderTaskRef.current?.promise;
                    console.log('Page rendered');
                }
            } catch (error) {
                console.error('Error loading PDF: ', error);
            }
        };

        loadPdf();

        // Cleanup function to cancel the render task if the component unmounts
        return () => {
            if (renderTaskRef.current) {
                renderTaskRef.current.cancel();
            }
        };
    }, []);

    return (
        <div className="app">
            <Header />
            <div className="resume-container">
                <canvas id="resumeCanvas" style={{ width: '100%', height: 'auto' }}></canvas>
            </div>
            <Footer />
        </div>
    );
}

export default Resume;
