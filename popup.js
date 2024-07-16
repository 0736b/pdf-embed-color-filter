document.getElementById('toggle').addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.scripting.executeScript({
            target: { tabId: tabs[0].id },
            function: toggleFilter
        });
    });
});

function toggleFilter() {
    const pdfViewer = document.querySelector('embed[type="application/pdf"]');
    if (pdfViewer) {
        const pdfFrame = pdfViewer.tagName === 'EMBED' ? pdfViewer : pdfViewer.contentDocument;
        if (pdfFrame.style.filter === 'invert(1) contrast(50%)') {
            pdfFrame.style.filter = '';
        } else {
            pdfFrame.style.filter = 'invert(1) contrast(50%)';
        }
    }
}
