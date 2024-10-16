let isRunning = false;

function runFunction() {
    const runButton = document.getElementById('runButton');
    const content = document.getElementById('content');
    const outputContainer = document.getElementById('outputContainer');
    const editor = document.getElementById('editor');
    const outputFrame = document.getElementById('outputFrame');

    if (!isRunning) {
        // On click: Show the output frame and hide the editor
        runButton.classList.remove('btn-success');
        runButton.classList.add('btn-warning'); // Change to warning for back button
        runButton.textContent = 'Back';
        content.style.display = 'none';
        outputContainer.style.display = 'block';

        // Write the code to the iframe
        const doc = outputFrame.contentDocument || outputFrame.contentWindow.document;
        doc.open();
        doc.write(editor.value);
        doc.close();
        
        isRunning = true;
    } else {
        // On click: Revert the changes, show the editor again
        runButton.classList.remove('btn-warning'); // Remove warning class
        runButton.classList.add('btn-success'); // Back to success class
        runButton.textContent = 'Run';
        content.style.display = 'flex';
        outputContainer.style.display = 'none';
        isRunning = false;
    }
}
