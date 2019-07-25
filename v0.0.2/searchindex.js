Search.setIndex({docnames:["api","cedar/cedar","cedar/cedar.cli","cedar/cedar.cli.auth","cedar/cedar.cli.config","cedar/cedar.cli.console","cedar/cedar.cli.convert","cedar/cedar.cli.gee","cedar/cedar.cli.main","cedar/cedar.cli.options","cedar/cedar.cli.status","cedar/cedar.cli.storage","cedar/cedar.cli.submit","cedar/cedar.config","cedar/cedar.config.build","cedar/cedar.config.core","cedar/cedar.defaults","cedar/cedar.exceptions","cedar/cedar.metadata","cedar/cedar.metadata.core","cedar/cedar.ordering","cedar/cedar.preard","cedar/cedar.sensors","cedar/cedar.sensors.common","cedar/cedar.sensors.landsat","cedar/cedar.stores","cedar/cedar.stores.gcs","cedar/cedar.stores.gdrive","cedar/cedar.tests","cedar/cedar.tests.conftest","cedar/cedar.tests.test_cedar","cedar/cedar.tests.test_tracking","cedar/cedar.tracking","cedar/cedar.utils","cedar/cedar.validation","cedar/modules","cleaning","cli","config","convert","credentials","dev","download","faq","history","index","install","overview","storage","submissions","tracking"],envversion:{"sphinx.domains.c":1,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":1,"sphinx.domains.javascript":1,"sphinx.domains.math":2,"sphinx.domains.python":1,"sphinx.domains.rst":1,"sphinx.domains.std":1,"sphinx.ext.intersphinx":1,"sphinx.ext.todo":1,"sphinx.ext.viewcode":1,sphinx:56},filenames:["api.rst","cedar/cedar.rst","cedar/cedar.cli.rst","cedar/cedar.cli.auth.rst","cedar/cedar.cli.config.rst","cedar/cedar.cli.console.rst","cedar/cedar.cli.convert.rst","cedar/cedar.cli.gee.rst","cedar/cedar.cli.main.rst","cedar/cedar.cli.options.rst","cedar/cedar.cli.status.rst","cedar/cedar.cli.storage.rst","cedar/cedar.cli.submit.rst","cedar/cedar.config.rst","cedar/cedar.config.build.rst","cedar/cedar.config.core.rst","cedar/cedar.defaults.rst","cedar/cedar.exceptions.rst","cedar/cedar.metadata.rst","cedar/cedar.metadata.core.rst","cedar/cedar.ordering.rst","cedar/cedar.preard.rst","cedar/cedar.sensors.rst","cedar/cedar.sensors.common.rst","cedar/cedar.sensors.landsat.rst","cedar/cedar.stores.rst","cedar/cedar.stores.gcs.rst","cedar/cedar.stores.gdrive.rst","cedar/cedar.tests.rst","cedar/cedar.tests.conftest.rst","cedar/cedar.tests.test_cedar.rst","cedar/cedar.tests.test_tracking.rst","cedar/cedar.tracking.rst","cedar/cedar.utils.rst","cedar/cedar.validation.rst","cedar/modules.rst","cleaning.rst","cli.rst","config.rst","convert.rst","credentials.rst","dev.rst","download.rst","faq.rst","history.rst","index.rst","install.rst","overview.rst","storage.rst","submissions.rst","tracking.rst"],objects:{"":{cedar:[1,0,0,"-"]},"cedar.cli":{auth:[3,0,0,"-"],config:[4,0,0,"-"],console:[5,0,0,"-"],convert:[6,0,0,"-"],gee:[7,0,0,"-"],main:[8,0,0,"-"],options:[9,0,0,"-"],status:[10,0,0,"-"],storage:[11,0,0,"-"],submit:[12,0,0,"-"]},"cedar.cli.convert":{create_dest_dir:[6,1,1,""]},"cedar.cli.options":{STYLE_DEBUG:[9,1,1,""],STYLE_ERROR:[9,1,1,""],STYLE_INFO:[9,1,1,""],STYLE_WARNING:[9,1,1,""],fetch_config:[9,1,1,""],fetch_param:[9,1,1,""]},"cedar.config":{build:[14,0,0,"-"],core:[15,0,0,"-"]},"cedar.config.build":{build_tile_grid:[14,1,1,""],build_tracker:[14,1,1,""]},"cedar.config.core":{Config:[15,2,1,""]},"cedar.config.core.Config":{from_template:[15,3,1,""],from_yaml:[15,3,1,""],get_gcs_store:[15,3,1,""],get_gdrive_store:[15,3,1,""],get_tile_grid:[15,3,1,""],get_tracker:[15,3,1,""],to_yaml:[15,3,1,""],validate:[15,3,1,""]},"cedar.defaults":{PREARD_CHUNKS:[16,4,1,""],PREARD_FREQ:[16,4,1,""],PREARD_NAME:[16,4,1,""],PREARD_PREFIX:[16,4,1,""],PREARD_TRACKING:[16,4,1,""],PREARD_TRACKING_PREFIX:[16,4,1,""]},"cedar.exceptions":{EmptyCollectionError:[17,5,1,""],EmptyOrderError:[17,5,1,""]},"cedar.metadata":{core:[19,0,0,"-"]},"cedar.metadata.core":{TrackingMetadata:[19,2,1,""],calculate_order_runtime:[19,1,1,""],repr_metadata_order:[19,1,1,""],repr_metadata_program:[19,1,1,""],repr_tracking:[19,1,1,""],repr_tracking_orders:[19,1,1,""],repr_tracking_submission:[19,1,1,""],repr_tracking_tracking:[19,1,1,""],summarize_runtimes:[19,1,1,""],summarize_states:[19,1,1,""]},"cedar.metadata.core.TrackingMetadata":{complete:[19,3,1,""],from_file:[19,3,1,""],from_json:[19,3,1,""],metadata:[19,3,1,""],orders:[19,3,1,""],program:[19,3,1,""],progress:[19,3,1,""],states:[19,3,1,""],submission:[19,3,1,""],tasks:[19,3,1,""],tracking:[19,3,1,""],validate:[19,3,1,""]},"cedar.ordering":{Order:[20,2,1,""],get_order_metadata:[20,1,1,""],get_program_metadata:[20,1,1,""],get_task_metadata:[20,1,1,""],get_tracking_metadata:[20,1,1,""],submit_preard_task:[20,1,1,""],tile_export_image_kwds:[20,1,1,""]},"cedar.ordering.Order":{add:[20,3,1,""],collections:[20,3,1,""],create_submission:[20,3,1,""],submit:[20,3,1,""],tiles:[20,3,1,""]},"cedar.preard":{ard_netcdf_encoding:[21,1,1,""],find_preard:[21,1,1,""],preard_to_ard:[21,1,1,""],process_preard:[21,1,1,""],read_metadata:[21,1,1,""],read_preard:[21,1,1,""]},"cedar.sensors":{CREATE_ARD_COLLECTION:[22,4,1,""],common:[23,0,0,"-"],landsat:[24,0,0,"-"]},"cedar.sensors.common":{collection_metadata:[23,1,1,""],filter_collection_tile:[23,1,1,""],filter_collection_time:[23,1,1,""],get_collection_dates:[23,1,1,""],get_collection_uniq_dates:[23,1,1,""],object_metadata:[23,1,1,""],tile_geom:[23,1,1,""]},"cedar.sensors.landsat":{NODATA:[24,4,1,""],create_ard:[24,1,1,""]},"cedar.stores":{gcs:[26,0,0,"-"],gdrive:[27,0,0,"-"]},"cedar.stores.gcs":{GCSStore:[48,2,1,""],build_gcs_client:[40,1,1,""],delete_blob:[26,1,1,""],download_blob:[26,1,1,""],exists:[26,1,1,""],list_blobs:[26,1,1,""],list_dirs:[26,1,1,""],mkdir:[26,1,1,""],mkdir_p:[26,1,1,""],read_json:[26,1,1,""],upload_json:[26,1,1,""]},"cedar.stores.gcs.GCSStore":{from_credentials:[48,3,1,""],list:[48,3,1,""],read_metadata:[48,3,1,""],remove:[48,3,1,""],retrieve_image:[48,3,1,""],retrieve_metadata:[48,3,1,""],store_image:[48,3,1,""],store_metadata:[48,3,1,""]},"cedar.stores.gdrive":{"delete":[27,1,1,""],GDriveStore:[48,2,1,""],build_gdrive_service:[40,1,1,""],download_file:[27,1,1,""],download_file_id:[27,1,1,""],exists:[27,1,1,""],find_credentials:[27,1,1,""],get_appProperties:[27,1,1,""],get_credentials:[40,1,1,""],list_dirs:[27,1,1,""],list_objects:[27,1,1,""],load_credentials:[27,1,1,""],mkdir:[27,1,1,""],mkdir_p:[27,1,1,""],query_appProperties:[27,1,1,""],read_json:[27,1,1,""],save_credentials:[27,1,1,""],upload_json:[27,1,1,""]},"cedar.stores.gdrive.GDriveStore":{from_credentials:[48,3,1,""],list:[48,3,1,""],read_metadata:[48,3,1,""],remove:[48,3,1,""],retrieve_image:[48,3,1,""],retrieve_metadata:[48,3,1,""],store_image:[48,3,1,""],store_metadata:[48,3,1,""]},"cedar.tests":{conftest:[29,0,0,"-"],importorskip:[28,1,1,""],loose_version:[28,1,1,""],test_cedar:[30,0,0,"-"],test_tracking:[31,0,0,"-"]},"cedar.tests.test_cedar":{test_package:[30,1,1,""]},"cedar.tracking":{Tracker:[32,2,1,""],clean_tracked:[32,1,1,""],download_tracked:[32,1,1,""],get_submission_info:[32,1,1,""],update_tracking_info:[32,1,1,""]},"cedar.tracking.Tracker":{clean:[32,3,1,""],download:[32,3,1,""],filters:[32,3,1,""],list:[32,3,1,""],read:[32,3,1,""],submit:[32,3,1,""],update:[32,3,1,""]},"cedar.utils":{affine_to_str:[33,1,1,""],get_ee_tasks:[33,1,1,""],get_file:[33,1,1,""],load_ee:[33,1,1,""],set_file_urw:[33,1,1,""]},"cedar.validation":{validate_with_defaults:[34,1,1,""]},cedar:{cli:[2,0,0,"-"],config:[13,0,0,"-"],defaults:[16,0,0,"-"],exceptions:[17,0,0,"-"],metadata:[18,0,0,"-"],ordering:[20,0,0,"-"],preard:[21,0,0,"-"],sensors:[22,0,0,"-"],stores:[25,0,0,"-"],tests:[28,0,0,"-"],tracking:[32,0,0,"-"],utils:[33,0,0,"-"],validation:[34,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","function","Python function"],"2":["py","class","Python class"],"3":["py","method","Python method"],"4":["py","data","Python data"],"5":["py","exception","Python exception"]},objtypes:{"0":"py:module","1":"py:function","2":"py:class","3":"py:method","4":"py:data","5":"py:exception"},terms:{"01_2002":39,"01_2007":50,"01_2012":50,"01_2017":39,"01_2022":39,"01t00":[49,50],"03d":[16,32,50],"18cqsotrzguf64rv1mufj_v5ofw5rmt0r":49,"18t16":[36,39,42,49,50],"1YS":16,"1d9qsq4j42mxbgcu2j3uvx7atpsrosirx":50,"3rd":50,"4gb":[39,49,50],"4th":50,"528253_h063v052":[36,39,42,49,50],"5YS":[49,50],"7wd23yham4tmqrg2o2seqton":50,"case":[38,47,50],"class":[15,19,20,26,27,32,48],"default":[1,9,21,27,34,35,37,40,42,48],"export":[10,16,20,26,27,37,38,39,42,47,48,49,50],"final":49,"float":19,"function":[22,23,24,32,33,47,49],"import":[33,46],"int":32,"long":40,"new":[27,41,43,49,50],"public":[44,46],"return":[6,9,14,15,19,20,21,23,24,26,27,32,33,40,48],"true":[9,19,26,27,32,33,40,48],"try":[9,17,32,33,42],"while":[38,49],Added:44,CRS:38,For:[38,39,40,44,46,47,49],GCS:[20,26,27,32,37,38,40,48],IDs:32,ONE:40,One:38,THE:40,The:[14,37,38,39,40,41,42,43,46,47,48,49,50],There:47,These:[39,47],Use:[32,37],Used:37,Using:[39,40,49],WRS:47,With:[46,49],_task:[16,32],_templat:38,abc:[15,19],abil:39,abl:[39,42,47],about:[19,20,21,27,32,37,39,40,42,47,49,50],abov:49,absolut:38,access:[27,43],accomplish:47,accord:21,accordingli:48,account:[26,37,38,40,43,47],accur:42,acquir:45,acquisit:[39,47,49],activ:46,actual:40,adam:47,add:[20,40],adding:41,addit:[20,24,26,27,48],addlhelp:26,address:[37,39],advantag:39,affect:46,affin:[33,46],affine_to_str:33,affix:38,after:[32,37,39,42,47,50],again:50,against:[15,19,20,37,41],alber:38,all:[14,19,21,24,32,33,37,39,42,44,46,49,50],allow:[27,38,39,40,44,47,50],almost:39,along:39,alreadi:[26,27,42],also:[27,38,39,40,42,46,47,49,50],altern:46,america:38,amount:47,anaconda:46,analysi:[39,45,47,48],analyz:39,ani:[42,46,49],anoth:38,answer:[43,49],api:[26,27,33,37,45,46,47,48,50],apidoc:41,appear:[44,47],append:42,appli:[24,32,38,43],applic:[27,39,40,45,47,48],appmod:46,appproperti:27,archiv:47,ard:[6,12,16,17,20,21,22,24,26,27,32,37,42,45,46,47,48],ard_d:21,ard_netcdf_encod:21,area:38,arg:[9,37],argument:[26,27,32,48,49],arrai:44,ask:45,assign:39,associ:[19,49],assum:[26,48],asterisk:27,atom:42,attribut:39,australian:47,auth:[1,2,38,40,46],authent:[27,33,37,40,47],author:[40,43],autom:42,avail:[9,38,46],avoid:40,back:[39,40],backend:[20,38],bad:33,badparamet:9,band:[16,21,39,49],bar:[32,42],base:[15,17,19,20,26,27,32,41,42,45],basic:47,batch:[19,20,26,27,33,39,42,48],becaus:[33,39,42,46,47,50],been:[36,37,39,42,45,46,50],befor:[27,37,38,39,42,46,50],behavior:42,being:47,below:[38,39,49],ben:47,benefit:39,between:[44,49],bibtex:46,bill:47,blob:[26,48],bokeh:39,bool:[9,19,24,26,27,32,33,40],both:[46,48],brian:47,browser:[27,37,40],bucket:[26,38,48],bucket_nam:[26,38,48],bug:44,build:[1,13,27,41],build_gcs_client:[26,40],build_gdrive_servic:[27,40],build_tile_grid:14,build_track:14,built:[36,37,46],button:43,c01:[22,24,47,49,50],calculate_order_runtim:19,call:40,callabl:32,callback:32,calli:47,can:[21,26,32,37,38,39,40,41,42,45,46,48,49,50],cancel:[37,44],cannot:33,cap:47,capabl:46,care:46,categor:44,caus:33,cedar:[36,38,39,40,41,42,44,47,48,49,50],cedar_config_fil:38,cedar_env:46,cedar_preard:[16,32],cedar_track:[16,32],ceholden:46,ceo:47,chang:[37,38,40,45,46],changelog:38,channel:46,chapter:36,charg:47,cheap:47,check:[7,10,24,26,27,32,33,37,49,50],choic:[37,39,40,47,49],choos:39,chunk:[16,21],chunksiz:38,classmethod:[15,19,20,26,27,48],clean:[32,42,45],clean_track:32,clear:[37,42],cli:[1,35,37],click:[9,37,43,44,46],client:[24,26,27,37,38,40,46,48],client_secret:[27,40,48],client_secrets_fil:[27,37,38,40,48],cligj:46,clip:[20,47],clock:50,clone:46,close:39,cloud:[26,37,38,47,49],cluster:39,code:[37,40,41,46],col:[23,37,49],collect:[15,16,19,20,22,23,24,32,38,39,49,50],collection_metadata:23,collis:42,column:[32,38,49],com:[26,38,40,44,46,50],combin:47,command:[8,38,39,40,41,42,44,45,49],comment:37,commerci:47,common:[1,22,33,39,47],commun:24,compar:47,comparison:[39,44],complet:[19,42,50],complic:39,compon:27,compress:[38,39],comput:[26,27,38,39,47,48],concaten:39,concurr:[39,50],config:[1,2,9,35,38,39,40],config_fil:[37,38],configur:[4,9,14,15,34,37,39,40,45,47,49],conftest:[1,28],conic:38,conjunct:37,connect:39,consid:[26,39,40,42,47],consider:47,consist:[47,49],consol:[1,2,37],contain:[15,21,27,39,42,49,50],content:[26,35],context:[9,20],continu:[37,38,46],control:37,conveni:38,convers:[45,47],convert:[1,2,21,38,39,43,49],coordin:38,copi:[37,46],core:[1,13,18,46],correct:42,correspond:[26,27,33,48],cost:[24,47],could:[38,39,49],count:[37,44,50],cov:[41,46],coverag:[41,46],creat:[6,14,17,19,20,22,24,26,27,37,38,39,40,42,46,47,48,49,50],create_ard:[22,24],create_ard_collect:22,create_dest_dir:6,create_submiss:20,creation:[37,47,48],creation_timestamp_m:50,credenti:[26,27,37,38,43,45,48],credentials_fil:[27,37,38,40,48],crs:[20,26,27,38,48],crs_transform:20,ctx:9,cube:[6,37,47],current:[32,37,39,42,47],custom:14,d_end:23,d_start:23,dask:[37,39,45,46],data:[6,9,11,15,20,21,24,26,27,32,36,37,38,39,40,42,43,44,47,48,49,50],dataarrai:21,datacub:46,dataset:21,date:[32,37,38,49],date_end:[16,20,24,32,38,50],date_format:37,date_rang:32,date_start:[16,20,24,32,38,50],datetim:[24,32],david:47,deal:[23,24],debug:39,dec:16,decod:26,decompress:39,defin:[38,50],definit:[14,43,49],degre:38,delet:[26,27,32,36,37,42,47,49],delete_blob:26,depend:[38,43],describ:[15,32,37,38,39,40,49],descript:38,design:[39,42,45],desir:[39,42],dest:[15,26,27,32,37,39,42,48],dest_dir_templ:6,dest_filenam:42,dest_preard:42,destin:[26,27,32,37,38,39,42,47,48],detail:[38,41],determin:39,determinist:39,develop:[38,43,45],dict:[9,14,16,19,20,21,22,23,24,26,27,32,33,48],dictionari:[23,32],differ:38,difficult:[42,46],dimens:[20,38,39],dimension:45,directli:46,directori:[21,26,27,32,37,38,39,40,42,46,48,50],dirti:50,disabl:[27,40,42],discoveri:[27,40,48],disk:[21,33],displai:37,distribut:[37,39,45,46],dixon:47,doc:[26,38,40],docstr:41,document:39,doe:[27,39,47,50],don:[26,27,37],download:[11,26,27,32,36,39,40,45,46,47,50],download_blob:26,download_fil:27,download_file_id:27,download_track:32,downoad:32,drive:[20,27,37,38,43,47,49,50],dump:[26,27],dure:[49,50],dwyer:47,each:[21,23,32,38,42,49,50],earth:[20,26,27,32,33,37,38,39,42,47,48,49,50],earthengin:[19,23,38,46,50],easi:40,easier:38,easiest:[40,46],ecosystem:45,edit:46,ee_except:33,eeexcept:33,effici:39,effort:47,egress:47,either:[14,15,26,27,32,37,38,39,40,46,48],els:40,emb:38,empti:[17,27],emptycollectionerror:17,emptyordererror:17,enabl:[40,46,47],encod:[21,26,27,38,39],encoding_kwd:21,encourag:39,end:[24,32,37,50],engin:[20,26,27,32,33,37,38,39,42,47,48,49,50],enough:[42,47],ensur:48,enter:[37,40],entir:47,entrypoint:37,env:46,envirn:[26,40],environ:[38,39,40,46,47],equal:38,error:[9,33,49],especi:42,etc:[32,38,47],evalu:23,evan:47,even:50,everi:49,everyon:47,everyth:50,exampl:[38,39,41,46,49,50],excel:47,except:[1,9,33,35],execut:[32,50],executor:[37,39],exist:[26,27,32,33,37,39],exit:37,expand:39,explicitli:40,export_image_kwd:[20,26,27,32,38,48],extens:41,facilit:47,facilt:42,fail_if_miss:9,fake:26,fals:[15,20,24,26,27,32],favor:[27,40],featur:[37,42],fetch:9,fetch_config:9,fetch_param:9,few:50,file:[4,14,15,19,21,26,27,32,33,34,37,38,39,40,41,42,46,47,48,49,50],file_id:27,fileexistserror:27,filenam:[14,15,19,21,26,27,32,33,38,40,42,48,50],fill:34,filter:[20,24,26,32,38],filter_collection_til:23,filter_collection_tim:23,find:[42,43,47],find_credenti:27,find_preard:21,finish:50,first:[26,27,33,44,46,47],fit:48,fix:44,fixtur:[41,46],flag:[36,38,42,46],folder:[26,27,37,38,48,50],follow:[39,40,41,42,44,46,50],forg:46,form:42,format:[6,19,21,37,38,39,43,47,49],fortun:42,forward:49,foundat:47,four:42,free:47,freq:50,frequenc:[16,37,49],frequent:45,from:[9,14,15,17,19,21,23,24,26,27,32,37,38,39,40,42,45,47,48,49,50],from_credenti:[26,27,48],from_fil:19,from_json:19,from_templ:15,from_yaml:15,full:41,fulli:[43,49],further:[39,47],futur:[27,40,48],g3693702:50,gcs:[1,25,32,40,48],gcsstore:[15,20,26,32,48],gdrive:[1,25,32,40,48],gdrivestor:[15,20,27,32,48],gee:[1,2,12,14,22,23,24,26,27,32,33,45,47,48],gener:[20,32,37,39,41,42,43,47,49,50],geoscienc:47,geospati:[45,47],geotiff:[21,37,38,39,42,49,50],get:[15,20,27,37,40,45],get_appproperti:27,get_collection_d:23,get_collection_uniq_d:23,get_credenti:[27,40],get_ee_task:33,get_fil:33,get_gcs_stor:15,get_gdrive_stor:15,get_order_metadata:20,get_program_metadata:20,get_submission_info:32,get_task_metadata:20,get_tile_grid:15,get_track:15,get_tracking_metadata:20,getinfo:24,gis:[14,15,20,24,32],git:46,github:[44,46],give:40,given:[27,38,42,47],glanc:50,glance_preard:50,glance_track:50,glob:26,global:38,goal:38,going:[40,49],good:[33,38,47],googl:[20,26,27,37,38,43,45,47,49,50],google_application_credenti:[26,40],googleapicli:[27,40,48],gorelick:47,gracefulli:49,gregori:47,grid:[14,15,20,24,32,38,49,50],grid_filenam:14,grid_nam:14,group:[8,37,49],gsutil:26,guarante:42,guid:[36,39,40,41,45,49],h0063v0052:49,had:[39,50],hancher:47,handl:[9,15,33,49],hankui:47,has:[36,37,39,40,42,45,46,47,50],have:[19,37,38,39,42,46,47,48,49,50],haven:33,header:19,help:[37,40,42,45],helper:[26,27,34],high:47,hint:[26,27,48],hook:47,horizont:[16,32,38,50],host:42,hostnam:[39,42],how:[38,39,41,42,46,49,50],howev:[39,47,50],howsubdirectorieswork:26,html:38,http:[26,38,40,50],httplib2:46,ic_filt:38,idea:38,identifi:[32,49],identitif:20,ilyushchenko:47,imag:[16,17,19,20,21,23,24,26,27,32,37,38,39,42,48,49,50],image_collect:37,image_metadata:20,imagecollect:[23,38],imageri:[21,32,38,48],imgcol:23,importerror:33,importorskip:28,includ:[15,20,27,38,39,40,46,49],incur:47,incurr:47,indent:15,index:[0,37,49],indic:50,info:[19,20,27,32,36,37,38,42,50],inform:[19,20,21,32,37,38,39,40,42,44,47,48,49,50],initi:[14,33],input:[21,32,38,49],insid:[21,26,40],instal:45,instead:[26,27,37,38,39],institut:47,instruct:40,integ:37,integr:[39,46],interact:[5,37,40],interfac:[38,40,45],interleav:39,intern:44,interpet:32,invis:39,involv:39,isn:9,issu:[15,44],item:[23,32,38],its:[9,27,38,39,40],jan:16,jenkerson:47,jeremi:47,job:[37,49,50],john:47,join:21,joshua:47,json:[19,21,26,27,32,34,37,38,39,40,42,48,49],json_str:19,jsonschema:44,just:[49,50],keep:[37,38,49],keepachangelog:44,kei:[23,27,32,38],keyword:[14,20,26,27,38,48],kfh37wgbinntghudjslejb6t:50,know:[40,42,50],known:[32,38],kwd:[9,14,15],landsat:[1,22,45,47,49,50],landsat_lc08_c01_t1_sr_h062v053_2012:39,landsat_lc08_c01_t1_sr_h062v053_2017:39,landsat_le07_c01_t1_sr_h062v053_1997:39,landsat_le07_c01_t1_sr_h063v052_2002:50,landsat_le07_c01_t1_sr_h063v052_2007:50,languag:38,larg:47,larger:37,later:[46,47],lazi:[32,41,46],lc08:[22,24,47,49,50],le07:[22,24,47,49,50],learn:[41,47],left:38,leo:47,leslei:47,lesson:47,level:[42,47],lewi:47,librari:[26,39,40,45,46],like:[37,38,39,42,47,48],limit:38,line:[38,39,40,41,45,49],link:40,list:[19,21,23,26,27,32,38,44,48,49],list_blob:26,list_dir:[26,27],list_object:27,list_track:32,load:[15,19,26,27,40,48],load_credenti:27,load_e:33,load_grid:14,loadabl:14,local:[26,37,39],localclust:39,locat:[21,27,37,38,40,46,48,49,50],lock:39,log:[37,40,45],login:[37,38,43],longer:50,look:[32,39],loose_vers:28,lose:47,lt04:[22,24,47],lt05:[22,24,47,49,50],lymburn:47,lz245tiwnd3bivc7z7tbhoah:[36,42],machin:39,mai:[36,38,39,42,46,47],main:[1,2,37,38,47],major:38,make:[26,27,32,37,40,41,46,47],mani:[38,39,42,47,50],manipul:39,map:[15,19,22,32,38],massiv:47,match:[21,32],matt:47,maximum:38,mean:[46,47,50],measur:41,meet:[43,49],memori:21,mention:36,messag:37,metadata:[1,6,20,21,23,24,26,27,32,35,36,37,38,39,42,47,48,49,50],metadata_pattern:21,meter:47,method:38,mexico:38,might:[26,38,40,41,46],mike:47,minimum:[38,47],minut:50,minvers:28,miss:[9,44],mkdir:[26,27],mkdir_p:[26,27],model:44,modifi:[33,34,37,38,39],modul:[0,35,41],month:47,moor:47,more:[32,38,39,40,50],move:40,much:[39,47],mueller:47,multipl:49,multiprocess:39,must:37,my_config:49,my_config_fil:38,n_imag:32,n_step:32,name:[9,14,16,20,21,24,26,27,28,32,36,37,38,39,40,42,43,48,49,50],name_templ:[20,32,38],nan:[19,50],napoleon:41,narrow:27,ndarrai:21,necessari:14,need:[27,38,39,40,42,43,46,47,49],netcdf4:[21,37,38,39,45,47],netcdf:[21,37,38,39],next:49,no_brows:[27,40],nodata:24,nodatavalu:24,noel:47,non:[26,47],none:[9,14,15,19,20,21,24,26,27,28,32,33,34,37,40,48],norman:47,north:[38,47],notabl:44,note:[26,40,45,46],now:[38,46,50],number:[21,24,32,38,39,44,47],numpi:[41,46],numpydoc:46,oauth2:[27,37,38,40],oauth:40,oauthlib:46,obj:[23,34],object:[14,20,23,26,27,32,33,48,49],object_metadata:23,observ:[21,24],off:32,often:39,oliv:47,onc:[38,42,46,50],one:[24,32,36,38,39,41,46,49,50],onli:[33,39,43,47,50],onto:[20,26,27,48],open:[5,16,21,27,37,40],option:[1,2,14,19,20,21,24,26,27,32,33,37,38,39,40,42,48,49],order:[1,12,17,19,32,35,36,37,38,39,40,42,44,45,47,48],order_info:20,org:38,organ:[39,47],other:[19,32,33,36,39,40,42,46,47],otherwis:[9,14,26,27,32,37,46,48],our:[38,39,40,41,42,46,49,50],out:[37,49],output:[41,50],output_url:50,over:[24,39,47],overlap:47,overrid:[37,39],overriden:39,overview:45,overwrit:[26,27,32,37,42,48],own:38,packag:[35,40,41,44,47],page:[0,39],paid:47,pair:[21,32,39,42],panda:[32,46],parallel:[37,39,45],paramet:[9,14,15,19,20,21,23,24,26,27,32,33,40,48],parametr:38,parent:[9,26,27,48],parent_id:27,pars:[26,27,41,48],part:[26,37,48],partial:42,pass:[14,20,26,27,33,36,37,39,42,48],past:[32,40],path:[14,15,16,20,21,26,27,32,33,37,38,39,40,47,48],pathlib:[14,26,27,32,48],pattern:[26,27,32,48],peopl:43,per:[23,24,50],percent:[19,37],perform:[24,39],period:[24,32,37,39,49,50],period_end:[32,37,38,49],period_freq:[32,37,38,49],period_start:[32,37,38,49],permiss:40,phase:49,pick:40,pid:42,piec:[26,27,39,48,49,50],pile:46,pip:46,pipelin:37,pixel:[38,39],planetari:47,platform:[26,40],pleas:[39,40],plugin:[41,46],point:[38,39,40,47],popular:47,port:[37,39],possibl:[42,45],potenti:37,pre:[6,12,16,17,20,21,26,27,32,37,38,42,45,47,48],preard:[1,35,37,49],preard_chunk:16,preard_freq:16,preard_nam:16,preard_prefix:16,preard_to_ard:21,preard_track:16,preard_tracking_prefix:16,prefix:[16,20,26,27,38,48,50],prefix_templ:[20,32,38],preproces:[43,49],preprocess:[45,47],present:47,preserv:37,previous:32,primarili:[39,45],print:[38,49],privat:[27,40],probabl:40,proceed:46,process:[20,21,32,37,38,39,41,42,45,47,48,49,50],process_preard:21,produc:49,program:[19,20,36,38,39,40,42,45,49,50],progress:[19,32,42,49,50],progressbar:37,project:[26,37,38,40,47,48],prompt:[27,40],properti:[19,20,32],provid:[15,27,32,37,38,39,40,42,48],publicli:40,pure:46,put:[27,39,40,41],py37:46,pydata:38,pytest:[41,46],python:[5,38,40,45,46],pyyaml:46,queri:27,query_appproperti:27,question:[45,49],quickli:45,quiet:37,quit:39,quota:[40,47],raevksi:47,rais:[9,15,17,21,27,33],rang:[32,38,49],rapidli:47,rasterio:[45,46],rather:47,read:[21,26,27,32,33,37,39,40,48],read_json:[26,27],read_metadata:[21,26,27,48],read_preard:21,readi:[39,46,47,48],realli:26,reason:47,rebecca:47,recommend:[40,46],recurs:[26,27],refactor:44,refer:[26,40,45,49],reflect:[46,47],refresh:32,registr:48,relat:[46,49],releas:[44,46],reli:41,remain:49,rememb:40,remot:[20,47],remov:[26,27,44,47,48,49],renam:[40,42],repo:46,report:[32,41],repositori:46,repr_metadata_ord:19,repr_metadata_program:19,repr_track:19,repr_tracking_ord:19,repr_tracking_submiss:19,repr_tracking_track:19,representatin:33,reproject:[20,47],requir:[24,33,40,47],res:38,resolut:38,resolv:34,resourc:[27,40,47,48],rest:38,result:49,resum:42,retriev:[23,26,27,36,42,48],retrieve_imag:[26,27,48],retrieve_metadata:[26,27,48],reupload:32,rob:47,roi:47,root:[27,37,39],row:[32,37,38,47,49],run:[24,32,36,37,39,41,46,47],runner:41,runtim:[19,50],same:[41,48],satellit:[45,47,49],sauer:47,save:[26,27,37,40,45,48,49],save_credenti:27,scale:[26,27,47,48],scene:47,schedul:[37,39],schema:[15,19,34],scikit:41,scratch:38,search:[0,26,27,32,48],second:39,secret:[27,37,38],section:[14,36,39,40,49,50],see:[26,27,38,39,41,43,44,46,49],self:[15,19,20,26,27,32,48],sens:47,sensor:[1,35,47,49],separ:38,seper:36,sequenc:[21,23,24,26,27,32,33,48],seri:[39,47],serivc:36,server:24,servic:[26,27,37,38,40,42,47,48,49,50],service_account:40,service_account_fil:[37,40],set:[17,26,33,38,40,43,47,49],set_file_urw:33,setting_up_authent:[26,40],setup:40,sever:36,share:40,should:[14,32,37,38,39,41,46],show:[37,50],show_ord:19,show_program:19,show_runtim:19,show_stat:19,show_submiss:19,show_track:19,shown:41,sign:40,silenc:37,simon:47,sinc:[38,42],singl:[20,21,39,49],sit:46,situat:49,sixsmith:47,size:[38,39],skip:42,small:49,some:[21,23,32,38,39,47],someth:40,sometim:49,soon:42,sort_kei:15,sourc:[6,9,14,15,17,19,20,21,23,24,26,27,28,30,32,33,34,40,41,48],south:47,space:42,span:49,specif:[19,22,27,32,37,38,39,47,49,50],specifi:[14,21,32,37,38,39,40,42,49],speed:24,sphinx:[41,46],sphinx_rtd_them:46,sphinxcontrib:46,split:[21,37,39,42,49],ssh:46,stabl:38,stai:39,start:[20,24,32,37,38,39,45,49,50],start_tim:19,start_timestamp_m:50,state:[19,50],statement:49,statist:41,statu:[1,2,19,20,32,38,39,42,44,49],status:42,stem:[14,15,20,24,32],step:[36,39,40,42,46,47],still:[40,42],storag:[1,2,20,26,37,38,42,43,45,47,49,50],store:[1,14,15,20,32,35,38,39,40,47,48,49,50],store_imag:[20,26,27,48],store_metadata:[26,27,48],str:[6,14,15,16,20,21,23,24,26,27,32,33,40,48],string:[19,26,27,33,37,38,39,40],strongli:39,style:[41,44],style_debug:9,style_error:9,style_info:9,style_warn:9,sub:42,subcommand:38,subdataset:21,subfil:42,submiss:[19,20,22,24,32,37,45,47,50],submission_info:20,submit:[1,2,17,20,32,42,49,50],submit_preard_task:20,submodul:35,subpackag:35,subset:32,success:42,successfulli:37,suit:[38,47],suitabl:[39,47],summar:[19,37],summari:[19,41],summarize_runtim:19,summarize_st:19,support:39,sure:[40,46],surfac:47,sync:37,system:[38,49],t1_sr:[22,24,47,49,50],tabl:38,take:[32,39,46,49],taken:32,talli:19,task:[7,10,16,19,20,26,27,32,33,42,47,48,49,50],tell:[42,46],templat:[6,15,16,38,39,50],temporari:42,term:41,termin:[5,27,37,40,41],terrabyt:47,test:[1,35,37,40],test_cedar:[1,28],test_packag:30,test_track:[1,28],text:[37,38],than:[38,47],thank:42,thau:47,thei:[33,39,42],them:[40,49],therefor:40,thi:[15,19,20,26,27,32,36,37,38,39,40,41,42,44,46,47,48,49,50],thread:37,through:[36,39,48],throughout:48,tif:39,tile:[14,15,16,20,23,24,32,38,39,47,49,50],tile_export_image_kwd:20,tile_geom:23,tile_grid:[14,32],tile_indic:[32,38],tilegrid:[14,15,24,32,37],time:[21,37,39,47,49,50],timestamp:[38,39,48,49,50],tmp:42,to_netcdf:21,to_yaml:15,tocloudstorag:[26,27,38,48],todai:[16,32],todo:37,todriv:[38,48],togeth:[21,39],token:[27,40],tool:[4,12,19,22,45,46,47,50],toolz:46,top:46,track:[1,16,19,20,31,35,36,37,38,39,42,45,47,48,49],tracker:[14,15,32],tracking_2019:[36,39,42,49,50],tracking_data:19,tracking_id:20,tracking_info:32,tracking_nam:[20,32,37],tracking_period:[16,32],tracking_prefix:[20,32,38],tracking_templ:[32,38],trackingmetadata:[19,44],transform:[33,39],trash:27,travi:41,tupl:[32,44],two:[38,40,49],type:[9,14,15,16,19,20,21,22,23,24,26,27,32,33,38,39,40,48],typic:[23,26,33,40],unclear:50,under:50,unit:41,unix:38,unless:50,unlimit:47,unmux:39,unsubmit:50,untag:50,until:[42,50],unwant:40,updat:[26,27,32,41,42],update_tim:19,update_timestamp_m:50,update_tracking_info:32,upload:[26,27,46,48],upload_json:[26,27],upon:42,upper:38,url:[40,44,50],usag:[37,47],use:[14,16,20,21,26,27,32,36,37,38,39,40,41,43,44,46,47,48,49,50],used:[32,36,37,39,40,41,42,43,49],useful:[37,38,39,42,47,49,50],user:[27,33,36,38,39,45,47,48,49],uses:[39,49],using:[14,26,27,37,38,39,40,41,42,46,47,48,49],usual:[47,49],utf:[26,27],util:[1,26,27,28,35],v01:50,valid:[1,15,19,24,35,37,44],validate_with_default:34,validationerror:15,valu:[16,32,49],valueerror:[17,21,27],variabl:[26,38,39,40],variou:37,verbos:37,veri:39,version:[20,37,44],vertic:[16,32,38,50],virtual:42,visit:[39,40,43],vstring:28,wai:[36,38,39,46],wait:[24,50],wall:50,want:[38,39,40,46,49],web:[27,37,40],well:[38,42],what:[42,49,50],whatev:40,when:[16,17,21,27,38,39,40,41,46,49,50],where:[39,47,49],which:[36,39,41,42,47],who:[39,43],wide:37,wish:[36,39],within:[24,26,27,39,45,48,49,50],without:[38,39,42,47,49],woodcock:47,word:42,work:[4,38,40,42,45],worker:[37,39],workflow:39,worth:39,would:[39,46],wrap:32,write:[15,33,38,39,40,42],written:[15,21,26,27,50],wrote:49,wyborn:47,xarr:21,xarrai:[21,38,39,41,45,46],yaml:15,year:[16,49],yet:33,yield:[26,27,32,48],yml:[38,46,49],you:[26,33,36,37,38,39,40,42,43,46,47,49,50],your:[26,36,37,38,39,40,42,49],zarr:39,zhang:47},titles:["API Reference","cedar package","cedar.cli package","cedar.cli.auth module","cedar.cli.config module","cedar.cli.console module","cedar.cli.convert module","cedar.cli.gee module","cedar.cli.main module","cedar.cli.options module","cedar.cli.status module","cedar.cli.storage module","cedar.cli.submit module","cedar.config package","cedar.config.build module","cedar.config.core module","cedar.defaults module","cedar.exceptions module","cedar.metadata package","cedar.metadata.core module","cedar.ordering module","cedar.preard module","cedar.sensors package","cedar.sensors.common module","cedar.sensors.landsat module","cedar.stores package","cedar.stores.gcs module","cedar.stores.gdrive module","cedar.tests package","cedar.tests.conftest module","cedar.tests.test_cedar module","cedar.tests.test_tracking module","cedar.tracking module","cedar.utils module","cedar.validation module","cedar","Cleaning pre-ARD from Storage","Command Line Interface Programs","Configuration","Pre-ARD to ARD Conversion","Credentials","Developer Notes","Download","Frequently Asked Questions","Change Log","<code class=\"docutils literal notranslate\"><span class=\"pre\">cedar</span></code> - Create Earth engine Data cubes of Analytical Readiness","Installation","Overview","Storage","Pre-ARD Order Submission","Pre-ARD Order Tracking"],titleterms:{"default":16,access:40,advanc:[39,42],analyt:45,api:[0,40,41],applic:43,ard:[36,38,39,43,49,50],ask:43,auth:[3,37],basic:[39,42],build:14,can:43,cancel:49,cedar:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,37,45,46],chang:44,clean:[36,37],cli:[2,3,4,5,6,7,8,9,10,11,12],cloud:[40,48],collect:47,command:[37,46],common:23,complet:37,conda:46,config:[4,13,14,15,37],configur:38,conftest:29,consol:5,content:[1,2,13,18,22,25,28],continu:41,convers:39,convert:[6,37],core:[15,19],creat:45,credenti:40,cube:45,data:45,depend:46,detail:50,develop:[40,41],doc:41,document:[41,46],download:[37,42],drive:[40,48],earth:[40,45,46],engin:[40,45,46],except:17,frequent:43,from:[36,46],gcs:[26,37,38],gdrive:[27,37,38],gee:[7,37,46],gener:38,give:43,googl:[40,46,48],how:43,html:41,imag:47,instal:46,instruct:46,integr:41,interfac:[37,46],landsat:24,limit:47,line:[37,46],list:[37,50],log:44,main:8,metadata:[18,19],modul:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34],note:41,oauth2:43,option:[9,46],order:[20,49,50],overview:[39,47,49],packag:[1,2,13,18,22,25,28,46],permiss:43,post0:44,post1:44,pre:[36,39,43,49,50],preard:21,print:[37,50],program:37,question:43,readi:45,refer:[0,47],requir:46,revok:43,section:38,sensor:[22,23,24],sourc:46,statu:[10,37,50],storag:[11,36,40,48],store:[25,26,27],submiss:49,submit:[12,37],submodul:[1,2,13,18,22,25,28],subpackag:1,support:47,task:37,templat:37,test:[28,29,30,31,41,46],test_cedar:30,test_track:31,thi:43,tile_grid:38,tip:39,track:[32,50],tracker:38,updat:[37,50],usag:[38,39,42],user:40,util:33,valid:34,what:43}})