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

                // Adjust scale value here to increase the size
                const scale = 2.5; // Increase this value for a larger render
                let viewport = page.getViewport({ scale: scale });

                const canvas = document.getElementById('resumeCanvas') as HTMLCanvasElement;
                const context = canvas.getContext('2d');
                if (context) {
                    // Check if the device is an iOS device
                    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
                    canvas.width = isIOS ? screen.width : viewport.width;
                    canvas.height = viewport.height;

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
                <canvas id="resumeCanvas" style={{ width: '100%', height: 'auto', maxHeight: 'auto' }}></canvas>
            </div>
            <Footer />
        </div>
    );
}

export default Resume;
