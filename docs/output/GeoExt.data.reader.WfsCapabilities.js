Ext.data.JsonP.GeoExt_data_reader_WfsCapabilities({"parentMixins":[],"inheritdoc":null,"extends":"Ext.data.reader.Json","alternateClassNames":["GeoExt.data.reader.WFSCapabilities","GeoExt.data.WFSCapabilitiesReader"],"requires":[],"tagname":"class","singleton":false,"inheritable":false,"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"mixins":[],"code_type":"ext_define","component":false,"uses":[],"members":{"cfg":[],"method":[{"owner":"GeoExt.data.reader.WfsCapabilities","tagname":"method","meta":{},"name":"constructor","id":"method-constructor"},{"owner":"GeoExt.data.reader.WfsCapabilities","tagname":"method","meta":{},"name":"getResponseData","id":"method-getResponseData"},{"owner":"GeoExt.data.reader.WfsCapabilities","tagname":"method","meta":{"private":true},"name":"readRecords","id":"method-readRecords"}],"property":[],"css_var":[],"event":[],"css_mixin":[]},"html":"<div><pre class=\"hierarchy\"><h4>Alternate names</h4><div class='alternate-class-name'>GeoExt.data.WFSCapabilitiesReader</div><div class='alternate-class-name'>GeoExt.data.reader.WFSCapabilities</div><h4>Hierarchy</h4><div class='subclass first-child'>Ext.data.reader.Json<div class='subclass '><strong>GeoExt.data.reader.WfsCapabilities</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/WfsCapabilities.html#GeoExt-data-reader-WfsCapabilities' target='_blank'>WfsCapabilities.js</a></div></pre><div class='doc-contents'><p>Data reader class to create {<a href=\"#!/api/GeoExt.data.WfsCapabilitiesLayerModel\" rel=\"GeoExt.data.WfsCapabilitiesLayerModel\" class=\"docClass\">GeoExt.data.WfsCapabilitiesLayerModel</a>[]}\nfrom a WFS GetCapabilities response.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.data.reader.WfsCapabilities'>GeoExt.data.reader.WfsCapabilities</span><br/><a href='source/WfsCapabilities.html#GeoExt-data-reader-WfsCapabilities-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/GeoExt.data.reader.WfsCapabilities-method-constructor' class='name expandable'>GeoExt.data.reader.WfsCapabilities</a>( <span class='pre'>[Object config]</span> ) : Object</div><div class='description'><div class='short'>Creates new Reader. ...</div><div class='long'><p>Creates new Reader.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>config</span> : Object (optional)<div class='sub-desc'><p>Config object.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getResponseData' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.data.reader.WfsCapabilities'>GeoExt.data.reader.WfsCapabilities</span><br/><a href='source/WfsCapabilities.html#GeoExt-data-reader-WfsCapabilities-method-getResponseData' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.data.reader.WfsCapabilities-method-getResponseData' class='name expandable'>getResponseData</a>( <span class='pre'>Object request</span> ) : Object</div><div class='description'><div class='short'>Gets the records. ...</div><div class='long'><p>Gets the records.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>request</span> : Object<div class='sub-desc'><p>The XHR object which contains the parsed XML\ndocument.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>A data block which is used by an {Ext.data.Store}\nas a cache of {Ext.data.Model} objects.</p>\n</div></li></ul></div></div></div><div id='method-readRecords' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.data.reader.WfsCapabilities'>GeoExt.data.reader.WfsCapabilities</span><br/><a href='source/WfsCapabilities.html#GeoExt-data-reader-WfsCapabilities-method-readRecords' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.data.reader.WfsCapabilities-method-readRecords' class='name expandable'>readRecords</a>( <span class='pre'>DOMElement/String/Object data</span> ) : Object<strong class='private signature'>private</strong></div><div class='description'><div class='short'>Create a data block containing Ext.data.Records from an XML document. ...</div><div class='long'><p>Create a data block containing Ext.data.Records from an XML document.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>data</span> : DOMElement/String/Object<div class='sub-desc'><p>A document element or XHR\nresponse string.  As an alternative to fetching capabilities data\nfrom a remote source, an object representing the capabilities can\nbe provided given that the structure mirrors that returned from the\ncapabilities parser.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>A data block which is used by an {Ext.data.Store}\nas a cache of {Ext.data.Model} objects.</p>\n</div></li></ul></div></div></div></div></div></div></div>","subclasses":[],"meta":{},"html_meta":{},"name":"GeoExt.data.reader.WfsCapabilities","files":[{"href":"WfsCapabilities.html#GeoExt-data-reader-WfsCapabilities","filename":"WfsCapabilities.js"}],"mixedInto":[],"aliases":{"reader":["gx_wfscapabilities"]},"id":"class-GeoExt.data.reader.WfsCapabilities","superclasses":["Ext.data.reader.Json"]});