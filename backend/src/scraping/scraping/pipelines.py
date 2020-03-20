# -*- coding: utf-8 -*-

# Define your item pipelines here
#
# Don't forget to add your pipeline to the ITEM_PIPELINES setting
# See: https://doc.scrapy.org/en/latest/topics/item-pipeline.html
import os
from scrapy.pipelines.images import ImagesPipeline
from scrapy.utils.project import get_project_settings
from scrapy.exceptions import DropItem
from articles.models import Article
from authors.models import Author
from subjects.models import Subject


class ScrapingPipeline(ImagesPipeline):
    def process_item(self, item, spider):
        # Move files to right media folder
        settings = get_project_settings()
        storage = settings.get("IMAGES_STORE")

        hero_path = os.path.join(storage, item["images"][0]["path"])
        author_path = os.path.join(storage, item["images"][1]["path"])
        target_hero_path = os.path.join(
            storage, "hero_images", os.path.basename(item["images"][0]["path"])
        )
        target_author_path = os.path.join(
            storage, "author_images", os.path.basename(item["images"][1]["path"])
        )

        if not os.path.exists(os.path.join(storage, "hero_images")):
            os.makedirs(os.path.join(storage, "hero_images"))
        if not os.path.exists(os.path.join(storage, "author_images")):
            os.makedirs(os.path.join(storage, "author_images"))

        if not Author.objects.filter(name=item["author"]).exists():
            image_path = "author_images/" + os.path.basename(item["images"][1]["path"])
            Author.objects.create(name=item["author"], picture=image_path)
            if not os.rename(author_path, target_author_path):
                raise DropItem("Could not move image to target folder AUTHOR")

        if not Subject.objects.filter(name=item["subject"]).exists():
            Subject.objects.create(name=item["subject"])

        if not Article.objects.filter(slug=item["slug"]).exists():

            image_path = "hero_images/" + os.path.basename(item["images"][0]["path"])
            Article.objects.create(
                title=item["title"],
                slug=item["slug"],
                author=Author.objects.get(name=item["author"]),
                subject=Subject.objects.get(name=item["subject"]),
                hero_image=image_path,
                publish_date=item["publish_date"],
                text=item["text"],
            )
            if not os.rename(hero_path, target_hero_path):
                raise DropItem("Could not move image to target folder HERO")

        return item
