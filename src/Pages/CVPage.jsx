import { useState } from "react";
import { X, Download, Fullscreen } from "lucide-react";
import { Document, Page, pdfjs } from "react-pdf";
import ContentComponent from "~/Components/ContentComponent/ContentComponent";
import cvPDF from "~/assets/CV/VoTriPhuc_CV.pdf";

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
        <div className="mx-4 md:mx-6 lg:mx-10">
          <h3 className="text-md md:text-base lg:text-[17px] font-semibold mb-4 md:mb-6 text-white">
            CV_VoTriPhuc_FullStack.pdf
          </h3>

          <div className="flex flex-col items-center gap-4 md:gap-6">
            <div className="relative group cursor-pointer rounded-xl overflow-hidden shadow-2xl hover:shadow-[#f6b846]/20 transition-all duration-300 hover:scale-101 w-full max-w-[595px]">
              <Document file={cvPDF} onLoadSuccess={onDocumentLoadSuccess}>
                <Page
                  pageNumber={1}
                  width={
                    typeof window !== "undefined" && window.innerWidth < 768
                      ? window.innerWidth - 32
                      : 595
                  }
                  renderTextLayer={false}
                  renderAnnotationLayer={false}
                  className="w-full"
                />
              </Document>

              <div
                onClick={() => setIsModalOpen(true)}
                className="absolute top-2 right-2 md:top-4 md:right-4 opacity-0 group-hover:opacity-100 duration-300 bg-black/70 p-2 md:p-3 rounded-lg"
              >
                <Fullscreen className="w-6 h-6 md:w-8 md:h-8 text-white" />
              </div>
            </div>
          </div>
        </div>
      </ContentComponent>

      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
          onClick={() => setIsModalOpen(false)}
        >
          <button
            onClick={() => setIsModalOpen(false)}
            className="absolute top-4 right-4 md:top-6 md:right-6 p-2 md:p-3 cursor-pointer bg-white/10 hover:bg-white/20 rounded-full transition-colors duration-300 group z-10"
          >
            <X className="w-6 h-6 md:w-8 md:h-8 text-white group-hover:rotate-90 transition-transform duration-300" />
          </button>

          <div
            className="bg-gray-100 shadow-2xl rounded-lg overflow-hidden max-h-[80vh] md:max-h-[90vh] overflow-y-auto custom-scrollbar"
            onClick={(e) => e.stopPropagation()}
          >
            <Document file={cvPDF} onLoadSuccess={onDocumentLoadSuccess}>
              {Array.from(new Array(numPages), (el, index) => (
                <Page
                  key={`page_${index + 1}`}
                  pageNumber={index + 1}
                  width={
                    typeof window !== "undefined" && window.innerWidth < 768
                      ? Math.min(window.innerWidth - 48, 595)
                      : 595
                  }
                  renderTextLayer={false}
                  renderAnnotationLayer={false}
                  className="mb-2 md:mb-4"
                />
              ))}
            </Document>
          </div>

          <a
            href={cvPDF}
            download="CV_VoTriPhuc_FullStack.pdf"
            className="absolute bottom-4 md:bottom-6 flex items-center gap-1.5 md:gap-2 px-4 py-2 md:px-8 md:py-3 bg-[#f6b846] text-black font-semibold text-sm md:text-base rounded-lg hover:transition-all duration-300 transform hover:scale-105 shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <Download className="w-4 h-4 md:w-5 md:h-5" />
            Download CV
          </a>
        </div>
      )}
    </div>
  );
};

export default CVPage;
