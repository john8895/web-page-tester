/**
 * name: 初稿完稿 頁面自動檢查工具
 * Version: 1.3
 * Date: 2021.03.31
 */

(function () {
    "use strict";

    class CheckElement {
        promptStyleText;

        constructor() {
            this.promptStyleText = 'position:absolute;bottom:-20px;left:0;color:red;font-size:15px;font-weight:normal;'

            this.checkWebeditor();
            this.checkImageAlt();
            this.checkLinkTitle();
            this.checkFavicon();
            this.checkImagePath();
        }

        checkLinkTitle() {
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
                prompt.style.cssText = this.promptStyleText;
                prompt.innerHTML = 'title';
                item.appendChild(prompt);
            })
        }
    }

        checkImageAlt() {
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
                    prompt.style.cssText = this.promptStyleText;
                    prompt.innerHTML = 'alt';
                    item.appendChild(prompt);
                })
            }
        }

        checkWebeditor() {
            const editors = document.getElementsByClassName('webeditor');
            const editorsEl = [...editors]

            editorsEl.forEach((item) => {
                item.style.cssText = 'backgroundColor:red;outline:2px solid deeppink;position:relative;';
                const prompt = document.createElement('span');
                prompt.style.cssText = this.promptStyleText + 'color:blue;';
                prompt.innerHTML = 'webeditor';
                item.appendChild(prompt);
            })
        };

        checkFavicon() {
            const allLinks = document.querySelectorAll('link');
            let linkEmpty = 0;
            for (let i = 0; i < allLinks.length; i++) {
                if (allLinks[i].rel.indexOf('icon') > -1) {
                    console.log(allLinks[i].href)
                } else {
                    linkEmpty++
                }
                if (linkEmpty === allLinks.length) {
                    console.log('favicon empty')
                }
            }
        }

        checkImagePath() {
            const imgs = document.querySelectorAll('img')
            imgs.forEach((img) => {
                console.log(img.src);
            })
        }

    }

    const check = new CheckElement();
})()