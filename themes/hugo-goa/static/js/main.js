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

  function flashCopyMessage(btn, msg) {
    btn.textContent = msg;
    setTimeout(function() {
      btn.textContent = "Copy";
    }, 1000);
  }

  function addCopyButton(containerEl) {
    var code = containerEl.textContent;

    var copyBtn = document.createElement("button");
    copyBtn.className = "highlight-copy-btn";
    copyBtn.textContent = "Copy";
    containerEl.append(copyBtn);

    new ClipboardJS(copyBtn, {
      text: function() {
        return code;
      }
    }).on('success', function() {
      flashCopyMessage(copyBtn, 'Copied!')
    }).on('error', function() {
      flashCopyMessage(copyBtn, 'Not Supported :(')
    });
  }

  // Add copy button to code blocks
  var highlightBlocks = document.getElementsByClassName('highlight');
  Array.prototype.forEach.call(highlightBlocks, addCopyButton);
})();
