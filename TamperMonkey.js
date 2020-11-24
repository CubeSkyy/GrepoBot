// ==UserScript==

// @name         test 
// @author       xadam1, edit some things gdrakoul
// @description  Grepolis automated bot, which helps you with some stuff!

// @include      http://*.grepolis.com/game/*
// @include      https://*.grepolis.com/game/*
// @exclude      view-source://*
// @exclude      https://classic.grepolis.com/game/*

// @version      v5.1
// @grant        none

// ==/UserScript==
(function () {
    var script = document.createElement('script'),
        link = document.createElement('link'),
        head = document.getElementsByTagName('head')[0];
    script.type = 'text/javascript';
    link.type = 'text/css';
    link.rel = 'stylesheet';
    script.src = 'https://cdn.jsdelivr.net/gh/gdrakoul/GrepoBot@v5.1/GrepobotMinified.js' + Math.random();;
    link.href = 'https://cdn.jsdelivr.net/gh/gdrakoul/GrepoBot@v5.1/Autobot.css' + Math.random();;
    head.appendChild(script);
    head.appendChild(link);
    head.setAttribute('xhttps', 1);
})();
