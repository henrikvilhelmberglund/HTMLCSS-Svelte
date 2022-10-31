(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))f(r);new MutationObserver(r=>{for(const p of r)if(p.type==="childList")for(const a of p.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&f(a)}).observe(document,{childList:!0,subtree:!0});function u(r){const p={};return r.integrity&&(p.integrity=r.integrity),r.referrerpolicy&&(p.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?p.credentials="include":r.crossorigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function f(r){if(r.ep)return;r.ep=!0;const p=u(r);fetch(r.href,p)}})();function k(){}function pt(t){return t()}function st(){return Object.create(null)}function ye(t){t.forEach(pt)}function at(t){return typeof t=="function"}function ge(t,i){return t!=t?i==i:t!==i||t&&typeof t=="object"||typeof t=="function"}let _e;function mt(t,i){return _e||(_e=document.createElement("a")),_e.href=i,t===_e.href}function _t(t){return Object.keys(t).length===0}function x(t,i){t.appendChild(i)}function l(t,i,u){t.insertBefore(i,u||null)}function n(t){t.parentNode.removeChild(t)}function o(t){return document.createElement(t)}function m(t){return document.createTextNode(t)}function v(){return m(" ")}function xt(t,i,u,f){return t.addEventListener(i,u,f),()=>t.removeEventListener(i,u,f)}function _(t,i,u){u==null?t.removeAttribute(i):t.getAttribute(i)!==u&&t.setAttribute(i,u)}function vt(t){return Array.from(t.childNodes)}let et;function ee(t){et=t}const g=[],ot=[],ve=[],ut=[],ct=Promise.resolve();let ze=!1;function yt(){ze||(ze=!0,ct.then(dt))}function De(t){ve.push(t)}const Ye=new Set;let xe=0;function dt(){const t=et;do{for(;xe<g.length;){const i=g[xe];xe++,ee(i),bt(i.$$)}for(ee(null),g.length=0,xe=0;ot.length;)ot.pop()();for(let i=0;i<ve.length;i+=1){const u=ve[i];Ye.has(u)||(Ye.add(u),u())}ve.length=0}while(g.length);for(;ut.length;)ut.pop()();ze=!1,Ye.clear(),ee(t)}function bt(t){if(t.fragment!==null){t.update(),ye(t.before_update);const i=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,i),t.after_update.forEach(De)}}const ce=new Set;let Ct;function Ge(t,i){t&&t.i&&(ce.delete(t),t.i(i))}function rt(t,i,u,f){if(t&&t.o){if(ce.has(t))return;ce.add(t),Ct.c.push(()=>{ce.delete(t),f&&(u&&t.d(1),f())}),t.o(i)}else f&&f()}function ft(t){t&&t.c()}function Xe(t,i,u,f){const{fragment:r,after_update:p}=t.$$;r&&r.m(i,u),f||De(()=>{const a=t.$$.on_mount.map(pt).filter(at);t.$$.on_destroy?t.$$.on_destroy.push(...a):ye(a),t.$$.on_mount=[]}),p.forEach(De)}function Ze(t,i){const u=t.$$;u.fragment!==null&&(ye(u.on_destroy),u.fragment&&u.fragment.d(i),u.on_destroy=u.fragment=null,u.ctx=[])}function Tt(t,i){t.$$.dirty[0]===-1&&(g.push(t),yt(),t.$$.dirty.fill(0)),t.$$.dirty[i/31|0]|=1<<i%31}function tt(t,i,u,f,r,p,a,b=[-1]){const c=et;ee(t);const d=t.$$={fragment:null,ctx:[],props:p,update:k,not_equal:r,bound:st(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(i.context||(c?c.$$.context:[])),callbacks:st(),dirty:b,skip_bound:!1,root:i.target||c.$$.root};a&&a(d.root);let C=!1;if(d.ctx=u?u(t,i.props||{},(y,T,...w)=>{const $=w.length?w[0]:T;return d.ctx&&r(d.ctx[y],d.ctx[y]=$)&&(!d.skip_bound&&d.bound[y]&&d.bound[y]($),C&&Tt(t,y)),T}):[],d.update(),C=!0,ye(d.before_update),d.fragment=f?f(d.ctx):!1,i.target){if(i.hydrate){const y=vt(i.target);d.fragment&&d.fragment.l(y),y.forEach(n)}else d.fragment&&d.fragment.c();i.intro&&Ge(t.$$.fragment),Xe(t,i.target,i.anchor,i.customElement),dt()}ee(c)}class nt{$destroy(){Ze(this,1),this.$destroy=k}$on(i,u){if(!at(u))return k;const f=this.$$.callbacks[i]||(this.$$.callbacks[i]=[]);return f.push(u),()=>{const r=f.indexOf(u);r!==-1&&f.splice(r,1)}}$set(i){this.$$set&&!_t(i)&&(this.$$.skip_bound=!0,this.$$set(i),this.$$.skip_bound=!1)}}function $t(t){let i,u,f,r,p,a,b,c,d,C,y,T,w,$,h,A,F,N,I,S,J,H,P,E;return{c(){i=o("nav"),i.innerHTML=`<ul><li><a href="index.html">Hem</a></li> 
    <li><a href="about.svelte">Om oss</a></li> 
    <li><a href="contact.svelte">Kontakta oss</a></li></ul>`,u=v(),f=o("div"),r=o("select"),p=o("option"),p.textContent="V\xE4lj spr\xE5k",a=o("option"),a.textContent="Svenska",b=o("option"),b.textContent="Engelska",c=o("option"),c.textContent="Spanska",d=o("option"),d.textContent="Japanska",C=o("option"),C.textContent="Japanska",y=v(),T=o("h1"),T.textContent="HTML - Introduktion",w=v(),$=o("h2"),$.textContent="Javascript \xE4r kul!",h=v(),A=o("p"),A.textContent=`Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident amet repellendus temporibus, eos expedita aperiam asperiores perspiciatis velit\r
    molestias debitis placeat consequuntur magni sequi explicabo. Quia, ipsa! Velit, magnam vel?`,F=v(),N=o("h3"),N.textContent="F\xF6rdelarna med JS",I=v(),S=o("p"),S.textContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, quisquam?",J=v(),H=o("h2"),H.textContent="Men CSS \xE4r roligare!",P=v(),E=o("p"),E.textContent="Lorem ipsum dolor sit amet.",p.disabled=!0,p.hidden=!0,p.selected=!0,p.__value="V\xE4lj spr\xE5k",p.value=p.__value,a.__value="",a.value=a.__value,b.__value="",b.value=b.__value,c.__value="",c.value=c.__value,c.disabled=!0,d.__value="",d.value=d.__value,d.hidden=!0,C.__value="",C.value=C.__value,_(r,"name",""),_(r,"id",""),_(f,"class","svelte-1ymsrqi")},m(L,O){l(L,i,O),l(L,u,O),l(L,f,O),x(f,r),x(r,p),x(r,a),x(r,b),x(r,c),x(r,d),x(r,C),x(f,y),x(f,T),x(f,w),x(f,$),x(f,h),x(f,A),x(f,F),x(f,N),x(f,I),x(f,S),x(f,J),x(f,H),x(f,P),x(f,E)},p:k,i:k,o:k,d(L){L&&n(i),L&&n(u),L&&n(f)}}}class Lt extends nt{constructor(i){super(),tt(this,i,null,$t,ge,{})}}function kt(t){let i,u,f,r,p,a,b,c,d,C,y,T,w,$,h,A,F,N,I,S,J,H,P,E,L,O,be,te,Ce,ne,Te,le,$e,Le,ke,B,lt,we,ie,Se,Y,Me,V,K,He,se,Ee,z,Oe,oe,qe,q,je,D,Ae,G,Ne,j,M,Q,R,he,ue,Fe,re,Ie,fe,Je,pe,Pe,ae,Be,de,Ve,me,Ke,X,Qe,U,Re,W,Ue,Z,We,it;return{c(){i=m("Which HTML element defines.. a hyperlink = "),u=o("a"),u.textContent="a link to google",f=m(`\r
\r
an article =\r
`),r=o("article"),r.textContent="This is an article tag",p=m(`\r
\r
content aside from the page content =\r
`),a=o("aside"),a.textContent="This is content aside from the page content",b=m(`\r
\r
bold text =`),c=o("b"),c.textContent="This text is bold",d=m(`\r
\r
the document's body = `),C=o("body"),C.textContent="This is the document body",y=m(`\r
\r
a list item =\r
`),T=o("li"),T.textContent="This is a list item",w=m(`\r
\r
the document\u2019s head =`),$=o("head"),$.textContent="This is the document head",h=m(`\r
\r
a single line break = `),A=o("br"),F=m(`\r
also\r
`),N=o("hr"),I=m(`\r
\r
a clickable button =`),S=o("button"),S.textContent="Click me",J=m(`\r
\r
a section in a document (OBS! Finns fler \xE4n ett r\xE4tt svar.) =\r
`),H=o("div"),H.textContent="This is a div",P=v(),E=o("span"),E.textContent="This is a span",L=v(),O=o("section"),O.textContent="This is a section",be=v(),te=o("header"),te.textContent="This is a header",Ce=v(),ne=o("footer"),ne.textContent="This is a footer",Te=v(),le=o("nav"),le.textContent="This is a navigation link",$e=m(`\r
and all other semantic tags\r
`),Le=o("br"),ke=m(`\r
an image =`),B=o("img"),we=m(`\r
\r
the main content of a document =\r
`),ie=o("main"),ie.textContent="This is the main content of a document",Se=m(`\r
\r
an ordered list =\r
`),Y=o("ol"),Y.innerHTML=`<li>This is</li> 
  <li>an ordered list</li>`,Me=m(`\r
\r
an option in a drop-down list =`),V=o("select"),K=o("option"),K.textContent="This is an option",He=m(`\r
\r
important text in a paragrapha= `),se=o("strong"),se.textContent="This text is important",Ee=m(`\r
\r
a row in a table =\r
`),z=o("table"),z.innerHTML=`<tr>This is a row in a table</tr> 
  <tr><td class="svelte-ayl5u2">This is a cell</td></tr>`,Oe=m(`\r
\r
an unordered list =\r
`),oe=o("ul"),oe.innerHTML=`<li>This is an</li> 
  <li>Unordered list</li>`,qe=m(`\r
\r
a multiline input control (text area) =`),q=o("textarea"),je=m(`\r
\r
a table =\r
`),D=o("table"),D.textContent="This is a table",Ae=v(),G=o("table"),G.innerHTML='<th class="svelte-ayl5u2">This is a table header</th><tr>Row</tr><td class="svelte-ayl5u2">Cell</td>',Ne=m(`\r
\r
a drop-down list =`),j=o("select"),M=o("option"),M.textContent="This is a dropdown list",Q=o("option"),Q.textContent="option 1",R=o("option"),R.textContent="option 2",he=m(`\r
\r
a header for a document or section =\r
`),ue=o("header"),ue.textContent="This is a header",Fe=m(`\r
\r
a heading for a document or section =\r
`),re=o("h1"),re.textContent="This is a heading",Ie=v(),fe=o("h2"),fe.textContent="This is a heading used after h1",Je=v(),pe=o("h3"),pe.textContent="This is a heading used after h2",Pe=v(),ae=o("h4"),ae.textContent="This is a heading used after h3",Be=v(),de=o("h5"),de.textContent="This is a heading used after h4",Ve=v(),me=o("h6"),me.textContent="This is a heading used after h5",Ke=m(`\r
\r
an input control =`),X=o("input"),Qe=v(),U=o("input"),Re=v(),W=o("input"),Ue=m(`\r
\r
a cell in a table =\r
`),Z=o("table"),Z.innerHTML='<tr><td class="svelte-ayl5u2">This is a cell in a table</td></tr>',_(u,"href","http://google.com"),mt(B.src,lt="/src/assets/svelte.svg")||_(B,"src",lt),_(B,"alt","svelte logo"),_(Y,"type","I"),K.__value="",K.value=K.__value,_(V,"name",""),_(V,"id",""),_(z,"class","svelte-ayl5u2"),_(q,"name",""),_(q,"id",""),_(q,"cols","30"),_(q,"rows","10"),q.value="This is a text area",_(D,"class","svelte-ayl5u2"),_(G,"class","svelte-ayl5u2"),M.__value="",M.value=M.__value,M.disabled=!0,M.hidden=!0,M.selected=!0,Q.__value="",Q.value=Q.__value,R.__value="",R.value=R.__value,_(j,"name",""),_(j,"id",""),_(X,"type","button"),X.value="This is a button input control",_(U,"type","color"),_(U,"name","This is a color input control"),_(U,"id",""),_(W,"type","file"),_(W,"name","This is a file input control"),_(W,"id",""),_(Z,"class","svelte-ayl5u2")},m(e,s){l(e,i,s),l(e,u,s),l(e,f,s),l(e,r,s),l(e,p,s),l(e,a,s),l(e,b,s),l(e,c,s),l(e,d,s),l(e,C,s),l(e,y,s),l(e,T,s),l(e,w,s),l(e,$,s),l(e,h,s),l(e,A,s),l(e,F,s),l(e,N,s),l(e,I,s),l(e,S,s),l(e,J,s),l(e,H,s),l(e,P,s),l(e,E,s),l(e,L,s),l(e,O,s),l(e,be,s),l(e,te,s),l(e,Ce,s),l(e,ne,s),l(e,Te,s),l(e,le,s),l(e,$e,s),l(e,Le,s),l(e,ke,s),l(e,B,s),l(e,we,s),l(e,ie,s),l(e,Se,s),l(e,Y,s),l(e,Me,s),l(e,V,s),x(V,K),l(e,He,s),l(e,se,s),l(e,Ee,s),l(e,z,s),l(e,Oe,s),l(e,oe,s),l(e,qe,s),l(e,q,s),l(e,je,s),l(e,D,s),l(e,Ae,s),l(e,G,s),l(e,Ne,s),l(e,j,s),x(j,M),x(j,Q),x(j,R),l(e,he,s),l(e,ue,s),l(e,Fe,s),l(e,re,s),l(e,Ie,s),l(e,fe,s),l(e,Je,s),l(e,pe,s),l(e,Pe,s),l(e,ae,s),l(e,Be,s),l(e,de,s),l(e,Ve,s),l(e,me,s),l(e,Ke,s),l(e,X,s),l(e,Qe,s),l(e,U,s),l(e,Re,s),l(e,W,s),l(e,Ue,s),l(e,Z,s),We||(it=xt(S,"click",wt),We=!0)},p:k,i:k,o:k,d(e){e&&n(i),e&&n(u),e&&n(f),e&&n(r),e&&n(p),e&&n(a),e&&n(b),e&&n(c),e&&n(d),e&&n(C),e&&n(y),e&&n(T),e&&n(w),e&&n($),e&&n(h),e&&n(A),e&&n(F),e&&n(N),e&&n(I),e&&n(S),e&&n(J),e&&n(H),e&&n(P),e&&n(E),e&&n(L),e&&n(O),e&&n(be),e&&n(te),e&&n(Ce),e&&n(ne),e&&n(Te),e&&n(le),e&&n($e),e&&n(Le),e&&n(ke),e&&n(B),e&&n(we),e&&n(ie),e&&n(Se),e&&n(Y),e&&n(Me),e&&n(V),e&&n(He),e&&n(se),e&&n(Ee),e&&n(z),e&&n(Oe),e&&n(oe),e&&n(qe),e&&n(q),e&&n(je),e&&n(D),e&&n(Ae),e&&n(G),e&&n(Ne),e&&n(j),e&&n(he),e&&n(ue),e&&n(Fe),e&&n(re),e&&n(Ie),e&&n(fe),e&&n(Je),e&&n(pe),e&&n(Pe),e&&n(ae),e&&n(Be),e&&n(de),e&&n(Ve),e&&n(me),e&&n(Ke),e&&n(X),e&&n(Qe),e&&n(U),e&&n(Re),e&&n(W),e&&n(Ue),e&&n(Z),We=!1,it()}}}function wt(){alert("You pressed me!")}class St extends nt{constructor(i){super(),tt(this,i,null,kt,ge,{})}}function Mt(t){let i,u,f,r,p;return u=new Lt({}),r=new St({}),{c(){i=o("main"),ft(u.$$.fragment),f=v(),ft(r.$$.fragment)},m(a,b){l(a,i,b),Xe(u,i,null),x(i,f),Xe(r,i,null),p=!0},p:k,i(a){p||(Ge(u.$$.fragment,a),Ge(r.$$.fragment,a),p=!0)},o(a){rt(u.$$.fragment,a),rt(r.$$.fragment,a),p=!1},d(a){a&&n(i),Ze(u),Ze(r)}}}class Ht extends nt{constructor(i){super(),tt(this,i,null,Mt,ge,{})}}new Ht({target:document.getElementById("app")});
