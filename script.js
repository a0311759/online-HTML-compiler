function renderHTML() {
    var htmlContent = document.getElementById("htmlContent-textarea").value;
    var renderedHTML = document.getElementById("renderedHTML");
    try {
      renderedHTML.innerHTML = htmlContent;
      evalScripts(renderedHTML);
    } catch (error) {
      renderedHTML.innerHTML = "<span class='error-message'>Error: " + error.message + "</span>";
    }
  }

  function evalScripts(container) {
    var scripts = container.querySelectorAll('script');
    scripts.forEach(function(script) {
      var newScript = document.createElement('script');
      newScript.text = script.text;
      container.appendChild(newScript).parentNode.removeChild(newScript);
    });
  }