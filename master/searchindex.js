Search.setIndex({docnames:["api","ardzilla/ardzilla","ardzilla/ardzilla.cli","ardzilla/ardzilla.cli.config","ardzilla/ardzilla.cli.download","ardzilla/ardzilla.cli.login","ardzilla/ardzilla.cli.main","ardzilla/ardzilla.cli.options","ardzilla/ardzilla.cli.status","ardzilla/ardzilla.cli.submit","ardzilla/ardzilla.config","ardzilla/ardzilla.config.build","ardzilla/ardzilla.config.core","ardzilla/ardzilla.config.parse","ardzilla/ardzilla.defaults","ardzilla/ardzilla.exceptions","ardzilla/ardzilla.preard","ardzilla/ardzilla.sensors","ardzilla/ardzilla.sensors.common","ardzilla/ardzilla.sensors.landsat","ardzilla/ardzilla.stores","ardzilla/ardzilla.stores.gcs","ardzilla/ardzilla.stores.gdrive","ardzilla/ardzilla.submissions","ardzilla/ardzilla.tests","ardzilla/ardzilla.tests.test_ardzilla","ardzilla/ardzilla.tests.test_tracking","ardzilla/ardzilla.tracking","ardzilla/ardzilla.utils","ardzilla/modules","dev","faq","gee","gee_credentials","gee_storage","history","index","install","netcdf4"],envversion:{"sphinx.domains.c":1,"sphinx.domains.changeset":1,"sphinx.domains.cpp":1,"sphinx.domains.javascript":1,"sphinx.domains.math":2,"sphinx.domains.python":1,"sphinx.domains.rst":1,"sphinx.domains.std":1,"sphinx.ext.intersphinx":1,"sphinx.ext.todo":1,"sphinx.ext.viewcode":1,sphinx:56},filenames:["api.rst","ardzilla/ardzilla.rst","ardzilla/ardzilla.cli.rst","ardzilla/ardzilla.cli.config.rst","ardzilla/ardzilla.cli.download.rst","ardzilla/ardzilla.cli.login.rst","ardzilla/ardzilla.cli.main.rst","ardzilla/ardzilla.cli.options.rst","ardzilla/ardzilla.cli.status.rst","ardzilla/ardzilla.cli.submit.rst","ardzilla/ardzilla.config.rst","ardzilla/ardzilla.config.build.rst","ardzilla/ardzilla.config.core.rst","ardzilla/ardzilla.config.parse.rst","ardzilla/ardzilla.defaults.rst","ardzilla/ardzilla.exceptions.rst","ardzilla/ardzilla.preard.rst","ardzilla/ardzilla.sensors.rst","ardzilla/ardzilla.sensors.common.rst","ardzilla/ardzilla.sensors.landsat.rst","ardzilla/ardzilla.stores.rst","ardzilla/ardzilla.stores.gcs.rst","ardzilla/ardzilla.stores.gdrive.rst","ardzilla/ardzilla.submissions.rst","ardzilla/ardzilla.tests.rst","ardzilla/ardzilla.tests.test_ardzilla.rst","ardzilla/ardzilla.tests.test_tracking.rst","ardzilla/ardzilla.tracking.rst","ardzilla/ardzilla.utils.rst","ardzilla/modules.rst","dev.rst","faq.rst","gee.rst","gee_credentials.rst","gee_storage.rst","history.rst","index.rst","install.rst","netcdf4.rst"],objects:{"":{ardzilla:[1,0,0,"-"]},"ardzilla.cli":{config:[3,0,0,"-"],download:[4,0,0,"-"],login:[5,0,0,"-"],main:[6,0,0,"-"],options:[7,0,0,"-"],status:[8,0,0,"-"],submit:[9,0,0,"-"]},"ardzilla.cli.options":{STYLE_DEBUG:[7,1,1,""],STYLE_ERROR:[7,1,1,""],STYLE_INFO:[7,1,1,""],STYLE_WARNING:[7,1,1,""],fetch_config:[7,1,1,""]},"ardzilla.config":{build:[11,0,0,"-"],core:[12,0,0,"-"],parse:[13,0,0,"-"]},"ardzilla.config.build":{build_tile_grid:[11,1,1,""],build_tracker:[11,1,1,""]},"ardzilla.config.core":{Config:[12,2,1,""]},"ardzilla.config.core.Config":{SCHEMA:[12,3,1,""],as_parsed:[12,4,1,""],config:[12,3,1,""],from_template:[12,5,1,""],from_yaml:[12,5,1,""],get_gcs_store:[12,4,1,""],get_gdrive_store:[12,4,1,""],get_store:[12,4,1,""],get_tile_grid:[12,4,1,""],get_tracker:[12,4,1,""],to_yaml:[12,4,1,""],validate:[12,4,1,""]},"ardzilla.config.parse":{get_default_schema:[13,1,1,""],validate_with_defaults:[13,1,1,""]},"ardzilla.defaults":{GEE_PREARD_FREQ:[14,6,1,""],GEE_PREARD_NAME:[14,6,1,""],GEE_PREARD_PREFIX:[14,6,1,""],GEE_PREARD_TRACKING:[14,6,1,""]},"ardzilla.exceptions":{EmptyCollectionError:[15,7,1,""]},"ardzilla.sensors":{CREATE_ARD_COLLECTION:[17,6,1,""],common:[18,0,0,"-"],landsat:[19,0,0,"-"]},"ardzilla.sensors.common":{collection_metadata:[18,1,1,""],filter_collection_tile:[18,1,1,""],filter_collection_time:[18,1,1,""],get_collection_dates:[18,1,1,""],get_collection_uniq_dates:[18,1,1,""],object_metadata:[18,1,1,""],tile_geom:[18,1,1,""]},"ardzilla.sensors.landsat":{NODATA:[19,6,1,""],create_ard:[19,1,1,""]},"ardzilla.stores":{gcs:[21,0,0,"-"],gdrive:[22,0,0,"-"]},"ardzilla.stores.gcs":{GCSStore:[21,2,1,""],build_gcs_client:[21,1,1,""],delete_blob:[21,1,1,""],download_blob:[21,1,1,""],exists:[21,1,1,""],list_blobs:[21,1,1,""],list_dirs:[21,1,1,""],mkdir:[21,1,1,""],mkdir_p:[21,1,1,""],read_json:[21,1,1,""],upload_json:[21,1,1,""]},"ardzilla.stores.gcs.GCSStore":{from_credentials:[21,5,1,""],list:[21,4,1,""],read_metadata:[21,4,1,""],remove:[21,4,1,""],retrieve_image:[21,4,1,""],retrieve_metadata:[21,4,1,""],store_image:[21,4,1,""],store_metadata:[21,4,1,""]},"ardzilla.stores.gdrive":{"delete":[22,1,1,""],GDriveStore:[22,2,1,""],build_gdrive_service:[22,1,1,""],download_file:[22,1,1,""],download_file_id:[22,1,1,""],exists:[22,1,1,""],get_credentials:[22,1,1,""],list_dirs:[22,1,1,""],list_objects:[22,1,1,""],mkdir:[22,1,1,""],mkdir_p:[22,1,1,""],read_json:[22,1,1,""],upload_json:[22,1,1,""]},"ardzilla.stores.gdrive.GDriveStore":{from_credentials:[22,5,1,""],list:[22,4,1,""],read_metadata:[22,4,1,""],remove:[22,4,1,""],retrieve_image:[22,4,1,""],retrieve_metadata:[22,4,1,""],store_image:[22,4,1,""],store_metadata:[22,4,1,""]},"ardzilla.submissions":{format_export_string:[23,1,1,""],submit_ard:[23,1,1,""]},"ardzilla.tests":{importorskip:[24,1,1,""],loose_version:[24,1,1,""],test_ardzilla:[25,0,0,"-"],test_tracking:[26,0,0,"-"]},"ardzilla.tests.test_ardzilla":{test_package:[25,1,1,""]},"ardzilla.tracking":{GEEARDTracker:[27,2,1,""],clean_tracked:[27,1,1,""],create_submission_metadata:[27,1,1,""],create_task_metadata:[27,1,1,""],download_tracked:[27,1,1,""],get_ee_tasks:[27,1,1,""],update_tracking_info:[27,1,1,""]},"ardzilla.tracking.GEEARDTracker":{TRACKING_DIRECTORY:[27,3,1,""],clean:[27,4,1,""],download:[27,4,1,""],filters:[27,3,1,""],list:[27,4,1,""],read:[27,4,1,""],submit:[27,4,1,""],update:[27,4,1,""]},"ardzilla.utils":{get_file:[28,1,1,""],set_file_urw:[28,1,1,""]},ardzilla:{cli:[2,0,0,"-"],config:[10,0,0,"-"],defaults:[14,0,0,"-"],exceptions:[15,0,0,"-"],preard:[16,0,0,"-"],sensors:[17,0,0,"-"],stores:[20,0,0,"-"],submissions:[23,0,0,"-"],tests:[24,0,0,"-"],tracking:[27,0,0,"-"],utils:[28,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","function","Python function"],"2":["py","class","Python class"],"3":["py","attribute","Python attribute"],"4":["py","method","Python method"],"5":["py","classmethod","Python class method"],"6":["py","data","Python data"],"7":["py","exception","Python exception"]},objtypes:{"0":"py:module","1":"py:function","2":"py:class","3":"py:attribute","4":"py:method","5":"py:classmethod","6":"py:data","7":"py:exception"},terms:{"03d":[14,23,27],"1YS":[14,27],"60582e8a3160":33,"84b53ee0f2b3":33,"boolean":12,"class":[12,21,22,27],"default":[1,7,13,22,29],"export":[8,14,21,22,23,34],"function":[12,17,18,19,21,22,23,28,33],"import":[33,37],"int":27,"long":33,"new":[12,22,30],"public":37,"return":[7,11,12,18,19,21,22,23,27,28],"true":[7,21,22,23,27,28],"try":[15,27],Added:35,For:[35,37],GCS:[12,21,22,23,27],IDs:27,NOT:33,The:[11,30,33,34,37],There:37,With:37,_task:[14,27],a84f66f438b:33,about:[22,33],access:22,accord:27,accordingli:34,account:[12,21,33],acquir:36,activ:37,actual:33,adding:30,addit:[12,19,21,22,23],addlhelp:21,affect:37,affin:37,against:[12,30],all:[11,19,27,28,35,37],allow:[21,22,33],alreadi:[21,22],also:[22,37],altern:37,analysi:[34,36],ani:37,anyof:12,api:[21,22,36,37],apidoc:30,appear:35,appli:[19,23,27],applic:[22,33,34,36],appmod:37,ard:[9,12,14,15,16,17,19,21,22,23,27,32,34,36,37,38],ardzilla:[30,33,37],arg:7,argument:[12,21,22],arrai:12,as_pars:12,ask:36,assum:21,asterisk:22,auth:[33,37],authent:[12,22,33],author:33,avail:7,back:33,bad:28,badparamet:7,base:[12,15,21,22,27,30,36],batch:[21,22,23,27,34],been:36,befor:22,between:[27,35],bibtex:37,blob:21,bool:[7,19,21,22,23,27,28],both:[33,34],browser:22,bucket:[12,21],bucket_nam:[12,21],build:[1,10,27,30],build_gcs_client:21,build_gdrive_servic:22,build_tile_grid:11,build_track:11,built:37,c01:[17,19],calcul:23,call:33,can:[21,27,30,33,34,36,37],capabl:37,categor:35,ceholden:37,chang:[33,36,37],check:[8,19,21,22,27,28],choic:33,chunk:12,classmethod:[12,21,22],clean:27,clean_track:27,cli:[1,29,33],click:[7,35,37],client:[12,19,21,22,33,37],client_secret:[22,33],client_secrets_fil:[12,22],cligj:37,clone:37,cloud:21,code:30,col:18,collect:[14,17,18,19,23,27],collection_metadata:18,column:27,com:[21,35,37],command:[6,30],common:[1,17,28],commun:19,comparison:35,comput:[21,22],conda:37,config:[1,2,7,29],configur:[3,7,11,12,13],consid:21,contain:[12,22],content:[21,29],context:7,continu:37,convert:16,coordin:12,copi:37,core:[1,10,23,37],correspond:[21,22,28],cost:19,cov:[30,37],coverag:[30,37],creat:[11,12,15,17,19,21,22,23,33,34,37],create_ard:[17,19],create_ard_collect:17,create_submission_metadata:27,create_task_metadata:27,creation:34,cred:33,credenti:[12,21,22,32],credentials_fil:[12,22],crs:[12,21,22],ctx:7,current:27,custom:11,d_end:18,d_start:18,dask:[36,37],data:[4,7,12,19,21,22,23,27,33,34,36],date:27,date_end:[14,19,23,27],date_rang:23,date_start:[14,19,23,27],datetim:[19,23,27],deal:[18,19],dec:14,decod:21,defin:33,definit:[11,12],delet:[21,22,27],delete_blob:21,describ:[12,27,33],descript:[12,23],design:36,dest:[12,21,22,27],destin:[21,22,27,36],detail:30,develop:36,dict:[7,11,17,18,19,21,22,27],dictionari:[18,27],difficult:37,dimension:36,directli:37,directori:[21,22,27,33,37],disabl:22,discoveri:22,disk:28,distribut:[36,37],doc:[21,33],docstr:30,doe:22,don:[21,22],download:[1,2,21,22,23,27,33,36,37],download_blob:21,download_fil:22,download_file_id:22,download_track:27,downoad:27,draft:12,drive:22,dump:[21,22],each:18,earth:[21,22,23,27,36],earthengin:[18,37],easi:33,easiest:[33,37],ecosystem:36,edit:37,either:[11,12,21,22,27,33,34,37],els:33,empti:[15,22],emptycollectionerror:15,enabl:[33,37],encod:[21,22],end:[19,23,27],engin:[21,22,23,27,36],ensur:34,envirn:21,environ:37,error:7,etc:23,evalu:18,eventu:33,exampl:30,except:[1,7,29],exist:[21,22,27,28],explicit:12,explicitli:33,export_image_kwd:[12,21,22],extens:30,fail_if_miss:7,fake:21,fals:[19,21,22,27],faq:31,favor:22,fetch:7,fetch_config:7,file:[3,11,12,13,21,22,28,30,33,37],file_id:22,filedimens:12,fileexistserror:[21,22],filenam:[11,12,21,22,23,27,28],fill:13,filter:[12,19,21,23,27],filter_collection_til:18,filter_collection_tim:18,first:[21,22,28],fit:34,fix:35,fixtur:[30,37],flag:37,folder:[21,22],follow:[30,33,35,37],format:23,format_export_str:23,freq:[23,27],frequenc:[14,27],frequent:36,from:[7,11,12,15,18,19,21,22,23,27,32,33,34,36],from_credenti:[21,22],from_templ:12,from_yaml:12,full:30,futur:22,gauth:33,gcs:[1,12,20,23,27],gcsstore:[12,21,23,27],gdrive:[1,12,20,23,27],gdrivestor:[12,22,23,27],gee:[9,11,12,17,18,19,21,22,23,27,33,36],gee_preard_freq:14,gee_preard_nam:14,gee_preard_prefix:14,gee_preard_track:14,geeard:[14,23,27],geeard_track:27,geeardtrack:[11,12,27],gener:30,geospati:36,get:[12,22,32,33,36],get_collection_d:18,get_collection_uniq_d:18,get_credenti:22,get_default_schema:13,get_ee_task:27,get_fil:28,get_gcs_stor:12,get_gdrive_credenti:33,get_gdrive_stor:12,get_stor:12,get_tile_grid:12,get_track:12,getinfo:19,gis:[11,12,19,23,27],git:37,github:[35,37],give:33,given:22,glob:21,going:33,good:28,googl:[21,22,36],google_application_credenti:21,googleapicli:22,grid:[11,12,19,23,27],grid_filenam:[11,12],grid_nam:[11,12],group:6,gsutil:21,guid:[30,33,36],handl:[7,12],happen:33,has:[33,36],have:[34,37],help:36,helper:[21,22,23],here:33,hint:[21,22],horizont:[14,23,27],how:30,howsubdirectorieswork:21,http:[12,21],httplib2:37,imag:[14,15,18,19,21,22,23,27,34],imagecollect:18,imageri:[27,34],imgcol:18,importorskip:24,includ:[12,22,37],index:0,info:[22,27],inform:[22,23,27,34,35],initi:11,input:[27,33],insid:[21,33],instal:36,instead:[21,22],instruct:33,integ:12,integr:37,interact:33,interpet:23,ipython:33,isn:7,issu:12,item:[12,18],its:[22,33],jan:14,json:[12,21,22,27,33],keepachangelog:35,kei:[18,22,27],keyword:[11,12,21,22],know:33,kwd:[7,11,21,22],landsat:[1,17,36],last:33,later:37,lazi:[27,30,37],lc08:[17,19],le07:[17,19],learn:30,left:12,librari:[21,33,36,37],like:[33,34],limit:12,line:30,list:[18,21,22,27],list_blob:21,list_dir:[21,22],list_object:22,list_track:27,load:[12,21,22],load_grid:11,loadabl:11,local:[21,22],locat:[22,33,34,37],log:36,login:[1,2],look:27,loose_vers:24,lt05:[17,19],mai:37,main:[1,2],make:[21,22,27,30,33,37],map:[17,27],match:27,maxitem:12,mean:37,measur:30,metadata:[18,19,21,22,23,27,34],metadata_dst:27,method:34,might:[21,30],minitem:12,minvers:24,miss:7,mkdir:[21,22],mkdir_p:[21,22],modifi:[13,28],modul:[0,29,30,33],modulenotfounderror:33,more:[12,23,33],most:33,move:33,name:[11,12,14,19,21,22,23,24,27,33],name_templ:[12,23,27],nameerror:33,napoleon:30,narrow:22,necessari:11,need:[22,33,37],netcdf4:36,no_brows:22,nodata:19,nodatavalu:19,non:21,none:[7,11,12,13,19,21,22,23,24,27,28],notabl:35,note:[21,36],now:[33,37],number:[12,19,35],numpi:[30,37],numpydoc:37,oauth2:[12,22],oauth:33,oauthlib:37,obj:[13,18],object:[11,12,18,21,22,23,27],object_metadata:18,observ:19,off:27,onc:37,one:[19,23,30,37],oneof:12,onli:[22,28],onto:[21,22],open:22,option:[1,2,11,19,21,22,23,27,28],order:[9,33,34],org:12,organ:27,other:[12,33],otherwis:[7,11,21,22,37],our:[30,33,37],output:30,over:[19,23],overview:32,overwrit:[21,22,27],packag:[23,29,30,33,37],page:0,pair:27,panda:[23,37],parallel:36,paramet:[7,11,12,18,19,21,22,23,27,28],parent:[21,22],parent_id:22,pars:[1,10,12,21,22,30],part:21,pass:[11,12,21,22],past:27,path:[11,12,14,21,22,23,27,28],pathlib:[11,21,22,27],pattern:[21,22,27],per:[18,19],perform:19,period:[19,23,27],piec:[21,22],pile:37,pip:37,platform:[21,33],plugin:[30,37],point:33,possibl:36,pre:[9,14,16,21,22,27,34],preard:[1,12,29],prefix:[14,21,22,23,27],prefix_templ:[12,23,27],preprocess:36,previous:27,primarili:36,privat:33,probabl:33,process:[27,30,34,36],project:[12,21,33],prompt:22,properti:12,provid:[12,22,23,27,33],pure:37,put:[22,30],py37:37,pypi:37,pytest:[30,37],python:[33,36,37],pyyaml:37,queri:22,question:36,quickli:36,rais:[7,12,15,21,22],rang:23,rasterio:[36,37],read:[21,22,27,28,33],read_json:[21,22],read_metadata:[21,22],readi:[34,36,37],realli:21,recent:33,recommend:37,recurs:[21,22],refer:[12,21,36],reflect:37,refresh:27,registr:34,relat:37,releas:35,reli:30,rememb:33,remov:[21,22,35],renam:33,repo:37,report:30,repositori:37,requir:[12,19,28],res:12,resourc:22,retriev:[18,21,22,34],retrieve_imag:[21,22],retrieve_metadata:[21,22],reupload:27,root:22,row:27,run:[19,27,30,37],runner:30,runtimeerror:15,same:[30,34],satellit:36,save:[21,22,33,34,36],scale:[21,22],schema:[12,13],scikit:30,search:[0,21,22,27],secret:[12,22],section:11,see:[21,22,30,35],self:[12,21,22,27],sensor:[1,29],sequenc:[18,19,21,22,23,27,28],server:19,servic:[12,21,22,33],set:[15,21,28],set_file_urw:28,setting_up_authent:21,setup:33,shardsiz:12,share:33,should:[11,30,37],shown:30,sit:37,size:12,some:[18,27],someth:33,sourc:[7,11,12,13,15,18,19,21,22,23,24,25,27,28,30,36],specif:[17,27],specifi:[11,27],speed:19,sphinx:[30,37],sphinx_rtd_them:37,sphinxcontrib:37,ssh:37,start:[19,23,27,36],statist:30,statu:[1,2,27],stem:[11,12,19,23,27],step:[33,37],still:33,storag:[21,32],store:[1,11,12,23,27,29,33,34],store_imag:[21,22],store_metadata:[21,22],store_servic:12,str:[11,12,14,18,19,21,22,23,27,28],string:[12,21,22,23,33],style:[30,35],style_debug:7,style_error:7,style_info:7,style_warn:7,submiss:[1,17,19,27,29],submit:[1,2,23,27],submit_ard:23,submodul:29,subpackag:29,subset:27,summari:30,sure:33,system:12,t1_sr:[17,19],taken:27,task:[8,14,21,22,23,27],tell:37,templat:[12,14,23],term:30,termin:[22,30],test:[1,29],test_ardzilla:[1,24],test_packag:25,test_track:[1,24],thei:28,them:33,thi:[12,21,22,23,27,30,33,34,35,37],through:34,throughout:34,ties:33,tile:[11,12,14,18,19,23,27],tile_geom:18,tile_grid:[11,12,27],tile_indic:27,tilegrid:[11,12,19,23,27],timestamp:34,titl:12,to_yaml:12,tocloudstorag:[12,21,34],todai:[14,27],todriv:[22,34],token:22,tool:[3,9,17,36,37],toolz:37,top:37,traceback:33,track:[1,14,26,29,34],tracker:[12,27],tracking_directori:27,tracking_info:27,tracking_period:[14,27],tracking_templ:[12,27],trash:22,travi:30,tupl:27,type:[7,11,12,14,17,18,19,21,22,23,27,28,33],typic:[18,21],unit:30,updat:[21,22,27,30],update_tracking_info:27,upload:[21,22],upload_json:[21,22],upper:12,url:35,use:[11,12,21,22,23,27,30,33,37],used:[12,22,27,30],user:[12,22,28,36],using:[11,21,22,23,30,33,34,37],utf:[21,22],util:[1,21,22,24,29],valid:[12,13,19],validate_with_default:13,validationerror:12,valu:[12,14,27],valueerror:22,variabl:21,version:35,vertic:[14,23,27],vstring:24,wai:37,wait:19,want:33,web:22,whatev:33,when:[15,30,33,37],which:[30,33],within:[19,21,22,36],wkt:12,work:[3,33,36],would:37,wrap:27,write:[12,28,38],written:[12,21,22],xarrai:[30,36,37],yaml:12,year:14,yet:[31,37],yield:[22,27],yml:37,you:[21,33,37],your:[21,33],zlib:12},titles:["API Reference","ardzilla package","ardzilla.cli package","ardzilla.cli.config module","ardzilla.cli.download module","ardzilla.cli.login module","ardzilla.cli.main module","ardzilla.cli.options module","ardzilla.cli.status module","ardzilla.cli.submit module","ardzilla.config package","ardzilla.config.build module","ardzilla.config.core module","ardzilla.config.parse module","ardzilla.defaults module","ardzilla.exceptions module","ardzilla.preard module","ardzilla.sensors package","ardzilla.sensors.common module","ardzilla.sensors.landsat module","ardzilla.stores package","ardzilla.stores.gcs module","ardzilla.stores.gdrive module","ardzilla.submissions module","ardzilla.tests package","ardzilla.tests.test_ardzilla module","ardzilla.tests.test_tracking module","ardzilla.tracking module","ardzilla.utils module","ardzilla","Developer Notes","Frequently Asked Questions","Source - Google Earth Engine (GEE)","Credentials","Google Earth Engine Storage","Change Log","ARDzilla","Installation","Destination - NetCDF4"],titleterms:{"default":14,access:33,api:[0,30,33],ardzilla:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,36],ask:31,build:11,chang:35,cli:[2,3,4,5,6,7,8,9],cloud:[33,34],command:37,common:18,config:[3,10,11,12,13],content:[1,2,10,17,20,24],continu:30,core:12,credenti:33,depend:37,destin:38,develop:[30,33],doc:30,document:[30,37],download:4,drive:[33,34],earth:[32,33,34,37],engin:[32,33,34,37],except:15,frequent:31,from:37,gcs:21,gdrive:22,gee:[32,37],googl:[32,33,34,37],html:30,instal:37,instruct:37,integr:30,interfac:37,landsat:19,line:37,log:35,login:5,main:6,modul:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28],netcdf4:38,note:30,option:[7,37],packag:[1,2,10,17,20,24],pars:13,preard:16,question:31,refer:0,releas:37,requir:37,sensor:[17,18,19],sourc:[32,37],stabl:37,statu:8,storag:[33,34],store:[20,21,22],submiss:23,submit:9,submodul:[1,2,10,17,20,24],subpackag:1,test:[24,25,26,30,37],test_ardzilla:25,test_track:26,track:27,user:33,util:28}})