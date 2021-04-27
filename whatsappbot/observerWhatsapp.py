from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.common.keys import Keys
from selenium import webdriver
import selenium
import requests
import random
import time

chrome_options = webdriver.ChromeOptions()
chrome_options.add_argument("user-data-dir=selenium") 
prefs = {"profile.default_content_setting_values.notifications" : 2}
chrome_options.add_experimental_option("prefs",prefs)
driver = webdriver.Chrome('./chromedriver.exe')

driver.get('https://web.whatsapp.com/')

time.sleep(5)

def loginWhatsapp():
    while(True):
        try:
            verifyLoginPage = driver.find_element_by_xpath('//*[@id="side"]/div[1]/div/div').text
        except:
            verifyLoginPage = ''

        if (verifyLoginPage == ''):
            print("Faça login no whatsapp para continuar")
            time.sleep(3)
        else:
            print("Login feito")
            break


def searchImage(novaMensagem):
    novaMensagem.click()
    time.sleep(3)

    # Pegar a ultima mensagem


def readNewMessages():
    for x in range(10):
        try:
            novaMensagem = driver.find_element_by_xpath('//*[@id="pane-side"]/div[1]/div/div/div['+str(x)+']/div/div/div[2]/div[2]/div[2]/span[1]/div/span')

        except:
            novaMensagem = ''
            print('Não há novas mensagens nesta conversa')

        if (novaMensagem != ''):
            searchImage(novaMensagem)


def main():
    print("função principal")
    loginWhatsapp()
    readNewMessages()
    driver.quit()


main()