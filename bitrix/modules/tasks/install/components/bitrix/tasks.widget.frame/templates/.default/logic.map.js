{"version":3,"sources":["logic.js"],"names":["BX","namespace","Tasks","Component","TasksWidgetFrameEditForm","extend","sys","code","methods","bindEvents","this","bindDelegateControl","passCtx","onToggleBlock","onPinBlock","onToggleAdditionalBlock","onPinFooterClick","bind","node","target","data","type","isNotEmptyString","toggleBlock","then","fireEvent","hasClass","control","opened","toggleClass","parentNode","state","getState","allOpened","isAllDynamicOpened","allClosed","isAllDynamicClosed","each","getDynamicBlocks","block","PINNED","jsCode","toJsCode","CODE","OPENED","duration","isElementNode","Util","fadeSlideToggleByClass","chosenContainer","unChosenContainer","blockName","blockPinned","getBlock","set","allChosen","isAllDynamicPinned","toPin","moveTo","append","removeClass","addClass","pinned","getFlag","footer","subInstance","State","scope","parent","toString","trim","toLowerCase","showLoader","Widget","options","controlBind","name","optionP","BLOCKS","FLAGS","vars","dynamic","CATEGORY","push","hasUnPinned","hasClosed","hasOpened","get","C","value","sync","ajax","runComponentAction","mode","structure","response","call"],"mappings":"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","file":"logic.map.js"}