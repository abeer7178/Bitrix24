{"version":3,"sources":["script.js"],"names":["window","saveTimer","listItemParams","isItem","property","getData","this","BXLISTCOUNER","BX","findChild","className","counter","children","nextSibling","getCounterValue","num","prefix","substring","length","charAt","getUserUrl","id","bx_user_url_tpl","replace","BXOnMembersListChange","arMembersList","arguments","meeting_owner_data","meeting_owner","onCustomEvent","util","array_values","BXSelectMembers","el","BXMembersSelector","PopupWindowManager","create","offsetTop","autoHide","content","popupContainer","style","display","show","BXSelectKeepers","a","UpdateKeepersList","BXKeeperSelector","meetingAction","params","p","r","Math","random","MEETING_ID","state","STATE","sessid","bitrix_sessid","ajax","loadJSON","meetingHandler","switchView","innerHTML","message","type","current_view","addClass","removeClass","updateIndexes","jsDD","refreshDestArea","updTimer","clearTimeout","setTimeout","updateListNumbers","listNumber","saveData","BXMEETINGCANEDIT","form","document","forms","meeting_edit","value","save_type","submit","replaceKeys","repl","link","i","j","row","subrows","arFields","ie7","BXINSTANCEKEY","BXINSTANCE","ID","ITEM_ID","name","link_href","icons","tag","anchor","anchor_tasks","href","findChildren","INSTANCE_PARENT_ID","replaceTasks","tasks","q","AGENDA_TASK_CHECKED","TASKS_COUNT","TASK_ID","TASK_ACCESS","currently_edited_row","viewRow","setAttribute","parentNode","removeChild","meetingOnTaskDeleted","task_id","findParent","addCustomEvent"],"mappings":"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","file":"script.map.js"}