(()=>{document.fonts.add(new FontFace("Mulish","url(node_modules/@bea-org/bea-font/mulish.woff2)"));document.fonts.add(new FontFace("Pangram","url(node_modules/@bea-org/bea-font/pangram-regular.woff2)"));document.fonts.add(new FontFace("Pangram","url(node_modules/@bea-org/bea-font/pangram-bold.woff2)",{weight:700}));document.fonts.add(new FontFace("Pangram","url(node_modules/@bea-org/bea-font/pangram-extrabold.woff2)",{weight:800}));window.customElements.define("bea-a",class extends HTMLElement{static get observedAttributes(){return["href","target"]}constructor(){super();this.attachShadow({mode:"open"}).innerHTML=`<style>
  :host {
    color: #6091FF;
    transition-property: color, text-shadow;
    transition-duration: .4s;
  }

  :host([selected]) {
    pointer-events: none;
  }

  :host([selected]),
  :host(:hover) {
    color: #3E66BF;
    text-shadow: 0 0 .5px currentColor, 0 0 .5px currentColor, 0 0 .5px currentColor;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
</style>
<a href="">
  <slot></slot>
</a>`,this._a=this.shadowRoot.querySelector("a")}attributeChangedCallback(i,t,e){switch(i){case"href":case"target":this._a[i]=e;break;default:break}}get href(){return this.getAttribute("href")}set href(i){this.setAttribute("href",i)}get target(){return this.getAttribute("target")}set target(i){this.setAttribute("target",i)}});window.customElements.define("bea-logo",class extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"}).innerHTML=`<style>
  :host {
    display: inline-block;
    position: relative;
    width: 100px;
    height: 100px;
  }

  #background {
    display: none;
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: #6091FF;
  }

  :host([icon]) #background {
    display: block;
  }

  svg {
    position: absolute;
    width: 100%;
    height: 100%;
  }

  :host([icon]) svg {
    left: 20%;
    top: 24%;
    width: 60%;
    height: 60%;
  }

  :host([light]:not([icon])) path:first-of-type {
    fill: white;
  }

  :host([icon]:not([light])) path:first-of-type {
    fill: white;
  }

  :host([light]) #background {
    background-color: white;
  }
</style>
<div id="background"></div>
<svg width="577" height="515" viewBox="0 0 577 515" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path
    d="M560.108 71.5534C541.428 37.0715 430.908 -78.3952 288.096 88.7779L92.5563 304.144C88.1382 309.01 88.2861 316.644 92.8891 321.323L279.781 511.269C284.383 515.946 291.748 515.951 296.356 511.28L526.094 278.379C573.72 231.843 594.122 135.314 560.108 71.5534Z"
    fill="#6091FF" />
  <path
    d="M261.154 43.2483C263.795 45.7716 263.869 49.9183 261.481 52.6829C260.846 53.4189 260.21 54.1597 259.573 54.9052L56.6047 276.928C53.982 279.797 49.5124 279.99 46.7838 277.222C17.9151 247.932 1.90533e-06 207.091 0 161.912C-4.02145e-06 72.8008 69.6965 0.562138 155.672 0.562134C196.368 0.562132 233.417 16.7483 261.154 43.2483Z"
    fill="#FBD874" />
</svg>`}});window.customElements.define("bea-website-menu",class extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"}).innerHTML=`
      <style>
        :host {
          display: grid;
          grid-auto-flow: column;
          gap: 32px;
          position: relative;
          contain: content;
          justify-content: center;
          align-items: center;
        }

        bea-logo {
          width: 40px;
          height: 40px;
        }
      </style>
      <a href="#home"><bea-logo icon></bea-logo></a>
      <bea-a href="#principle">Principe</bea-a>
      <bea-a href="#trust">Confiance</bea-a>
      <bea-a href="#community">Communaut\xE9</bea-a>
    `}});window.customElements.define("bea-website-backgroundcircle",class extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"}).innerHTML=`<style>
  :host {
    display: grid;
    position: relative;
    overflow: hidden;
    contain: content;
    width: 100px;
    height: 100px;
    color: #C9DAFF;
    align-items: center;
    justify-items: center;
    grid-template-columns: minmax(0, 1fr);
    grid-template-rows: minmax(0, 1fr);
    --animation-scale: .95;
    --size-ratio: 1;
  }

  svg {
    width: calc(var(--size) * var(--size-ratio));
    height: calc(var(--size) * var(--size-ratio));
  }

  circle {
    fill: currentColor;
    will-change: transform;
    animation-duration: 10s;
    animation-name: breath;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
    animation-direction: alternate;
    transform-origin: center;
  }

  @keyframes breath {
    0% {
      transform: scale(1);
    }

    100% {
      transform: scale(var(--animation-scale));
    }
  }
