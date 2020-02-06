/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./data.js":
/*!*****************!*\
  !*** ./data.js ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const pojo = () => {\n\n    return [\n      {\n        cat: \"Industrials\",\n        name: \"Bitcoin\",\n        value: 45,\n        icon: \"img/BTC.png\",\n        desc: `\n        3M Co. issfdbds a technology company, which manufactures industrial, safety and consumer products`,\n        link: \"Here\",\n        linkUrl: \"http://coinbase-appacademy.herokuapp.com/#/coins/BTC\"\n      },\n      {\n        cat: \"financials\",\n        name: \"Ethereum\",\n        value: 37,\n        icon: \"img/ETH.png\",\n        desc: `\n        American Express Co. engages in the provision of charge\n         and credit card products, and travel-related services.`,\n        link: \"Here\",\n        linkUrl: \"http://coinbase-appacademy.herokuapp.com/#/coins/ETH\"\n      },\n      {\n        cat: \"technology\",\n        name: \"Bitcoin Cash\",\n        value: 32,\n        icon: \"img/BCH.png\",\n        desc: `\n      Apple, Inc. engages in the design, manufacture, and sale of smartphones, personal \n      computers, tablets, wearables and accessories, and other variety of related services.`,\n        link: \"Here\",\n        linkUrl: \"http://coinbase-appacademy.herokuapp.com/#/coins/BCH\"\n      },\n      {\n        cat: \"technology\",\n        name: \"Binance Coin\",\n        value: 30,\n        icon: \"img/BNB.svg\",\n        desc: `\n        The Boeing Co. is an aerospace company, which engages in the manufacture of \n        commercial jetliners and defense, space and security systems.`,\n        link: \"Here\",\n        linkUrl: \"http://coinbase-appacademy.herokuapp.com/#/coins/BNB\"\n      },\n      {\n        cat: \"Industrials\",\n        name: \"Litecoin\",\n        value: 16,\n        icon: \"img/ltc.png\",\n        desc: `\n        Caterpillar, Inc. engages in the manufacture of construction and mining equipment, \n        diesel and natural gas engines, industrial gas turbines, and diesel-electric locomotives.`,\n        link: \"Here\",\n        linkUrl: \"http://coinbase-appacademy.herokuapp.com/#/coins/LTC\"\n      },\n      {\n        cat: \"energy\",\n        name: \"Tron\",\n        value: 4,\n        icon: \"img/TRX.png\",\n        desc: `\n        Chevron Corp. engages in the provision of administrative, financial management, \n        and technology support for energy and chemical operations.`,\n        link: \"Here\",\n        linkUrl: \"http://coinbase-appacademy.herokuapp.com/#/coins/TRX\"\n      },\n      {\n        cat: \"technology\",\n        name: \"Ripple\",\n        value: 20,\n        icon: \"img/XRP.png\",\n        desc: `\n        Cisco Systems, Inc. engages in the design, manufacture, and sale of Internet \n        Protocol based networking products and services related to the communications and information technology industry.`,\n        link: \"Here\",\n        linkUrl: \"http://coinbase-appacademy.herokuapp.com/#/coins/XRP\"\n      },\n      {\n        cat: \"consumer staples\",\n        name: \"Stellar Lumens\",\n        value: 15,\n        icon: \"img/XLM.png\",\n        desc: `\n        The Coca-Cola Company is an American multinational corporation, and manufacturer, \n        retailer, and marketer of nonalcoholic beverage concentrates and syrups.`,\n        link: \"Here\",\n        linkUrl: \"http://coinbase-appacademy.herokuapp.com/#/coins/XLM\"\n      },\n      {\n        cat: \"consumer discretionary\",\n        name: \"Dash\",\n        value: 15,\n        icon: \"img/DASH.png\",\n        desc: `\n        The Walt Disney Company, commonly known as Disney, is an American diversified multinational mass \n        media and entertainment conglomerate headquartered at the Walt Disney Studios complex in Burbank, California.`,\n        link: \"Here\",\n        linkUrl: \"http://coinbase-appacademy.herokuapp.com/#/coins/DASH\"\n      },\n      {\n        cat: \"Industrials\",\n        name: \"Ontology\",\n        value: 10,\n        icon: \"img/ONT.png\",\n        desc: `\n        Dow, Inc. materials science company, combining science and technology to develop innovative solutions.`,\n        link: \"Here\",\n        linkUrl: \"http://coinbase-appacademy.herokuapp.com/#/coins/ONT\"\n      },\n      {\n        cat: \"energy\",\n        name: \"Neo\",\n        value: 4,\n        icon: \"img/NEO.png\",\n        desc: `\n        Exxon Mobil Corp. engages in the exploration, development, and distribution of oil, gas, and petroleum products.`,\n        link: \"Here\",\n        linkUrl: \"http://coinbase-appacademy.herokuapp.com/#/coins/NEO\"\n      }\n      // {\n      //   cat: \"consumer discretionary\",\n      //   name: \"Wal-mart\",\n      //   value: 10,\n      //   icon: \"../img/walmart.png\",\n      //   desc: `\n      //  Walmart, Inc. engages in retail and wholesale business. The Company offers\n      //  an assortment of merchandise and services at everyday low prices.\n      // `\n      // },\n      // {\n      //   cat: \"consumer discretionary\",\n      //   name: \"Walgreens\",\n      //   value: 10,\n      //   icon: \"../img/walgreens.png\",\n      //   desc: `\n      //  Walgreens Boots Alliance, Inc. engages in the provision of drug store services.\n      // `\n      // }\n    ];\n}\n\n\nmodule.exports = pojo;\n\n//# sourceURL=webpack:///./data.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const pojo = __webpack_require__(/*! ../data */ \"./data.js\");\nlet data = pojo();\n//  \n\nlet svg = d3.select(\"svg\");\nlet width = document.body.clientWidth; // get width in pixels\nlet height = +svg.attr(\"height\");\nlet centerX = width * 0.5;\nlet centerY = height * 0.5;\nlet strength = 0.05;\nlet focusedNode;\n\n\nlet scaleColor = d3.scaleOrdinal([\n  `#353544`,\n  `#98A5A5`,\n  `#D5786F`,\n  `#B8B8C1`,\n  `#9B6079`,\n  `#5D7177`,\n  `#424751`,\n  `#949396`,\n  `#4C4B63`\n]);\n\n// use pack to calculate radius of the circle\nlet pack = d3\n  .pack()\n  .size([width, height])\n  .padding(2.0);\n\nlet forceCollide = d3.forceCollide(d => d.r + 1);\n\n// use the force\nlet simulation = d3\n  .forceSimulation()\n  .force(\"charge\", d3.forceManyBody())\n  .force(\"collide\", forceCollide)\n  .force(\"x\", d3.forceX(centerX).strength(strength))\n  .force(\"y\", d3.forceY(centerY).strength(strength));\n\n// reduce number of circles on mobile screen due to slow computation\nif (\n  \"matchMedia\" in window &&\n  window.matchMedia(\"(max-device-width: 767px)\").matches\n) {\n  data = data.filter(el => {\n    return el.value >= 50;\n  });\n}\n\nlet root = d3.hierarchy({ children: data }).sum(d => d.value);\n\n// we use pack() to automatically calculate radius conveniently only\n// and get only the leaves\nlet nodes = pack(root)\n  .leaves()\n  .map(node => {\n    console.log(\"node:\", node.x, (node.x - centerX) * 2);\n    const data = node.data;\n    return {\n      x: centerX + (node.x - centerX) * 3, // magnify start position to have transition to center movement\n      y: centerY + (node.y - centerY) * 3,\n      r: 0, // for tweening\n      radius: node.r, //original radius\n      id: data.cat,\n      cat: data.cat,\n      name: data.name,\n      value: data.value,\n      icon: data.icon,\n      desc: data.desc,\n      link: data.link,\n      linkUrl: data.linkUrl\n    };\n  });\nsimulation.nodes(nodes).on(\"tick\", ticked);\n\n// svg.style(\"background-color\", \"#eee\");\nlet node = svg\n  .selectAll(\".node\")\n  .data(nodes)\n  .enter()\n  .append(\"g\")\n  .attr(\"class\", \"node\")\n  .call(\n    d3\n      .drag()\n      .on(\"start\", d => {\n        if (!d3.event.active) simulation.alphaTarget(0.2).restart();\n        d.fx = d.x;\n        d.fy = d.y;\n      })\n      .on(\"drag\", d => {\n        d.fx = d3.event.x;\n        d.fy = d3.event.y;\n      })\n      .on(\"end\", d => {\n        if (!d3.event.active) simulation.alphaTarget(0);\n        d.fx = null;\n        d.fy = null;\n      })\n  );\n\nnode\n  .append(\"circle\")\n  // .attr(\"id\", d => d.id)\n  .attr(\"r\", 0)\n  .style(\"fill\", d => scaleColor(d.cat))\n  .attr(\"id\", d => d.cat)\n  .style(\"opacity\", 0.7)\n  .transition()\n  .duration(2000) // 3000??\n  .ease(d3.easeElasticOut)\n  .tween(\"circleIn\", d => {\n    let i = d3.interpolateNumber(0, d.radius);\n    return t => {\n      d.r = i(t);\n      simulation.force(\"collide\", forceCollide);\n    };\n  });\n\nnode\n  .append(\"clipPath\")\n  .attr(\"id\", d => `clip-${d.id}`)\n  .append(\"use\")\n  .attr(\"xlink:href\", d => `#${d.id}`);\n\n// display text as circle icon\nnode\n  .filter(d => !String(d.icon).includes(\"img/\"))\n  .append(\"text\")\n  .classed(\"node-icon\", true)\n  .attr(\"clip-path\", d => `url(#clip-${d.id})`)\n  .selectAll(\"tspan\")\n  .data(d => d.icon.split(';')) // Comment Out ??? Purpose\n  .enter()\n  // .append(\"tspan\")\n  // .attr(\"x\", 0)\n  // .attr(\"y\", (d, i, nodes) => 13 + (i - nodes.length / 2 - 0.5) * 10)\n  // .text(name => name);\n\n// display image as circle icon\nnode\n  .filter(d => String(d.icon).includes(\"img/\"))\n  .append(\"image\")\n  .classed(\"node-icon\", true)\n  .attr(\"clip-path\", d => `url(#clip-${d.id})`)\n  .attr(\"xlink:href\", d => d.icon)\n  .attr(\"x\", d => -d.radius * 0.7)\n  .attr(\"y\", d => -d.radius * 0.7)\n  .attr(\"height\", d => d.radius * 2 * 0.7)\n  .attr(\"width\", d => d.radius * 2 * 0.7);\n\n// node.append(\"title\").text(d => d.cat + \"::\" + d.name + \"\\n\" + format(d.value));\n\nlet legendOrdinal = d3\n  .legendColor()\n  .scale(scaleColor)\n  .shape(\"circle\");\n\nlet legend = svg\n  .append(\"g\")\n  .classed(\"legend-color\", true)\n  .attr(\"text-anchor\", \"start\")\n  .attr(\"transform\", \"translate(20,30)\")\n  .style(\"font-size\", \"12px\")\n  .style(\"fill\", \"#B9CCCC\")\n  .call(legendOrdinal);\n\nlet sizeScale = d3\n  .scaleOrdinal()\n  .domain([\"less use\", \"more use\"])\n  .range([5, 10]);\n\nlet legendSize = d3\n  .legendSize()\n  .scale(sizeScale)\n  .shape(\"circle\")\n  .shapePadding(10)\n  .labelAlign(\"end\");\n\nlet legend2 = svg\n  .append(\"g\")\n  .classed(\"legend-size\", true)\n  .attr(\"text-anchor\", \"start\")\n  .attr(\"transform\", \"translate(150, 25)\")\n  .style(\"font-size\", \"12px\")\n  .style(\"fill\", \"#B9CCCC\")\n\n  .call(legendSize);\n\nlet infoBox = node\n  .append(\"foreignObject\")\n  .classed(\"circle-overlay hidden\", true)\n  .attr(\"x\", -350 * 0.5 * 0.8)\n  .attr(\"y\", -350 * 0.5 * 0.8)\n  .attr(\"height\", 350 * 0.8)\n  .attr(\"width\", 350 * 0.8)\n  .append(\"xhtml:div\")\n  .classed(\"circle-overlay__inner\", true);\n\ninfoBox\n  .append(\"h2\")\n  .classed(\"circle-overlay__title\", true)\n  .text(d => d.name);\n\ninfoBox\n  .append(\"p\")\n  .classed(\"circle-overlay__body\", true)\n  .html(d => d.desc);\n\ninfoBox\n  .append(\"a\")\n  .attr(\"href\", d => d.linkUrl)\n  .classed(\"circle-overlay__body\", true)\n  .attr(\"target\", \"_blank\")\n  .html(d => d.link);\n\n// ---------------------------------------------\n\n\nnode.on(\"click\", currentNode => {\n  d3.event.stopPropagation();\n\n  let currentTarget = d3.event.currentTarget; // the <g> el\n\n  if (currentNode === focusedNode) {\n    return;\n  }\n\n  let lastNode = focusedNode;\n  focusedNode = currentNode;\n\n  simulation.alphaTarget(0.2).restart();\n  // hide all circle-overlay\n  d3.selectAll(\".circle-overlay\").classed(\"hidden\", true);\n  d3.selectAll(\".node-icon\").classed(\"node-icon--faded\", false);\n\n  // don't fix last node to center anymore\n  if (lastNode) {\n    lastNode.fx = null;\n    lastNode.fy = null;\n    node\n      .filter((d, i) => i === lastNode.index)\n      .transition()\n      .duration(2000)\n      .ease(d3.easePolyOut)\n      .tween(\"circleOut\", () => {\n        let irl = d3.interpolateNumber(lastNode.r, lastNode.radius);\n        return t => {\n          lastNode.r = irl(t);\n        };\n      })\n      .on(\"interrupt\", () => {\n        lastNode.r = lastNode.radius;\n      });\n  }\n\n  // if (!d3.event.active) simulation.alphaTarget(0.5).restart();\n\n  d3.transition()\n    .duration(2000)\n    .ease(d3.easePolyOut)\n    .tween(\"moveIn\", () => {\n      console.log(\"tweenMoveIn\", currentNode);\n      let ix = d3.interpolateNumber(currentNode.x, centerX);\n      let iy = d3.interpolateNumber(currentNode.y, centerY);\n      let ir = d3.interpolateNumber(currentNode.r, centerY * 0.5);\n      return function(t) {\n        currentNode.fx = ix(t);\n        currentNode.fy = iy(t);\n        currentNode.r = ir(t);\n        simulation.force(\"collide\", forceCollide);\n      };\n    })\n    .on(\"end\", () => {\n      simulation.alphaTarget(0);\n      let $currentGroup = d3.select(currentTarget);\n      $currentGroup.select(\".circle-overlay\").classed(\"hidden\", false);\n      $currentGroup.select(\".node-icon\").classed(\"node-icon--faded\", true);\n    })\n    // .on(\"interrupt\", () => {\n    //   console.log(\"move interrupt\", currentNode);\n    //   currentNode.fx = null;\n    //   currentNode.fy = null;\n    //   simulation.alphaTarget(0);\n    // });\n});\n\n// blur\nd3.select(document).on(\"click\", () => {\n  let target = d3.event.target;\n\n\n  // check if click on document but not on the circle overlay\n  if (!target.closest(\"#circle-overlay\") && focusedNode) {\n    focusedNode.fx = null;\n    focusedNode.fy = null;\n    simulation.alphaTarget(0.2).restart();\n    d3.transition()\n      .duration(2000)\n      .ease(d3.easePolyOut)\n      .tween(\"moveOut\", function() {\n        console.log(\"tweenMoveOut\", focusedNode);\n        let ir = d3.interpolateNumber(focusedNode.r, focusedNode.radius);\n        return function(t) {\n          focusedNode.r = ir(t);\n          simulation.force(\"collide\", forceCollide);\n        };\n      })\n      .on(\"end\", () => {\n        focusedNode = null;\n        simulation.alphaTarget(0);\n      })\n      // .on(\"interrupt\", () => {\n      //   simulation.alphaTarget(0);\n      // });\n\n    // hide all circle-overlay\n    d3.selectAll(\".circle-overlay\").classed(\"hidden\", true);\n    d3.selectAll(\".node-icon\").classed(\"node-icon--faded\", false)\n        .classed(\"node-icon--faded\", false)\n        .style(\"opacity\", 1);\n  }\n});\n\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  document.querySelectorAll(\".legendCells > g\").forEach((el, idx) => {\n    el.setAttribute('id', el.textContent)\n  });\n})\n\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  var clicked = false;\n  console.log(clicked)\n  document.querySelectorAll(\".legendCells > g\").forEach((el) => {\n    el.onclick = function () {\n\n      node.filter(function (d) {\n        return d.id !== el.id\n      }).style(\"opacity\", 0.1)\n\n      node.filter(function (d) {\n        return d.id === el.id\n      }).style(\"opacity\", 1)\n\n      clicked = true;\n    }\n\n    \n  });\n})\n\nfunction ticked() {\n  node\n    .attr(\"transform\", d => `translate(${d.x},${d.y})`)\n    .select(\"circle\")\n    .attr(\"r\", d => d.r);\n}\n\n\n///////\n\n// INCORPORATE THE RENERING OF THE AXIOS CALL here\n// axios.get(`/players`)\n//   .then((res) => {\n//     console.log(res.data.api)\n//     return res.data.api;\n//   })\n//   .then(data => {\n\n//     console.log(data.players);\n//     let playersIndex = \"\";\n//     data.players.forEach(player => {\n//       let name = `<div class=\"p-index-item\" id=\"player-${player.playerId}\">${player.lastName}, ${player.firstName}</div>`\n//       playersIndex = playersIndex.concat(name);\n//     })\n//     this.container.innerHTML = `${playersIndex}`;\n//   })\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });