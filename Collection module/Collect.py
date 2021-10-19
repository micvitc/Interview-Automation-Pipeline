#discord id- mememan#2565

from shareplum import Site
from shareplum import Office365
from time import sleep
import json

def getdata():

    """
    function that scrapes data & saves it into a JSON file the below line is the authorization cookie the <link> is
    the main sharepoint link of the organization in our case it would be https://vitacin-my.sharepoint.com/ 
    username is email id & password is your microsoft acc password
    """    

    authcookie = Office365('https://vitacin-my.sharepoint.com/', username='', password='').GetCookies()

    """
    below the link is to your personal folder inside sharepoint 
    in my case it was https://vitacin-my.sharepoint.com/personal/aravind_p2020_vitstudent_ac_in/
    change yours accordingly
    """

    site = Site('https://vitacin-my.sharepoint.com/personal/aravind_p2020_vitstudent_ac_in/', authcookie=authcookie)
    sp_list = site.List('<list name>')  #<list name> - name of the list 
    data = sp_list.GetListItems('All Items')    # gives output as a list of dictionaries

if __name__=="__main__" :
    while True:
        getdata()
        sleep(60 * 60)  #automatically fetches data every hour 

"""
Sample Output : [{'Title': 'me', 'ch1': 'cs', 'ch2': 'valo', 'phno': '1'}]
shareplum docs https://pypi.org/project/SharePlum/
"""
