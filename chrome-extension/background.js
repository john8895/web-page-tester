// window.onload = function() {
//
//     const Btn = document.getElementById('clickBtn');
//     Btn.addEventListener('click',function() {
//
//         alert('Hello');
//     })
// }
// Called when the user clicks on the browser action.
// chrome.browserAction.onClicked.addListener(function(tab) {
//   // No tabs or host permissions needed!
//   console.log('Turning ' + tab.url + ' red!');
//   chrome.scripting.executeScript({
//     code: 'document.body.style.backgroundColor="red"'
//   });
// });
// function reddenPage() {
//     document.body.style.backgroundColor = 'blue';
// }
function allFunctions() {
    checkLinkTitle()
    checkImageAlt()
    checkElement()

    function checkLinkTitle() {
        const aTags = document.getElementsByTagName('a');
        const aArray = [...aTags]
        const promptStyleText = 'position:absolute;bottom:-20px;left:0;color:red;font-size:15px;font-weight:normal;'

        let aFilter = aArray.filter((item) => {
            return !item.hasAttribute('title')
        })
        if (aFilter) {
            console.log('a total:', aFilter.length)

            aFilter.forEach((item, index) => {
                item.style.cssText = 'backgroundColor:red;outline:2px solid red;position:relative;';
                const prompt = document.createElement('span');
                prompt.style.cssText = promptStyleText;
                prompt.innerHTML = 'title';
                item.appendChild(prompt);
                // console.log(index + 1, item)
            })
        }
    }

    function checkImageAlt() {
        const imgTags = document.getElementsByTagName('img');
        const imgArray = [...imgTags]
        const promptStyleText = 'position:absolute;bottom:-20px;left:0;color:red;font-size:15px;font-weight:normal;'

        let imgFilter = imgArray.filter((item) => {
            return !item.hasAttribute('alt')
        })
        if (imgFilter) {
            console.log('img alt total:', imgFilter.length)

            imgFilter.forEach((item, index) => {
                item.style.cssText = 'backgroundColor:red;outline:2px solid blue;position:relative;';
                const prompt = document.createElement('span');
                prompt.style.cssText = promptStyleText;
                prompt.innerHTML = 'alt';
                item.appendChild(prompt);
                // console.log(index + 1, item)
            })
        }

    }

    function checkElement() {
        const editors = document.getElementsByClassName('webeditor');
        const editorsEl = [...editors]
        const promptStyleText = 'position:absolute;bottom:-20px;left:0;color:red;font-size:15px;font-weight:normal;'

        editorsEl.forEach((item) => {
            item.style.cssText = 'backgroundColor:red;outline:2px solid deeppink;position:relative;';
            const prompt = document.createElement('span');
            prompt.style.cssText = promptStyleText + 'color:blue;';
            prompt.innerHTML = 'webeditor';
            item.appendChild(prompt);
        })
    };
}


chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
        target: {tabId: tab.id},
        function: allFunctions
    });
});
