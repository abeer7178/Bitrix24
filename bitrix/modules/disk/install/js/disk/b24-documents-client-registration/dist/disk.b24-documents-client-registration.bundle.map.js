{"version":3,"sources":["disk.b24-documents-client-registration.bundle.js"],"names":["this","BX","Disk","exports","main_popup","ui_buttons","main_core","ui_dialogs_messagebox","_templateObject","_templateObject2","_createForOfIteratorHelper","o","allowArrayLike","it","Symbol","iterator","Array","isArray","_unsupportedIterableToArray","length","i","F","s","n","done","value","e","_e","f","TypeError","normalCompletion","didErr","err","call","step","next","_e2","minLen","_arrayLikeToArray","Object","prototype","toString","slice","constructor","name","from","test","arr","len","arr2","_classPrivateMethodInitSpec","obj","privateSet","_checkPrivateRedeclaration","add","privateCollection","has","_classPrivateMethodGet","receiver","fn","DEFAULT_LANGUAGE_ID","_getSelectedServer","WeakSet","_getLanguageId","_getServiceName","_showOnlyErrorRowInPopup","_buildUsefulErrorText","ClientRegistration","options","babelHelpers","classCallCheck","defineProperty","bindEvents","createClass","key","start","allowedServerPromise","ajax","runAction","then","response","data","servers","warning","Loc","getMessage","_getServiceName2","popupContent","Tag","render","taggedTemplateLiteral","popupContainerId","popup","Popup","overlay","height","width","content","closeIcon","events","onAfterClose","destroy","buttons","SaveButton","text","onclick","handleClickRegister","bind","show","select","querySelector","forEach","server","regionSuffix","region","concat","proxy","button","event","_this","setDisabled","loader","Loader","target","getContainer","size","serviceUrl","_getSelectedServer2","languageId","_getLanguageId2","document","location","reload","console","warn","hide","_showOnlyErrorRowInPopup2","_buildUsefulErrorText2","errors","selectNode","hasMessage","Extension","getSettings","get","message","rows","querySelectorAll","row","style","display","textContent","_iterator","_step","error","code","customData","domain","_createForOfIteratorHelper$1","_unsupportedIterableToArray$1","_arrayLikeToArray$1","_classPrivateMethodInitSpec$1","_checkPrivateRedeclaration$1","_classPrivateMethodGet$1","DEFAULT_LANGUAGE_ID$1","_getLanguageId$1","_getServiceName$1","_buildUsefulErrorText$1","ClientUnRegistration","messageBox","MessageBox","create","title","_getServiceName2$1","UI","Dialogs","MessageBoxButtons","OK_CANCEL","okCaption","onOk","log","handleClickUnregister","_this2","_getLanguageId2$1","setMessage","_buildUsefulErrorText2$1","B24Documents","Main"],"mappings":"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","file":"disk.b24-documents-client-registration.bundle.map.js"}