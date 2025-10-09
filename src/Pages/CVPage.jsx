import { useState } from "react";
import { X, Download, Fullscreen } from "lucide-react";
import { Document, Page, pdfjs } from "react-pdf";
import ContentComponent from "~/Components/ContentComponent/ContentComponent";
import cvPDF from "~/assets/cv/VoTriPhuc_CV.pdf";

// Setup pdfjs
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const CVPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [numPages, setNumPages] = useState(null);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <div>
      <ContentComponent label="My CV">
        <div className="mx-10">
          <h3 className="text-[17px] font-semibold mb-6 text-white">
            CV_VoTriPhuc_FullStack.pdf
          </h3>

          <div className="flex flex-col items-center gap-6">
            <div className="relative group cursor-pointer rounded-xl overflow-hidden shadow-2xl hover:shadow-[#f6b846]/20 transition-all duration-300 hover:scale-101">
              <Document file={cvPDF} onLoadSuccess={onDocumentLoadSuccess}>
                <Page
                  pageNumber={1}
                  width={595}
                  renderTextLayer={false}
                  renderAnnotationLayer={false}
                />
              </Document>

              <div
                onClick={() => setIsModalOpen(true)}
                className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 duration-300 bg-black/70 p-3 rounded-lg"
              >
                <Fullscreen className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>
        </div>
      </ContentComponent>

      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={() => setIsModalOpen(false)}
        >
          <button
            onClick={() => setIsModalOpen(false)}
            className="absolute top-6 right-6 p-3 cursor-pointer bg-white/10 hover:bg-white/20 rounded-full transition-colors duration-300 group"
          >
            <X className="w-8 h-8 text-white group-hover:rotate-90 transition-transform duration-300" />
          </button>

          <div
            className="bg-gray-100 shadow-2xl rounded-lg overflow-hidden max-h-[90vh] overflow-y-auto custom-scrollbar"
            onClick={(e) => e.stopPropagation()}
          >
            <Document file={cvPDF} onLoadSuccess={onDocumentLoadSuccess}>
              {Array.from(new Array(numPages), (el, index) => (
                <Page
                  key={`page_${index + 1}`}
                  pageNumber={index + 1}
                  width={595}
                  renderTextLayer={false}
                  renderAnnotationLayer={false}
                  className="mb-4"
                />
              ))}
            </Document>
          </div>

          <a
            href={cvPDF}
            download="CV_VoTriPhuc_FullStack.pdf"
            className="absolute bottom-6 flex items-center gap-2 px-8 py-3 bg-[#f6b846] text-black font-semibold rounded-lg hover:transition-all duration-300 transform hover:scale-105 shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <Download className="w-5 h-5" />
            Download CV
          </a>
        </div>
      )}
    </div>
  );
};

export default CVPage;
