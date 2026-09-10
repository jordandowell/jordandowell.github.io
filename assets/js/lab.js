const toggle = document.querySelector('.menu-toggle');
const nav = document.getElementById('main-nav');
if(toggle && nav){
  toggle.hidden = false;
  toggle.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')!=='true';toggle.setAttribute('aria-expanded',String(open));nav.classList.toggle('open',open);});
  document.addEventListener('keydown',event=>{if(event.key==='Escape' && toggle.getAttribute('aria-expanded')==='true'){toggle.setAttribute('aria-expanded','false');nav.classList.remove('open');toggle.focus();}});
}
const input=document.getElementById('site-search');
if(input){
 const pages=JSON.parse(document.getElementById('search-data').textContent);
 const results=document.getElementById('search-results'), status=document.getElementById('search-status');
 input.addEventListener('input',()=>{const query=input.value.trim().toLocaleLowerCase();results.replaceChildren();if(!query){status.textContent='';return;}
 const words=query.split(/\s+/);const matches=pages.filter(p=>words.every(word=>(p.title+' '+p.text).toLocaleLowerCase().includes(word)));
 status.textContent=matches.length?`${matches.length} result${matches.length===1?'':'s'}`:'No results. Try another research topic or name.';
 for(const page of matches){const article=document.createElement('article');article.className='entry';const heading=document.createElement('h2'),link=document.createElement('a'),snippet=document.createElement('p');link.href=page.url;link.textContent=page.title;heading.append(link);snippet.textContent=page.text.slice(0,200)+(page.text.length>200?'…':'');article.append(heading,snippet);results.append(article);}
 });
}
