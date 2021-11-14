from office365.runtime.auth.user_credential import UserCredential
from office365.sharepoint.client_context import ClientContext

"""
Code snippet below is to generate a query and return the list
"""
site_url = "<url of sharepoint>"
sp_list = "<list-name>"
ctx = ClientContext(site_url).with_credentials(UserCredential("<mailid>", "<password>"))
sp_lists = ctx.web.lists
s_list = sp_lists.get_by_title(sp_list)
l_items = s_list.get_items()
ctx.load(l_items)
ctx.execute_query()

'''
Code snippet below is to remove junk entries 
'''

ls=['FileSystemObjectType','ServerRedirectedEmbedUri','ServerRedirectedEmbedUrl','ID','ContentTypeId','Modified','Created','AuthorId','EditorId','OData__UIVersionString','Attachments','GUID', 'ComplianceAssetId']
l=[]
DATA=[]
for item in l_items:
    l.append(item.properties)
for dic in l:
    DATADIC={}
    for ele in dic:
        if ele not in ls:
            dat=dic.get(ele)
            DATADIC[ele]=dat
    DATA.append(DATADIC)

# OUTPUT
print(DATA)     #List of dictionaries