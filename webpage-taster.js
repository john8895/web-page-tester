/**
 * name: 初稿完稿 頁面自動檢查工具
 * Version: 1.1
 * Date: 2021.03.03
 */

/**
 * func1: 檢查 a 有無 title
 * func2: 檢查 img 有無 alt
 */
(function checkAttrTitleEmpty() {
    const aTags = document.getElementsByTagName('a');
    const imgTags = document.getElementsByTagName('img');
    const aArray = [...aTags]
    const imgArray = [...imgTags]

    let aFilter = aArray.filter((item) => {
        return !item.hasAttribute('title')
    })
    console.log('"a" don\'t have "title":', aFilter.length)

    aFilter.forEach((item, index) => {
        item.style.backgroundColor = 'red';
        item.style.outline = '2px solid red';
        console.log(index+1, item)
    })

    let imgFilter = imgArray.filter((item) => {
       return !item.hasAttribute('alt')
    })
    console.log('"img" don\'t have "alt":', imgFilter.length)

    imgFilter.forEach((imgItem, index) => {
        imgItem.style.outline = '3px solid blue'
        console.log(index+1, imgItem)
    })

})()