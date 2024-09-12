import threading
import time
import traceback

from tqdm import tqdm


import io

import json
import os
import re

from datetime import datetime, timezone
from decimal import Decimal
from urllib.parse import parse_qs, unquote, urlsplit, urlunparse, urlparse

import cloudscraper
import requests
import rookiepy
from bs4 import BeautifulSoup as bs

from colorama import init, Fore, Back, Style

init(autoreset=True)
# colors foreground text:
fc = Fore.CYAN
fg = Fore.GREEN
fw = Fore.WHITE
fr = Fore.RED
fb = Fore.BLUE
flb = Fore.LIGHTBLUE_EX
fbl = Fore.BLACK
fy = Fore.YELLOW
fm = Fore.MAGENTA
flg = Fore.LIGHTGREEN_EX

# colors background text:
bc = Back.CYAN
bg = Back.GREEN
bw = Back.WHITE
br = Back.RED
bb = Back.BLUE
by = Back.YELLOW
bm = Back.MAGENTA

# colors style text:
sd = Style.DIM
sn = Style.NORMAL
sb = Style.BRIGHT

violet = "\033[38;5;93m"

reset = "\033[0m"

ascii_art = rf"""
{violet}
    ██╗   ██╗ ██████═╗ ███████╗ ███╗   ███╗ ██╗ ██╗  ██╗  ╔████╗
    ██║   ██║ ██   ██║ ██╔════╝ ████╗ ████║   ║ ██║  ██║ ██╔══██╗
    ██║   ██║ ██   ██║ █████╗   ██╔████╔██║ ██║ ███████║ ███████║
    ██║   ██║ ██   ██║ ██╔══╝   ██║╚██╔╝██║ ██║ ██╔══██║ ██╔══██║
    ╚██████╔╝ ███████║ ███████╗ ██║ ╚═╝ ██║ ██║ ██║  ██║ ██║  ██║
    ╚═════╝   ╚══════╝ ╚══════╝ ╚═╝     ╚═╝ ╚═╝ ╚═╝  ╚═╝ ╚═╝  ╚═╝
{reset}     by Sidali ~ Enjoy free courses && learn without limits
    """

file_like_object = io.StringIO()

file_like_object.write(ascii_art)

content = file_like_object.getvalue()


class LoginException(Exception):
    """Login Error

    Args:
        Exception (str): Exception Reason
    """

    pass

##################    
#### Hidden #####
#################
class Scraper:
##################    
#### Hidden #####
#################
class Udemy:
##################    
#### Hidden #####
#################
try:
    udemy.scraped_data = scraper.get_scraped_courses(create_scraping_thread)
    time.sleep(0.5)
    print("\n")
    udemy.start_enrolling()

    udemy.print(
        f"\nSuccessfully Enrolled (les courses li dit) : {udemy.successfully_enrolled_c}", color="green"
    )
    udemy.print(
        f"ch7al kano re7 yst9amolk (Amount Saved) : {round(udemy.amount_saved_c,2)} {udemy.currency.upper()}",
        color="light green",
    )
    udemy.print(f"3ndek men bkri (Already enrolled): {udemy.already_enrolled_c}", color="blue")
    udemy.print(f"Expired Courses (fatk l7al 3lihem): {udemy.expired_c}", color="red")

except:
    e = traceback.format_exc()
    print(
        (
            "Error",
            e + f"\n\n{udemy.link}\n{udemy.title}" + f"|:|Unknown Error",
        )
    )
input("Job done <3 tb9a 3la 5ir..")

