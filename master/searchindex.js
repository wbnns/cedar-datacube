Search.setIndex({docnames:["api","cedar/cedar","cedar/cedar.cli","cedar/cedar.cli.auth","cedar/cedar.cli.config","cedar/cedar.cli.console","cedar/cedar.cli.convert","cedar/cedar.cli.gee","cedar/cedar.cli.main","cedar/cedar.cli.options","cedar/cedar.cli.status","cedar/cedar.cli.storage","cedar/cedar.cli.submit","cedar/cedar.config","cedar/cedar.config.build","cedar/cedar.config.core","cedar/cedar.defaults","cedar/cedar.exceptions","cedar/cedar.metadata","cedar/cedar.metadata.core","cedar/cedar.ordering","cedar/cedar.preard","cedar/cedar.sensors","cedar/cedar.sensors.common","cedar/cedar.sensors.landsat","cedar/cedar.stores","cedar/cedar.stores.gcs","cedar/cedar.stores.gdrive","cedar/cedar.tests","cedar/cedar.tests.test_cedar","cedar/cedar.tests.test_tracking","cedar/cedar.tracking","cedar/cedar.utils","cedar/cedar.validation","cedar/modules","cleaning","cli","config","convert","credentials","dev","download","faq","history","index","install","overview","storage","submissions","tracking"],envversion:{"sphinx.domains.c":1,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":1,"sphinx.domains.javascript":1,"sphinx.domains.math":2,"sphinx.domains.python":1,"sphinx.domains.rst":1,"sphinx.domains.std":1,"sphinx.ext.intersphinx":1,"sphinx.ext.todo":1,"sphinx.ext.viewcode":1,sphinx:56},filenames:["api.rst","cedar/cedar.rst","cedar/cedar.cli.rst","cedar/cedar.cli.auth.rst","cedar/cedar.cli.config.rst","cedar/cedar.cli.console.rst","cedar/cedar.cli.convert.rst","cedar/cedar.cli.gee.rst","cedar/cedar.cli.main.rst","cedar/cedar.cli.options.rst","cedar/cedar.cli.status.rst","cedar/cedar.cli.storage.rst","cedar/cedar.cli.submit.rst","cedar/cedar.config.rst","cedar/cedar.config.build.rst","cedar/cedar.config.core.rst","cedar/cedar.defaults.rst","cedar/cedar.exceptions.rst","cedar/cedar.metadata.rst","cedar/cedar.metadata.core.rst","cedar/cedar.ordering.rst","cedar/cedar.preard.rst","cedar/cedar.sensors.rst","cedar/cedar.sensors.common.rst","cedar/cedar.sensors.landsat.rst","cedar/cedar.stores.rst","cedar/cedar.stores.gcs.rst","cedar/cedar.stores.gdrive.rst","cedar/cedar.tests.rst","cedar/cedar.tests.test_cedar.rst","cedar/cedar.tests.test_tracking.rst","cedar/cedar.tracking.rst","cedar/cedar.utils.rst","cedar/cedar.validation.rst","cedar/modules.rst","cleaning.rst","cli.rst","config.rst","convert.rst","credentials.rst","dev.rst","download.rst","faq.rst","history.rst","index.rst","install.rst","overview.rst","storage.rst","submissions.rst","tracking.rst"],objects:{"":{cedar:[1,0,0,"-"]},"cedar.cli":{auth:[3,0,0,"-"],config:[4,0,0,"-"],console:[5,0,0,"-"],convert:[6,0,0,"-"],gee:[7,0,0,"-"],main:[8,0,0,"-"],options:[9,0,0,"-"],status:[10,0,0,"-"],storage:[11,0,0,"-"],submit:[12,0,0,"-"]},"cedar.cli.convert":{create_dest_dir:[6,1,1,""]},"cedar.cli.options":{STYLE_DEBUG:[9,1,1,""],STYLE_ERROR:[9,1,1,""],STYLE_INFO:[9,1,1,""],STYLE_WARNING:[9,1,1,""],fetch_config:[9,1,1,""],fetch_param:[9,1,1,""]},"cedar.config":{build:[14,0,0,"-"],core:[15,0,0,"-"]},"cedar.config.build":{build_tile_grid:[14,1,1,""],build_tracker:[14,1,1,""]},"cedar.config.core":{Config:[15,2,1,""]},"cedar.config.core.Config":{from_template:[15,3,1,""],from_yaml:[15,3,1,""],get_gcs_store:[15,3,1,""],get_gdrive_store:[15,3,1,""],get_tile_grid:[15,3,1,""],get_tracker:[15,3,1,""],to_yaml:[15,3,1,""],validate:[15,3,1,""]},"cedar.defaults":{PREARD_CHUNKS:[16,4,1,""],PREARD_FREQ:[16,4,1,""],PREARD_NAME:[16,4,1,""],PREARD_PREFIX:[16,4,1,""],PREARD_TRACKING:[16,4,1,""],PREARD_TRACKING_PREFIX:[16,4,1,""]},"cedar.exceptions":{EmptyCollectionError:[17,5,1,""],EmptyOrderError:[17,5,1,""]},"cedar.metadata":{core:[19,0,0,"-"]},"cedar.metadata.core":{TrackingMetadata:[19,2,1,""],calculate_order_runtime:[19,1,1,""],repr_metadata_order:[19,1,1,""],repr_metadata_program:[19,1,1,""],repr_tracking:[19,1,1,""],repr_tracking_orders:[19,1,1,""],repr_tracking_submission:[19,1,1,""],repr_tracking_tracking:[19,1,1,""],summarize_runtimes:[19,1,1,""],summarize_states:[19,1,1,""]},"cedar.metadata.core.TrackingMetadata":{from_file:[19,3,1,""],from_json:[19,3,1,""],metadata:[19,3,1,""],orders:[19,3,1,""],program:[19,3,1,""],submission:[19,3,1,""],tracking:[19,3,1,""],validate:[19,3,1,""]},"cedar.ordering":{Order:[20,2,1,""],get_order_metadata:[20,1,1,""],get_program_metadata:[20,1,1,""],get_task_metadata:[20,1,1,""],get_tracking_metadata:[20,1,1,""],submit_preard_task:[20,1,1,""],tile_export_image_kwds:[20,1,1,""]},"cedar.ordering.Order":{add:[20,3,1,""],collections:[20,3,1,""],create_submission:[20,3,1,""],submit:[20,3,1,""],tiles:[20,3,1,""]},"cedar.preard":{ard_netcdf_encoding:[21,1,1,""],find_preard:[21,1,1,""],preard_to_ard:[21,1,1,""],process_preard:[21,1,1,""],read_metadata:[21,1,1,""],read_preard:[21,1,1,""]},"cedar.sensors":{CREATE_ARD_COLLECTION:[22,4,1,""],common:[23,0,0,"-"],landsat:[24,0,0,"-"]},"cedar.sensors.common":{collection_metadata:[23,1,1,""],filter_collection_tile:[23,1,1,""],filter_collection_time:[23,1,1,""],get_collection_dates:[23,1,1,""],get_collection_uniq_dates:[23,1,1,""],object_metadata:[23,1,1,""],tile_geom:[23,1,1,""]},"cedar.sensors.landsat":{NODATA:[24,4,1,""],create_ard:[24,1,1,""]},"cedar.stores":{gcs:[26,0,0,"-"],gdrive:[27,0,0,"-"]},"cedar.stores.gcs":{GCSStore:[47,2,1,""],build_gcs_client:[39,1,1,""],delete_blob:[26,1,1,""],download_blob:[26,1,1,""],exists:[26,1,1,""],list_blobs:[26,1,1,""],list_dirs:[26,1,1,""],mkdir:[26,1,1,""],mkdir_p:[26,1,1,""],read_json:[26,1,1,""],upload_json:[26,1,1,""]},"cedar.stores.gcs.GCSStore":{from_credentials:[47,3,1,""],list:[47,3,1,""],read_metadata:[47,3,1,""],remove:[47,3,1,""],retrieve_image:[47,3,1,""],retrieve_metadata:[47,3,1,""],store_image:[47,3,1,""],store_metadata:[47,3,1,""]},"cedar.stores.gdrive":{"delete":[27,1,1,""],GDriveStore:[47,2,1,""],build_gdrive_service:[39,1,1,""],download_file:[27,1,1,""],download_file_id:[27,1,1,""],exists:[27,1,1,""],find_credentials:[27,1,1,""],get_appProperties:[27,1,1,""],get_credentials:[39,1,1,""],list_dirs:[27,1,1,""],list_objects:[27,1,1,""],load_credentials:[27,1,1,""],mkdir:[27,1,1,""],mkdir_p:[27,1,1,""],query_appProperties:[27,1,1,""],read_json:[27,1,1,""],save_credentials:[27,1,1,""],upload_json:[27,1,1,""]},"cedar.stores.gdrive.GDriveStore":{from_credentials:[47,3,1,""],list:[47,3,1,""],read_metadata:[47,3,1,""],remove:[47,3,1,""],retrieve_image:[47,3,1,""],retrieve_metadata:[47,3,1,""],store_image:[47,3,1,""],store_metadata:[47,3,1,""]},"cedar.tests":{importorskip:[28,1,1,""],loose_version:[28,1,1,""],test_cedar:[29,0,0,"-"],test_tracking:[30,0,0,"-"]},"cedar.tests.test_cedar":{test_package:[29,1,1,""]},"cedar.tracking":{Tracker:[31,2,1,""],clean_tracked:[31,1,1,""],download_tracked:[31,1,1,""],get_ee_tasks:[31,1,1,""],get_submission_info:[31,1,1,""],update_tracking_info:[31,1,1,""]},"cedar.tracking.Tracker":{clean:[31,3,1,""],download:[31,3,1,""],filters:[31,3,1,""],list:[31,3,1,""],read:[31,3,1,""],submit:[31,3,1,""],update:[31,3,1,""]},"cedar.utils":{affine_to_str:[32,1,1,""],get_file:[32,1,1,""],load_ee:[32,1,1,""],set_file_urw:[32,1,1,""]},"cedar.validation":{validate_with_defaults:[33,1,1,""]},cedar:{cli:[2,0,0,"-"],config:[13,0,0,"-"],defaults:[16,0,0,"-"],exceptions:[17,0,0,"-"],metadata:[18,0,0,"-"],ordering:[20,0,0,"-"],preard:[21,0,0,"-"],sensors:[22,0,0,"-"],stores:[25,0,0,"-"],tests:[28,0,0,"-"],tracking:[31,0,0,"-"],utils:[32,0,0,"-"],validation:[33,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","function","Python function"],"2":["py","class","Python class"],"3":["py","method","Python method"],"4":["py","data","Python data"],"5":["py","exception","Python exception"]},objtypes:{"0":"py:module","1":"py:function","2":"py:class","3":"py:method","4":"py:data","5":"py:exception"},terms:{"01_2017":49,"01t00":49,"03d":[16,31,49],"13t18":49,"1YS":16,"1f9ztkqoo9bz_no4vw6vslmsreoaeja1b":49,"4gb":48,"5YS":49,"case":[37,46],"class":[15,19,20,26,27,31,47],"default":[1,9,21,27,33,34,36,39,47],"export":[10,16,20,26,27,36,37,46,47,48],"function":[22,23,24,31,32,46,48],"import":[32,45],"int":31,"long":39,"new":[27,40,42,48,49],"public":45,"return":[6,9,14,15,19,20,21,23,24,26,27,31,32,39,47],"true":[9,19,26,27,31,32,39,47],"try":[9,17,31,32],"while":37,Added:43,CRS:37,For:[37,39,43,45,46],GCS:[20,26,27,31,36,37,39,47],IDs:31,NOT:39,ONE:39,One:37,THE:39,The:[14,36,37,39,40,45,46,47],There:[45,46],These:46,Use:[31,36],Used:36,Using:[38,39,48],WRS:46,With:45,_task:[16,31],_templat:37,abc:[15,19],abl:46,about:[19,20,21,27,31,36,39,46,48,49],access:27,accomplish:46,accord:21,accordingli:47,account:[26,36,37,39,46],accur:36,acquir:44,acquisit:[46,48],activ:45,actual:39,adam:46,add:[20,39],adding:40,addit:[20,24,26,27,47],addlhelp:26,address:36,affect:45,affin:[32,45],affine_to_str:32,affix:37,after:[31,46,49],against:[15,19,20,36,40],alber:37,all:[14,21,24,31,32,36,43,45],allow:[27,37,38,39,46],alreadi:[26,27],also:[27,37,39,45,46],altern:45,america:37,amount:46,analysi:[44,46,47],ani:45,anoth:37,api:[26,27,32,36,44,45,46,47],apidoc:40,appear:[43,46],appli:[24,31,37],applic:[27,39,44,46,47],appmod:45,appproperti:27,archiv:46,ard:[6,12,16,17,20,21,22,24,26,27,31,36,44,45,46,47],ard_d:21,ard_netcdf_encod:21,area:37,arg:[9,36],argument:[26,27,31,47],ask:44,assum:[26,47],asterisk:27,australian:46,auth:[1,2,37,39,45],authent:[27,32,36,39,46],author:39,avail:[9,37],back:39,backend:[20,37],bad:32,badparamet:9,band:[16,21,48],bar:31,base:[15,17,19,20,26,27,31,36,40,44],basic:46,batch:[20,26,27,31,38,47],becaus:[32,38,46],been:[36,44,49],befor:[27,37,38,45],being:46,below:[37,48],ben:46,between:43,bibtex:45,bill:46,blob:[26,47],bool:[9,24,26,27,31,32,39],both:47,brian:46,browser:[27,36,39],bucket:[26,37,47],bucket_nam:[26,37,47],build:[1,13,27,40],build_gcs_client:[26,39],build_gdrive_servic:[27,39],build_tile_grid:14,build_track:14,built:[36,45],c01:[22,24,49],calculate_order_runtim:19,call:39,callabl:31,callback:31,calli:46,can:[21,26,31,36,37,39,40,44,45,47,49],cannot:32,cap:46,capabl:45,categor:43,caus:32,cedar:[37,38,39,40,45,46,47,48,49],cedar_preard:[16,31,49],cedar_track:[16,31,49],ceholden:45,ceo:46,chang:[39,44,45],changelog:37,charg:46,cheap:46,check:[7,10,24,26,27,31,32,36,49],choic:[36,39,46],chunk:[16,21],chunksiz:37,classmethod:[15,19,20,26,27,47],clean:[31,44],clean_track:31,clear:36,cli:[1,34,36],click:[9,36,43,45],client:[24,26,27,36,37,39,45,47],client_secret:[27,39,47],client_secrets_fil:[27,36,37,39,47],cligj:45,clip:[20,46],clone:45,cloud:[26,36,37,46],code:[39,40],col:[23,36],collect:[15,16,19,20,22,23,24,31,37,46,48,49],collection_metadata:23,column:[31,37],com:[26,37,39,43,45,49],combin:46,command:[8,37,39,40,44],comment:36,commerci:46,common:[1,22,32,38,46],commun:24,compar:46,comparison:43,complet:49,compon:27,compress:37,comput:[26,27,37,46,47],conda:45,config:[1,2,9,34,37,38,39],config_fil:36,configur:[4,9,14,15,33,36,38,39,44,46,48],conic:37,conjunct:36,consid:[26,39,46],consider:46,consist:[46,48],consol:[1,2,36],contain:[15,21,27],content:[26,34],context:[9,20],continu:45,control:36,conveni:37,convers:[44,46],convert:[1,2,21,37,38,42,48],coordin:37,copi:[36,45],core:[1,13,18,45],correspond:[26,27,32,47],cost:[24,46],count:36,cov:[40,45],coverag:[40,45],creat:[6,14,17,19,20,22,24,26,27,36,37,39,45,46,47,48],create_ard:[22,24],create_ard_collect:22,create_dest_dir:6,create_submiss:20,creation:[36,46,47],creation_timestamp_m:49,credenti:[26,27,36,37,44,47],credentials_fil:[27,36,37,39,47],crs:[20,26,27,37,47],crs_transform:20,ctx:9,cube:[6,36,46],current:[31,46],custom:14,d_end:23,d_start:23,dask:[36,44,45],data:[6,9,11,15,20,21,24,26,27,31,36,37,38,39,42,46,47,48],dataarrai:21,datacub:45,dataset:21,date:[31,36,37,48],date_end:[16,20,24,31,37,49],date_format:36,date_rang:31,date_start:[16,20,24,31,37,49],datetim:[24,31],david:46,deal:[23,24],dec:16,decod:26,definit:[14,42,48],degre:37,delet:[26,27,31,36,46],delete_blob:26,depend:37,describ:[15,31,36,37,39],descript:37,design:44,dest:[15,26,27,31,36,38,47],dest_dir_templ:6,destin:[26,27,31,36,37,38,46,47],detail:[37,40],determin:38,develop:[37,44],dict:[9,14,16,19,20,21,22,23,24,26,27,31,47],dictionari:[23,31],differ:37,difficult:45,dimens:[20,37],dimension:44,directli:45,directori:[21,26,27,31,36,37,38,39,45,47],disabl:[27,39],discoveri:[27,39,47],disk:[21,32],displai:36,distribut:[36,44,45],dixon:46,doc:[26,37,39],docstr:40,doe:[27,46],don:[26,27,36],download:[11,26,27,31,39,44,45,46],download_blob:26,download_fil:27,download_file_id:27,download_track:31,downoad:31,drive:[20,27,36,37,46,49],dump:[26,27],dure:[48,49],dwyer:46,each:[21,23,31,37,48,49],earth:[20,26,27,31,32,36,37,46,47,49],earthengin:[23,37,45],easi:39,easiest:[39,45],ecosystem:44,edit:45,ee_except:32,eeexcept:32,effort:46,egress:46,either:[14,15,26,27,31,36,38,39,45,47],els:39,emb:37,empti:[17,27],emptycollectionerror:17,emptyordererror:17,enabl:[39,45,46],encod:[21,26,27,37],encoding_kwd:21,end:[24,31,36],engin:[20,26,27,31,32,36,37,46,47,49],enough:46,ensur:47,enter:[36,39],entir:46,entrypoint:36,env:45,envirn:[26,39],environ:[38,39,45,46],equal:37,error:[9,32],etc:[31,37,46],evalu:23,evan:46,everyon:46,exampl:[37,40],excel:46,except:[1,9,32,34],execut:31,executor:36,exist:[26,27,31,32,36],exit:36,expand:38,explicitli:39,export_image_kwd:[20,26,27,31,37,47],extens:40,facilit:46,fail_if_miss:9,fake:26,fals:[15,20,24,26,27,31],favor:[27,39],featur:36,fetch:9,fetch_config:9,fetch_param:9,file:[4,14,15,19,21,26,27,31,32,33,36,37,38,39,40,45,46,47,48],file_id:27,fileexistserror:27,filenam:[14,15,19,21,26,27,31,32,37,39,47],fill:33,filter:[20,24,26,31,37],filter_collection_til:23,filter_collection_tim:23,find:46,find_credenti:27,find_preard:21,first:[26,27,32,46],fit:47,fix:43,fixtur:[40,45],flag:45,folder:[26,27,36,37,47,49],follow:[39,40,43,45],format:[6,19,21,36,37,42,46,48],foundat:46,free:46,frequenc:[16,36],frequent:44,from:[9,14,15,17,19,21,23,24,26,27,31,36,37,39,44,46,47,48],from_credenti:[26,27,47],from_fil:19,from_json:19,from_templ:15,from_yaml:15,full:40,fulli:[42,48],further:46,futur:[27,39,47],gcs:[1,25,31,39,47],gcsstore:[15,20,26,31,47],gd9ce32:49,gdrive:[1,25,31,39,47],gdrivestor:[15,20,27,31,47],gee:[1,2,12,14,22,23,24,26,27,31,44,46,47],gener:[20,31,36,40,46],geoscienc:46,geospati:[44,46],geotiff:[21,36,37,48],get:[15,20,27,36,39,44],get_appproperti:27,get_collection_d:23,get_collection_uniq_d:23,get_credenti:[27,39],get_ee_task:31,get_fil:32,get_gcs_stor:15,get_gdrive_stor:15,get_order_metadata:20,get_program_metadata:20,get_submission_info:31,get_task_metadata:20,get_tile_grid:15,get_track:15,get_tracking_metadata:20,getinfo:24,gis:[14,15,20,24,31],git:45,github:[43,45],give:39,given:[27,37,46,48],glob:26,global:37,goal:37,going:39,good:[32,46],googl:[20,26,27,36,37,44,46,49],google_application_credenti:[26,39],googleapicli:[27,39,47],gorelick:46,gregori:46,grid:[14,15,20,24,31,37,48],grid_filenam:14,grid_nam:14,group:[8,36],gsutil:26,guid:[39,40,44],hancher:46,handl:[9,15,32],hankui:46,has:[39,44,46,49],have:[36,37,45,46,47,49],haven:32,header:19,help:[36,39,44],helper:[26,27,33],high:46,hint:[26,27,47],hook:46,horizont:[16,31,37,49],how:[37,40,48],howev:46,howsubdirectorieswork:26,html:37,http:[26,37,39,49],httplib2:45,ic_filt:37,identifi:31,identitif:20,ilyushchenko:46,imag:[16,17,19,20,21,23,24,26,27,31,36,37,46,47,48,49],image_collect:36,image_metadata:20,imagecollect:[23,37],imageri:[21,31,37,47],imgcol:23,importerror:32,importorskip:28,includ:[15,20,27,37,39,45,48],incur:46,incurr:46,indent:15,index:[0,36],info:[19,20,27,31,36,37,49],inform:[19,20,21,31,36,37,39,43,46,47,48,49],initi:[14,32],input:[21,31],insid:[21,26,39],instal:44,instead:[26,27,36,37],institut:46,instruct:39,integ:36,integr:45,interact:[5,36,39],interfac:[37,39,44],interpet:31,isn:9,issu:15,item:[23,31,37],its:[9,27,37,39],jan:16,jenkerson:46,jeremi:46,job:36,john:46,join:21,joshua:46,json:[19,21,26,27,31,33,36,37,39,47,49],json_str:19,keep:[36,48],keepachangelog:43,kei:[23,27,31,37],keyword:[14,20,26,27,37,47],know:39,known:[31,37],kwd:[9,14,15],landsat:[1,22,44,46,49],landsat_lc08_c01_t1_sr_h064v032_2012:49,languag:37,larg:46,later:[45,46],lazi:[31,40,45],lc08:[22,24,49],le07:[22,24,49],learn:[40,46],left:37,leo:46,leslei:46,lesson:46,level:46,lewi:46,librari:[26,39,44,45],like:[36,37,46,47],limit:[36,37],line:[37,39,40,44],list:[21,23,26,27,31,47],list_blob:26,list_dir:[26,27],list_object:27,list_track:31,load:[15,19,26,27,39,47],load_credenti:27,load_e:32,load_grid:14,loadabl:14,local:[26,36],locat:[21,27,37,39,45,47,48,49],log:[36,39,44],login:[36,37],look:31,loose_vers:28,lose:46,lt05:[22,24,49],lymburn:46,mai:[37,38,45,46],main:[1,2,36,46],major:37,make:[26,27,31,39,40,45,46],mani:[37,46],manipul:38,map:[15,19,22,31,37],massiv:46,match:[21,31],matt:46,maximum:37,mean:[45,46],measur:40,meet:[42,48],memori:21,messag:36,metadata:[1,6,20,21,23,24,26,27,31,34,36,37,46,47,48,49],metadata_pattern:21,meter:46,mexico:37,might:[26,37,39,40],mike:46,minimum:[37,46],minvers:28,miss:9,mkdir:[26,27],mkdir_p:[26,27],modifi:[32,33,36,37,38],modul:[0,34,40],month:46,moor:46,more:[31,37,39],move:39,much:46,mueller:46,multipl:48,must:36,n_imag:31,n_step:31,name:[9,14,16,20,21,24,26,27,28,31,36,37,39,47,48,49],name_templ:[20,31,37,49],nan:19,napoleon:40,narrow:27,ndarrai:21,necessari:14,need:[27,37,39,42,45,46,48],netcdf4:[21,36,37,44,46],netcdf:[21,36,37],no_brows:[27,39],nodata:24,nodatavalu:24,noel:46,non:[26,46],none:[9,14,15,19,20,21,24,26,27,28,31,32,33,36,39,47],norman:46,north:[37,46],notabl:43,note:[26,39,44],now:[37,45],number:[21,24,31,37,43,46],numpi:[40,45],numpydoc:45,oauth2:[27,36,37,39],oauth:39,oauthlib:45,obj:[23,33],object:[14,20,23,26,27,31,32,47],object_metadata:23,observ:[21,24],off:31,oliv:46,onc:45,one:[24,31,40,45],onli:[32,36,46],onto:[20,26,27,47],open:[5,16,21,27,36,39],option:[1,2,14,19,20,21,24,26,27,31,32,36,37,39,47],order:[1,12,17,19,31,34,36,37,39,44,46,47],order_info:20,org:37,organ:46,other:[19,31,32,38,39,46],otherwis:[9,14,26,27,31,36,45,47],our:[39,40,45],out:36,output:[40,49],output_url:49,over:[24,46],overlap:46,overrid:[36,38],overview:44,overwrit:[26,27,31,36,47],own:37,packag:[34,39,40,45,46],page:0,paid:46,pair:[21,31],panda:[31,45],parallel:[36,44],paramet:[9,14,15,19,20,21,23,24,26,27,31,32,39,47],parametr:37,parent:[9,26,27,47],parent_id:27,pars:[26,27,40,47],part:[26,36,47],pass:[14,20,26,27,32,47],past:[31,39],path:[14,15,16,20,21,26,27,31,32,36,38,39,46,47],pathlib:[14,26,27,31,47],pattern:[26,27,31,37,47],per:[23,24],perform:24,period:[24,31,36,48],period_end:[31,36,37,49],period_freq:[31,36,37,49],period_start:[31,36,37,49],permiss:39,phase:48,pick:39,piec:[26,27,47,48],pile:45,pip:45,pixel:37,planetari:46,platform:[26,39],pleas:39,plugin:[40,45],point:[37,39,46],popular:46,port:36,possibl:44,pre:[6,12,16,17,20,21,26,27,31,36,37,44,46,47],preard:[1,34,36],preard_chunk:16,preard_freq:16,preard_nam:16,preard_prefix:16,preard_to_ard:21,preard_track:16,preard_tracking_prefix:16,prefix:[16,20,26,27,37,47,49],prefix_templ:[20,31,37,49],preproces:[42,48],preprocess:[44,46],present:46,preserv:36,previous:31,primarili:44,privat:[27,39],probabl:39,proceed:45,process:[20,21,31,36,37,38,40,44,46,47,49],process_preard:21,program:[19,20,37,39,44,49],progress:31,progressbar:36,project:[26,36,37,39,46,47],prompt:[27,39],properti:[19,20,31],provid:[15,27,31,36,37,39,47],pure:45,put:[27,39,40],py37:45,pydata:37,pypi:45,pytest:[40,45],python:[5,37,39,44,45],pyyaml:45,queri:27,query_appproperti:27,question:44,quickli:44,quiet:36,quota:46,raevksi:46,rais:[9,15,17,21,27,32],rang:[31,37],rapidli:46,rasterio:[44,45],rather:46,read:[21,26,27,31,32,36,39,47],read_json:[26,27],read_metadata:[21,26,27,47],read_preard:21,readi:[45,46,47],realli:26,reason:46,rebecca:46,recommend:45,recurs:[26,27],refer:[26,39,44],reflect:[45,46],refresh:31,registr:47,relat:45,releas:43,reli:40,rememb:39,remot:[20,46],remov:[26,27,43,46,47],renam:39,repo:45,report:[31,40],repositori:45,repr_metadata_ord:19,repr_metadata_program:19,repr_track:19,repr_tracking_ord:19,repr_tracking_submiss:19,repr_tracking_track:19,representatin:32,reproject:[20,46],requir:[24,32,39,46],res:37,resolut:37,resolv:33,resourc:[27,39,46,47],rest:37,retriev:[23,26,27,47],retrieve_imag:[26,27,47],retrieve_metadata:[26,27,47],reupload:31,rob:46,roi:46,root:[27,38],row:[31,36,37,46],run:[24,31,40,45,46],runner:40,runtim:19,same:[40,47],satellit:[44,46],sauer:46,save:[26,27,36,39,44,47],save_credenti:27,scale:[26,27,46,47],scene:46,schedul:36,schema:[15,19,33],scikit:40,scratch:37,search:[0,26,27,31,47],secret:[27,36,37],section:[14,39,49],see:[26,27,37,40,43,45],self:[15,19,20,26,27,31,47],sens:46,sensor:[1,34,46,48],separ:37,sequenc:[21,23,24,26,27,31,32,47],seri:46,server:24,servic:[26,27,36,37,39,46,47],service_account:39,service_account_fil:[36,39],set:[17,26,32,37,39,46,48],set_file_urw:32,setting_up_authent:[26,39],setup:39,share:39,should:[14,31,36,37,40,45],show:36,show_ord:19,show_program:19,show_runtim:19,show_stat:19,show_submiss:19,show_track:19,shown:40,sign:39,silenc:36,simon:46,sinc:37,singl:[20,21],sit:45,sixsmith:46,size:37,some:[21,23,31,36,37,46],someth:39,sort_kei:15,sourc:[6,9,14,15,17,19,20,21,23,24,26,27,28,29,31,32,33,39,40,47],south:46,specif:[19,22,27,31,36,37,46,48,49],specifi:[14,21,31,36,38,39],speed:24,sphinx:[40,45],sphinx_rtd_them:45,sphinxcontrib:45,split:[21,36],ssh:45,stabl:37,start:[20,24,31,36,37,44],start_tim:19,start_timestamp_m:49,state:49,statist:40,statu:[1,2,19,20,31],stem:[14,15,20,24,31],step:[39,45,46],still:39,storag:[1,2,20,26,36,37,44,46,48],store:[1,14,15,20,31,34,37,39,46,47,48],store_imag:[20,26,27,47],store_metadata:[26,27,47],str:[6,14,15,16,20,21,23,24,26,27,31,32,39,47],string:[19,26,27,32,36,37,39],style:[40,43],style_debug:9,style_error:9,style_info:9,style_warn:9,subdataset:21,submiss:[19,20,22,24,31,36,44,46,49],submission_info:20,submit:[1,2,17,20,31,49],submit_preard_task:20,submodul:34,subpackag:34,subset:31,suit:[37,46],suitabl:46,summar:[19,36],summari:40,summarize_runtim:19,summarize_st:19,support:46,sure:[39,45],surfac:46,sync:36,system:48,t1_sr:[22,24,49],tabl:37,take:[31,48],taken:31,talli:19,task:[7,10,16,19,20,26,27,31,46,47,49],tell:45,templat:[6,15,16,37],term:40,termin:[5,27,36,39,40],terrabyt:46,test:[1,34,36,39],test_cedar:[1,28],test_packag:29,test_track:[1,28],text:[36,37],than:46,thau:46,thei:32,them:39,thi:[15,20,26,27,31,36,37,38,39,40,43,45,46,47,48,49],thread:36,through:47,throughout:47,ties:39,tile:[14,15,16,20,23,24,31,37,46,48,49],tile_export_image_kwd:20,tile_geom:23,tile_grid:[14,31,49],tile_indic:[31,37,49],tilegrid:[14,15,24,31,36],time:[21,36,46,48],timestamp:[37,47,49],to_netcdf:21,to_yaml:15,tocloudstorag:[26,27,37,47],todai:[16,31],todo:[35,36,41],todriv:[37,47],togeth:21,token:[27,39],tool:[4,12,19,22,44,45,46],toolz:45,top:45,track:[1,16,19,20,30,34,36,37,44,46,47],tracker:[14,15,31],tracking_2019:49,tracking_data:19,tracking_id:20,tracking_info:31,tracking_nam:[20,31,36],tracking_period:[16,31],tracking_prefix:[20,31,37],tracking_templ:[31,37],trackingmetadata:19,transform:32,trash:27,travi:40,tupl:31,two:[37,39,48],type:[9,14,15,16,20,21,22,23,24,26,27,31,32,37,39,47],typic:[23,26,32,39],unit:40,unless:49,unlimit:46,untag:49,updat:[26,27,31,40],update_tim:19,update_timestamp_m:49,update_tracking_info:31,upload:[26,27,47],upload_json:[26,27],upper:37,url:[39,43],usag:[36,37,46],use:[14,16,20,21,26,27,31,36,37,38,39,40,45,46,47,48,49],used:[31,36,40],useful:[37,46],user:[27,32,37,44,46,47],uses:48,using:[14,26,27,36,37,38,39,40,45,46,47],usual:[46,48],utf:[26,27],util:[1,26,27,28,34],v3zzjupnep5ph3npi2w6w23i:49,valid:[1,15,19,24,34,36],validate_with_default:33,validationerror:15,valu:[16,31,48],valueerror:[17,21,27],variabl:[26,38,39],variou:36,verbos:36,veri:36,version:[20,36,43,49],vertic:[16,31,37,49],visit:39,vstring:28,wai:45,wait:24,want:[37,39,48],web:[27,36,39],well:37,whatev:39,when:[16,17,21,27,38,39,40,45],where:46,which:[39,40,46],wide:36,wish:38,within:[24,26,27,44,47,49],without:[37,38,46],woodcock:46,work:[4,37,39,44],worker:36,would:45,wrap:31,write:[15,32,37,39],written:[15,21,26,27,49],wyborn:46,xarr:21,xarrai:[21,37,40,44,45],yaml:15,year:16,yet:[32,45],yield:[26,27,31,47],yml:45,you:[26,32,36,37,38,39,45,46,48,49],your:[26,36,37,39,48],zhang:46},titles:["API Reference","cedar package","cedar.cli package","cedar.cli.auth module","cedar.cli.config module","cedar.cli.console module","cedar.cli.convert module","cedar.cli.gee module","cedar.cli.main module","cedar.cli.options module","cedar.cli.status module","cedar.cli.storage module","cedar.cli.submit module","cedar.config package","cedar.config.build module","cedar.config.core module","cedar.defaults module","cedar.exceptions module","cedar.metadata package","cedar.metadata.core module","cedar.ordering module","cedar.preard module","cedar.sensors package","cedar.sensors.common module","cedar.sensors.landsat module","cedar.stores package","cedar.stores.gcs module","cedar.stores.gdrive module","cedar.tests package","cedar.tests.test_cedar module","cedar.tests.test_tracking module","cedar.tracking module","cedar.utils module","cedar.validation module","cedar","Cleaning \u201cpre-ARD\u201d from Storage","Command Line Interface Programs","Configuration","Pre-ARD to ARD Conversion","Credentials","Developer Notes","Download","Frequently Asked Questions","Change Log","<code class=\"docutils literal notranslate\"><span class=\"pre\">cedar</span></code> - Create Earth engine Data cubes of Analytical Readiness","Installation","Overview","Storage","\u201cPre-ARD\u201d Order Submission","Pre-ARD Order Tracking"],titleterms:{"default":16,access:39,analyt:44,api:[0,39,40],ard:[35,37,38,42,48,49],ask:42,auth:[3,36],build:14,cedar:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,36,44],chang:43,clean:[35,36],cli:[2,3,4,5,6,7,8,9,10,11,12],cloud:[39,47],command:[36,45],common:23,config:[4,13,14,15,36],configur:37,consol:5,content:[1,2,13,18,22,25,28],continu:40,convers:38,convert:[6,36],core:[15,19],creat:44,credenti:39,cube:44,data:44,depend:45,detail:49,develop:[39,40],doc:40,document:[40,45],download:[36,41],drive:[39,47],earth:[39,44,45],engin:[39,44,45],except:17,frequent:42,from:[35,45],gcs:[26,36,37],gdrive:[27,36,37],gee:[7,36,45],gener:37,googl:[39,45,47],html:40,instal:45,instruct:45,integr:40,interfac:[36,45],landsat:24,limit:46,line:[36,45],list:[36,49],log:43,main:8,metadata:[18,19],modul:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33],note:40,option:[9,45],order:[20,48,49],overview:[46,48],packag:[1,2,13,18,22,25,28],pre:[35,38,42,48,49],preard:21,print:36,program:36,question:42,read:49,readi:44,refer:[0,46],releas:45,requir:45,section:37,sensor:[22,23,24],sourc:45,stabl:45,statu:[10,36,49],storag:[11,35,39,47],store:[25,26,27],submiss:48,submit:[12,36],submodul:[1,2,13,18,22,25,28],subpackag:1,task:36,templat:36,test:[28,29,30,40,45],test_cedar:29,test_track:30,tile_grid:37,tip:38,track:[31,49],tracker:37,updat:[36,49],user:39,util:32,valid:33,what:42}})