</style>
<svg id="bubble" width="1" height="1" viewBox="0 0 1 1" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx=".5" cy=".5" r=".5" />
</svg>`;let i=this.shadowRoot.querySelector("svg");new ResizeObserver(e=>{let s=e[0].contentRect.width,r=e[0].contentRect.height,o=Math.max(s,r);i.style.setProperty("--size",`${o}px`)}).observe(this)}});var T=class extends Set{constructor(){super();this._onceCallbacksMap=new Map}add(t,{once:e=!1}={}){if(e){let s=(...r)=>{t(...r),this.delete(t)};return this._onceCallbacksMap.set(t,s),super.add(s)}else return super.add(t)}delete(t){return this._onceCallbacksMap.delete(t),super.delete(this._onceCallbacksMap.get(t)||t)}dispatch(t){for(let e of this)e(t)}},U=T;var I=1e3/60,q=class extends U{constructor(){super();this._updateBound=this._update.bind(this),this.time=window.performance.now(),this.reset(),document.addEventListener("visibilitychange",()=>{this.reset()}),this._update()}reset(){this._previousTime=window.performance.now(),this.deltaTime=I,this.smoothDeltatime=this.deltaTime,this.timeScale=1,this.smoothTimeScale=this.timeScale}_update(){requestAnimationFrame(this._updateBound),this.time=window.performance.now(),this.deltaTime=this.time-this._previousTime,this.smoothDeltatime+=(this.deltaTime-this.smoothDeltatime)*.05,this.timeScale=this.deltaTime/I,this.smoothTimeScale=this.smoothDeltatime/I,this._previousTime=this.time,this.dispatch()}},x=new q;var L=1,Y=2,C=4,V=8,W=class extends HTMLElement{constructor(){super();this._updateBound=this.update.bind(this),this._pauseFlag=0,new IntersectionObserver(e=>{let s=!1;for(let r of e)r.isIntersecting&&(s=!0);s?this._pauseFlag&=~Y:this._pauseFlag|=Y}).observe(this),document.addEventListener("visibilitychange",()=>{document.hidden?this._pauseFlag|=C:this._pauseFlag&=~C})}connectedCallback(){this._pauseFlag&=~V,document.hidden&&(this._pauseFlag|=C),this._pauseFlag&L||this.update()}disconnectedCallback(){this._pauseFlag|=V}get _pauseFlag(){return this.__pauseFlag}set _pauseFlag(t){this.__pauseFlag!==t&&(this.__pauseFlag=t,this.__pauseFlag?x.delete(this._updateBound):x.add(this._updateBound))}play(){this._pauseFlag&=~L}pause(){this._pauseFlag|=L}get paused(){return!!this._pauseFlag}update(){}},Q=W;var O=class{constructor({width:t=1,height:e=1,columns:s=1,rows:r=1,positions:o=!0,normals:a=!0,uvs:n=!0,indices:p=!0}={}){let u=s+1,c=r+1;o&&(this.positions=new Float32Array((s+1)*(r+1)*3)),a&&(this.normals=new Float32Array((s+1)*(r+1)*3)),n&&(this.uvs=new Float32Array((s+1)*(r+1)*2));for(let h=0;h<c;h++){let l=1-h/r,d=h/r*e-e*.5;for(let f=0;f<u;f++){let b=f/s,m=h*u+f;o&&(this.positions[m*3]=b*t-t*.5,this.positions[m*3+1]=d),a&&(this.normals[m*3+2]=1),n&&(this.uvs[m*2]=b,this.uvs[m*2+1]=1-l)}}if(p){let h=s*r*6;h<2**8?this.indices=new Uint8Array(h):h<2**16?this.indices=new Uint16Array(h):this.indices=new Uint32Array(h);for(let l=0;l<r;l++)for(let d=0;d<s;d++){let f=d+u*l,b=d+u*(l+1),m=d+1+u*(l+1),_=d+1+u*l,g=l*s+d;this.indices[g*6]=f,this.indices[g*6+1]=_,this.indices[g*6+2]=b,this.indices[g*6+3]=b,this.indices[g*6+4]=_,this.indices[g*6+5]=m}}}},X=O;var z=class{constructor({gl:t,geometry:e=void 0,program:s=void 0}){this.gl=t;let r=t.getExtension("OES_vertex_array_object");r&&(this.gl.createVertexArray=r.createVertexArrayOES.bind(r),this.gl.bindVertexArray=r.bindVertexArrayOES.bind(r)),this._vertexArray=this.gl.createVertexArray(),e&&s&&this.add({geometry:e,program:s})}add({geometry:t=void 0,program:e=void 0}={}){this.bind(),e.attributes.set(t.attributes),t.indices&&t.indices.buffer.bind(),this.unbind()}bind(){this.gl.bindVertexArray(this._vertexArray)}unbind(){this.gl.bindVertexArray(null)}},K=z;var M=class{constructor({gl:t,data:e=void 0,width:s=void 0,height:r=void 0,target:o=t.TEXTURE_2D,level:a=0,internalFormat:n=t.RGBA8||t.RGBA,format:p=t.RGBA,type:u=t.UNSIGNED_BYTE,autoGenerateMipmap:c=!0,minFilter:h=c?t.LINEAR_MIPMAP_LINEAR:t.LINEAR,magFilter:l=t.LINEAR,wrapS:d=t.CLAMP_TO_EDGE,wrapT:f=t.CLAMP_TO_EDGE,flipY:b=!1}){this.gl=t,this._texture=this.gl.createTexture(),this._width=s,this._height=r,this._dataWidth=void 0,this._dataHeight=void 0,this._target=o,this._unit=0,this.autoGenerateMipmap=c,this.level=a,this.internalFormat=n,this.format=p,this.type=u,this.minFilter=h,this.magFilter=l,this.wrapS=d,this.wrapT=f,this.flipY=b,this.data=e}generateMipmap(){this.bind(),this.gl.generateMipmap(this._target),this.unbind()}set data(t){this._data=t,this._data&&this._data.length===void 0&&(this._dataWidth=this._data.width||this._data.videoWidth,this._dataHeight=this._data.height||this._data.videoHeight),this.bind(),this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL,this.flipY),this.gl instanceof WebGLRenderingContext&&this._data&&this._data.length===void 0?this.gl.texImage2D(this._target,this.level,this.internalFormat,this.format,this.type,this._data):this.gl.texImage2D(this._target,this.level,this.internalFormat,this.width,this.height,0,this.format,this.type,this._data||null),this.autoGenerateMipmap&&this.gl.generateMipmap(this._target),this.unbind()}get data(){return this._data}set width(t){this._width=t,this.data=this.data}get width(){return this._width||this._dataWidth}set height(t){this._height=t,this.data=this.data}get height(){return this._height||this._dataHeight}set minFilter(t){this._minFilter!==t&&(this._minFilter=t,this.bind(),this.gl.texParameteri(this._target,this.gl.TEXTURE_MIN_FILTER,this._minFilter),this.unbind())}get minFilter(){return this._minFilter}set magFilter(t){this._magFilter!==t&&(this._magFilter=t,this.bind(),this.gl.texParameteri(this._target,this.gl.TEXTURE_MAG_FILTER,this._magFilter),this.unbind())}get magFilter(){return this._magFilter}set wrapS(t){this._wrapS!==t&&(this._wrapS=t,this.bind(),this.gl.texParameteri(this._target,this.gl.TEXTURE_WRAP_S,this._wrapS),this.unbind())}get wrapS(){return this._wrapS}set wrapT(t){this._wrapT!==t&&(this._wrapT=t,this.bind(),this.gl.texParameteri(this._target,this.gl.TEXTURE_WRAP_T,this._wrapT),this.unbind())}get wrapT(){return this._wrapT}set flipY(t){this._flipY!==t&&(this._flipY=t,this.bind(),this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL,this._flipY),this.unbind())}get flipY(){return this._flipY}bind({unit:t=0}={}){this._unit=t,this.gl.activeTexture(this.gl.TEXTURE0+t),this.gl.bindTexture(this._target,this._texture)}unbind({unit:t=this._unit}={}){this.gl.activeTexture(this.gl.TEXTURE0+t),this.gl.bindTexture(this._target,null)}clone(){return new M(this)}},Z=M;var P=class{constructor({gl:t,geometry:e=void 0,program:s=void 0}){this.gl=t,this._vertexArrays=new Map,this._boundTextures=new Set,this.geometry=e,this.program=s}get program(){return this._program}set program(t){this._program=t;let e=this._vertexArrays.get(this.geometry);e.get(this._program)||e.set(this._program,new K({gl:this.gl,geometry:this.geometry,program:this.program}))}get geometry(){return this._geometry}set geometry(t){this._geometry=t,this._vertexArrays.has(this.geometry)||this._vertexArrays.set(this.geometry,new Map)}get vertexArray(){return this._vertexArrays.get(this.geometry).get(this.program)}bind(){this.program.use(),this.vertexArray.bind();for(let[t,e]of this.program.uniformTypes)if(e.startsWith("sampler")){let s=this.program.uniforms.get(t);s instanceof Z&&(s.bind({unit:this.program.textureUnits.get(t)}),this._boundTextures.add(s))}}draw(t={}){t=Object.assign({bind:!1,uniforms:{}},t),this.program.use();for(let[e,s]of Object.entries(t.uniforms))this.program.uniforms.set(e,s);t.bind&&this.bind(),this.geometry.draw(t),t.bind&&this.unbind()}unbind(){this.vertexArray.unbind();for(let t of this._boundTextures)t.unbind(),this._boundTextures.delete(t)}},J=P;var S=class{constructor({gl:t,data:e=null,target:s=t.ARRAY_BUFFER,usage:r=t.STATIC_DRAW}){this.gl=t,this.target=s,this.usage=r,this._buffer=this.gl.createBuffer(),e&&(this.data=e)}set data(t){this._data=t,this.bind(),this.gl.bufferData(this.target,this._data,this.usage),this.unbind()}get data(){return this._data}bind({target:t=this.target,index:e=void 0,offset:s=0,size:r=void 0}={}){e===void 0?this.gl.bindBuffer(t,this._buffer):r===void 0?this.gl.bindBufferBase(t,e,this._buffer):this.gl.bindBufferRange(t,e,this._buffer,s,r)}unbind({target:t=this.target,index:e=void 0,offset:s=0,size:r=void 0}={}){e===void 0?this.gl.bindBuffer(t,null):r===void 0?this.gl.bindBufferBase(t,e,null):this.gl.bindBufferRange(t,e,null,s,r)}},N=S;var Rt=new Map([[WebGLRenderingContext.BYTE,Int8Array],[WebGLRenderingContext.UNSIGNED_BYTE,Uint8Array],[WebGLRenderingContext.SHORT,Int16Array],[WebGLRenderingContext.UNSIGNED_SHORT,Uint16Array],[WebGLRenderingContext.INT,Int32Array],[WebGLRenderingContext.UNSIGNED_INT,Uint32Array],[WebGLRenderingContext.FLOAT,Float32Array]]),Tt=new Map([[Int8Array,WebGLRenderingContext.BYTE],[Uint8Array,WebGLRenderingContext.UNSIGNED_BYTE],[Int16Array,WebGLRenderingContext.SHORT],[Uint16Array,WebGLRenderingContext.UNSIGNED_SHORT],[Int32Array,WebGLRenderingContext.INT],[Uint32Array,WebGLRenderingContext.UNSIGNED_INT],[Float32Array,WebGLRenderingContext.FLOAT],[Float64Array,WebGLRenderingContext.FLOAT]]),F=class{constructor({gl:t,data:e=null,target:s=t.ARRAY_BUFFER,size:r=1,componentType:o=Tt.get(e==null?void 0:e.constructor),byteOffset:a=0,normalized:n=!1,byteStride:p=0,count:u=(e==null?void 0:e.length)/r||1,divisor:c=0}){this.gl=t,this.data=e,this.size=r,this.componentType=o,this.byteOffset=a,this.normalized=n,this.byteStride=p,this.count=u,this.divisor=c,this._buffer=e instanceof N?e:new N({gl:t,data:e,target:s})}get buffer(){return this._buffer}get typedArray(){return new(Rt.get(this.componentType))(this.buffer.data,this.byteOffset,this.count*this.size)}},y=F;var j=class{constructor({gl:t,positions:e=null,normals:s=null,uvs:r=null,attributes:o={},indices:a=null}){this.gl=t,this.indices=null,this.gl.getExtension("OES_element_index_uint"),this._drawElementsInstanced=()=>{},this._drawArraysInstanced=()=>{};let n=this.gl.getExtension("ANGLE_instanced_arrays");n?(this._drawElementsInstanced=n.drawElementsInstancedANGLE.bind(n),this._drawArraysInstanced=n.drawArraysInstancedANGLE.bind(n)):this.gl.drawElementsInstanced&&(this._drawElementsInstanced=this.gl.drawElementsInstanced.bind(this.gl),this._drawArraysInstanced=this.gl.drawArraysInstanced.bind(this.gl)),this.attributes=new Map(o instanceof Map?o:Object.entries(o)),e&&this.attributes.set("position",new y({gl:t,data:e,size:3})),s&&this.attributes.set("normal",new y({gl:t,data:s,size:3})),r&&this.attributes.set("uv",new y({gl:t,data:r,size:2}));for(let[p,u]of this.attributes)u instanceof y||this.attributes.set(p,new y(Object.assign({gl:t},u)));a&&(this.indices=new y({gl:this.gl,target:this.gl.ELEMENT_ARRAY_BUFFER,...a.length!==void 0?{data:a}:a}))}draw({mode:t=this.gl.TRIANGLES,elements:e=!!this.indices,count:s=e?this.indices.count:this.attributes.get("position").count,offset:r=this.indices?this.indices.byteOffset:0,type:o=e?this.indices.componentType:null,first:a=0,instanceCount:n=void 0}={}){e?n!==void 0?this._drawElementsInstanced(t,s,o,r,n):this.gl.drawElements(t,s,o,r):n!==void 0?this._drawArraysInstanced(t,a,s,n):this.gl.drawArrays(t,a,s)}},tt=j;var A=class{static addChunks(t="void main() {}",e){for(let[s,r]of e)switch(s){case"start":t=t.replace(/^(#version .*?\n(\s*precision highp float;\s)?)?([\s\S]*)/,`$1
${r}
$3`);break;case"end":t=t.replace(/(}\s*$)/,`
${r}
$1`);break;case"main":t=t.replace(/(\bvoid\b +\bmain\b[\s\S]*?{\s*)/,`$1
${r}
`);break;default:t=t.replace(s,r)}return t}constructor({vertex:t=`#version 300 es
      void main() {
        gl_Position = vec4(0., 0., 0., 1.);
      }
    `,fragment:e=`#version 300 es
      precision highp float;

      out vec4 fragColor;

      void main() {
        fragColor = vec4(1.);
      }
    `,vertexChunks:s=[],fragmentChunks:r=[],uniforms:o={},dataTypeConctructors:a={Vector2:class extends Float32Array{constructor(){super(2)}},Vector3:class extends Float32Array{constructor(){super(3)}},Vector4:class extends Float32Array{constructor(){super(4)}},Matrix3:class extends Float32Array{constructor(){super([1,0,0,0,1,0,0,0,1])}},Matrix4:class extends Float32Array{constructor(){super([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])}},Texture:class{},TextureCube:class{}}}={}){this.uniforms=o,this.uniformTypes=new Map,this._dataTypeConctructors=a,this._vertex=A.addChunks(t,s),this._fragment=A.addChunks(e,r),this._parseUniforms()}get vertex(){return this._vertex}set vertex(t){this._vertex=t,this._parseUniforms()}get fragment(){return this._fragment}set fragment(t){this._fragment=t,this._parseUniforms()}_createUniform(t,e,s){if(!s)this.uniformTypes.set(t,e);else{this.uniformTypes.set(t,`${e}array`);for(let a=0;a<s;a++)this.uniformTypes.set(`${t}[${a}]`,e)}let r,o;if(/bool/.test(e))isNaN(s)?r=!1:r=new Array(s).fill(!1);else if(/float|double/.test(e))isNaN(s)?r=0:r=new Array(s).fill(0);else if(/int|uint/.test(e))isNaN(s)?r=0:r=new Array(s).fill(0);else if(/sampler2D/.test(e))isNaN(s)?r=new this._dataTypeConctructors.Texture:r=new Array(s).fill(void 0).map(a=>new this._dataTypeConctructors.Texture);else if(/samplerCube/.test(e))isNaN(s)?r=new this._dataTypeConctructors.TextureCube:r=new Array(s).fill(void 0).map(a=>new this._dataTypeConctructors.TextureCube);else if(o=/(.?)vec(\d)/.exec(e)){let a=o[2];isNaN(s)?r=new this._dataTypeConctructors[`Vector${a}`]:r=new Array(s).fill(void 0).map(n=>new this._dataTypeConctructors[`Vector${a}`])}else if(o=/mat(\d)/.exec(e)){let a=o[1];isNaN(s)?r=new this._dataTypeConctructors[`Matrix${a}`]:r=new Array(s).fill(void 0).map(n=>new this._dataTypeConctructors[`Matrix${a}`])}else r=void 0;return r}_parseUniforms(){let t={};this.uniformTypes.clear();for(let e of[this.vertex,this.fragment]){let s=new Map,r=/struct\s*(.*)\s*{\s*([\s\S]*?)}/g,o=/^\s*(.[^ ]+) (.[^ ;[\]]+)\[? *(\d+)? *\]?/gm,a;for(;a=r.exec(e);){let u=a[1],c=a[2],h={},l;for(;l=o.exec(c);){let[,d,f,b]=l,m=parseInt(b);h[f]={type:d,arrayLength:m}}s.set(u,h)}let n=/^\s*uniform (highp|mediump|lowp)? *(.[^ ]+) (.[^ ;[\]]+)\[? *(\d+)? *\]?/gm,p;for(;p=n.exec(e);){let[,,u,c,h]=p,l=s.get(u);if(l)for(let d of Object.keys(l))c=`${c}.${d}`,t[c]=this._createUniform(c,l[d].type,l[d].arrayLength);else{let d=parseInt(h);t[c]=this._createUniform(c,u,d)}}}for(let[e,s]of Object.entries(t))e in this.uniforms||(this.uniforms[e]=s);for(let e of Object.keys(this.uniforms))e in t||delete this.uniforms[e]}},v=A;var $=class{constructor({gl:t,shader:e=new v,transformFeedbackVaryings:s=void 0}){this.gl=t,this._webGL1=this.gl.getParameter(this.gl.VERSION).startsWith("WebGL 1.0"),this._shader=e instanceof v?e:new v(e),this._program=t.createProgram(),this._attachedShaders=new Map,this._textureUnits=new Map,this._vertexAttribDivisor=()=>{};let r=this.gl.getExtension("ANGLE_instanced_arrays");r?this._vertexAttribDivisor=r.vertexAttribDivisorANGLE.bind(r):this.gl.vertexAttribDivisor&&(this._vertexAttribDivisor=this.gl.vertexAttribDivisor.bind(this.gl));let o=this;class a extends Map{set(c,{buffer:h=void 0,location:l=o._attributesLocations.get(c),size:d=1,componentType:f=t.FLOAT,normalized:b=!1,byteStride:m=0,byteOffset:_=0,divisor:g=0}={}){if(c instanceof Map){for(let[Mt,kt]of c)this.set(Mt,kt);return}h.bind(),l===void 0&&(l=t.getAttribLocation(o._program,c),o._attributesLocations.set(c,l)),l!==-1&&(t.enableVertexAttribArray(l),o._webGL1||f===t.FLOAT||f===t.HALF_FLOAT?(f===t.UNSIGNED_INT&&(f=t.FLOAT),t.vertexAttribPointer(l,d,f,b,m,_)):t.vertexAttribIPointer(l,d,f,m,_),o._vertexAttribDivisor(l,g)),h.unbind(),super.set(c,{buffer:h,size:d,componentType:f,normalized:b,byteStride:m,byteOffset:_})}}let n=(u,c)=>{let h=o._uniformLocations.get(u);if(h===void 0&&(h=t.getUniformLocation(o._program,u),o._uniformLocations.set(u,h)),h===null)return;let l=o.uniformTypes.get(u);if(l==="float"||l==="bool")t.uniform1f(h,c);else if(l==="vec2")t.uniform2fv(h,c);else if(l==="vec3")t.uniform3fv(h,c);else if(l==="vec4")t.uniform4fv(h,c);else if(l==="int")t.uniform1i(h,c);else if(l==="ivec2")t.uniform2iv(h,c);else if(l==="ivec3")t.uniform3iv(h,c);else if(l==="ivec4")t.uniform4iv(h,c);else if(l==="mat3")t.uniformMatrix3fv(h,!1,c);else if(l==="mat4")t.uniformMatrix4fv(h,!1,c);else if(l.startsWith("sampler"))t.uniform1i(h,o._textureUnits.get(u));else if(l.endsWith("array"))for(let d=0;d<c.length;d++)n(`${u}[${d}]`,c[d]);else if(c instanceof Object)for(let d of Object.keys(c))n(`${u}.${d}`,c[d])};class p extends Map{set(c,h){h!==void 0&&(n(c,h),o._shader.uniforms[c]=h,super.set(c,h))}}s&&this.gl.transformFeedbackVaryings(this._program,s,t.INTERLEAVED_ATTRIBS),this.attributes=new a,this.uniforms=new p,this._updateShader(this.gl.VERTEX_SHADER,this._shader.vertex),this._updateShader(this.gl.FRAGMENT_SHADER,this._shader.fragment)}set vertexShader(t){this._shader.vertex=t,this._updateShader(this.gl.VERTEX_SHADER,this._shader.vertex)}get vertexShader(){return this._shader.vertex}set fragmentShader(t){this._shader.fragment=t,this._updateShader(this.gl.FRAGMENT_SHADER,this._shader.fragment)}get fragmentShader(){return this._shader.fragment}get uniformTypes(){return this._shader.uniformTypes}get textureUnits(){return this._textureUnits}use(){this.gl.useProgram(this._program)}_updateShader(t,e){if(!e)return;if(this._webGL1)if(e=e.replace(/#version.*?\n/g,""),e=e.replace(/\btexture\b/g,"texture2D"),e=e.replace(/\buvec(.)\b/g,"vec$1"),e=e.replace(/\bflat\b/g,""),t===this.gl.VERTEX_SHADER)e=e.replace(/(^\s*)\bin\b/gm,"$1attribute"),e=e.replace(/(^\s*)\bout\b/gm,"$1varying");else{e=e.replace(/(^\s*)\bin\b/gm,"$1varying");let a=/out vec4 (.*?);/.exec(e);if(a){let n=a[1];e=e.replace(/out.*?;/,""),e=e.replace(new RegExp(`\\b${n}\\b`,"g"),"gl_FragColor")}}let s=this.gl.createShader(t);this.gl.shaderSource(s,e),this.gl.compileShader(s);let r=this.gl.getShaderInfoLog(s);if(this.gl.getShaderParameter(s,this.gl.COMPILE_STATUS))r&&console.warn(r);else{let a=/ERROR: 0:(\d+):/.exec(r);if(a){let n=parseFloat(a[1]),p=e.split(`
