// 10. Document Processing System

class DocumentExporter {
    export(content) {
        console.log("Default export: ",content);
    }
}

class PDFExporter extends DocumentExporter {
    export(content) {
        console.log("Exporting PDF: ",content);
    }
}

class DocxExporter extends DocumentExporter {
    export(content) {
        console.log("Exporting DOCX: ",content);
    }
}

class TxtExporter extends DocumentExporter {
    export(content) {
        console.log("Exporting TXT: ",content);
    }
}

function exportFile(content,exporter) {
    exporter.export(content);
}

let content = "This is my document.";

exportFile(content, new PDFExporter());
exportFile(content, new DocxExporter());
exportFile(content, new TxtExporter());