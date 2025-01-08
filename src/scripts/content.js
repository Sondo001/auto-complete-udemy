function click(e){
    (e.length?[...e]:[e]).forEach(el=>el.click())}function toggleAllVideos(w){const s=document.querySelectorAll('[data-purpose="section-heading"] .js-panel-toggler[aria-expanded="false"]');click(s);document.querySelectorAll('.ud-real-toggle-input[data-purpose="progress-toggle-button"]').forEach(v=>{if(w!==v.checked){v.removeAttribute('disabled');v.click();v.setAttribute('disabled','true')}});click(s)}function createButton(e,p){const b=document.createElement('button');b.className=e.className;b.id=`${p}-btn`;b.setAttribute('data-purpose',p);const span=e.querySelector('[data-purpose="progress-label"]').cloneNode(true);span.textContent=chrome.i18n.getMessage(p==='watchAll'?'watch_all':'unwatch_all');b.appendChild(span);b.style.display=e.style.display;b.addEventListener('click',()=>toggleAllVideos(p==='watchAll'));return b}function injectButtons(e){const p=e.parentNode.parentNode,[w,u]=['watchAll','unwatchAll'].map(p=>createButton(e,p));p.insertBefore(u,e.parentNode);p.insertBefore(w,u)}function observeButton(){const o=new MutationObserver(()=>{const e=document.querySelector('[class*="progress--progress-btn--"]');if(e){injectButtons(e);o.disconnect()}});o.observe(document.body,{childList:true,subtree:true})}observeButton();function click(e) {
    (e.length ? [...e] : [e]).forEach(el => el.click())
}

function toggleAllVideos(w) {
    const s = document.querySelectorAll('[data-purpose="section-heading"] .js-panel-toggler[aria-expanded="false"]');
    click(s);
    document.querySelectorAll('.ud-real-toggle-input[data-purpose="progress-toggle-button"]').forEach(v => {
        if (w !== v.checked) {
            v.removeAttribute('disabled');
            v.click();
            v.setAttribute('disabled', 'true')
        }
    });
    click(s)
}

function createButton(e, p) {
    const b = document.createElement('button');
    b.className = e.className;
    b.id = `${p}-btn`;
    b.setAttribute('data-purpose', p);
    const span = e.querySelector('[data-purpose="progress-label"]').cloneNode(true);
    span.textContent = chrome.i18n.getMessage(p === 'watchAll' ? 'watch_all' : 'unwatch_all');
    b.appendChild(span);
    b.style.display = e.style.display;
    b.addEventListener('click', () => toggleAllVideos(p === 'watchAll'));
    return b
}

function injectButtons(e) {
    const p = e.parentNode.parentNode,
        [w, u] = ['watchAll', 'unwatchAll'].map(p => createButton(e, p));
    p.insertBefore(u, e.parentNode);
    p.insertBefore(w, u)
}

function observeButton() {
    const o = new MutationObserver(() => {
        const e = document.querySelector('[class*="progress--progress-btn--"]');
        if (e) {
            injectButtons(e);
            o.disconnect()
        }
    });
    o.observe(document.body, {
        childList: true,
        subtree: true
    })
}
observeButton();