`),u=t===this.gl.VERTEX_SHADER?"Vertex Shader":"Fragment Shader";throw console.groupCollapsed(`${u} source`),console.warn(e),console.groupEnd(),new Error(`${u}: ${r}
at: ${p[n-1].replace(/^\s*/,"")}`)}else throw new Error(r)}let o=this._attachedShaders.get(t);if(o&&(this.gl.detachShader(this._program,o),this.gl.deleteShader(o)),this.gl.attachShader(this._program,s),this.gl.deleteShader(s),this._attachedShaders.set(t,s),this._attachedShaders.size===2){this.gl.linkProgram(this._program);let a=this.gl.getProgramInfoLog(this._program);if(this.gl.getProgramParameter(this._program,this.gl.LINK_STATUS))a&&console.warn(a);else throw new Error(a);this._attributesLocations=new Map,this._uniformLocations=new Map,this.use(),this.uniforms.clear(),this._textureUnits.clear();let n=0;for(let[p,u]of Object.entries(this._shader.uniforms))this.uniformTypes.get(p).startsWith("sampler")&&(this._textureUnits.set(p,n),n++),this.uniforms.set(p,u)}}},k=$;var B=class extends J{constructor({gl:t,width:e=void 0,height:s=void 0,columns:r=void 0,rows:o=void 0,normals:a=!1,uvs:n=!1,attributes:p=void 0,program:u=new k({gl:t,shader:new v({vertexChunks:[["start",`
            in vec3 position;
          `],["end",`
            gl_Position = vec4(position, 1.);
          `]]})})}){super({gl:t,geometry:new tt(Object.assign({gl:t,attributes:p},new X({width:e,height:s,columns:r,rows:o,normals:a,uvs:n}))),program:u})}},et=B;var R=class extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"}).innerHTML=`
      <style>
        :host {
          display: block;
          touch-action: none;
        }
        
        canvas {
          width: 100%;
          height: 100%;
          max-height: 100%;
        }
      </style>
      <canvas></canvas>
    `,this.canvas=this.shadowRoot.querySelector("canvas"),this.gl=this.canvas.getContext("webgl2"),this.gl||(this.gl=this.canvas.getContext("webgl")||this.canvas.getContext("experimental-webgl")),new ResizeObserver(e=>{let s=e[0].contentRect.width,r=e[0].contentRect.height;this.canvas.width=s*window.devicePixelRatio,this.canvas.height=r*window.devicePixelRatio,this.gl.viewport(0,0,this.canvas.width,this.canvas.height),this.object.program.uniforms.set("glslCanvasSize",[s,r]),this.draw()}).observe(this.canvas),this.object=new et({gl:this.gl,width:2,height:2}),this.object.bind()}get shader(){return this._shader}set shader(t){var e,s;this._shader=t,this.object.program=new k({gl:this.gl,shader:new v({uniforms:{glslCanvasSize:[this.canvas.width,this.canvas.height],...this._shader.uniforms},vertexChunks:[["end",`
            vPosition = position.xy;
            gl_Position = vec4(position, 1.);
          `],...(e=this._shader.vertexChunks)!=null?e:[],["start",`
            uniform vec2 glslCanvasSize;
            in vec3 position;
            out vec2 vPosition;
          `]],fragmentChunks:[...(s=this._shader.fragmentChunks)!=null?s:[],["start",`
            uniform vec2 glslCanvasSize;
            in vec2 vPosition;
          `]]})}),this.object.bind(),this.draw()}get uniforms(){return this.object.program.uniforms}draw(t){this.gl.clear(this.gl.COLOR_BUFFER_BIT),this.object.draw(t)}},fe=R;customElements.define("damo-glslcanvas",R);var H=class{static styleToRGBA(t){document.head.style.color=t;let e=/rgba?\s*\(\s*(\d*),\s*(\d*)\s*,\s*(\d*)\s*(,\s*([.\d]*))?\s*\)/.exec(getComputedStyle(document.head).getPropertyValue("color"));return e?[parseInt(e[1])/255,parseInt(e[2])/255,parseInt(e[3])/255,e[5]!==void 0?parseFloat(e[5]):1]:null}static RGBToHSL(t,e=[]){let s=t[0],r=t[1],o=t[2],a=Math.max(s,r,o),n=Math.min(s,r,o),p,u,c=(n+a)/2;if(n===a)p=0,u=0;else{let h=a-n;switch(u=c<=.5?h/(a+n):h/(2-a-n),a){case s:p=(r-o)/h+(r<o?6:0);break;case r:p=(o-s)/h+2;break;case o:p=(s-r)/h+4;break}p/=6}return e[0]=p,e[1]=u,e[2]=c,e}static hexToRGB(t){let e=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);return e?[parseInt(e[1],16)/255,parseInt(e[2],16)/255,parseInt(e[3],16)/255]:null}static rgbToHex(t){let e="#";for(let s of t){let r=Math.floor(s*255).toString(16);e+=r.length==1?"0"+r:r}return e}},it=H;var G=typeof Float32Array!="undefined"?Float32Array:Array;var be=Math.PI/180;Math.hypot||(Math.hypot=function(){for(var i=0,t=arguments.length;t--;)i+=arguments[t]*arguments[t];return Math.sqrt(i)});function It(){var i=new G(2);return G!=Float32Array&&(i[0]=0,i[1]=0),i}function st(i,t){return i[0]=t[0],i[1]=t[1],i}function rt(i,t,e){return i[0]=t,i[1]=e,i}function nt(i,t,e){return i[0]=t[0]+e[0],i[1]=t[1]+e[1],i}function at(i,t,e){return i[0]=t[0]-e[0],i[1]=t[1]-e[1],i}function ot(i,t,e){return i[0]=t[0]*e[0],i[1]=t[1]*e[1],i}function ht(i,t,e){return i[0]=t[0]*e,i[1]=t[1]*e,i}function ct(i,t){var e=t[0]-i[0],s=t[1]-i[1];return Math.hypot(e,s)}function lt(i){var t=i[0],e=i[1];return Math.hypot(t,e)}function dt(i){var t=i[0],e=i[1];return t*t+e*e}function ut(i,t){return i[0]=-t[0],i[1]=-t[1],i}function pt(i,t){var e=t[0],s=t[1],r=e*e+s*s;return r>0&&(r=1/Math.sqrt(r)),i[0]=t[0]*r,i[1]=t[1]*r,i}function ft(i,t){return i[0]*t[0]+i[1]*t[1]}function mt(i,t,e){var s=t[0]*e[1]-t[1]*e[0];return i[0]=i[1]=0,i[2]=s,i}function bt(i,t,e,s){var r=t[0],o=t[1];return i[0]=r+s*(e[0]-r),i[1]=o+s*(e[1]-o),i}function gt(i,t,e){var s=t[0],r=t[1];return i[0]=e[0]*s+e[3]*r+e[6],i[1]=e[1]*s+e[4]*r+e[7],i}function xt(i,t,e){var s=t[0],r=t[1];return i[0]=e[0]*s+e[4]*r+e[12],i[1]=e[1]*s+e[5]*r+e[13],i}function vt(i,t,e,s){var r=t[0]-e[0],o=t[1]-e[1],a=Math.sin(s),n=Math.cos(s);return i[0]=r*n-o*a+e[0],i[1]=r*a+o*n+e[1],i}function wt(i,t){return i[0]===t[0]&&i[1]===t[1]}var ye=function(){var i=It();return function(t,e,s,r,o,a){var n,p;for(e||(e=2),s||(s=0),r?p=Math.min(r*e+s,t.length):p=t.length,n=s;n<p;n+=e)i[0]=t[n],i[1]=t[n+1],o(i,i,a),t[n]=i[0],t[n+1]=i[1];return t}}();var E=class extends Float32Array{static distance(t,e){return ct(t,e)}constructor(t=[0,0]){super(t);return this}get x(){return this[0]}set x(t){this[0]=t}get y(){return this[1]}set y(t){this[1]=t}set(t,e){return rt(this,t,e),this}copy(t){return st(this,t),this}add(t){return nt(this,this,t),this}multiply(t){return ot(this,this,t),this}get size(){return lt(this)}get squaredSize(){return dt(this)}subtract(t){return at(this,this,t),this}negate(t=this){return ut(this,t),this}cross(t,e){return mt(this,t,e),this}scale(t){return ht(this,this,t),this}normalize(){return pt(this,this)}dot(t){return ft(this,t)}distance(t){return E.distance(this,t)}equals(t){return wt(this,t)}applyMatrix3(t){return gt(this,this,t),this}applyMatrix4(t){return xt(this,this,t),this}rotate(t,e){vt(this,this,t,e)}lerp(t,e){bt(this,this,t,e)}clone(){return new E(this)}},D=E;var w=class{static powerIn(t,e=2){return Math.pow(t,e)}static powerOut(t,e=2){return 1-Math.abs(Math.pow(t-1,e))}static powerInOut(t,e=2){return t<.5?w.powerIn(t*2,e)/2:w.powerOut(t*2-1,e)/2+.5}static backIn(t,e=1.7){return(1+e)*t*t*t-e*t*t}static backOut(t,e=1.7){return 1+(1+e)*Math.pow(t-1,3)+e*Math.pow(t-1,2)}static backInOut(t,e=1.7){return t<.5?w.backIn(t*2,e)/2:w.backOut(t*2-1,e)/2+.5}},yt=w;var _t=new Map,At=(i,t,{duration:e=0,delay:s=0,easing:r=n=>n,onupdate:o=()=>{},fill:a="none"}={})=>{let n=0,p,u=new Promise(d=>p=d),c=_t.get(i);c||(c=new Set,_t.set(i,c));let h=new Map(Object.entries(t));for(let d of c)for(let f of h.keys())d.delete(f);c.add(h);for(let[d,f]of h)f instanceof Array||h.set(d,[i[d],f]);let l=()=>{e=e||1,n+=x.deltaTime;let d,f=!0;if(n<=s?(d=0,f=a==="both"||a==="backwards"):n>=s+e?d=1:(d=Math.max(n-s,0)/e,d=r(d)),f)for(let[b,m]of h)i[b]=(m[1]-m[0])*d+m[0];o(),d===1&&(a!=="both"&&a!=="forwards"&&x.delete(l),p())};return l(),x.add(l),{finished:u,cancel:()=>{x.delete(l)}}};var Et=15;window.customElements.define("bea-website-button",class extends Q{constructor(){super();this.attachShadow({mode:"open"}).innerHTML=`<style>
  :host {
    --background-color: #6091FF;
    font-family: Pangram, sans-serif;
    font-weight: 700;
    display: grid;
    align-content: center;
    justify-content: center;
    position: relative;
    padding: 30px;
    color: white;
    touch-action: none;
    cursor: pointer;
  }

  damo-glslcanvas {
    position: absolute;
    width: calc(100% + var(--hover-margin) * 2);
    height: calc(100% + var(--hover-margin) * 2);
    top: calc(var(--hover-margin) * -1);
    left: calc(var(--hover-margin) * -1);
  }

  svg {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: .5;
  }

  path {
    fill: red;
  }

  slot {
    position: relative;
    display: block;
    pointer-events: none;
  }

  #focusable {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    pointer-events: none;
    border: none;
    background: none;
    padding: 0;
  }
