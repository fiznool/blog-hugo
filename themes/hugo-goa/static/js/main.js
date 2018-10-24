(function() {
  if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
    var msViewportStyle = document.createElement('style')
    msViewportStyle.appendChild(
      document.createTextNode(
              '@-ms-viewport{width:auto!important}'
      )
    )
    document.querySelector('head').appendChild(msViewportStyle)
  }
})();

(function() {
  function flashCopyMessage(el, msg) {
    el.textContent = msg;
    setTimeout(function() {
      el.textContent = "Copy";
    }, 1000);
  }

  function clickToCopy(el, textToCopy) {
    new ClipboardJS(el, {
      text: function() {
        return textToCopy;
      }
    }).on('success', function() {
      flashCopyMessage(el, 'Copied!')
    }).on('error', function() {
      flashCopyMessage(el, 'Not Supported :(')
    });
  }

  function addCopyButton(containerEl) {
    var code = containerEl.textContent;

    var copyBtn = document.createElement("button");
    copyBtn.className = "highlight-copy-btn";
    copyBtn.textContent = "Copy";
    containerEl.append(copyBtn);

    clickToCopy(copyBtn, code);
  }

  // Add copy button to code blocks
  var highlightBlocks = document.getElementsByClassName('highlight');
  Array.prototype.forEach.call(highlightBlocks, addCopyButton);
})();
