Ext.data.JsonP.GeoExt_panel_Map({"parentMixins":[],"inheritdoc":null,"extends":"Ext.panel.Panel","alternateClassNames":["GeoExt.MapPanel"],"requires":["GeoExt.data.LayerStore"],"tagname":"class","singleton":false,"inheritable":false,"statics":{"cfg":[],"property":[],"method":[{"owner":"GeoExt.panel.Map","tagname":"method","meta":{"static":true},"name":"guess","id":"static-method-guess"}],"event":[],"css_var":[],"css_mixin":[]},"mixins":[],"code_type":"ext_define","component":false,"uses":[],"members":{"cfg":[{"owner":"GeoExt.panel.Map","tagname":"cfg","meta":{},"name":"center","id":"cfg-center"},{"owner":"GeoExt.panel.Map","tagname":"cfg","meta":{},"name":"extent","id":"cfg-extent"},{"owner":"GeoExt.panel.Map","tagname":"cfg","meta":{},"name":"layers","id":"cfg-layers"},{"owner":"GeoExt.panel.Map","tagname":"cfg","meta":{},"name":"map","id":"cfg-map"},{"owner":"GeoExt.panel.Map","tagname":"cfg","meta":{},"name":"prettyStateKeys","id":"cfg-prettyStateKeys"},{"owner":"GeoExt.panel.Map","tagname":"cfg","meta":{},"name":"zoom","id":"cfg-zoom"}],"method":[{"owner":"GeoExt.panel.Map","tagname":"method","meta":{"private":true},"name":"applyState","id":"method-applyState"},{"owner":"GeoExt.panel.Map","tagname":"method","meta":{"private":true},"name":"beforeDestroy","id":"method-beforeDestroy"},{"owner":"GeoExt.panel.Map","tagname":"method","meta":{"private":true},"name":"getState","id":"method-getState"},{"owner":"GeoExt.panel.Map","tagname":"method","meta":{"private":true},"name":"initComponent","id":"method-initComponent"},{"owner":"GeoExt.panel.Map","tagname":"method","meta":{"private":true},"name":"onAddlayer","id":"method-onAddlayer"},{"owner":"GeoExt.panel.Map","tagname":"method","meta":{"private":true},"name":"onBeforeAdd","id":"method-onBeforeAdd"},{"owner":"GeoExt.panel.Map","tagname":"method","meta":{"private":true},"name":"onChangelayer","id":"method-onChangelayer"},{"owner":"GeoExt.panel.Map","tagname":"method","meta":{"private":true},"name":"onMoveend","id":"method-onMoveend"},{"owner":"GeoExt.panel.Map","tagname":"method","meta":{"private":true},"name":"onRemovelayer","id":"method-onRemovelayer"},{"owner":"GeoExt.panel.Map","tagname":"method","meta":{"private":true},"name":"onResize","id":"method-onResize"},{"owner":"GeoExt.panel.Map","tagname":"method","meta":{"private":true},"name":"setInitialExtent","id":"method-setInitialExtent"}],"property":[{"owner":"GeoExt.panel.Map","tagname":"property","meta":{},"name":"layers","id":"property-layers"},{"owner":"GeoExt.panel.Map","tagname":"property","meta":{},"name":"map","id":"property-map"},{"owner":"GeoExt.panel.Map","tagname":"property","meta":{},"name":"prettyStateKeys","id":"property-prettyStateKeys"},{"owner":"GeoExt.panel.Map","tagname":"property","meta":{"private":true},"name":"stateEvents","id":"property-stateEvents"}],"css_var":[],"event":[{"owner":"GeoExt.panel.Map","tagname":"event","meta":{},"name":"afterlayeradd","id":"event-afterlayeradd"},{"owner":"GeoExt.panel.Map","tagname":"event","meta":{},"name":"afterlayernamechange","id":"event-afterlayernamechange"},{"owner":"GeoExt.panel.Map","tagname":"event","meta":{},"name":"afterlayeropacitychange","id":"event-afterlayeropacitychange"},{"owner":"GeoExt.panel.Map","tagname":"event","meta":{},"name":"afterlayerorderchange","id":"event-afterlayerorderchange"},{"owner":"GeoExt.panel.Map","tagname":"event","meta":{},"name":"afterlayerremove","id":"event-afterlayerremove"},{"owner":"GeoExt.panel.Map","tagname":"event","meta":{},"name":"afterlayervisibilitychange","id":"event-afterlayervisibilitychange"},{"owner":"GeoExt.panel.Map","tagname":"event","meta":{},"name":"aftermapmove","id":"event-aftermapmove"}],"css_mixin":[]},"html":"<div><pre class=\"hierarchy\"><h4>Alternate names</h4><div class='alternate-class-name'>GeoExt.MapPanel</div><h4>Hierarchy</h4><div class='subclass first-child'>Ext.panel.Panel<div class='subclass '><strong>GeoExt.panel.Map</strong></div></div><h4>Requires</h4><div class='dependency'><a href='#!/api/GeoExt.data.LayerStore' rel='GeoExt.data.LayerStore' class='docClass'>GeoExt.data.LayerStore</a></div><h4>Subclasses</h4><div class='dependency'><a href='#!/api/GeoExt.panel.PrintMap' rel='GeoExt.panel.PrintMap' class='docClass'>GeoExt.panel.PrintMap</a></div><h4>Files</h4><div class='dependency'><a href='source/Map.html#GeoExt-panel-Map' target='_blank'>Map.js</a></div></pre><div class='doc-contents'><p>Create a panel container for a map. The map contained by this panel\nwill initially be zoomed to either the center and zoom level configured\nby the <code>center</code> and <code>zoom</code> configuration options, or the configured\n<code>extent</code>, or - if neither are provided - the extent returned by the\nmap's <code>getExtent()</code> method.</p>\n\n<p>Example:</p>\n\n<pre><code>var mappanel = Ext.create('<a href=\"#!/api/GeoExt.panel.Map\" rel=\"GeoExt.panel.Map\" class=\"docClass\">GeoExt.panel.Map</a>', {\n    title: 'A sample Map',\n    map: {\n        // ...\n        // optional, can be either\n        //   - a valid OpenLayers.Map configuration or\n        //   - an instance of OpenLayers.Map\n    },\n    center: '12.31,51.48',\n    zoom: 6\n});\n</code></pre>\n\n\n<p>A Map created with code like above is then ready to use as any other panel.\nTo have a fullscrteen map application, you could e.g. add it to a viewport:</p>\n\n<p>Example:</p>\n\n<pre><code>Ext.create('Ext.container.Viewport', {\n    layout: 'fit',\n    items: [\n        mappanel // our variable from above\n    ]\n });\n</code></pre>\n\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-center' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.panel.Map'>GeoExt.panel.Map</span><br/><a href='source/Map.html#GeoExt-panel-Map-cfg-center' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.panel.Map-cfg-center' class='name expandable'>center</a><span> : OpenLayers.LonLat/Number[]/String</span></div><div class='description'><div class='short'>A location for the initial map center. ...</div><div class='long'><p>A location for the initial map center.  If an array is provided, the\nfirst two items should represent x &amp; y coordinates. If a string is\nprovided, it should consist of a x &amp; y coordinate seperated by a\ncomma.</p>\n<p>Defaults to: <code>null</code></p></div></div></div><div id='cfg-extent' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.panel.Map'>GeoExt.panel.Map</span><br/><a href='source/Map.html#GeoExt-panel-Map-cfg-extent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.panel.Map-cfg-extent' class='name expandable'>extent</a><span> : OpenLayers.Bounds/Number[]</span></div><div class='description'><div class='short'>An initial extent for the map (used if center and zoom are not\nprovided. ...</div><div class='long'><p>An initial extent for the map (used if center and zoom are not\nprovided.  If an array, the first four items should be minx, miny,\nmaxx, maxy.</p>\n<p>Defaults to: <code>null</code></p></div></div></div><div id='cfg-layers' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.panel.Map'>GeoExt.panel.Map</span><br/><a href='source/Map.html#GeoExt-panel-Map-cfg-layers' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.panel.Map-cfg-layers' class='name not-expandable'>layers</a><span> : <a href=\"#!/api/GeoExt.data.LayerStore\" rel=\"GeoExt.data.LayerStore\" class=\"docClass\">GeoExt.data.LayerStore</a>/OpenLayers.Layer[]</span></div><div class='description'><div class='short'><p>The layers provided here will be added to this Map's\n<a href=\"#!/api/GeoExt.panel.Map-property-map\" rel=\"GeoExt.panel.Map-property-map\" class=\"docClass\">map</a>.</p>\n</div><div class='long'><p>The layers provided here will be added to this Map's\n<a href=\"#!/api/GeoExt.panel.Map-property-map\" rel=\"GeoExt.panel.Map-property-map\" class=\"docClass\">map</a>.</p>\n</div></div></div><div id='cfg-map' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.panel.Map'>GeoExt.panel.Map</span><br/><a href='source/Map.html#GeoExt-panel-Map-cfg-map' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.panel.Map-cfg-map' class='name expandable'>map</a><span> : OpenLayers.Map/Object</span></div><div class='description'><div class='short'>A configured map or a configuration object for the map constructor. ...</div><div class='long'><p>A configured map or a configuration object for the map constructor.\nA configured map will be available after construction through the\n<a href=\"#!/api/GeoExt.panel.Map-property-map\" rel=\"GeoExt.panel.Map-property-map\" class=\"docClass\">map</a> property.</p>\n</div></div></div><div id='cfg-prettyStateKeys' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.panel.Map'>GeoExt.panel.Map</span><br/><a href='source/Map.html#GeoExt-panel-Map-cfg-prettyStateKeys' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.panel.Map-cfg-prettyStateKeys' class='name expandable'>prettyStateKeys</a><span> : Boolean</span></div><div class='description'><div class='short'>Set this to true if you want pretty strings in the MapPanel's state\nkeys. ...</div><div class='long'><p>Set this to true if you want pretty strings in the MapPanel's state\nkeys. More specifically, layer.name instead of layer.id will be used\nin the state keys if this option is set to true. But in that case\nyou have to make sure you don't have two layers with the same name.\nDefaults to false.</p>\n</div></div></div><div id='cfg-zoom' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.panel.Map'>GeoExt.panel.Map</span><br/><a href='source/Map.html#GeoExt-panel-Map-cfg-zoom' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.panel.Map-cfg-zoom' class='name expandable'>zoom</a><span> : Number</span></div><div class='description'><div class='short'>An initial zoom level for the map. ...</div><div class='long'><p>An initial zoom level for the map.</p>\n<p>Defaults to: <code>null</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-layers' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.panel.Map'>GeoExt.panel.Map</span><br/><a href='source/Map.html#GeoExt-panel-Map-property-layers' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.panel.Map-property-layers' class='name expandable'>layers</a><span> : <a href=\"#!/api/GeoExt.data.LayerStore\" rel=\"GeoExt.data.LayerStore\" class=\"docClass\">GeoExt.data.LayerStore</a></span></div><div class='description'><div class='short'>A store containing gx_layer-model\ninstances. ...</div><div class='long'><p>A store containing <a href=\"#!/api/GeoExt.data.LayerModel\" rel=\"GeoExt.data.LayerModel\" class=\"docClass\">gx_layer-model</a>\ninstances.</p>\n<p>Defaults to: <code>null</code></p></div></div></div><div id='property-map' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.panel.Map'>GeoExt.panel.Map</span><br/><a href='source/Map.html#GeoExt-panel-Map-property-map' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.panel.Map-property-map' class='name expandable'>map</a><span> : OpenLayers.Map/Object</span></div><div class='description'><div class='short'>A map or map configuration. ...</div><div class='long'><p>A map or map configuration.</p>\n<p>Defaults to: <code>null</code></p></div></div></div><div id='property-prettyStateKeys' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.panel.Map'>GeoExt.panel.Map</span><br/><a href='source/Map.html#GeoExt-panel-Map-property-prettyStateKeys' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.panel.Map-property-prettyStateKeys' class='name expandable'>prettyStateKeys</a><span> : Boolean</span></div><div class='description'><div class='short'>Whether we want the state key to be pretty. ...</div><div class='long'><p>Whether we want the state key to be pretty. See\n<a href=\"#!/api/GeoExt.panel.Map-cfg-prettyStateKeys\" rel=\"GeoExt.panel.Map-cfg-prettyStateKeys\" class=\"docClass\">the config option prettyStateKeys</a> for\ndetails.</p>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='property-stateEvents' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.panel.Map'>GeoExt.panel.Map</span><br/><a href='source/Map.html#GeoExt-panel-Map-property-stateEvents' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.panel.Map-property-stateEvents' class='name expandable'>stateEvents</a><span> : String[]</span><strong class='private signature'>private</strong></div><div class='description'><div class='short'>Array of state events ...</div><div class='long'><p>Array of state events</p>\n<p>Defaults to: <code>[&quot;aftermapmove&quot;, &quot;afterlayervisibilitychange&quot;, &quot;afterlayeropacitychange&quot;, &quot;afterlayerorderchange&quot;, &quot;afterlayernamechange&quot;, &quot;afterlayeradd&quot;, &quot;afterlayerremove&quot;]</code></p></div></div></div></div></div><div class='members-section'><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Instance Methods</h3><div id='method-applyState' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.panel.Map'>GeoExt.panel.Map</span><br/><a href='source/Map.html#GeoExt-panel-Map-method-applyState' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.panel.Map-method-applyState' class='name expandable'>applyState</a>( <span class='pre'>Object state</span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'>Apply the state provided as an argument. ...</div><div class='long'><p>Apply the state provided as an argument.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>state</span> : Object<div class='sub-desc'><p>The state to apply.</p>\n</div></li></ul></div></div></div><div id='method-beforeDestroy' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.panel.Map'>GeoExt.panel.Map</span><br/><a href='source/Map.html#GeoExt-panel-Map-method-beforeDestroy' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.panel.Map-method-beforeDestroy' class='name expandable'>beforeDestroy</a>( <span class='pre'></span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'>Private method called during the destroy sequence. ...</div><div class='long'><p>Private method called during the destroy sequence.</p>\n</div></div></div><div id='method-getState' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.panel.Map'>GeoExt.panel.Map</span><br/><a href='source/Map.html#GeoExt-panel-Map-method-getState' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.panel.Map-method-getState' class='name expandable'>getState</a>( <span class='pre'></span> ) : Object<strong class='private signature'>private</strong></div><div class='description'><div class='short'>Returns a state of the Map as keyed Object. ...</div><div class='long'><p>Returns a state of the Map as keyed Object. Depending on the point in\ntime this methoid is being called, the following keys will be available:</p>\n\n<ul>\n<li><code>x</code></li>\n<li><code>y</code></li>\n<li><code>zoom</code></li>\n</ul>\n\n\n<p>And for all layers present in the map the object will contain the\nfollowing keys</p>\n\n<ul>\n<li><code>visibility_&lt;XXX&gt;</code></li>\n<li><code>opacity_&lt;XXX&gt;</code></li>\n</ul>\n\n\n<p>The <XXX> suffix is either the title or id of the layer record, it can be\ninfluenced by setting <a href=\"#!/api/GeoExt.panel.Map-cfg-prettyStateKeys\" rel=\"GeoExt.panel.Map-cfg-prettyStateKeys\" class=\"docClass\">prettyStateKeys</a> to <code>true</code> or <code>false</code>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-initComponent' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.panel.Map'>GeoExt.panel.Map</span><br/><a href='source/Map.html#GeoExt-panel-Map-method-initComponent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.panel.Map-method-initComponent' class='name expandable'>initComponent</a>( <span class='pre'></span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'>Initializes the map panel. ...</div><div class='long'><p>Initializes the map panel. Creates an OpenLayers map if\nnone was provided in the config options passed to the\nconstructor.</p>\n</div></div></div><div id='method-onAddlayer' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.panel.Map'>GeoExt.panel.Map</span><br/><a href='source/Map.html#GeoExt-panel-Map-method-onAddlayer' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.panel.Map-method-onAddlayer' class='name expandable'>onAddlayer</a>( <span class='pre'>Object e</span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'>The \"addlayer\" listener bound to the\nmap. ...</div><div class='long'><p>The \"addlayer\" listener bound to the\n<a href=\"#!/api/GeoExt.panel.Map-property-map\" rel=\"GeoExt.panel.Map-property-map\" class=\"docClass\">map</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>e</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-onBeforeAdd' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.panel.Map'>GeoExt.panel.Map</span><br/><a href='source/Map.html#GeoExt-panel-Map-method-onBeforeAdd' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.panel.Map-method-onBeforeAdd' class='name expandable'>onBeforeAdd</a>( <span class='pre'>Object item</span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'>Check if an added item has to take separate actions\nto be added to the map. ...</div><div class='long'><p>Check if an added item has to take separate actions\nto be added to the map.\nSee e.g. the <a href=\"#!/api/GeoExt.slider.Zoom\" rel=\"GeoExt.slider.Zoom\" class=\"docClass\">GeoExt.slider.Zoom</a> or <a href=\"#!/api/GeoExt.slider.LayerOpacity\" rel=\"GeoExt.slider.LayerOpacity\" class=\"docClass\">GeoExt.slider.LayerOpacity</a></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>item</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-onChangelayer' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.panel.Map'>GeoExt.panel.Map</span><br/><a href='source/Map.html#GeoExt-panel-Map-method-onChangelayer' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.panel.Map-method-onChangelayer' class='name expandable'>onChangelayer</a>( <span class='pre'>Object e</span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'>The \"changelayer\" listener bound to the\nmap. ...</div><div class='long'><p>The \"changelayer\" listener bound to the\n<a href=\"#!/api/GeoExt.panel.Map-property-map\" rel=\"GeoExt.panel.Map-property-map\" class=\"docClass\">map</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>e</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-onMoveend' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.panel.Map'>GeoExt.panel.Map</span><br/><a href='source/Map.html#GeoExt-panel-Map-method-onMoveend' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.panel.Map-method-onMoveend' class='name expandable'>onMoveend</a>( <span class='pre'>Object e</span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'>The \"moveend\" listener bound to the\nmap. ...</div><div class='long'><p>The \"moveend\" listener bound to the\n<a href=\"#!/api/GeoExt.panel.Map-property-map\" rel=\"GeoExt.panel.Map-property-map\" class=\"docClass\">map</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>e</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-onRemovelayer' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.panel.Map'>GeoExt.panel.Map</span><br/><a href='source/Map.html#GeoExt-panel-Map-method-onRemovelayer' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.panel.Map-method-onRemovelayer' class='name expandable'>onRemovelayer</a>( <span class='pre'>Object e</span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'>The \"removelayer\" listener bound to the\nmap. ...</div><div class='long'><p>The \"removelayer\" listener bound to the\n<a href=\"#!/api/GeoExt.panel.Map-property-map\" rel=\"GeoExt.panel.Map-property-map\" class=\"docClass\">map</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>e</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-onResize' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.panel.Map'>GeoExt.panel.Map</span><br/><a href='source/Map.html#GeoExt-panel-Map-method-onResize' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.panel.Map-method-onResize' class='name expandable'>onResize</a>( <span class='pre'></span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'>Private method called after the panel has been rendered or after it\nhas been laid out by its parent's layout. ...</div><div class='long'><p>Private method called after the panel has been rendered or after it\nhas been laid out by its parent's layout.</p>\n</div></div></div><div id='method-setInitialExtent' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.panel.Map'>GeoExt.panel.Map</span><br/><a href='source/Map.html#GeoExt-panel-Map-method-setInitialExtent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.panel.Map-method-setInitialExtent' class='name expandable'>setInitialExtent</a>( <span class='pre'></span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'>Set the initial extent of this panel's map. ...</div><div class='long'><p>Set the initial extent of this panel's map.</p>\n</div></div></div></div><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Static Methods</h3><div id='static-method-guess' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.panel.Map'>GeoExt.panel.Map</span><br/><a href='source/Map.html#GeoExt-panel-Map-static-method-guess' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.panel.Map-static-method-guess' class='name expandable'>guess</a>( <span class='pre'></span> ) : <a href=\"#!/api/GeoExt.panel.Map\" rel=\"GeoExt.panel.Map\" class=\"docClass\">GeoExt.panel.Map</a><strong class='static signature'>static</strong></div><div class='description'><div class='short'>The first map panel found via an the Ext.ComponentQuery.query\nmanager. ...</div><div class='long'><p>The first map panel found via an the Ext.ComponentQuery.query\nmanager.</p>\n\n<p>Convenience function for guessing the map panel of an application.\nThis can reliably be used for all applications that just have one map\npanel in the viewport.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/GeoExt.panel.Map\" rel=\"GeoExt.panel.Map\" class=\"docClass\">GeoExt.panel.Map</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-event'>Events</h3><div class='subsection'><div id='event-afterlayeradd' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.panel.Map'>GeoExt.panel.Map</span><br/><a href='source/Map.html#GeoExt-panel-Map-event-afterlayeradd' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.panel.Map-event-afterlayeradd' class='name expandable'>afterlayeradd</a>( <span class='pre'>Object eOpts</span> )</div><div class='description'><div class='short'>Fires after a layer added to the map. ...</div><div class='long'><p>Fires after a layer added to the map.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>eOpts</span> : Object<div class='sub-desc'><p>The options object passed to Ext.util.Observable.addListener.</p>\n\n\n\n</div></li></ul></div></div></div><div id='event-afterlayernamechange' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.panel.Map'>GeoExt.panel.Map</span><br/><a href='source/Map.html#GeoExt-panel-Map-event-afterlayernamechange' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.panel.Map-event-afterlayernamechange' class='name expandable'>afterlayernamechange</a>( <span class='pre'>Object eOpts</span> )</div><div class='description'><div class='short'>Fires after a layer name changed. ...</div><div class='long'><p>Fires after a layer name changed.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>eOpts</span> : Object<div class='sub-desc'><p>The options object passed to Ext.util.Observable.addListener.</p>\n\n\n\n</div></li></ul></div></div></div><div id='event-afterlayeropacitychange' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.panel.Map'>GeoExt.panel.Map</span><br/><a href='source/Map.html#GeoExt-panel-Map-event-afterlayeropacitychange' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.panel.Map-event-afterlayeropacitychange' class='name expandable'>afterlayeropacitychange</a>( <span class='pre'>Object eOpts</span> )</div><div class='description'><div class='short'>Fires after a layer changed opacity. ...</div><div class='long'><p>Fires after a layer changed opacity.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>eOpts</span> : Object<div class='sub-desc'><p>The options object passed to Ext.util.Observable.addListener.</p>\n\n\n\n</div></li></ul></div></div></div><div id='event-afterlayerorderchange' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.panel.Map'>GeoExt.panel.Map</span><br/><a href='source/Map.html#GeoExt-panel-Map-event-afterlayerorderchange' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.panel.Map-event-afterlayerorderchange' class='name expandable'>afterlayerorderchange</a>( <span class='pre'>Object eOpts</span> )</div><div class='description'><div class='short'>Fires after a layer order changed. ...</div><div class='long'><p>Fires after a layer order changed.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>eOpts</span> : Object<div class='sub-desc'><p>The options object passed to Ext.util.Observable.addListener.</p>\n\n\n\n</div></li></ul></div></div></div><div id='event-afterlayerremove' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.panel.Map'>GeoExt.panel.Map</span><br/><a href='source/Map.html#GeoExt-panel-Map-event-afterlayerremove' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.panel.Map-event-afterlayerremove' class='name expandable'>afterlayerremove</a>( <span class='pre'>Object eOpts</span> )</div><div class='description'><div class='short'>Fires after a layer removed from the map. ...</div><div class='long'><p>Fires after a layer removed from the map.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>eOpts</span> : Object<div class='sub-desc'><p>The options object passed to Ext.util.Observable.addListener.</p>\n\n\n\n</div></li></ul></div></div></div><div id='event-afterlayervisibilitychange' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.panel.Map'>GeoExt.panel.Map</span><br/><a href='source/Map.html#GeoExt-panel-Map-event-afterlayervisibilitychange' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.panel.Map-event-afterlayervisibilitychange' class='name expandable'>afterlayervisibilitychange</a>( <span class='pre'>Object eOpts</span> )</div><div class='description'><div class='short'>Fires after a layer changed visibility. ...</div><div class='long'><p>Fires after a layer changed visibility.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>eOpts</span> : Object<div class='sub-desc'><p>The options object passed to Ext.util.Observable.addListener.</p>\n\n\n\n</div></li></ul></div></div></div><div id='event-aftermapmove' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.panel.Map'>GeoExt.panel.Map</span><br/><a href='source/Map.html#GeoExt-panel-Map-event-aftermapmove' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.panel.Map-event-aftermapmove' class='name expandable'>aftermapmove</a>( <span class='pre'>Object eOpts</span> )</div><div class='description'><div class='short'>Fires after the map is moved. ...</div><div class='long'><p>Fires after the map is moved.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>eOpts</span> : Object<div class='sub-desc'><p>The options object passed to Ext.util.Observable.addListener.</p>\n\n\n\n</div></li></ul></div></div></div></div></div></div></div>","subclasses":["GeoExt.panel.PrintMap"],"meta":{},"html_meta":{},"name":"GeoExt.panel.Map","files":[{"href":"Map.html#GeoExt-panel-Map","filename":"Map.js"}],"mixedInto":[],"aliases":{"widget":["gx_mappanel"]},"id":"class-GeoExt.panel.Map","superclasses":["Ext.panel.Panel"]});