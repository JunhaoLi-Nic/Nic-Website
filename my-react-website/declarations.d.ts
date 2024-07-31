// declarations.d.ts

// typings.d.ts
declare module 'pdfjs-dist/legacy/build/pdf' {
    const getDocument: any;
    const GlobalWorkerOptions: any;
    export { getDocument, GlobalWorkerOptions };
    export interface PDFRenderTask {
      promise: Promise<void>;
      cancel(): void;
      current: current<void>;
    }
}
