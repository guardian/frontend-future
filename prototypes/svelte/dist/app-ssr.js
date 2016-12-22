'use strict';

var FaciaCardContent = {};

FaciaCardContent.filename = "/Users/dkendrick/Projects/frontend-future/prototypes/svelte/src/FaciaCardContent.html";

FaciaCardContent.render = function ( root, options ) {
	root = root || {};
	
	return `<div class="fc-item__content" svelte-3090969113><div class="fc-item__header" svelte-3090969113><h2 class="fc-item__title" svelte-3090969113><a href="https://www.theguardian.com/technology/2016/dec/14/yahoo-hack-security-of-one-billion-accounts-breached" class="fc-item__link" data-link-name="article" svelte-3090969113>${ root.data.showKicker ? `<span class="fc-item__kicker" svelte-3090969113>${__escape$2( root.data.kicker )}</span>` : `` }
	
	            <span class="u-faux-block-link__cta fc-item__headline" svelte-3090969113><span class="js-headline-text" svelte-3090969113>${__escape$2( root.data.headline )}</span></span></a></h2></div>
	    <div class="fc-item__standfirst" svelte-3090969113>${__escape$2( root.data.standfirst )}</div>
	    <a href="https://www.theguardian.com/technology/2016/dec/14/yahoo-hack-security-of-one-billion-accounts-breached" class="u-faux-block-link__overlay js-headline-text" data-link-name="article" tabindex="-1" svelte-3090969113>${__escape$2( root.data.headline )}</a></div>`;
};

FaciaCardContent.renderCss = function () {
	var components = [];
	
	components.push({
		filename: FaciaCardContent.filename,
		css: "\n  .fc-item__header[svelte-3090969113], [svelte-3090969113] .fc-item__header {\n      color: #ffffff;\n      font-size: 1.25rem;\n      line-height: 1.5rem;\n      font-family: \"Guardian Egyptian Headline\", Georgia, serif;\n      font-weight: normal;\n      font-weight: 500;\n      padding-bottom: .5em\n  }\n\n  .fc-item__headline[svelte-3090969113], [svelte-3090969113] .fc-item__headline {\n      color: var(--tone, black);\n  }\n\n  .fc-item__standfirst[svelte-3090969113], [svelte-3090969113] .fc-item__standfirst {\n      font-size: 0.875rem;\n      line-height: 1.125rem;\n      font-family: \"Guardian Egyptian Text\", Georgia,serif;\n      font-weight: normal;\n      padding-bottom: .5em;\n      color: #767676;\n  }\n\n  .fc-item__kicker[svelte-3090969113]:after, [svelte-3090969113] .fc-item__kicker:after {\n      color: rgb(214, 214, 214);\n      content: \"/\";\n      display: inline-block;\n      height: 20px;\n      margin-left: 3.2px;\n      width: 5.65625px;\n  }\n\n  .tone-news--item  .fc-item__kicker[svelte-3090969113], .tone-news--item  [svelte-3090969113] .fc-item__kicker, .tone-news--item[svelte-3090969113]  .fc-item__kicker, [svelte-3090969113] .tone-news--item  .fc-item__kicker {\n      color: #005689;\n  }\n\n  .fc-item__content[svelte-3090969113], [svelte-3090969113] .fc-item__content {\n    padding-left: 0.3125rem;\n    padding-right: 0.3125rem\n  }\n\n  .fc-item__kicker[svelte-3090969113], [svelte-3090969113] .fc-item__kicker, .fc-item__title[svelte-3090969113], [svelte-3090969113] .fc-item__title {\n      font-size: inherit;\n  }\n\n  \n\n  \n\n  a.u-faux-block-link__overlay[svelte-3090969113], [svelte-3090969113] a.u-faux-block-link__overlay {\n      position: absolute;\n      z-index: 0;\n      opacity: 0;\n  }\n\n  .u-faux-block-link__overlay[svelte-3090969113], [svelte-3090969113] .u-faux-block-link__overlay {\n      top: 0;\n      right: 0;\n      bottom: 0;\n      left: 0;\n      overflow: hidden;\n      text-indent: 200%;\n      white-space: nowrap;\n      background: transparent;\n  }\n",
		map: null // TODO
	});
	
	return {
		css: components.map( x => x.css ).join( '\n' ),
		map: null,
		components
	};
};

