{"version":3,"file":"desktop.bundle.map.js","names":["this","BX","Messenger","exports","main_core","ownKeys","object","enumerableOnly","keys","Object","getOwnPropertySymbols","symbols","filter","sym","getOwnPropertyDescriptor","enumerable","push","apply","_objectSpread","target","i","arguments","length","source","forEach","key","babelHelpers","defineProperty","getOwnPropertyDescriptors","defineProperties","Desktop","classCallCheck","createClass","value","addCustomEvent","eventName","eventHandler","realHandler","event","window","toConsumableArray","values","detail","eventHandlers","addEventListener","removeCustomEvents","removeEventListener","onCustomEvent","windowTarget","eventParams","convertedEventParams","mainWindow","opener","top","BXWindows","windowItem","name","BXDesktopWindow","DispatchCustomEvent","Type","isObject","hasOwnProperty","existingWindow","findWindow","undefined","find","setWindowResizable","enabled","SetProperty","setWindowClosable","setWindowTitle","title","isUndefined","trim","setWindowPosition","params","setWindowMinSize","Width","Height","getHtmlPage","content","jsContent","initImJs","bodyClass","BXIM","desktop","isDomNode","outerHTML","isPopupPageLoaded","htmlWrapperHead","document","head","replace","enableInVersion","isUtfMode","BXInternals","PopupTemplate","version","BXDesktopSystem","getApiVersion","parseInt","clientVersion","GetProperty","isReady","Lib"],"sources":["desktop.bundle.js"],"mappings":"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"}