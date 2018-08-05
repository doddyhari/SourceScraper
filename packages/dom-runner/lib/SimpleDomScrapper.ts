import { DomRunner, IDomRunnerArgs, IDomRunnerOptions } from './DomRunner';

import { ConstructorOptions as JSDOMOptions, JSDOM } from 'jsdom';
import { ISourceData, ISourceScrapper, Scrap, Source, SourceRunnerScrapper } from 'sourcescrapper-core';

export class SimpleDomScrapper
    extends SourceRunnerScrapper<
        ISourceData,
        IDomRunnerOptions,
        IDomRunnerArgs,
        DomRunner<ISourceData>>
    implements ISourceScrapper {
    public static Name: string = 'simpledom';
    public static Domains: string[] = [];
    public static UrlPattern: RegExp = /.*/i;
    public static Runner: DomRunner<ISourceData> = new DomRunner<ISourceData>();
    public static async scrap(url: string): Promise<Scrap<ISourceData>> {
        return new SimpleDomScrapper().scrap(url);
    }
    public static async scrapFromArgs(args: IDomRunnerArgs): Promise<Scrap<ISourceData>> {
        return new SimpleDomScrapper().scrapFromArgs(args);
    }
    public static async scrapFromHtml(url: string, html: string, options?: JSDOMOptions): Promise<Scrap<ISourceData>> {
        const jsdom = new JSDOM(html, options);
        return SimpleDomScrapper.scrapFromArgs({
            url,
            jsdom,
            window: jsdom.window,
            document: jsdom.window.document
        });
    }
    public name: string =  SimpleDomScrapper.Name;
    public domains: string[] = SimpleDomScrapper.Domains;
    public urlPattern: RegExp = SimpleDomScrapper.UrlPattern;
    public runner: DomRunner<ISourceData> = SimpleDomScrapper.Runner;
    protected async runWithArgs({ document }: IDomRunnerArgs): Promise<ISourceData> {
        const data: ISourceData = {
            sources: []
        };
        const videos = document.getElementsByTagName('video');
        for (const video of videos) {
            const vsrc = video.src;
            if (vsrc)
                data.sources.push(new Source({
                    url: vsrc,
                    type: video.getAttribute('type') || undefined
                }));
            const poster = video.poster;
            if (poster)
                data.poster = poster;
            const sources = video.getElementsByTagName('source');
            for (const source of sources) {
                const ssrc = source.src;
                if (ssrc)
                    data.sources.push(new Source({
                        url: ssrc,
                        type: video.getAttribute('type') || undefined
                    }));
            }
        }
        const titles = document.getElementsByTagName('title');
        if (titles.length >= 1)
            data.title = titles[0].innerText;
        return Promise.resolve(data);
    }
}
