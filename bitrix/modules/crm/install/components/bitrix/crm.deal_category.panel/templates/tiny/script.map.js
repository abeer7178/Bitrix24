{"version":3,"sources":["script.js"],"names":["this","BX","Crm","Deal","exports","main_core","main_popup","Panel","_Event$EventEmitter","babelHelpers","inherits","createClass","key","value","createMenuItem","options","item","id","ID","html","Text","encode","NAME","href","URL","count","Number","parseInt","COUNTER","Type","isNumber","counter","concat","_this","classCallCheck","possibleConstructorReturn","getPrototypeOf","call","button","container","items","tunnelsUrl","componentParams","onButtonClick","bind","assertThisInitialized","Event","isDropdown","Dom","hasClass","reload","_this2","ajax","runComponentAction","data","params","then","response","newContainer","Runtime","replace","getMenu","destroy","event","preventDefault","show","showTunnelSlider","_this3","SidePanel","Instance","open","cacheable","customLeftBoundary","allowChangeHistory","events","onClose","window","top","Main","filterManager","Object","values","forEach","filter","_onFindButtonClick","menu","menuItems","map","push","delimiter","text","Loc","getMessage","onclick","PopupMenuWindow","bindElement","EventEmitter","Category"],"mappings":"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","file":"script.map.js"}