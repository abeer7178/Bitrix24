{"version":3,"file":"type-model.bundle.map.js","names":["this","BX","Crm","exports","main_core","crm_model","TypeModel","_Model","babelHelpers","inherits","data","params","classCallCheck","possibleConstructorReturn","getPrototypeOf","call","createClass","key","value","getModelName","getData","get","prototype","Type","isObject","linkedUserFields","relations","getRelations","customSections","getCustomSections","getTitle","title","setTitle","getCreatedBy","createdBy","getIsCategoriesEnabled","isCategoriesEnabled","setIsCategoriesEnabled","getIsStagesEnabled","isStagesEnabled","setIsStagesEnabled","getIsBeginCloseDatesEnabled","isBeginCloseDatesEnabled","setIsBeginCloseDatesEnabled","getIsClientEnabled","setIsClientEnabled","isClientEnabled","getIsLinkWithProductsEnabled","isLinkWithProductsEnabled","setIsLinkWithProductsEnabled","getIsCrmTrackingEnabled","isCrmTrackingEnabled","setIsCrmTrackingEnabled","getIsMycompanyEnabled","isMycompanyEnabled","setIsMycompanyEnabled","getIsDocumentsEnabled","isDocumentsEnabled","setIsDocumentsEnabled","getIsSourceEnabled","isSourceEnabled","setIsSourceEnabled","getIsUseInUserfieldEnabled","isUseInUserfieldEnabled","setIsUseInUserfieldEnabled","getIsObserversEnabled","isObserversEnabled","setIsObserversEnabled","getIsRecyclebinEnabled","isRecyclebinEnabled","setIsRecyclebinEnabled","getIsAutomationEnabled","isAutomationEnabled","setIsAutomationEnabled","getIsBizProcEnabled","isBizProcEnabled","setIsBizProcEnabled","getIsSetOpenPermissions","isSetOpenPermissions","setIsSetOpenPermissions","getLinkedUserFields","setLinkedUserFields","getCustomSectionId","hasOwnProperty","Text","toInteger","customSectionId","setCustomSectionId","isArray","length","setCustomSections","setConversionMap","_ref","sourceTypes","destinationTypes","conversionMap","normalizeTypes","getConversionMap","isUndefined","undefined","Object","assign","setRelations","parent","child","getIsCountersEnabled","isCountersEnabled","setIsCountersEnabled","types","isArrayFilled","arrayOfIntegers","map","element","parseInt","filter","getBooleanFieldNames","Model","Models"],"sources":["type-model.bundle.js"],"mappings":"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"}