function copyCodeToClipboard(elementId) {
  const codeSnippet = document.getElementById(elementId);
  const textArea = document.createElement("textarea");
  textArea.value = codeSnippet.textContent;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand("copy");
  document.body.removeChild(textArea);
}