</style>
<damo-glslcanvas></damo-glslcanvas>
<button id="focusable"></button>
<slot>Button</slot>
<!-- <svg width="218" height="84" viewBox="0 0 218 84" xmlns="http://www.w3.org/2000/svg">
  <path
    d="M0 29.9373C0 15.9659 10.6496 4.35013 24.4408 3.27898C80.7305 -1.09299 137.27 -1.09299 193.559 3.27898C207.35 4.35013 218 15.9659 218 29.9372V54.0627C218 68.0341 207.35 79.6499 193.559 80.721C137.27 85.093 80.7305 85.093 24.4408 80.721C10.6496 79.6499 0 68.0341 0 54.0628V29.9373Z" />
</svg> -->`,this._focusable=this.shadowRoot.querySelector("#focusable"),this._pointerPosition=new D,this._pointerPositionEased=new D,this._pointerHover=0,this._glslCanvas=this.shadowRoot.querySelector("damo-glslcanvas"),this._glslCanvas.style.setProperty("--hover-margin",`${Et}px`),this._glslCanvas.shader={uniforms:{color:it.styleToRGBA(getComputedStyle(this).getPropertyValue("--background-color"))},fragmentChunks:[["start",`
          uniform vec4 color;
          uniform vec2 pointerPosition;
          uniform float pointerHover;
        `],["end",`
          vec2 boxSize = (glslCanvasSize - ${Et.toFixed(1)} * 2.);
          vec2 marginSizeRatio = glslCanvasSize / boxSize;
          vec2 aspectRatio = vec2(boxSize.x / boxSize.y, 1.);

          float pointerDistance = max(0., 1. - distance(vPosition * aspectRatio * marginSizeRatio, pointerPosition * aspectRatio * marginSizeRatio) * .3);
          pointerDistance = smoothstep(0., 1., pointerDistance);
          if(pointerPosition.x == 0. && pointerPosition.y == 0. ) pointerDistance = 0.;

          vec2 boxPosition = vPosition;
          boxPosition *= marginSizeRatio;
          boxPosition.y *= 1. + -(cos(boxPosition.x * 1.67) * .5 + .5) * .2;
          boxPosition.x *= aspectRatio.x;
          // boxPosition *= 1. - pointerDistance * .3;
          vec2 size = vec2(aspectRatio.x, .8);
          vec4 borderRadius = vec4(.55);
          borderRadius.xy = (boxPosition.x > 0.0) ? borderRadius.xy : borderRadius.zw;
          borderRadius.x = (boxPosition.y > 0.0) ? borderRadius.x : borderRadius.y;
          vec2 q = abs(boxPosition) - size + borderRadius.x;
          float df = min(max(q.x, q.y), 0.0) + length(max(q, 0.0)) - borderRadius.x;
          df -= pointerDistance * .2;
          df -= cos((1. - pointerHover) * (1. - pointerDistance) * 8.) * (1. - pointerHover) * .1 * smoothstep(0., .1, pointerHover);

          float aa = 1. / min(glslCanvasSize.x, glslCanvasSize.y) * 1.5;
          float opacity = 1. - smoothstep(-aa, 0., df);
          fragColor = vec4(color.rgb * opacity * color.a, opacity * color.a);
          // fragColor = vec4(vec3(df), 1.);
          // fragColor = vec4(vec3(pointerDistance), 1.);
        `]]};let i;new ResizeObserver(()=>i=this._glslCanvas.getBoundingClientRect()).observe(this),window.addEventListener("resize",()=>i=this._glslCanvas.getBoundingClientRect()),this._pointerHovering=!1,this.addEventListener("pointerenter",t=>{i=this._glslCanvas.getBoundingClientRect(),this._pointerHovering=!0,At(this,{_pointerHover:1},{duration:600,easing:e=>yt.powerInOut(e)})}),this.addEventListener("pointerleave",t=>{this._pointerHovering=!1}),window.addEventListener("pointermove",t=>{!i||(this._pointerPosition.x=(t.clientX-i.x)/i.width*2-1,this._pointerPosition.y=-((t.clientY-i.y)/i.height*2-1))})}focus(){this._focusable.focus()}update(){this._pointerHovering||(this._pointerHover+=-this._pointerHover*.2),this._pointerPositionEased.lerp(this._pointerPosition,.2),this._glslCanvas.draw({uniforms:{pointerHover:this._pointerHover,pointerPosition:this._pointerPositionEased}})}});window.customElements.define("bea-website-mailchimpform",class extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"}).innerHTML=`<style>
  :host {
    display: grid;
    position: relative;
    grid-template-columns: 1fr auto;
    gap: 20px;
    align-items: center;
    justify-items: center;
  }

  form {
    display: contents;
  }

  input {
    width: 100%;
    padding: 15px 25px;
    font-size: 16px;
    border: none;
    border-radius: 100px;
    color: var(--bea-color-black);
    box-sizing: border-box;
  }
  
  input::placeholder {
    color: var(--bea-color-black);
    opacity: .3;
  }

  input:focus {
    outline: none;
    box-shadow: inset 0 0 0 1px var(--bea-color-grey);
  }

  bea-website-button {
    padding: 20px 40px;
  }
