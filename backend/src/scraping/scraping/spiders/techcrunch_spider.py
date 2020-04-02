import os
import scrapy

URL = "https://techcrunch.com/"
FILE_PATH = os.path.abspath(__file__)

# Spider name accordingly with his filename
SPIDER_NAME = os.path.splitext(os.path.basename(FILE_PATH))[0]


class TechCrunchNewsSpider(scrapy.Spider):
    # Warning: need to match file_name
    name = SPIDER_NAME
    start_urls = [URL]

    def parse(self, response):
        for sel in response.xpath('//div[@class="content"]/div/div'):

            item = {
                "title": sel.xpath('.//h2[@class="post-block__title"]/a/text()')
                .extract()[0]
                .replace("\n", "")
                .replace("\t", ""),
                "slug": sel.xpath('.//h2[@class="post-block__title"]/a/@href')
                .extract()[0]
                .split("/")[-2:-1][0],
                "author": sel.xpath('.//span[@class="river-byline__authors"]/a/text()')
                .extract()[0]
                .replace("\n", "")
                .replace("\t", ""),
                "subject": "tech",
                "image_urls": [
                    sel.xpath('.//figure[@class="post-block__media"]/a/img/@src')
                    .extract()[0]
                    .split("?")[0]
                ],
                "publish_date": sel.xpath(".//time/@datetime").extract()[0],
            }

            content_url = sel.xpath(
                './/h2[@class="post-block__title"]/a/@href'
            ).extract()[0]

            yield scrapy.Request(
                content_url, callback=self.parse_content, meta={"article": item}
            )

    def parse_content(self, response):
        item = response.meta["article"]
        item["text"] = ""
        for p in response.xpath('//div[@class="article-content"]/p//text()').extract():
            item["text"] += p

        author_url = response.xpath(
            './/div[@class="article__byline"]/a/@href'
        ).extract()[0]

        yield scrapy.Request(
            author_url, callback=self.parse_author_image, meta={"article": item}
        )

    def parse_author_image(self, response):
        item = response.meta["article"]
        item["image_urls"].append(
            response.xpath('.//img[@class="author-profile__avatar"]/@src').extract()[0]
        )

        yield item
