import * as core from 'source-scraper-core';

import * as gogoanime from 'gogoanime-scraper';
import * as kissanime from 'kissanime-scraper';
import * as masteranime from 'masteranime-scraper';

import * as mp4upload from 'mp4upload-scraper';
import * as mystream from 'mystream-scraper';
import * as openload from 'openload-scraper';
import * as rapidvideo from 'rapidvideo-scraper';
import * as streamango from 'streamango-scraper';
import * as streamcloud from 'streamcloud-scraper';
import * as streammoe from 'streammoe-scraper';
import * as vevio from 'vevio-scraper';
import * as vidstreaming from 'vidstreaming-scraper';
import * as vidzi from 'vidzi-scraper';

import * as dom from 'source-scraper-dom-runner';
import * as flowplayer from 'source-scraper-flowplayer-runner';
import * as html from 'source-scraper-html-runner';
import * as jwplayer from 'source-scraper-jwplayer-runner';
import * as puppeteer from 'source-scraper-puppeteer-runner';

import runners = require('./runners');
import * as scrapers from './scrapers';

export {
    core,
    gogoanime,
    kissanime,
    masteranime,
    mp4upload,
    mystream,
    openload,
    rapidvideo,
    streamango,
    streamcloud,
    streammoe,
    vevio,
    vidstreaming,
    vidzi,
    dom,
    flowplayer,
    html,
    jwplayer,
    puppeteer,
    scrapers,
    runners
};
