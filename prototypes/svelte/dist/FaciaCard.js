var FaciaCard = (function ( FaciaCardContent, FaciaCardImage ) { 'use strict';

FaciaCardContent = ( FaciaCardContent && FaciaCardContent.__esModule ) ? FaciaCardContent['default'] : FaciaCardContent;
FaciaCardImage = ( FaciaCardImage && FaciaCardImage.__esModule ) ? FaciaCardImage['default'] : FaciaCardImage;

var template = (function () {
  return {
    data () {
      return {
        dynamic: 'this can change'
      }
    },
    components: {
      FaciaCardContent,
      FaciaCardImage
    }
  };
}());

let addedCss = false;
function addCss () {
	var style = createElement( 'style' );
	style.textContent = "\n  .fc-item[svelte-19057900], [svelte-19057900] .fc-item {\n    width: 220px; \n  }\n\n  \n\n  .fc-item[svelte-19057900], [svelte-19057900] .fc-item {\n      background-color: #f6f6f6; \n  }\n\n  .fc-item  a[svelte-19057900], .fc-item  [svelte-19057900] a, .fc-item[svelte-19057900]  a, [svelte-19057900] .fc-item  a {\n      color: #333;\n  }\n\n  .fc-item__container[svelte-19057900], [svelte-19057900] .fc-item__container {\n      position: relative;\n  }\n\n  \n  .tone-news--item  .rich-link__container[svelte-19057900]:before, .tone-news--item  [svelte-19057900] .rich-link__container:before, .tone-news--item[svelte-19057900]  .rich-link__container:before, [svelte-19057900] .tone-news--item  .rich-link__container:before, .tone-news--item  .fc-item__container[svelte-19057900]:before, .tone-news--item  [svelte-19057900] .fc-item__container:before, .tone-news--item[svelte-19057900]  .fc-item__container:before, [svelte-19057900] .tone-news--item  .fc-item__container:before {\n      background-color: var(--tone, #4bc6df);\n  }\n\n  .fc-item__container[svelte-19057900]:before, [svelte-19057900] .fc-item__container:before, .item__container[svelte-19057900]:before, [svelte-19057900] .item__container:before {\n      content: '';\n      position: absolute;\n      top: 0;\n      left: 0;\n      right: 0;\n      height: 0.0625rem;\n      z-index: 2;\n  }\n\n  \n  .fc-item  .u-faux-block-link--hover[svelte-19057900], .fc-item  [svelte-19057900] .u-faux-block-link--hover, .fc-item[svelte-19057900]  .u-faux-block-link--hover, [svelte-19057900] .fc-item  .u-faux-block-link--hover {\n      color: inherit;\n      background-color: #eaeaea; \n  }\n";
	appendNode( style, document.head );

	addedCss = true;
}

function renderMainFragment ( root, component ) {
	var ul = createElement( 'ul' );
	ul.setAttribute( 'svelte-19057900', '' );
	ul.className = "prototype__fixed-width";
	
	var li = createElement( 'li' );
	li.setAttribute( 'svelte-19057900', '' );
	li.className = "u-faux-block-link";
	
	appendNode( li, ul );
	
	var div = createElement( 'div' );
	div.setAttribute( 'svelte-19057900', '' );
	div.className = "fc-item fc-item--force-image-upgrade fc-item--has-image fc-item--has-metadata fc-item--has-sublinks-1 fc-item--is-commentable js-fc-item tone-news--item fc-item--list-media-mobile fc-item--standard-tablet js-snappable";
	div.setAttribute( 'data-discussion-closed', "false" );
	div.setAttribute( 'data-discussion-url', "https://www.theguardian.com/technology/2016/dec/14/yahoo-hack-security-of-one-billion-accounts-breached#comments" );
	div.setAttribute( 'data-link-name', "news | group-1 | card-4" );
	div.setAttribute( 'data-item-visibility', "all" );
	div.setAttribute( 'data-test-id', "facia-card" );
	div.setAttribute( 'data-id', "technology/2016/dec/14/yahoo-hack-security-of-one-billion-accounts-breached" );
	div.setAttribute( 'data-loyalty-short-url', "/p/5g4jt" );
	div.setAttribute( 'data-node-uid', "15" );
	
	appendNode( div, li );
	
	var div1 = createElement( 'div' );
	div1.setAttribute( 'svelte-19057900', '' );
	div1.className = "fc-item__container";
	
	appendNode( div1, div );
	
	var faciaCardContent = new template.components.FaciaCardContent({
		target: div1,
		_root: component._root || component
	});
	
	appendNode( createText( "\n          " ), div1 );
	
	var faciaCardImage = new template.components.FaciaCardImage({
		target: div1,
		_root: component._root || component
	});

	return {
		mount: function ( target, anchor ) {
			insertNode( ul, target, anchor );
		},
		
		update: noop,
		
		teardown: function ( detach ) {
			faciaCardContent.teardown( false );
			faciaCardImage.teardown( false );
			
			if ( detach ) {
				detachNode( ul );
			}
		},
	};
}

function FaciaCard ( options ) {
	options = options || {};
	
	this._state = Object.assign( template.data(), options.data );

	this._observers = {
		pre: Object.create( null ),
		post: Object.create( null )
	};

	this._handlers = Object.create( null );

	this._root = options._root;
	this._yield = options._yield;

	if ( !addedCss ) addCss();
	this._renderHooks = [];
	
	this._fragment = renderMainFragment( this._state, this );
	if ( options.target ) this._fragment.mount( options.target, null );
	
	while ( this._renderHooks.length ) {
		var hook = this._renderHooks.pop();
		hook.fn.call( hook.context );
	}
}

FaciaCard.prototype.get = function get( key ) {
 	return key ? this._state[ key ] : this._state;
 };

FaciaCard.prototype.fire = function fire( eventName, data ) {
 	var handlers = eventName in this._handlers && this._handlers[ eventName ].slice();
 	if ( !handlers ) return;
 
 	for ( var i = 0; i < handlers.length; i += 1 ) {
 		handlers[i].call( this, data );
 	}
 };

FaciaCard.prototype.observe = function observe( key, callback, options ) {
 	var group = ( options && options.defer ) ? this._observers.pre : this._observers.post;
 
 	( group[ key ] || ( group[ key ] = [] ) ).push( callback );
 
 	if ( !options || options.init !== false ) {
 		callback.__calling = true;
 		callback.call( this, this._state[ key ] );
 		callback.__calling = false;
 	}
 
 	return {
 		cancel: function () {
 			var index = group[ key ].indexOf( callback );
 			if ( ~index ) group[ key ].splice( index, 1 );
 		}
 	};
 };

FaciaCard.prototype.on = function on( eventName, handler ) {
 	var handlers = this._handlers[ eventName ] || ( this._handlers[ eventName ] = [] );
 	handlers.push( handler );
 
 	return {
 		cancel: function () {
 			var index = handlers.indexOf( handler );
 			if ( ~index ) handlers.splice( index, 1 );
 		}
 	};
 };

FaciaCard.prototype.set = function set ( newState ) {
	var oldState = this._state;
	this._state = Object.assign( {}, oldState, newState );
	
	dispatchObservers( this, this._observers.pre, newState, oldState );
	if ( this._fragment ) this._fragment.update( newState, this._state );
	dispatchObservers( this, this._observers.post, newState, oldState );
	
	while ( this._renderHooks.length ) {
		var hook = this._renderHooks.pop();
		hook.fn.call( hook.context );
	}
};

FaciaCard.prototype.teardown = function teardown ( detach ) {
	this.fire( 'teardown' );

	this._fragment.teardown( detach !== false );
	this._fragment = null;

	this._state = {};
};

function dispatchObservers( component, group, newState, oldState ) {
	for ( var key in group ) {
		if ( !( key in newState ) ) continue;

		var newValue = newState[ key ];
		var oldValue = oldState[ key ];

		if ( newValue === oldValue && typeof newValue !== 'object' ) continue;

		var callbacks = group[ key ];
		if ( !callbacks ) continue;

		for ( var i = 0; i < callbacks.length; i += 1 ) {
			var callback = callbacks[i];
			if ( callback.__calling ) continue;

			callback.__calling = true;
			callback.call( component, newValue, oldValue );
			callback.__calling = false;
		}
	}
}

function createElement( name ) {
	return document.createElement( name );
}

function detachNode( node ) {
	node.parentNode.removeChild( node );
}

function insertNode( node, target, anchor ) {
	target.insertBefore( node, anchor );
}

function appendNode( node, target ) {
	target.appendChild( node );
}

function createText( data ) {
	return document.createTextNode( data );
}

function noop() {}

return FaciaCard;

}(FaciaCardContent, FaciaCardImage));