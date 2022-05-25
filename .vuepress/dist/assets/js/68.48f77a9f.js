(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{652:function(e,t,a){"use strict";a.r(t);var i=a(0),o=Object(i.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"dealing-with-offline-nodes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dealing-with-offline-nodes"}},[e._v("#")]),e._v(" Dealing with offline nodes")]),e._v(" "),a("p",[e._v("Offline nodes can prevent the network from continuing archiving data. For this case the network has specific features dealing with offline nodes.")]),e._v(" "),a("h2",{attrs:{id:"if-the-current-uploader-is-offline"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#if-the-current-uploader-is-offline"}},[e._v("#")]),e._v(" If the current uploader is offline")]),e._v(" "),a("p",[e._v("Each round a validator is chosen as the next designated uploader. He is responsible to create a new data bundle, upload it to Arweave and submit it to the network. For those tasks the uploader has a specific amount of time which is defined in the global param "),a("code",[e._v("upload_timeout")]),e._v(". Usually it is set to 600 seconds (10 mins). If the uploader does not submit this bundle in time he will receive a "),a("code",[e._v("timeout_slash")]),e._v(" (usually 1%) and will be removed from the active validator set. The remaining stake of the validator will be automatically transferred. So in case the validator gets back online again he has to restake to become a validator again.")])])}),[],!1,null,null,null);t.default=o.exports}}]);