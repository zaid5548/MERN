//puppeteer ke function => pending promise dete hain
const puppeteer=require("puppeteer");

// build a browser / open a browser
let tab;
let email="debaf96742@tohup.com";
let password="testing1234";


let browserOpenPromise=puppeteer.launch({headless:false,defaultViewport:null,args:[`--start-maximized`]});

browserOpenPromise.then(function(browser){
    let pagesPromise= browser.pages();
    return pagesPromise;
}).then(function(pages){
    //in array
    let page = pages[0];
    tab=page;
    let pageOpenedPromise = page.goto("https://www.hackerrank.com/auth/login");
    return pageOpenedPromise;
}).then(function(){
    let idTypedPromise=tab.type("#input-1",email);
    return idTypedPromise;
}).then(function(){
    let passTypedPromise=tab.type("#input-2",password);
    return passTypedPromise;
}).then(function(){
    let clickLoginBtnpromise=tab.click(".ui-btn.ui-btn-large.ui-btn-primary.auth-button");
    return clickLoginBtnpromise;
}).then(function(){
    let waitPromise=tab.waitForSelector(".ui-btn.ui-btn-normal.ui-btn-primary.recommended-prep-kit-card-cta",{visible:true});
    return waitPromise;
})
.then(function(){
    let preprationKitpromise=tab.click(".ui-btn.ui-btn-normal.ui-btn-primary.recommended-prep-kit-card-cta");
    return preprationKitpromise;
}).then(function(){
    let waitPromise=tab.waitForSelector(".interview-ch-li-cta",{visible:true});
    return waitPromise
}).then(function(){
    let allQuestionPromise=tab.$$(".interview-ch-li-cta");
    return allQuestionPromise;
}).then(function(allQuestion){
    let allLinksPromise=[];
    for(let i=0;i<allQuestion.length;i++){
        let linkPendingPromise= tab.evaluate(function(elem){
            return elem.getAttribute("href");
        },allQuestion[i]);
        allLinksPromise.push(linkPendingPromise);
    }
    let allQuestionPromise=Promise.all(allLinksPromise);
    return allQuestionPromise;
}).then(function(allLinks){
    console.log(allLinks);
})