</style>
<form action="https://gives.us8.list-manage.com/subscribe/post?u=9478a676a23e73e9922afc992&amp;id=9e77fea305"
  method="post" target="_blank" novalidate>
  <input type="email" value="" name="EMAIL" placeholder="Entrez votre adresse email">
  <input type="submit" style="display: none;">
  <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
  <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text"
      name="b_9478a676a23e73e9922afc992_9e77fea305" tabindex="-1" value=""></div>
  <bea-website-button>M'inscrire</bea-website-button>
</form>`;let i=this.shadowRoot.querySelector("bea-website-button"),t=this.shadowRoot.querySelector("form");i.addEventListener("click",()=>{this.dispatchEvent(new Event("submit",{bubbles:!0})),t.submit()}),t.addEventListener("submit",e=>{this.dispatchEvent(new Event("submit",e))})}});window.customElements.define("bea-website-animatedtext",class extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"}).innerHTML=`
      <style>
        :host {
          display: inline-block;
          position: relative;
        }

        slot {
          display: none;
        }

        #content {
          display: contents;
        }

        #content span {
          will-change: transform, opacity;
          margin-right: -4px;
          display: inline-block;
        }
      </style>
      <slot></slot>
      <div id="content"></div>
    `,this._spans=[],this._content=this.shadowRoot.querySelector("#content")}connectedCallback(){this._compute()}async show(){return this._changeVisibility(!1)}async hide(){return this._changeVisibility(!0)}async _changeVisibility(i){if(i===this.hidden)return;this.hidden=i,this.style.pointerEvents=this.hidden?"none":"";let t=[];for(let[e,s]of this._spans.entries()){s.style.transformOrigin="50% 75%";let r=this.hidden?600:800,o=s.animate([{transform:`translateY(0) scaleX(1) scaleY(${this.hidden?1:0})`,opacity:this.hidden?1:0},{transform:"translateY(-5px) scaleX(.8) scaleY(1.2)",opacity:this.hidden?.6:1,offset:this.hidden?.4:.65},{transform:`translateY(0) scaleX(1) scaleY(${this.hidden?0:1}`,opacity:this.hidden?0:1}],{fill:"both",duration:r,delay:r/16*e,easing:this.hidden?"cubic-bezier(.6,0,.3,-0.4)":"cubic-bezier(.6,1.45,.6,1)"});t.push(o.finished)}await Promise.all(t)}_compute(){this._spans=[],this._content.innerHTML="";for(let i of this.childNodes){if(i.nodeType!==Node.TEXT_NODE){this._content.appendChild(i.cloneNode());continue}for(let t of i.textContent){let e=document.createElement("span");e.innerHTML=t===" "?"&nbsp;":t,this._spans.push(e),this._content.appendChild(e)}}}get textContent(){return super.textContent}set textContent(i){super.textContent=i,this._compute()}get innerHTML(){return super.innerHTML}set innerHTML(i){super.innerHTML=i,this._compute()}});window.customElements.define("bea-icon",class extends HTMLElement{static get observedAttributes(){return["icon"]}constructor(){super();this.attachShadow({mode:"open"}).innerHTML=`<style>
  :host {
    --stroke-width: 1px;
    --size: 25px;
    --icon-size: 100%;
    display: block;
    position: relative;
    width: var(--size);
    height: var(--size);
    box-sizing: border-box;
    color: black;
  }

  :host([type=fill]), :host([type=stroke]) {
    --icon-size: 33%;
    border-radius: 50%;
  }
  
  :host([type=fill]) {
    color: white;
    background-color: black;
    filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.1));
  }

  :host([type=stroke]) {
    border: var(--stroke-width) solid;
  }

  :host([type=fill]) path {
    stroke: white;
  }

  #icon-container {
    display: contents;
    padding: inherit;
  }

  svg {
    padding: inherit;
    box-sizing: border-box;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;
  }

  svg * {
    stroke-width: var(--stroke-width);
    vector-effect: non-scaling-stroke;
    fill: currentColor;
  }

  :host([type=fill]) svg, :host([type=stroke]) svg {
    width: var(--icon-size);
    height: var(--icon-size);
  }
