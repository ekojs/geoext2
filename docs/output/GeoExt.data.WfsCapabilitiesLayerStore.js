Ext.data.JsonP.GeoExt_data_WfsCapabilitiesLayerStore({"parentMixins":[],"inheritdoc":null,"extends":"GeoExt.data.OwsStore","alternateClassNames":["GeoExt.data.WFSCapabilitiesStore","GeoExt.data.WfsCapabilitiesStore"],"requires":["GeoExt.data.reader.WfsCapabilities"],"tagname":"class","singleton":false,"inheritable":false,"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"mixins":[],"code_type":"ext_define","component":false,"uses":[],"members":{"cfg":[{"owner":"GeoExt.data.OwsStore","tagname":"cfg","meta":{},"name":"format","id":"cfg-format"},{"owner":"GeoExt.data.OwsStore","tagname":"cfg","meta":{},"name":"url","id":"cfg-url"}],"method":[{"owner":"GeoExt.data.OwsStore","tagname":"method","meta":{"private":true},"name":"constructor","id":"method-constructor"},{"owner":"GeoExt.data.OwsStore","tagname":"method","meta":{"private":true},"name":"applyFormat","id":"method-applyFormat"},{"owner":"GeoExt.data.OwsStore","tagname":"method","meta":{"private":true},"name":"applyUrl","id":"method-applyUrl"}],"property":[],"css_var":[],"event":[],"css_mixin":[]},"html":"<div><pre class=\"hierarchy\"><h4>Alternate names</h4><div class='alternate-class-name'>GeoExt.data.WFSCapabilitiesStore</div><div class='alternate-class-name'>GeoExt.data.WfsCapabilitiesStore</div><h4>Hierarchy</h4><div class='subclass first-child'>Ext.data.Store<div class='subclass '><a href='#!/api/GeoExt.data.OwsStore' rel='GeoExt.data.OwsStore' class='docClass'>GeoExt.data.OwsStore</a><div class='subclass '><strong>GeoExt.data.WfsCapabilitiesLayerStore</strong></div></div></div><h4>Requires</h4><div class='dependency'><a href='#!/api/GeoExt.data.reader.WfsCapabilities' rel='GeoExt.data.reader.WfsCapabilities' class='docClass'>GeoExt.data.reader.WfsCapabilities</a></div><h4>Files</h4><div class='dependency'><a href='source/WfsCapabilitiesLayerStore.html#GeoExt-data-WfsCapabilitiesLayerStore' target='_blank'>WfsCapabilitiesLayerStore.js</a></div></pre><div class='doc-contents'><p>Small helper class to make creating stores for remote WFS layer data\neasier.  The store is pre-configured with a built-in\n{Ext.data.proxy.Ajax} and {<a href=\"#!/api/GeoExt.data.reader.WfsCapabilities\" rel=\"GeoExt.data.reader.WfsCapabilities\" class=\"docClass\">GeoExt.data.reader.WfsCapabilities</a>}.\nThe proxy is configured to allow caching and issues requests via GET.\nIf you require some other proxy/reader combination then you'll have to\nconfigure this with your own proxy or create a basic\n{<a href=\"#!/api/GeoExt.data.LayerStore\" rel=\"GeoExt.data.LayerStore\" class=\"docClass\">GeoExt.data.LayerStore</a>} and configure as needed.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-format' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/GeoExt.data.OwsStore' rel='GeoExt.data.OwsStore' class='defined-in docClass'>GeoExt.data.OwsStore</a><br/><a href='source/OwsStore.html#GeoExt-data-OwsStore-cfg-format' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.data.OwsStore-cfg-format' class='name expandable'>format</a><span> : OpenLayers.Format</span></div><div class='description'><div class='short'>A parser for transforming the XHR response into an array of objects\nrepresenting attributes. ...</div><div class='long'><p>A parser for transforming the XHR response into an array of objects\nrepresenting attributes. Defaults to an {OpenLayers.Format.WMSDescribeLayer}\nparser.</p>\n<p>Defaults to: <code>null</code></p></div></div></div><div id='cfg-url' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/GeoExt.data.OwsStore' rel='GeoExt.data.OwsStore' class='defined-in docClass'>GeoExt.data.OwsStore</a><br/><a href='source/OwsStore.html#GeoExt-data-OwsStore-cfg-url' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.data.OwsStore-cfg-url' class='name expandable'>url</a><span> : String</span></div><div class='description'><div class='short'>The URL from which to retrieve the WMS DescribeLayer document ...</div><div class='long'><p>The URL from which to retrieve the WMS DescribeLayer document</p>\n<p>Defaults to: <code>null</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/GeoExt.data.OwsStore' rel='GeoExt.data.OwsStore' class='defined-in docClass'>GeoExt.data.OwsStore</a><br/><a href='source/OwsStore.html#GeoExt-data-OwsStore-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/GeoExt.data.OwsStore-method-constructor' class='name expandable'>GeoExt.data.WfsCapabilitiesLayerStore</a>( <span class='pre'>Object config</span> ) : Object<strong class='private signature'>private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>config</span> : Object<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-applyFormat' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/GeoExt.data.OwsStore' rel='GeoExt.data.OwsStore' class='defined-in docClass'>GeoExt.data.OwsStore</a><br/><a href='source/OwsStore.html#GeoExt-data-OwsStore-method-applyFormat' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.data.OwsStore-method-applyFormat' class='name expandable'>applyFormat</a>( <span class='pre'>Object newFormat</span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>newFormat</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-applyUrl' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/GeoExt.data.OwsStore' rel='GeoExt.data.OwsStore' class='defined-in docClass'>GeoExt.data.OwsStore</a><br/><a href='source/OwsStore.html#GeoExt-data-OwsStore-method-applyUrl' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.data.OwsStore-method-applyUrl' class='name expandable'>applyUrl</a>( <span class='pre'>Object newValue</span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>newValue</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>","subclasses":[],"meta":{},"html_meta":{},"name":"GeoExt.data.WfsCapabilitiesLayerStore","files":[{"href":"WfsCapabilitiesLayerStore.html#GeoExt-data-WfsCapabilitiesLayerStore","filename":"WfsCapabilitiesLayerStore.js"}],"mixedInto":[],"aliases":{},"id":"class-GeoExt.data.WfsCapabilitiesLayerStore","superclasses":["Ext.data.Store","GeoExt.data.OwsStore"]});