import * as pdfjsLib from 'pdfjs-dist/legacy/build/pdf';
import 'pdfjs-dist/legacy/build/pdf.worker';
import ResumePdf from './assets/Resume.pdf';
import React, { useEffect, useRef } from 'react';
import './resume.css';
import Header from '@components/Header/header';
import Footer from '@components/footer';

const Resume: React.FC = () => {
    const renderTaskRef = useRef<pdfjsLib.PDFRenderTask | null>(null);

    useEffect(() => {
        pdfjsLib.GlobalWorkerOptions.workerSrc = 'pdfjs-dist/legacy/build/pdf.worker.js';

        const loadPdf = async () => {
            const url = ResumePdf;
            const loadingTask = pdfjsLib.getDocument(url);

            try {
                const pdf = await loadingTask.promise;
                console.log('PDF loaded');

                const page = await pdf.getPage(1);
                console.log('Page loaded');

                const scale = window.devicePixelRatio || 1; // Adjust scale based on device
                const viewport = page.getViewport({ scale: scale * 2 });

                const canvas = document.getElementById('resumeCanvas') as HTMLCanvasElement;
                const context = canvas.getContext('2d');
                if (context) {
                    canvas.height = viewport.height;
                    canvas.width = viewport.width ;

                    if (renderTaskRef.current) {
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
                <canvas id="resumeCanvas" style={{ maxWidth: '100%', maxHeight:'100%' }}></canvas>
            </div>
            <Footer />
        </div>
    );
}

export default Resume;
