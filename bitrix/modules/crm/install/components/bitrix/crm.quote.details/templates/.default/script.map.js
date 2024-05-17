{"version":3,"sources":["script.js"],"names":["exports","main_core","main_popup","ui_buttons","main_core_events","crm_itemDetailsComponent","crm_conversion","_templateObject","_templateObject2","printWindowWidth","printWindowHeight","namespace","Reflection","QuoteDetailsComponent","_ItemDetailsComponent","babelHelpers","inherits","params","_this","classCallCheck","this","possibleConstructorReturn","getPrototypeOf","call","Type","isPlainObject","activityEditorId","emailSettings","isArray","printTemplates","isMultipleTemplates","Boolean","length","conversion","conversionSettings","createClass","key","value","init","get","prototype","initConversionApi","_this2","converter","Conversion","Manager","Instance","initializeConverter","entityTypeId","schemeSelector","SchemeSelector","lockScript","subscribe","EventEmitter","enableAutoConversion","convertByEvent","dstEntityTypeId","schemeItem","getConfig","getScheme","getItemForSingleEntityTypeId","console","error","updateFromSchemeItem","convert","id","BX","CrmEntityType","enumeration","deal","invoice","event","Number","getData","bindEvents","handlePrintOrPdf","bind","handleEmail","_this3","validatePrintTemplates","link","normalizeUrl","Uri","openInNewWindow","openTemplateSelectDialog","then","templateId","openPrintWindow","selectedPrintTemplate","getSinglePrintTemplate","showError","messages","errorNoPrintTemplates","_this4","Promise","resolve","reject","templateSelectDialogContent","Tag","render","taggedTemplateLiteral","template","select","querySelector","forEach","_ref","name","appendChild","Text","encode","popup","Popup","titleBar","selectTemplate","content","closeByEsc","closeIcon","buttons","Button","text","print","onclick","button","selectedTemplateId","destroy","events","onClose","show","setQueryParam","jsUtils","OpenWindow","toString","Redirect","_this5","errorNoEmailSettings","sendViaEmail","_this6","ownerPSID","top","SidePanel","modifyEmailSettings","getActivityEditor","addEmail","showErrorsFromResponse","ajax","runComponentAction","mode","signedParameters","analyticsLabel","data","paymentSystemId","response","storageTypeID","CrmActivityStorageType","webdav","webdavelements","disk","diskfiles","ID","file","files","CrmActivityEditor","items","ItemDetailsComponent","window","Main","UI","Event","Crm"],"mappings":"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","file":"script.map.js"}