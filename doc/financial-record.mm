<map version="1.0.1">
<!-- To view this file, download free mind mapping software FreeMind from http://freemind.sourceforge.net -->
<node CREATED="1595432337381" ID="ID_1912044071" MODIFIED="1608562664750" TEXT="React Financial Record">
<richcontent TYPE="NOTE"><html>
  <head>
    
  </head>
  <body>
    <p>
      Programa React - Redux - UseForm:
    </p>
    <p>
      &#160;&#160;&#160;- Programa de Registro Financiero con React.
    </p>
    <p>
      
    </p>
  </body>
</html></richcontent>
<node CREATED="1595433772316" HGAP="42" ID="ID_1834124251" MODIFIED="1608677675291" POSITION="left" TEXT="Librer&#xed;as" VSHIFT="73">
<richcontent TYPE="NOTE"><html>
  <head>
    
  </head>
  <body>
    <p>
      <b>Crear Aplicativo</b>
    </p>
    <p>
      npm create-react-app react-financial-record
    </p>
    <p>
      
    </p>
    <p>
      <a data-pjax="#js-repo-pjax-container" class="" href="https://github.com/Semantic-Org/Semantic-UI-React" style="background-color: rgb(250, 251, 252); color: black; text-decoration: none; font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji; font-size: 20px; font-style: normal; font-weight: 600; letter-spacing: normal; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; word-spacing: 0px"><font color="black" face="-apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji" size="20px"><b>Redux</b></font></a>
    </p>
    <p>
      &#160;&#160;&#160;* npm install redux react-redux --save
    </p>
    <p>
      &#160;&#160;&#160;&#160;* npm install --save redux react-redux
    </p>
    <p>
      
    </p>
    <p>
      <b>Navigator - router</b>
    </p>
    <p>
      &#160;&#160;&#160;* npm install --save react-router react-router-dom
    </p>
    <p>
      &#160;
    </p>
    <p>
      <a data-pjax="#js-repo-pjax-container" class="" href="https://github.com/Semantic-Org/Semantic-UI-React" style="background-color: rgb(250, 251, 252); color: black; text-decoration: none; font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji; font-size: 20px; font-style: normal; font-weight: 600; letter-spacing: normal; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; word-spacing: 0px"><font color="black" face="-apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji" size="20px"><b>Semantic-UI-React_ 2.0.1</b></font></a>
    </p>
    <p>
      &#160;&#160;&#160;&#160;* npm install semantic-ui-react semantic-ui-css
    </p>
    <p>
      &#160;
    </p>
    <p>
      index.js
    </p>
    <pre class=" language-js" style="font-family: Consolas, Monaco, Andale Mono, Ubuntu Mono, monospace; font-size: 12px; margin-top: 0px; margin-right: 0px; margin-bottom: 0px; margin-left: 0px; color: rgb(204, 204, 204); background-color: rgb(45,; background-position: 45, 45); background-image: null; background-repeat: repeat; background-attachment: scroll; text-align: left; white-space: pre; word-spacing: 0px; line-height: 1.5; padding-top: 0; padding-right: 0; padding-bottom: 0; padding-left: 0; font-style: normal; font-weight: 400; letter-spacing: normal; text-indent: 0px; text-transform: none"><code class=" language-js" style="font-family: Consolas, Monaco, Andale Mono, Ubuntu Mono, monospace; font-size: 1em; color: rgb(204, 204, 204); background-position: 0px 0px; background-image: null; background-repeat: repeat; background-attachment: scroll; text-align: left; white-space: pre; word-spacing: normal; line-height: 1.5"><font face="Consolas, Monaco, Andale Mono, Ubuntu Mono, monospace" size="4" color="rgb(204, 153, 205)">import</font><font face="Consolas, Monaco, Andale Mono, Ubuntu Mono, monospace" size="4" color="rgb(204, 204, 204)"> </font><font face="Consolas, Monaco, Andale Mono, Ubuntu Mono, monospace" size="4" color="rgb(126, 198, 153)">'semantic-ui-css/semantic.min.css'</font></code></pre>
    <p>
      
    </p>
    <p>
      <font color="black" face="monospace, monospace">index.html</font>
    </p>
    <pre class=" language-html" style="font-family: Consolas, Monaco, Andale Mono, Ubuntu Mono, monospace; font-size: 12px; margin-top: 0px; margin-right: 0px; margin-bottom: 0px; margin-left: 0px; color: rgb(204, 204, 204); background-color: rgb(45,; background-position: 45, 45); background-image: null; background-repeat: repeat; background-attachment: scroll; text-align: left; white-space: pre; word-spacing: 0px; line-height: 1.5; padding-top: 0; padding-right: 0; padding-bottom: 0; padding-left: 0; font-style: normal; font-weight: 400; letter-spacing: normal; text-indent: 0px; text-transform: none"><code class=" language-html" style="font-family: Consolas, Monaco, Andale Mono, Ubuntu Mono, monospace; font-size: 1em; color: rgb(204, 204, 204); background-position: 0px 0px; background-image: null; background-repeat: repeat; background-attachment: scroll; text-align: left; white-space: pre; word-spacing: normal; line-height: 1.5"><font face="Consolas, Monaco, Andale Mono, Ubuntu Mono, monospace" size="1em" color="rgb(204, 204, 204)">&lt;</font><font face="Consolas, Monaco, Andale Mono, Ubuntu Mono, monospace" size="1em" color="rgb(226, 119, 122)">link
  async
  rel</font><font face="Consolas, Monaco, Andale Mono, Ubuntu Mono, monospace" size="1em" color="rgb(204, 204, 204)">=&quot;</font><font face="Consolas, Monaco, Andale Mono, Ubuntu Mono, monospace" size="1em" color="rgb(126, 198, 153)">stylesheet</font><font face="Consolas, Monaco, Andale Mono, Ubuntu Mono, monospace" size="1em" color="rgb(204, 204, 204)">&quot;</font><font face="Consolas, Monaco, Andale Mono, Ubuntu Mono, monospace" size="1em" color="rgb(226, 119, 122)">  href</font><font face="Consolas, Monaco, Andale Mono, Ubuntu Mono, monospace" size="1em" color="rgb(204, 204, 204)">=&quot;</font><font face="Consolas, Monaco, Andale Mono, Ubuntu Mono, monospace" size="1em" color="rgb(126, 198, 153)">//cdn.jsdelivr.net/npm/semantic-ui@${props.versions.sui}/dist/semantic.min.css</font><font face="Consolas, Monaco, Andale Mono, Ubuntu Mono, monospace" size="1em" color="rgb(204, 204, 204)">&quot;/&gt;
