(function () {
'use strict';

function appendNode ( node, target ) {
	target.appendChild( node );
}

function insertNode ( node, target, anchor ) {
	target.insertBefore( node, anchor );
}

function detachNode ( node ) {
	node.parentNode.removeChild( node );
}

function createElement ( name ) {
	return document.createElement( name );
}

function createText ( data ) {
	return document.createTextNode( data );
}

function createComment ( data ) {
	return document.createComment( data );
}

function get ( key ) {
	return key ? this._state[ key ] : this._state;
}

function fire ( eventName, data ) {
	var handlers = eventName in this._handlers && this._handlers[ eventName ].slice();
	if ( !handlers ) return;

	for ( var i = 0; i < handlers.length; i += 1 ) {
		handlers[i].call( this, data );
	}
}

function observe ( key, callback, options ) {
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
}

function on ( eventName, handler ) {
	var handlers = this._handlers[ eventName ] || ( this._handlers[ eventName ] = [] );
	handlers.push( handler );

	return {
		cancel: function () {
			var index = handlers.indexOf( handler );
			if ( ~index ) handlers.splice( index, 1 );
		}
	};
}

function noop () {}

function dispatchObservers ( component, group, newState, oldState ) {
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

let addedCss$1 = false;
function addCss$1 () {
	var style = createElement( 'style' );
	style.textContent = "\n  .fc-item__header[svelte-3090969113], [svelte-3090969113] .fc-item__header {\n      color: #ffffff;\n      font-size: 1.25rem;\n      line-height: 1.5rem;\n      font-family: \"Guardian Egyptian Headline\", Georgia, serif;\n      font-weight: normal;\n      font-weight: 500;\n      padding-bottom: .5em\n  }\n\n  .fc-item__headline[svelte-3090969113], [svelte-3090969113] .fc-item__headline {\n      color: var(--tone, black);\n  }\n\n  .fc-item__standfirst[svelte-3090969113], [svelte-3090969113] .fc-item__standfirst {\n      font-size: 0.875rem;\n      line-height: 1.125rem;\n      font-family: \"Guardian Egyptian Text\", Georgia,serif;\n      font-weight: normal;\n      padding-bottom: .5em;\n      color: #767676;\n  }\n\n  .fc-item__kicker[svelte-3090969113]:after, [svelte-3090969113] .fc-item__kicker:after {\n      color: rgb(214, 214, 214);\n      content: \"/\";\n      display: inline-block;\n      height: 20px;\n      margin-left: 3.2px;\n      width: 5.65625px;\n  }\n\n  .tone-news--item  .fc-item__kicker[svelte-3090969113], .tone-news--item  [svelte-3090969113] .fc-item__kicker, .tone-news--item[svelte-3090969113]  .fc-item__kicker, [svelte-3090969113] .tone-news--item  .fc-item__kicker {\n      color: #005689;\n  }\n\n  .fc-item__content[svelte-3090969113], [svelte-3090969113] .fc-item__content {\n    padding-left: 0.3125rem;\n    padding-right: 0.3125rem\n  }\n\n  .fc-item__kicker[svelte-3090969113], [svelte-3090969113] .fc-item__kicker, .fc-item__title[svelte-3090969113], [svelte-3090969113] .fc-item__title {\n      font-size: inherit;\n  }\n\n  \n\n  \n\n  a.u-faux-block-link__overlay[svelte-3090969113], [svelte-3090969113] a.u-faux-block-link__overlay {\n      position: absolute;\n      z-index: 0;\n      opacity: 0;\n  }\n\n  .u-faux-block-link__overlay[svelte-3090969113], [svelte-3090969113] .u-faux-block-link__overlay {\n      top: 0;\n      right: 0;\n      bottom: 0;\n      left: 0;\n      overflow: hidden;\n      text-indent: 200%;\n      white-space: nowrap;\n      background: transparent;\n  }\n";
	appendNode( style, document.head );

	addedCss$1 = true;
}

function renderMainFragment$2 ( root, component ) {
	var div = createElement( 'div' );
	div.setAttribute( 'svelte-3090969113', '' );
	div.className = "fc-item__content";
	
	var div1 = createElement( 'div' );
	div1.setAttribute( 'svelte-3090969113', '' );
	div1.className = "fc-item__header";
	
	appendNode( div1, div );
	
	var h2 = createElement( 'h2' );
	h2.setAttribute( 'svelte-3090969113', '' );
	h2.className = "fc-item__title";
	
	appendNode( h2, div1 );
	
	var a = createElement( 'a' );
	a.setAttribute( 'svelte-3090969113', '' );
	a.href = "https://www.theguardian.com/technology/2016/dec/14/yahoo-hack-security-of-one-billion-accounts-breached";
	a.className = "fc-item__link";
	a.setAttribute( 'data-link-name', "article" );
	
	appendNode( a, h2 );
	var ifBlock_anchor = createComment( "#if data.showKicker" );
	appendNode( ifBlock_anchor, a );
	
	function getBlock ( root ) {
		if ( root.data.showKicker ) return renderIfBlock_0;
		return null;
	}
	
	var currentBlock = getBlock( root );
	var ifBlock = currentBlock && currentBlock( root, component );
	
	if ( ifBlock ) ifBlock.mount( ifBlock_anchor.parentNode, ifBlock_anchor );
	appendNode( createText( "\n\n            " ), a );
	
	var span = createElement( 'span' );
	span.setAttribute( 'svelte-3090969113', '' );
	span.className = "u-faux-block-link__cta fc-item__headline";
	
	appendNode( span, a );
	
	var span1 = createElement( 'span' );
	span1.setAttribute( 'svelte-3090969113', '' );
	span1.className = "js-headline-text";
	
	appendNode( span1, span );
	var text1 = createText( root.data.headline );
	appendNode( text1, span1 );
	appendNode( createText( "\n    " ), div );
	
	var div2 = createElement( 'div' );
	div2.setAttribute( 'svelte-3090969113', '' );
	div2.className = "fc-item__standfirst";
	
	appendNode( div2, div );
	var text3 = createText( root.data.standfirst );
	appendNode( text3, div2 );
	appendNode( createText( "\n    " ), div );
	
	var a1 = createElement( 'a' );
	a1.setAttribute( 'svelte-3090969113', '' );
	a1.href = "https://www.theguardian.com/technology/2016/dec/14/yahoo-hack-security-of-one-billion-accounts-breached";
	a1.className = "u-faux-block-link__overlay js-headline-text";
	a1.setAttribute( 'data-link-name', "article" );
	a1.tabIndex = "-1";
	
	appendNode( a1, div );
	var text5 = createText( root.data.headline );
	appendNode( text5, a1 );

	return {
		mount: function ( target, anchor ) {
			insertNode( div, target, anchor );
		},
		
		update: function ( changed, root ) {
			var _currentBlock = currentBlock;
			currentBlock = getBlock( root );
			if ( _currentBlock === currentBlock && ifBlock) {
				ifBlock.update( changed, root );
			} else {
				if ( ifBlock ) ifBlock.teardown( true );
				ifBlock = currentBlock && currentBlock( root, component );
				if ( ifBlock ) ifBlock.mount( ifBlock_anchor.parentNode, ifBlock_anchor );
			}
			
			text1.data = root.data.headline;
			
			text3.data = root.data.standfirst;
			
			text5.data = root.data.headline;
		},
		
		teardown: function ( detach ) {
			if ( ifBlock ) ifBlock.teardown( false );
			
			if ( detach ) {
				detachNode( div );
			}
		},
	};
}

function renderIfBlock_0 ( root, component ) {
	var span = createElement( 'span' );
	span.setAttribute( 'svelte-3090969113', '' );
	span.className = "fc-item__kicker";
	
	var text = createText( root.data.kicker );
	appendNode( text, span );

	return {
		mount: function ( target, anchor ) {
			insertNode( span, target, anchor );
		},
		
		update: function ( changed, root ) {
			text.data = root.data.kicker;
		},
		
		teardown: function ( detach ) {
			if ( detach ) {
				detachNode( span );
			}
		},
	};
}

function FaciaCardContent ( options ) {
	options = options || {};
	
	this._state = options.data || {};

	this._observers = {
		pre: Object.create( null ),
		post: Object.create( null )
	};

	this._handlers = Object.create( null );

	this._root = options._root;
	this._yield = options._yield;

	if ( !addedCss$1 ) addCss$1();
	
	this._fragment = renderMainFragment$2( this._state, this );
	if ( options.target ) this._fragment.mount( options.target, null );
}

FaciaCardContent.prototype.get = get;
FaciaCardContent.prototype.fire = fire;
FaciaCardContent.prototype.observe = observe;
FaciaCardContent.prototype.on = on;

FaciaCardContent.prototype.set = function set ( newState ) {
	var oldState = this._state;
	this._state = Object.assign( {}, oldState, newState );
	
	dispatchObservers( this, this._observers.pre, newState, oldState );
	if ( this._fragment ) this._fragment.update( newState, this._state );
	dispatchObservers( this, this._observers.post, newState, oldState );
};

FaciaCardContent.prototype.teardown = function teardown ( detach ) {
	this.fire( 'teardown' );

	this._fragment.teardown( detach !== false );
	this._fragment = null;

	this._state = {};
};

function renderMainFragment$3 ( root, component ) {
	var div = createElement( 'div' );
	div.className = "fc-item__media-wrapper";
	
	var div1 = createElement( 'div' );
	div1.className = "fc-item__image-container u-responsive-ratio inlined-image";
	
	appendNode( div1, div );
	
	var picture = createElement( 'picture' );
	
	appendNode( picture, div1 );
	appendNode( createText( "\n            " ), picture );
	
	var source = createElement( 'source' );
	source.media = "(min-width: 980px) and (-webkit-min-device-pixel-ratio: 1.25), (min-width: 980px) and (min-resolution: 120dpi)";
	source.sizes = "220px";
	source.setAttribute( 'srcset', "https://i.guim.co.uk/img/media/849294625d777a2810944a85a8af7d07752d3df9/0_102_4096_2458/master/4096.jpg?w=220&q=20&auto=format&usm=12&fit=max&dpr=2&s=f46cee161012621401f0f6d962506122 440w" );
	
	appendNode( source, picture );
	appendNode( createText( "\n            " ), picture );
	
	var source1 = createElement( 'source' );
	source1.media = "(min-width: 980px)";
	source1.sizes = "220px";
	source1.setAttribute( 'srcset', "https://i.guim.co.uk/img/media/849294625d777a2810944a85a8af7d07752d3df9/0_102_4096_2458/master/4096.jpg?w=220&q=55&auto=format&usm=12&fit=max&s=67983b697aff49d2c98245074af9ee17 220w" );
	
	appendNode( source1, picture );
	appendNode( createText( "\n            " ), picture );
	
	var source2 = createElement( 'source' );
	source2.media = "(min-width: 740px) and (-webkit-min-device-pixel-ratio: 1.25), (min-width: 740px) and (min-resolution: 120dpi)";
	source2.sizes = "160px";
	source2.setAttribute( 'srcset', "https://i.guim.co.uk/img/media/849294625d777a2810944a85a8af7d07752d3df9/0_102_4096_2458/master/4096.jpg?w=160&q=20&auto=format&usm=12&fit=max&dpr=2&s=23e38038db72b1c407bb13e4c7041ad5 320w" );
	
	appendNode( source2, picture );
	appendNode( createText( "\n            " ), picture );
	
	var source3 = createElement( 'source' );
	source3.media = "(min-width: 740px)";
	source3.sizes = "160px";
	source3.setAttribute( 'srcset', "https://i.guim.co.uk/img/media/849294625d777a2810944a85a8af7d07752d3df9/0_102_4096_2458/master/4096.jpg?w=160&q=55&auto=format&usm=12&fit=max&s=a2dd33b97c1791b753b23de303a615ab 160w" );
	
	appendNode( source3, picture );
	appendNode( createText( "\n            " ), picture );
	
	var source4 = createElement( 'source' );
	source4.media = "(min-width: 0px) and (-webkit-min-device-pixel-ratio: 1.25), (min-width: 0px) and (min-resolution: 120dpi)";
	source4.sizes = "127px";
	source4.setAttribute( 'srcset', "https://i.guim.co.uk/img/media/849294625d777a2810944a85a8af7d07752d3df9/0_102_4096_2458/master/4096.jpg?w=127&q=20&auto=format&usm=12&fit=max&dpr=2&s=d8e5d716d327f3dbbd79d0824bedde9d 254w" );
	
	appendNode( source4, picture );
	appendNode( createText( "\n            " ), picture );
	
	var source5 = createElement( 'source' );
	source5.media = "(min-width: 0px)";
	source5.sizes = "127px";
	source5.setAttribute( 'srcset', "https://i.guim.co.uk/img/media/849294625d777a2810944a85a8af7d07752d3df9/0_102_4096_2458/master/4096.jpg?w=127&q=55&auto=format&usm=12&fit=max&s=a0a096e824eed62c287ae9ffa3af710e 127w" );
	
	appendNode( source5, picture );
	appendNode( createText( "\n            " ), picture );
	appendNode( createText( "\n            " ), picture );
	
	var img = createElement( 'img' );
	img.className = "responsive-img";
	img.alt = '';
	img.src = "https://i.guim.co.uk/img/media/849294625d777a2810944a85a8af7d07752d3df9/0_102_4096_2458/master/4096.jpg?w=300&q=55&auto=format&usm=12&fit=max&s=af1aad5e9179e2401935d8c626e2c461";
	
	appendNode( img, picture );

	return {
		mount: function ( target, anchor ) {
			insertNode( div, target, anchor );
		},
		
		update: noop,
		
		teardown: function ( detach ) {
			if ( detach ) {
				detachNode( div );
			}
		},
	};
}

function FaciaCardImage ( options ) {
	options = options || {};
	
	this._state = options.data || {};

	this._observers = {
		pre: Object.create( null ),
		post: Object.create( null )
	};

	this._handlers = Object.create( null );

	this._root = options._root;
	this._yield = options._yield;

	this._fragment = renderMainFragment$3( this._state, this );
	if ( options.target ) this._fragment.mount( options.target, null );
}

FaciaCardImage.prototype.get = get;
FaciaCardImage.prototype.fire = fire;
FaciaCardImage.prototype.observe = observe;
FaciaCardImage.prototype.on = on;

FaciaCardImage.prototype.set = function set ( newState ) {
	var oldState = this._state;
	this._state = Object.assign( {}, oldState, newState );
	
	dispatchObservers( this, this._observers.pre, newState, oldState );
	if ( this._fragment ) this._fragment.update( newState, this._state );
	dispatchObservers( this, this._observers.post, newState, oldState );
};

FaciaCardImage.prototype.teardown = function teardown ( detach ) {
	this.fire( 'teardown' );

	this._fragment.teardown( detach !== false );
	this._fragment = null;

	this._state = {};
};

var template$1 = (function () {

  return {
    data () {
      return {}
    },
    components: {
      FaciaCardContent,
      FaciaCardImage,
    }
  };
}());

let addedCss = false;
function addCss () {
	var style = createElement( 'style' );
	style.textContent = "\n  .fc-item[svelte-2269358885], [svelte-2269358885] .fc-item {\n    width: 220px; \n  }\n\n  \n\n  .fc-item[svelte-2269358885], [svelte-2269358885] .fc-item {\n      background-color: #f6f6f6; \n  }\n\n  .fc-item  a[svelte-2269358885], .fc-item  [svelte-2269358885] a, .fc-item[svelte-2269358885]  a, [svelte-2269358885] .fc-item  a {\n      color: #333;\n  }\n\n  .fc-item__container[svelte-2269358885], [svelte-2269358885] .fc-item__container {\n      position: relative;\n  }\n\n  \n  .tone-news--item  .rich-link__container[svelte-2269358885]:before, .tone-news--item  [svelte-2269358885] .rich-link__container:before, .tone-news--item[svelte-2269358885]  .rich-link__container:before, [svelte-2269358885] .tone-news--item  .rich-link__container:before, .tone-news--item  .fc-item__container[svelte-2269358885]:before, .tone-news--item  [svelte-2269358885] .fc-item__container:before, .tone-news--item[svelte-2269358885]  .fc-item__container:before, [svelte-2269358885] .tone-news--item  .fc-item__container:before {\n      background-color: #4bc6df;\n  }\n\n    \n  .tone-opinion  .fc-item__container[svelte-2269358885]:before, .tone-opinion  [svelte-2269358885] .fc-item__container:before, .tone-opinion[svelte-2269358885]  .fc-item__container:before, [svelte-2269358885] .tone-opinion  .fc-item__container:before {\n      background-color: red;\n  }\n\n  .fc-item__container[svelte-2269358885]:before, [svelte-2269358885] .fc-item__container:before, .item__container[svelte-2269358885]:before, [svelte-2269358885] .item__container:before {\n      content: '';\n      position: absolute;\n      top: 0;\n      left: 0;\n      right: 0;\n      height: 0.0625rem;\n      z-index: 2;\n  }\n\n  \n  .fc-item  .u-faux-block-link--hover[svelte-2269358885], .fc-item  [svelte-2269358885] .u-faux-block-link--hover, .fc-item[svelte-2269358885]  .u-faux-block-link--hover, [svelte-2269358885] .fc-item  .u-faux-block-link--hover {\n      color: inherit;\n      background-color: #eaeaea; \n  }\n";
	appendNode( style, document.head );

	addedCss = true;
}

function renderMainFragment$1 ( root, component ) {
	var ul = createElement( 'ul' );
	ul.setAttribute( 'svelte-2269358885', '' );
	ul.className = "prototype__fixed-width";
	
	var li = createElement( 'li' );
	li.setAttribute( 'svelte-2269358885', '' );
	li.className = "u-faux-block-link";
	
	appendNode( li, ul );
	
	var div = createElement( 'div' );
	div.setAttribute( 'svelte-2269358885', '' );
	div.className = "\n          fc-item\n          tone-" + ( root.data.tone );
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
	div1.setAttribute( 'svelte-2269358885', '' );
	div1.className = "fc-item__container";
	
	appendNode( div1, div );
	
	var faciaCardImage = new template$1.components.FaciaCardImage({
		target: div1,
		_root: component._root || component
	});
	
	appendNode( createText( "\n          " ), div1 );
	
	var faciaCardContent_initialData = {
		data: root.data
	};
	var faciaCardContent = new template$1.components.FaciaCardContent({
		target: div1,
		_root: component._root || component,
		data: faciaCardContent_initialData
	});

	return {
		mount: function ( target, anchor ) {
			insertNode( ul, target, anchor );
		},
		
		update: function ( changed, root ) {
			div.className = "\n          fc-item\n          tone-" + ( root.data.tone );
			
			var faciaCardContent_changes = {};
			
			if ( 'data' in changed ) faciaCardContent_changes.data = root.data;
			
			if ( Object.keys( faciaCardContent_changes ).length ) faciaCardContent.set( faciaCardContent_changes );
		},
		
		teardown: function ( detach ) {
			faciaCardImage.teardown( false );
			faciaCardContent.teardown( false );
			
			if ( detach ) {
				detachNode( ul );
			}
		},
	};
}

function FaciaCard ( options ) {
	options = options || {};
	
	this._state = Object.assign( template$1.data(), options.data );

	this._observers = {
		pre: Object.create( null ),
		post: Object.create( null )
	};

	this._handlers = Object.create( null );

	this._root = options._root;
	this._yield = options._yield;

	if ( !addedCss ) addCss();
	this._renderHooks = [];
	
	this._fragment = renderMainFragment$1( this._state, this );
	if ( options.target ) this._fragment.mount( options.target, null );
	
	while ( this._renderHooks.length ) {
		var hook = this._renderHooks.pop();
		hook.fn.call( hook.context );
	}
}

FaciaCard.prototype.get = get;
FaciaCard.prototype.fire = fire;
FaciaCard.prototype.observe = observe;
FaciaCard.prototype.on = on;

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

var template = (function () {
/* eslint-disable */

return {
    data () {
      return {}
    },
    components: {
      FaciaCard
    }
  };

}());

function renderMainFragment ( root, component ) {
	var ul = createElement( 'ul' );
	ul.className = "prototype__fixed-width";
	
	var eachBlock_anchor = createComment( "#each cardData" );
	appendNode( eachBlock_anchor, ul );
	var eachBlock_value = root.cardData;
	var eachBlock_iterations = [];
	
	for ( var i = 0; i < eachBlock_value.length; i += 1 ) {
		eachBlock_iterations[i] = renderEachBlock( root, eachBlock_value, eachBlock_value[i], i, component );
		eachBlock_iterations[i].mount( eachBlock_anchor.parentNode, eachBlock_anchor );
	}

	return {
		mount: function ( target, anchor ) {
			insertNode( ul, target, anchor );
		},
		
		update: function ( changed, root ) {
			var eachBlock_value = root.cardData;
			
			for ( var i = 0; i < eachBlock_value.length; i += 1 ) {
				if ( !eachBlock_iterations[i] ) {
					eachBlock_iterations[i] = renderEachBlock( root, eachBlock_value, eachBlock_value[i], i, component );
					eachBlock_iterations[i].mount( eachBlock_anchor.parentNode, eachBlock_anchor );
				} else {
					eachBlock_iterations[i].update( changed, root, eachBlock_value, eachBlock_value[i], i );
				}
			}
			
			for ( var i = eachBlock_value.length; i < eachBlock_iterations.length; i += 1 ) {
				eachBlock_iterations[i].teardown( true );
			}
			
			eachBlock_iterations.length = eachBlock_value.length;
		},
		
		teardown: function ( detach ) {
			for ( var i = 0; i < eachBlock_iterations.length; i += 1 ) {
				eachBlock_iterations[i].teardown( false );
			}
			
			if ( detach ) {
				detachNode( ul );
			}
		},
	};
}

function renderEachBlock ( root, eachBlock_value, faciaCard, faciaCard__index, component ) {
	var faciaCard1_initialData = {
		data: faciaCard
	};
	var faciaCard1 = new template.components.FaciaCard({
		target: null,
		_root: component._root || component,
		data: faciaCard1_initialData
	});

	return {
		mount: function ( target, anchor ) {
			faciaCard1._fragment.mount( target, anchor );
		},
		
		update: function ( changed, root, eachBlock_value, faciaCard, faciaCard__index ) {
			var faciaCard = eachBlock_value[faciaCard__index];
			
			var faciaCard1_changes = {};
			
			if ( 'cardData' in changed ) faciaCard1_changes.data = faciaCard;
			
			if ( Object.keys( faciaCard1_changes ).length ) faciaCard1.set( faciaCard1_changes );
		},
		
		teardown: function ( detach ) {
			faciaCard1.teardown( detach );
		},
	};
}

function FaciaCardContainer ( options ) {
	options = options || {};
	
	this._state = Object.assign( template.data(), options.data );

	this._observers = {
		pre: Object.create( null ),
		post: Object.create( null )
	};

	this._handlers = Object.create( null );

	this._root = options._root;
	this._yield = options._yield;

	this._renderHooks = [];
	
	this._fragment = renderMainFragment( this._state, this );
	if ( options.target ) this._fragment.mount( options.target, null );
	
	while ( this._renderHooks.length ) {
		var hook = this._renderHooks.pop();
		hook.fn.call( hook.context );
	}
}

FaciaCardContainer.prototype.get = get;
FaciaCardContainer.prototype.fire = fire;
FaciaCardContainer.prototype.observe = observe;
FaciaCardContainer.prototype.on = on;

FaciaCardContainer.prototype.set = function set ( newState ) {
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

FaciaCardContainer.prototype.teardown = function teardown ( detach ) {
	this.fire( 'teardown' );

	this._fragment.teardown( detach !== false );
	this._fragment = null;

	this._state = {};
};

/* eslint-disable */

var FaciaCardComponent = new FaciaCardContainer({
    target: document.querySelector('.main'),
    data: {
        cardData: [{
            kicker: 'Yahoo hack',
            headline: '1bn accounts compromised by biggest data breach in history',
            standfirst: 'The latest incident to emerge – which happened in 2013 – is probably distinct from the breach of 500m user accounts in 2014',
            tone: 'opinion',
            showKicker: false
        }, {
            kicker: 'Gareth hack',
            headline: '1 account compromised by smallest data breach in history',
            standfirst: 'The latest incident to emerge – which happened in 2016',
            tone: 'news--item',
            showKicker: true
        }]
    }
});

}());
