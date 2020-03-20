import os
import scrapy
from datetime import datetime, timedelta

URL = "https://www.foxnews.com/"
FILE_PATH = os.path.abspath(__file__)

# Spider name accordingly with his filename
SPIDER_NAME = os.path.splitext(os.path.basename(FILE_PATH))[0]


class FoxNewsSpider(scrapy.Spider):
    name = SPIDER_NAME
    start_urls = [URL]

    def parse(self, response):

        for sel in response.xpath(
            '//div[@class="collection collection-spotlight has-hero"]//article | '
            + '//div[@class="collection collection-spotlight"]//article | '
            + '//div[@class="main main-secondary"]//article'
        ):

            item = {
                "title": sel.xpath('.//div[@class="info"]/header/h2/a/text()')
                .extract()[0]
                .replace("\n", "")
                .replace("\t", ""),
                "slug": sel.xpath('.//div[@class="info"]/header/h2/a/@href')
                .extract()[0]
                .split("/")[-1:][0],
                "subject": sel.xpath('.//div[@class="info"]/header/h2/a/@href')
                .extract()[0]
                .split("/")[-2:][0],
            }

            content_url = sel.xpath(
                './/div[@class="info"]/header/h2/a/@href'
            ).extract()[0]

            yield scrapy.Request(
                content_url, callback=self.parse_content, meta={"article": item}
            )

    def parse_content(self, response):
        item = response.meta["article"]
        item["text"] = ""

        try:

            for p in response.xpath('//div[@class="article-body"]/p//text()').extract():
                item["text"] += p

            item["author"] = response.xpath(
                '//div[@class="author-byline"]//span/a/text()'
            ).extract()[0]

            delta = timedelta(
                hours=int(
                    response.xpath('//div[@class="article-date"]/time/text()')
                    .extract()[0]
                    .split(" ")[1]
                )
            )
            publish_date = datetime.now() - delta
            item["publish_date"] = publish_date

            item["image_urls"] = [
                response.xpath('.//div[@class="article-body"]//img/@src')
                .extract()[0]
                .split("?")[0]
            ]

            item["image_urls"].append(
                response.xpath('.//div[@class="author-headshot"]/div/img/@src')
                .extract()[0]
                .split("?")[0]
            )

        except IndexError:

            for p in response.xpath('//div[@class="article-text"]/p//text()').extract():
                item["text"] += p

            item["author"] = response.xpath(
                '//span[@class="author"]//span/a/text()'
            ).extract()[0]

            item["publish_date"] = response.xpath(".//time/@datetime").extract()[0]

            item["image_urls"] = [response.xpath(".//div//img/@src")[1].extract()]

            item["image_urls"].append(
                "https://cdn1.iconfinder.com/data/icons/photography-2/512/YPS__human_avatar_portrait_photography_picture_photo-512.png"
            )

        yield item
