import os
import glob
import subprocess
from background_task import background

FILE_PATH = os.path.dirname(os.path.abspath(__file__))
SPIDERS_FILE_PATH = FILE_PATH + "/scraping/spiders/"


@background(schedule=7200)
def crawl_news():
    for spider in glob.glob(SPIDERS_FILE_PATH + "[!__]*"):
        spider_name = os.path.splitext(os.path.basename(spider))[0]
        subprocess.Popen("scrapy crawl " + spider_name, shell=True, cwd=FILE_PATH)