</style>
<div id="icon-container"></div>`,this._iconContainer=this.shadowRoot.querySelector("#icon-container")}attributeChangedCallback(i,t,e){switch(i){case"icon":this._loadIcon(e);break}}async _loadIcon(i){let t=await fetch(`node_modules/@bea-org/bea-icon/${i}.svg`).then(e=>e.text());this._iconContainer.innerHTML=t}get icon(){return this.getAttribute("icon")}set icon(i){this.setAttribute("icon",i)}});window.customElements.define("bea-website-home",class extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"}).innerHTML=`<style>
  :host {
    display: grid;
    position: relative;
    line-height: 1;
    grid-auto-columns: minmax(0, 1fr);
    font-family: Pangram;
    justify-items: center;
    align-items: center;
  }

  bea-website-backgroundcircle {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  #media {
    grid-area: media;
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  #phone {
    width: 100%;
    height: 100%;
    filter: drop-shadow(40px 30px 30px #6B7F9933);
  }

  #phone video {
    width: 100%;
    height: 100%;
    -webkit-mask-image: url(node_modules/@bea-org/bea-website-home/video-mask.svg);
    mask-image: url(node_modules/@bea-org/bea-website-home/video-mask.svg);
    -webkit-mask-size: contain;
    mask-size: contain;
    -webkit-mask-position: center;
    mask-position: center;
    -webkit-mask-repeat: no-repeat;
    mask-repeat: no-repeat;
  }

  #text {
    grid-area: text;
    color: var(--bea-color-blue);
    display: grid;
    max-width: calc(100% - 100px);
  }

  h2 {
    position: relative;
    font-weight: 700;
    white-space: nowrap;
    margin: 0;
  }

  h2 span:nth-of-type(2),
  h2 span:nth-of-type(3) {
    display: block;
  }

  h2 span:nth-of-type(2) {
    color: var(--bea-color-darkblue);
  }

  p {
    color: var(--bea-color-darkblue);
    margin: 0;
    font-style: normal;
    font-weight: bold;
    line-height: 1.2;
  }

  #emailformpopin {
    display: grid;
    background-color: var(--bea-color-ivory);
    border-radius: 24px;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 560px;
    max-width: calc(100% - 32px);
    box-sizing: border-box;
    box-shadow: 40px 30px 30px #6b7f9933;
    will-change: transform, opacity, visibility;
    transition-property: transform, opacity, visibility;
    transition-duration: .5s;
    transition-timing-function: cubic-bezier(0.43, 1.84, 0.48, 0.99);
    transform: translate(-50%, -50%)
  }

  :host(:not([emailformopen])) #emailformpopin {
    transform: translateY(-50px) translate(-50%, -50%);
    opacity: 0;
    transition-duration: .3s;
    visibility: hidden;
    transition-timing-function: ease-in-out;
  }

  #emailformtitle {
    font-size: 32px;
    color: #001A70;
    font-weight: 700;
  }

  #emailformclosebutton,
  #asterisk {
    position: absolute;
    cursor: pointer;
    transition-property: transform;
    transition-duration: .4s;
  }

  #emailformclosebutton:hover,
  #asterisk:hover {
    transform: rotate(90deg);
  }

  #emailformclosebutton {
    background: none;
    border: none;
    padding: 0;
  }

  #emailformclosebutton bea-icon {
    background-color: var(--bea-color-ivory);
    color: var(--bea-color-darkblue);
    --size: 50px;
    --icon-size: 12px;
  }

  #asterisk {
    --size: 0.57em;
    background-color: var(--bea-color-blue);
    left: 1.95em;
  }

  #emailformbutton {
    grid-area: emailbutton;
    font-size: 22px;
  }

  #overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--bea-color-darkblue);
    opacity: 0.6;
    transition-property: opacity;
    transition-duration: .6s;
  }

  :host(:not([emailformopen])) #overlay {
    opacity: 0;
    pointer-events: none;
  }

  @media (min-width: 1024px) {
    :host {
      grid-template-areas: "text media"
        "emailbutton emailbutton";
      grid-template-rows: minmax(0, 1fr) 0;
    }

    #phone {
      max-width: 80vw;
      max-height: 80vh;
      animation-duration: 3s;
      animation-name: float;
      animation-iteration-count: infinite;
      animation-timing-function: ease-in-out;
      animation-direction: alternate;
    }

    #emailformbutton {
      margin-top: -120px;
    }

    #emailformpopin {
      padding: 50px 45px;
      gap: 45px;
    }

    #emailformclosebutton {
      top: 0;
      left: calc(100% + 24px);
    }

    #text {
      width: 520px;
      gap: 30px;
    }

    h2 {
      font-size: 88px;
    }

    p {
      font-size: 24px;
      max-width: 380px;
    }

    bea-website-backgroundcircle {
      left: -10%;
      width: 120%;
      justify-items: start;
      --size-ratio: 2;
    }
  }

  @media (max-width: 1024px) {
    :host {
      grid-template-areas: "emailbutton""text""media";
      grid-template-rows: 84px auto auto;
      gap: 32px;
    }

    #emailformbutton {
      font-size: 16px;
      padding: 20px 24px;
      justify-self: right;
      margin-right: 16px;
    }

    #emailformclosebutton {
      bottom: calc(100% + 24px);
      right: 0;
    }

    #emailformpopin {
      padding: 30px 24px;
      gap: 24px;
    }

    bea-website-mailchimpform {
      grid-template-columns: 1fr;
    }

    #text {
      width: 320px;
      gap: 26px;
      margin-top: -16px;
    }

    #media {
      padding-bottom: 32px;
    }

    #phone {
      width: calc(100% - 140px);
      max-width: 280px;
    }

    h2 {
      font-size: 56px;
    }

    p {
      font-size: 18px;
      max-width: 300px;
    }

    bea-website-backgroundcircle {
      top: 96px;
      height: calc(100% - 96px);
      --size-ratio: 2;
      align-items: start;
    }
  }

  @keyframes float {
    0% {
      transform: translateY(10px);
    }

    100% {
      transform: translateY(-10px);
    }
  }