var escaped$2 = {
	'"': '&quot;',
	"'": '&39;',
	'&': '&amp;',
	'<': '&lt;',
	'>': '&gt;'
};

function __escape$2 ( html ) {
	return String( html ).replace( /["'&<>]/g, match => escaped$2[ match ] );
}

var FaciaCardImage = {};

FaciaCardImage.filename = "/Users/dkendrick/Projects/frontend-future/prototypes/svelte/src/FaciaCardImage.html";

FaciaCardImage.render = function ( root, options ) {
	root = root || {};
	
	return `<div class="fc-item__media-wrapper"><div class="fc-item__image-container u-responsive-ratio inlined-image"><picture>
	            <source media="(min-width: 980px) and (-webkit-min-device-pixel-ratio: 1.25), (min-width: 980px) and (min-resolution: 120dpi)" sizes="220px" srcset="https://i.guim.co.uk/img/media/849294625d777a2810944a85a8af7d07752d3df9/0_102_4096_2458/master/4096.jpg?w=220&q=20&auto=format&usm=12&fit=max&dpr=2&s=f46cee161012621401f0f6d962506122 440w">
	            <source media="(min-width: 980px)" sizes="220px" srcset="https://i.guim.co.uk/img/media/849294625d777a2810944a85a8af7d07752d3df9/0_102_4096_2458/master/4096.jpg?w=220&q=55&auto=format&usm=12&fit=max&s=67983b697aff49d2c98245074af9ee17 220w">
	            <source media="(min-width: 740px) and (-webkit-min-device-pixel-ratio: 1.25), (min-width: 740px) and (min-resolution: 120dpi)" sizes="160px" srcset="https://i.guim.co.uk/img/media/849294625d777a2810944a85a8af7d07752d3df9/0_102_4096_2458/master/4096.jpg?w=160&q=20&auto=format&usm=12&fit=max&dpr=2&s=23e38038db72b1c407bb13e4c7041ad5 320w">
	            <source media="(min-width: 740px)" sizes="160px" srcset="https://i.guim.co.uk/img/media/849294625d777a2810944a85a8af7d07752d3df9/0_102_4096_2458/master/4096.jpg?w=160&q=55&auto=format&usm=12&fit=max&s=a2dd33b97c1791b753b23de303a615ab 160w">
	            <source media="(min-width: 0px) and (-webkit-min-device-pixel-ratio: 1.25), (min-width: 0px) and (min-resolution: 120dpi)" sizes="127px" srcset="https://i.guim.co.uk/img/media/849294625d777a2810944a85a8af7d07752d3df9/0_102_4096_2458/master/4096.jpg?w=127&q=20&auto=format&usm=12&fit=max&dpr=2&s=d8e5d716d327f3dbbd79d0824bedde9d 254w">
	            <source media="(min-width: 0px)" sizes="127px" srcset="https://i.guim.co.uk/img/media/849294625d777a2810944a85a8af7d07752d3df9/0_102_4096_2458/master/4096.jpg?w=127&q=55&auto=format&usm=12&fit=max&s=a0a096e824eed62c287ae9ffa3af710e 127w">
	            
	            <img class="responsive-img" alt="" src="https://i.guim.co.uk/img/media/849294625d777a2810944a85a8af7d07752d3df9/0_102_4096_2458/master/4096.jpg?w=300&q=55&auto=format&usm=12&fit=max&s=af1aad5e9179e2401935d8c626e2c461"></picture></div></div>`;
};

FaciaCardImage.renderCss = function () {
	var components = [];
	
	return {
		css: components.map( x => x.css ).join( '\n' ),
		map: null,
		components
	};
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

var FaciaCard = {};

FaciaCard.filename = "/Users/dkendrick/Projects/frontend-future/prototypes/svelte/src/FaciaCard.html";

FaciaCard.render = function ( root, options ) {
	root = Object.assign( template$1.data(), root || {} );
	
	return `<ul class="prototype__fixed-width" svelte-2269358885><li class="u-faux-block-link" svelte-2269358885><div class="
	          fc-item
	          tone-${root.data.tone}" data-discussion-closed="false" data-discussion-url="https://www.theguardian.com/technology/2016/dec/14/yahoo-hack-security-of-one-billion-accounts-breached#comments" data-link-name="news | group-1 | card-4" data-item-visibility="all" data-test-id="facia-card" data-id="technology/2016/dec/14/yahoo-hack-security-of-one-billion-accounts-breached" data-loyalty-short-url="/p/5g4jt" data-node-uid="15" svelte-2269358885><div class="fc-item__container" svelte-2269358885>${template$1.components.FaciaCardImage.render({})}
	          ${template$1.components.FaciaCardContent.render({data: root.data})}</div></div></li></ul>`;
};

FaciaCard.renderCss = function () {
	var components = [];
	
	components.push({
		filename: FaciaCard.filename,
		css: "\n  .fc-item[svelte-2269358885], [svelte-2269358885] .fc-item {\n    width: 220px; \n  }\n\n  \n\n  .fc-item[svelte-2269358885], [svelte-2269358885] .fc-item {\n      background-color: #f6f6f6; \n  }\n\n  .fc-item  a[svelte-2269358885], .fc-item  [svelte-2269358885] a, .fc-item[svelte-2269358885]  a, [svelte-2269358885] .fc-item  a {\n      color: #333;\n  }\n\n  .fc-item__container[svelte-2269358885], [svelte-2269358885] .fc-item__container {\n      position: relative;\n  }\n\n  \n  .tone-news--item  .rich-link__container[svelte-2269358885]:before, .tone-news--item  [svelte-2269358885] .rich-link__container:before, .tone-news--item[svelte-2269358885]  .rich-link__container:before, [svelte-2269358885] .tone-news--item  .rich-link__container:before, .tone-news--item  .fc-item__container[svelte-2269358885]:before, .tone-news--item  [svelte-2269358885] .fc-item__container:before, .tone-news--item[svelte-2269358885]  .fc-item__container:before, [svelte-2269358885] .tone-news--item  .fc-item__container:before {\n      background-color: #4bc6df;\n  }\n\n    \n  .tone-opinion  .fc-item__container[svelte-2269358885]:before, .tone-opinion  [svelte-2269358885] .fc-item__container:before, .tone-opinion[svelte-2269358885]  .fc-item__container:before, [svelte-2269358885] .tone-opinion  .fc-item__container:before {\n      background-color: red;\n  }\n\n  .fc-item__container[svelte-2269358885]:before, [svelte-2269358885] .fc-item__container:before, .item__container[svelte-2269358885]:before, [svelte-2269358885] .item__container:before {\n      content: '';\n      position: absolute;\n      top: 0;\n      left: 0;\n      right: 0;\n      height: 0.0625rem;\n      z-index: 2;\n  }\n\n  \n  .fc-item  .u-faux-block-link--hover[svelte-2269358885], .fc-item  [svelte-2269358885] .u-faux-block-link--hover, .fc-item[svelte-2269358885]  .u-faux-block-link--hover, [svelte-2269358885] .fc-item  .u-faux-block-link--hover {\n      color: inherit;\n      background-color: #eaeaea; \n  }\n",
		map: null // TODO
	});
	
	var seen = {};
	
	function addComponent ( component ) {
		var result = component.renderCss();
		result.components.forEach( x => {
			if ( seen[ x.filename ] ) return;
			seen[ x.filename ] = true;
			components.push( x );
		});
	}
	
	addComponent( template$1.components.FaciaCardContent );
	addComponent( template$1.components.FaciaCardImage );
	
	return {
		css: components.map( x => x.css ).join( '\n' ),
		map: null,
		components
	};
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

var FaciaCardContainer = {};

FaciaCardContainer.filename = "/Users/dkendrick/Projects/frontend-future/prototypes/svelte/src/FaciaCardContainer.html";

FaciaCardContainer.render = function ( root, options ) {
	root = Object.assign( template.data(), root || {} );
	
	return `<ul class="prototype__fixed-width">${ root.cardData.map( faciaCard => `${template.components.FaciaCard.render({data: faciaCard})}` ).join( '' )}</ul>`;
};

FaciaCardContainer.renderCss = function () {
	var components = [];
	
	var seen = {};
	
	function addComponent ( component ) {
		var result = component.renderCss();
		result.components.forEach( x => {
			if ( seen[ x.filename ] ) return;
			seen[ x.filename ] = true;
			components.push( x );
		});
	}
	
	addComponent( template.components.FaciaCard );
	
	return {
		css: components.map( x => x.css ).join( '\n' ),
		map: null,
		components
	};
};

module.exports = FaciaCardContainer;
