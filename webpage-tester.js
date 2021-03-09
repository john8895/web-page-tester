/**
 * name: 初稿完稿 頁面自動檢查工具
 * Version: 1.2
 * Date: 2021.03.08
 */

(function () {
    "use strict";

    const promptStyleText = 'position:absolute;bottom:-20px;left:0;color:red;font-size:15px;font-weight:normal;'

    checkLinkTitle();
    checkImageAlt();
    checkElement();
    // checkFilePath();

    function checkLinkTitle() {
        const aTags = document.getElementsByTagName('a');
        const aArray = [...aTags]

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

        editorsEl.forEach((item) => {
            item.style.cssText = 'backgroundColor:red;outline:2px solid deeppink;position:relative;';
            const prompt = document.createElement('span');
            prompt.style.cssText = promptStyleText + 'color:blue;';
            prompt.innerHTML = 'webeditor';
            item.appendChild(prompt);
        })
    };


    // function checkFilePath() {
    //     const imgs = document.querySelectorAll('img')
    //     console.log(imgs)
    // }
})();