</style>
<div id="text">
  <h2>
    <!-- <bea-icon id="asterisk" icon="asterisk" type="fill"></bea-icon> -->
    <span>B\xE9a</span>
    <span>le don</span>
    <bea-website-animatedtext></bea-website-animatedtext>
  </h2>
  <p>L\u2019application mobile b\xE9n\xE9vole qui simplifie le don aux associations</p>
</div>
<div id="media">
  <bea-website-backgroundcircle></bea-website-backgroundcircle>
  <div id="phone">
    <video id="phone" poster="node_modules/@bea-org/bea-website-home/poster.png" autoplay loop muted playsinline>
      <source src="node_modules/@bea-org/bea-website-home/userflow.webm" type="video/webm">
      <source src="node_modules/@bea-org/bea-website-home/userflow.mp4" type="video/mp4">
    </video>
  </div>
  </damo-animation-lottie>
</div>
<bea-website-button id="emailformbutton">\xC7a m\u2019int\xE9resse</bea-website-button>
<div id="overlay"></div>
<section id="emailformpopin" hidden>
  <div id="emailformtitle">On vous en dit plus bient\xF4t !</div>
  <bea-website-mailchimpform></bea-website-mailchimpform>
  <button id="emailformclosebutton">
    <bea-icon icon="close" type="fill"></bea-icon>
  </button>