&lt;</font><font face="Consolas, Monaco, Andale Mono, Ubuntu Mono, monospace" size="1em" color="rgb(226, 119, 122)">script
  async
  src</font><font face="Consolas, Monaco, Andale Mono, Ubuntu Mono, monospace" size="1em" color="rgb(204, 204, 204)">=&quot;</font><font face="Consolas, Monaco, Andale Mono, Ubuntu Mono, monospace" size="1em" color="rgb(126, 198, 153)">//cdn.jsdelivr.net/npm/semantic-ui@${props.versions.sui}/dist/semantic.min.js</font><font face="Consolas, Monaco, Andale Mono, Ubuntu Mono, monospace" size="1em" color="rgb(204, 204, 204)">&quot;&gt;&lt;/</font><font face="Consolas, Monaco, Andale Mono, Ubuntu Mono, monospace" size="1em" color="rgb(226, 119, 122)">script</font><font face="Consolas, Monaco, Andale Mono, Ubuntu Mono, monospace" size="1em" color="rgb(204, 204, 204)">&gt;</font></code></pre>
    <p>
      
    </p>
    <p>
      
    </p>
    <p>
      Tablas:
    </p>
    <p>
      <font color="rgb(0, 0, 0)" face="monospace, monospace">&#160;&#160;npm&#160;install&#160;react-bootstrap-table-next&#160;--save </font>
    </p>
    <p>
      
    </p>
    <p>
      <font color="rgb(0, 0, 0)" face="monospace, monospace">Filter: </font>
    </p>
    <p>
      <font color="rgb(0, 0, 0)" face="monospace, monospace">&#160;&#160;npm&#160;install&#160;react-bootstrap-table2-filter&#160;--save</font>
    </p>
    <p>
      
    </p>
    <p>
      Paginaci&#243;n:
    </p>
    <p>
      <font color="rgb(0, 0, 0)" face="monospace, monospace">&#160;&#160;npm&#160;install&#160;react-bootstrap-table2-paginator&#160;--save</font>
    </p>
    <p>
      
    </p>
    <p>
      BootStrap:
    </p>
    <p>
      <font color="rgb(51, 51, 51)" face="Fira Mono, Andale Mono, Consolas, monospace" size="16px">&#160;npm install bootstrap</font>
    </p>
    <p>
      
    </p>
    <p>
      
    </p>
    <p>
      <b>Inicial:</b>
    </p>
    <p>
      &#160;&#160;&#160;* npm start
    </p>
  </body>
</html>
</richcontent>
</node>
</node>
</map>