</section>`;let i=this.shadowRoot.querySelector("#emailformpopin");this.shadowRoot.querySelector("#emailformbutton").addEventListener("click",()=>{this.toggleAttribute("emailformopen",!0)}),this.shadowRoot.querySelector("#emailformclosebutton").addEventListener("click",()=>this.toggleAttribute("emailformopen",!1)),this.shadowRoot.querySelector("#overlay").addEventListener("click",()=>this.toggleAttribute("emailformopen",!1)),i.addEventListener("submit",()=>this.toggleAttribute("emailformopen",!1));let r=this.shadowRoot.querySelector("bea-website-animatedtext"),o=3e3,a=["facile","s\xE9curis\xE9","sur-<wbr>mesure"],n=["var(--bea-color-green)","var(--bea-color-blue)","var(--bea-color-coral)"],p=-1,u=async()=>{await r.hide(),p=(p+1)%a.length,r.innerHTML=a[p],r.style.color=n[p],await r.show(),setTimeout(u,o)};u()}});window.customElements.define("bea-website-main",class extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"}).innerHTML=`<style>
  @import "./node_modules/@bea-org/bea-color/index.css";

  :host {
    display: block;
    position: relative;
    contain: content;
    overflow: hidden auto;
    font-family: 'Mulish', sans-serif;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
  
  #header {
    position: absolute;
    display: grid;
    grid-template-columns: auto auto;
    align-items: center;
    gap: 12px;
  }

  bea-logo {
    width: 40px;
    height: 40px;
  }

  #name {
    margin: 0;
    color: var(--bea-color-blue);
    font-weight: bolder;
    font-size: 24px;
    font-family: Pangram;
  }

  bea-website-home {
    height: 100%;
  }

  @media (min-width: 1024px) {
    #header {
      top: 40px;
      left: 80px;
    }
  }

  @media (max-width: 1024px) {
    #header {
      top: 24px;
      left: 16px;
    }
  }
</style>
<div id="header">
  <bea-logo icon></bea-logo>
  <h1 id="name">B\xE9a</h1>
</div>
<!-- <bea-website-menu></bea-website-menu> -->
<bea-website-home></bea-website-home>`}});})();
