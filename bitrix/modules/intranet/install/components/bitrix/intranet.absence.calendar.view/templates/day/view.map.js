{"version":3,"sources":["view.js"],"names":["JCCalendarViewDay","date","this","ID","_parent","SETTINGS","ENTRIES","window","_DAY_STYLE_LOADED","BX","loadCSS","bind","proxy","__onresize","prototype","UnloadData","__drawData","Load","FILTER","SHORT_EVENTS","length","__drawLayout","TYPE_BGCOLORS","LoadData","DATE_START","DATE_FINISH","DATA","browser","IsIE","setTimeout","bClearOnlyVisual","i","j","VISUAL","UnRegisterEntry","cleanNode","obRow","document","getElementById","parentNode","removeChild","SetSettings","today","Date","setHours","DAY_SHOW_NONWORK","DAY_START","setMinutes","setSeconds","setMilliseconds","valueOf","DAY_FINISH","Unload","unbind","changeDay","dir","setDate","getDate","_this","time_start","time_finish","CONTROLS","CALENDAR","innerHTML","obTable","createElement","className","setAttribute","appendChild","date_finish","getSeconds","text","DAYS_FULL","getDay","MONTHS_R","getMonth","getFullYear","DATEROW","arLinks","getElementsByTagName","onclick","obDelimRow","tBodies","insertRow","insertCell","cells","cur_date","obCell","time_label","isAmPmMode","getHours","obPageBar","style","padding","fontSize","date_start","ts_start","ts_finish","splice","USERS_ALL","row_index","rowIndex","id","obNameContainer","strName","FormatName","NAME_TEMPLATE","title","obName","createTextNode","href","obUserRow","obRowPos","pos","bx_color_variant","background","top","startIndex","finishIndex","obStartCell","obFinishCell","obPos","start_pos","left","getMinutes","right","Math","round","finish_pos","width","abs","parseInt","isNaN","height","util","htmlspecialchars","__bx_user_id","MAIN_LAYOUT","RegisterEntry","PAGE_COUNT","PAGE_NUMBER","MESSAGES","INTR_ABSC_TPL_PAGE_BAR","page_link","INTR_ABSC_TPL_PAGE_NEXT"],"mappings":"AAAA,SAASA,kBAAkBC,GAE1BC,KAAKC,GAAK,MACVD,KAAKE,QAAU,KAEfF,KAAKG,SAAW,GAChBH,KAAKI,QAAU,GAEf,IAAKC,OAAOC,kBACZ,CACCC,GAAGC,QAAQ,mFACXH,OAAOC,kBAAoB,KAG5BC,GAAGE,KAAKJ,OAAQ,SAAUE,GAAGG,MAAMV,KAAKW,WAAYX,OAGrDF,kBAAkBc,UAAUD,WAAa,WAExCX,KAAKa,WAAW,MAChBb,KAAKc,cAINhB,kBAAkBc,UAAUG,KAAO,WAElCf,KAAKE,QAAQc,OAAOC,aAAe,IAEnC,GAAI,MAAQjB,KAAKI,SAAWJ,KAAKI,QAAQc,OAAS,EAAGlB,KAAKa,aAE1Db,KAAKmB,eAELnB,KAAKoB,cAAgBpB,KAAKE,QAAQkB,cAElCpB,KAAKE,QAAQmB,SACZrB,KAAKG,SAASmB,WACdtB,KAAKG,SAASoB,cAIhBzB,kBAAkBc,UAAUS,SAAW,SAASG,GAE/CxB,KAAKI,QAAUoB,EAEf,GAAIjB,GAAGkB,QAAQC,OACf,CACCC,WAAWpB,GAAGG,MAAMV,KAAKc,WAAYd,MAAO,QAG7C,CACCA,KAAKc,eAIPhB,kBAAkBc,UAAUC,WAAa,SAASe,GAEjD,GAAI,MAAQ5B,KAAKI,QAChB,OAED,GAAI,MAAQwB,EAAkBA,EAAmB,MAEjD,IAAK,IAAIC,EAAI,EAAGA,EAAI7B,KAAKI,QAAQc,OAAQW,IACzC,CACC,GAAI,MAAQ7B,KAAKI,QAAQyB,GAAGL,KAC5B,CACC,IAAK,IAAIM,EAAI,EAAGA,EAAI9B,KAAKI,QAAQyB,GAAGL,KAAKN,OAAQY,IACjD,CACC,GAAI,MAAQ9B,KAAKI,QAAQyB,GAAGL,KAAKM,GAAGC,OAAQ,SAE5C/B,KAAKE,QAAQ8B,gBAAgBhC,KAAKI,QAAQyB,GAAGL,KAAKM,IAClDvB,GAAG0B,UAAUjC,KAAKI,QAAQyB,GAAGL,KAAKM,GAAGC,OAAQ,MAC7C/B,KAAKI,QAAQyB,GAAGL,KAAKM,GAAGC,OAAS,MAInC,IAAIG,EAAQC,SAASC,eAAe,oBAAsBpC,KAAKI,QAAQyB,GAAG,OAC1E,GAAI,MAAQK,EAAOA,EAAMG,WAAWC,YAAYJ,GAGjD,IAAKN,EAAkB5B,KAAKI,QAAU,MAGvCN,kBAAkBc,UAAU2B,YAAc,SAAUpC,GAEnDH,KAAKG,SAAWA,EAEhB,IAAIqC,EAAQ,IAAIC,KAEhB,GAAI,MAAQzC,KAAKG,SAASmB,YAAckB,GAASxC,KAAKG,SAASmB,YAAckB,GAASxC,KAAKG,SAASoB,YACnGvB,KAAKG,SAASmB,WAAakB,EAE5BxC,KAAKG,SAASmB,WAAWoB,SAAS1C,KAAKG,SAASwC,iBAAmB,EAAI3C,KAAKG,SAASyC,WACrF5C,KAAKG,SAASmB,WAAWuB,WAAW,GACpC7C,KAAKG,SAASmB,WAAWwB,WAAW,GACpC9C,KAAKG,SAASmB,WAAWyB,gBAAgB,GAEzC/C,KAAKG,SAASoB,YAAc,IAAIkB,KAAKzC,KAAKG,SAASmB,WAAW0B,WAC9DhD,KAAKG,SAASoB,YAAYmB,SAAS1C,KAAKG,SAASwC,iBAAmB,GAAK3C,KAAKG,SAAS8C,aAGxFnD,kBAAkBc,UAAUsC,OAAS,WAEpC3C,GAAG4C,OAAO9C,OAAQ,SAAUE,GAAGG,MAAMV,KAAKW,WAAYX,OACtDA,KAAKa,cAGNf,kBAAkBc,UAAUwC,UAAY,SAASC,GAEhD,GAAIA,IAAQ,EAAGA,EAAM,EAErBrD,KAAKG,SAASmB,WAAWgC,QAAQtD,KAAKG,SAASmB,WAAWiC,UAAYF,GACtErD,KAAKG,SAASoB,YAAY+B,QAAQtD,KAAKG,SAASoB,YAAYgC,UAAYF,GAExErD,KAAKe,QAGNjB,kBAAkBc,UAAUO,aAAe,WAE1C,IAAIqC,EAAQxD,KAEZ,IAAIyD,EAAazD,KAAKG,SAASwC,iBAAmB,EAAI3C,KAAKG,SAASyC,UACpE,IAAIc,EAAc1D,KAAKG,SAASwC,iBAAmB,GAAK3C,KAAKG,SAAS8C,WAEtEjD,KAAKE,QAAQyD,SAASC,SAASC,UAAY,GAE3C7D,KAAK8D,QAAU3B,SAAS4B,cAAc,SACtC/D,KAAK8D,QAAQE,UAAY,6BACzBhE,KAAK8D,QAAQG,aAAa,cAAe,KAEzCjE,KAAKE,QAAQyD,SAASC,SAASM,YAAYlE,KAAK8D,SAGhD9D,KAAK8D,QAAQI,YAAY/B,SAAS4B,cAAc,UAShD,IAAII,EAAc,IAAI1B,KAAKzC,KAAKG,SAASoB,YAAYyB,WACrDmB,EAAYrB,WAAWqB,EAAYC,aAAa,GAEhD,IAAIC,EAAOrE,KAAKE,QAAQoE,UAAUtE,KAAKG,SAASmB,WAAWiD,UAAY,KAAOvE,KAAKG,SAASmB,WAAWiC,UAAY,IAAMvD,KAAKE,QAAQsE,SAASxE,KAAKG,SAASmB,WAAWmD,YAAc,IAAMzE,KAAKG,SAASmB,WAAWoD,cAIrN1E,KAAKE,QAAQyD,SAASgB,QAAQd,UAC9B7D,KAAKE,QAAQyD,SAASgB,QAAQd,UAC9B,mEACG,+FACA,OAASQ,EAAO,QAChB,8FACA,gBAGH,IAAIO,EAAU5E,KAAKE,QAAQyD,SAASgB,QAAQE,qBAAqB,KACjED,EAAQ,GAAGE,QAAU,WAAYtB,EAAMJ,WAAW,IAClDwB,EAAQ,GAAGE,QAAU,WAAYtB,EAAMJ,UAAU,IASjDpD,KAAK+E,WAAa/E,KAAK8D,QAAQkB,QAAQ,GAAGC,WAAW,GAErDjF,KAAK+E,WAAWG,YAAY,GAC5BlF,KAAK+E,WAAWI,MAAM,GAAGnB,UAAY,wBAErC,GAAIzD,GAAGkB,QAAQC,OACd1B,KAAK+E,WAAWI,MAAM,GAAGtB,UAAY,SAEtC,IAAIuB,EAAW,IAAI3C,KAAKzC,KAAKG,SAASmB,WAAW0B,WACjD,IAAIR,EAAQ,IAAIC,KAChBD,EAAMK,WAAW,GACjBL,EAAMM,WAAW,GACjBN,EAAMO,gBAAgB,GACtB,IAAK,IAAIlB,EAAI4B,EAAY5B,EAAI6B,EAAa7B,IAC1C,CACC,IAAIwD,EAASrF,KAAK+E,WAAWG,YAAY,GAEzCG,EAAOrB,UAAY,wBAA0BhE,KAAKG,SAASwC,iBAAmB,GAAK,SAEnF,GAAIyC,EAASpC,WAAaR,EAAMQ,UAC/BqC,EAAOrB,WAAa,uBACrB,GAAInC,EAAI7B,KAAKG,SAASyC,WAAaf,GAAK7B,KAAKG,SAAS8C,WACrDoC,EAAOrB,WAAa,gCAErB,IAAIsB,EAAa/E,GAAGgF,aAAgBH,EAASI,WAAW,GAAK,EAAIJ,EAASI,WAAW,GAAK,GAAMJ,EAASI,WACxGF,GAAc/E,GAAGgF,aAAgBH,EAASI,WAAa,GAAK,KAAO,KAAQ,gBAE5EH,EAAOxB,UAAYyB,EAEnBF,EAAS1C,SAAS0C,EAASI,WAAa,GAGzCxF,KAAKE,QAAQyD,SAASC,SAASM,YAAY/B,SAAS4B,cAAc,OAClE/D,KAAKE,QAAQyD,SAASC,SAASM,YAAY/B,SAAS4B,cAAc,OAElE/D,KAAKyF,UAAYtD,SAAS4B,cAAc,OACxC/D,KAAKyF,UAAUC,MAAMC,QAAU,gBAC/B3F,KAAKyF,UAAUC,MAAME,SAAW,SAChC5F,KAAKE,QAAQyD,SAASC,SAASM,YAAYlE,KAAKyF,WAEhDzF,KAAKE,QAAQyD,SAASC,SAASM,YAAY/B,SAAS4B,cAAc,OAClE/D,KAAKE,QAAQyD,SAASC,SAASM,YAAY/B,SAAS4B,cAAc,QAGnEjE,kBAAkBc,UAAUE,WAAa,WAExC,IAAI0C,EAAQxD,KAEZ,IAAIwC,EAAQ,IAAIC,KAChBD,EAAMK,WAAW,GACjBL,EAAMM,WAAW,GACjBN,EAAMO,gBAAgB,GAEtB,IAAIU,EAAazD,KAAKG,SAASwC,iBAAmB,EAAI3C,KAAKG,SAASyC,UACpE,IAAIc,EAAc1D,KAAKG,SAASwC,iBAAmB,GAAK3C,KAAKG,SAAS8C,WAEtE,IAAI4C,EAAa7F,KAAKG,SAASmB,WAE/B,IAAI6C,EAAc,IAAI1B,KAAKzC,KAAKG,SAASoB,aACzC4C,EAAYrB,WAAWqB,EAAYC,aAAe,GAElD,IAAK,IAAIvC,EAAI,EAAGA,GAAK,MAAQ7B,KAAKI,QAAU,EAAIJ,KAAKI,QAAQc,QAASW,IACtE,CAEC,IAAK,IAAIC,EAAI,EAAGA,EAAI9B,KAAKI,QAAQyB,GAAG,QAAQX,OAAQY,IACpD,CACC,IAAIgE,EAAW9F,KAAKI,QAAQyB,GAAG,QAAQC,GAAG,oBAC1C,IAAIiE,EAAY/F,KAAKI,QAAQyB,GAAG,QAAQC,GAAG,kBAE3C,GAAI+D,EAAW7C,UAAY+C,EAAU/C,WAAamB,EAAYnB,UAAY8C,EAAS9C,UACnF,CACChD,KAAKI,QAAQyB,GAAG,QAAQmE,OAAOlE,EAAG,GAClCA,KAIF,GAAI9B,KAAKI,QAAQyB,GAAG,QAAQX,QAAU,GAAKlB,KAAKE,QAAQc,OAAOiF,WAAa,IAC5E,CACC,SAED,IAAIC,GAAa,EAEjB,GAAI,MAAQlG,KAAKI,QAAQyB,GAAG,SAAW7B,KAAKI,QAAQyB,GAAG,QAAQX,OAAS,EACxE,CACC,IAAK,IAAIY,EAAI,EAAGA,EAAI9B,KAAKI,QAAQyB,GAAG,QAAQX,OAAQY,IACpD,CACC,IAAIgE,EAAW9F,KAAKI,QAAQyB,GAAG,QAAQC,GAAG,oBAC1C,IAAIiE,EAAY/F,KAAKI,QAAQyB,GAAG,QAAQC,GAAG,kBAE3C,GAAI9B,KAAKG,SAASmB,WAAW0B,WAAa8C,EAAS9C,WAAahD,KAAKG,SAASoB,YAAYyB,WAAa+C,EAAU/C,UAAU,IAC3H,CACCkD,EAAYlG,KAAK+E,WAAWoB,SAC5B,QAKH,IAAIjE,EAAQlC,KAAK8D,QAAQkB,QAAQ,GAAGC,UAAUiB,GAE9ChE,EAAMgD,YAAY,GAClBhD,EAAMiD,MAAM,GAAGnB,UAAY,4BAE3B9B,EAAMkE,GAAK,oBAAsBpG,KAAKI,QAAQyB,GAAG,MAEjD,IAAIwE,EAAkBnE,EAAMiD,MAAM,GAAGjB,YAAY/B,SAAS4B,cAAc,QAExE,IAAIuC,EAAUtG,KAAKE,QAAQqG,WAAWvG,KAAKG,SAASqG,cAAexG,KAAKI,QAAQyB,IAEhFwE,EAAgBI,MAAQH,EAExB,GAAItG,KAAKI,QAAQyB,GAAG,cACpB,CACC,IAAI6E,EAASvE,SAAS4B,cAAc,KACpC2C,EAAOxC,YAAY/B,SAASwE,eAAeL,IAC3CI,EAAOE,KAAO5G,KAAKI,QAAQyB,GAAG,kBAG/B,CACC,IAAI6E,EAASvE,SAASwE,eAAeL,GAGtCD,EAAgBnC,YAAYwC,GAE5B,IAAItB,EAAW,IAAI3C,KAAKzC,KAAKG,SAASmB,WAAW0B,WACjD,IAAK,IAAIlB,EAAI2B,EAAY3B,EAAI4B,EAAa5B,IAC1C,CACC,IAAIuD,EAASnD,EAAMgD,YAAY,GAE/BG,EAAOrB,UAAY,wBAA0BhE,KAAKG,SAASwC,iBAAmB,GAAK,SAEnF,GAAIyC,EAASpC,WAAaR,EAAMQ,UAC/BqC,EAAOrB,WAAa,uBAErB,GAAIlC,EAAI9B,KAAKG,SAASyC,WAAad,GAAK9B,KAAKG,SAAS8C,WACrDoC,EAAOrB,WAAa,gCAErB,GAAIzD,GAAGkB,QAAQC,OACd2D,EAAOxB,UAAY,SAEpBuB,EAAS1C,SAAS0C,EAASI,WAAa,IAI1C,IAAIG,EAAU,EACd,IAAK,IAAI9D,EAAI,EAAGA,GAAK,MAAQ7B,KAAKI,QAAU,EAAIJ,KAAKI,QAAQc,QAASW,IACtE,CACC,IAAIgF,EAAYtG,GAAG,oBAAsBP,KAAKI,QAAQyB,GAAG,OAEzD,GAAIgF,GAAa7G,KAAKI,QAAQyB,GAAG,QACjC,CACC,IAAIiF,EAAWvG,GAAGwG,IAAIF,EAAW,MAEjC,IAAK,IAAI/E,EAAI,EAAGA,EAAI9B,KAAKI,QAAQyB,GAAG,QAAQX,OAAQY,IACpD,CACC,IAAIgE,EAAW9F,KAAKI,QAAQyB,GAAG,QAAQC,GAAG,oBAC1C,IAAIiE,EAAY/F,KAAKI,QAAQyB,GAAG,QAAQC,GAAG,kBAE3C9B,KAAKI,QAAQyB,GAAG,QAAQC,GAAGC,OAASI,SAAS4B,cAAc,OAE3D/D,KAAKI,QAAQyB,GAAG,QAAQC,GAAGC,OAAOiF,iBAAmBhH,KAAKI,QAAQyB,GAAG,QAAQC,GAAG,QAAQZ,OAASlB,KAAKI,QAAQyB,GAAG,QAAQC,GAAG,QAAU,QAEtI9B,KAAKI,QAAQyB,GAAG,QAAQC,GAAGC,OAAOiC,UAAY,uCAAyChE,KAAKI,QAAQyB,GAAG,QAAQC,GAAGC,OAAOiF,iBACzHhH,KAAKI,QAAQyB,GAAG,QAAQC,GAAGC,OAAO2D,MAAMuB,WAAajH,KAAKoB,cAAepB,KAAKI,QAAQyB,GAAG,QAAQC,GAAG,QAAQZ,OAASlB,KAAKI,QAAQyB,GAAG,QAAQC,GAAG,QAAU,SAE1J9B,KAAKI,QAAQyB,GAAG,QAAQC,GAAGC,OAAO2D,MAAMwB,IAAOJ,EAASI,IAAMvB,EAAW,KAEzE,GAAIE,EAAW7C,UAAY8C,EAAS9C,UACnC8C,EAAWD,EACZ,GAAI1B,EAAYnB,UAAY+C,EAAU/C,UACrC+C,EAAY5B,EAEb,IAAIgD,EAAarB,EAASN,WAAa,EAAI/B,EAC1C2D,EAAcrB,EAAUP,WAAa,EAAI/B,EAE1C,GAAG2D,EAAYD,EACdC,EAAcD,EAEf,IAAIE,EAAcR,EAAU1B,MAAMgC,GACjCG,EAAeT,EAAU1B,MAAMiC,GAEhC,IAAIG,EAAQhH,GAAGwG,IAAIM,EAAa,MAC/BG,EAAYD,EAAME,KAAO9B,EAE1B,GAAIG,EAAS4B,aAAe,GAC3BF,GAAcD,EAAMI,MAAMJ,EAAME,UAC5B,GAAI3B,EAAS4B,aAAe,GAChCF,GAAaI,KAAKC,OAAON,EAAMI,MAAMJ,EAAME,MAAM,GAElD,GAAIJ,GAAeC,EAClBC,EAAQhH,GAAGwG,IAAIO,EAAc,MAE9B,IAAIQ,EAAaP,EAAME,KAEvB,GAAI1B,EAAU2B,aAAe,GAC5BI,EAAaP,EAAMI,WACf,GAAI5B,EAAU2B,aAAe,GACjCI,GAAcF,KAAKC,OAAON,EAAMI,MAAMJ,EAAME,MAAM,GAEnD,IAAIM,EAAQH,KAAKI,IAAIC,SAASH,EAAaN,EAAY7B,EAAU,IAEjE,GAAIuC,MAAMH,IAAUA,EAAQ,EAC3BA,EAAQ,EAET/H,KAAKI,QAAQyB,GAAG,QAAQC,GAAGC,OAAO2D,MAAM+B,KAAOQ,SAAST,GAAa,KACrExH,KAAKI,QAAQyB,GAAG,QAAQC,GAAGC,OAAO2D,MAAMqC,MAAQA,EAAQ,KACxD/H,KAAKI,QAAQyB,GAAG,QAAQC,GAAGC,OAAO2D,MAAMyC,OAASF,SAASV,EAAMY,OAAS,EAAExC,GAAW,KAEtF3F,KAAKI,QAAQyB,GAAG,QAAQC,GAAGC,OAAO8B,UACjC,SACEtD,GAAG6H,KAAKC,iBAAiBrI,KAAKI,QAAQyB,GAAG,QAAQC,GAAG,SACpD,KAAO9B,KAAKI,QAAQyB,GAAG,QAAQC,GAAG,aAAe,MAAQ9B,KAAKI,QAAQyB,GAAG,QAAQC,GAAG,WAAa,IACjG,UAKH9B,KAAKI,QAAQyB,GAAG,QAAQC,GAAGC,OAAOuG,aAAetI,KAAKI,QAAQyB,GAAG,MAEjE7B,KAAKE,QAAQqI,YAAYrE,YAAYlE,KAAKI,QAAQyB,GAAG,QAAQC,GAAGC,QAChE/B,KAAKE,QAAQsI,cAAcxI,KAAKI,QAAQyB,GAAGL,KAAKM,MAKnD,GAAI9B,KAAKG,SAASsI,WAAa,GAAKzI,KAAKG,SAASuI,YAAc,EAChE,CACC1I,KAAKyF,UAAU5B,UAAY7D,KAAKE,QAAQyI,SAASC,uBAAyB,KAE1E,IAAK,IAAI/G,EAAI,EAAGA,GAAK7B,KAAKG,SAASuI,YAAa7G,IAChD,CACC,GAAIA,GAAK7B,KAAKG,SAASuI,YACvB,CACC,IAAIG,EAAY1G,SAASwE,eAAe9E,EAAE,OAG3C,CACC,IAAIgH,EAAY1G,SAAS4B,cAAc,KACvC8E,EAAUjC,KAAO,sBACjBiC,EAAUhF,UAAYhC,EAAE,EACxBgH,EAAU/D,QAAU,SAAUjD,GAE7B,OAAO,WAEN2B,EAAMrD,SAASuI,YAAc7G,EAC7B2B,EAAMzC,QALY,CAOjBc,GAGJ7B,KAAKyF,UAAUvB,YAAY2E,GAC3B7I,KAAKyF,UAAUvB,YAAY/B,SAASwE,eAAe,MAEnD,GAAI9E,GAAK,GAAK7B,KAAKG,SAASuI,aAAe,EAC3C,CACC,IAAIG,EAAY1G,SAASwE,eAAe,OACxC3G,KAAKyF,UAAUvB,YAAY2E,GAC3B7I,KAAKyF,UAAUvB,YAAY/B,SAASwE,eAAe,MAEnD9E,EAAI7B,KAAKG,SAASuI,YAAY,GAIhC,GAAI1I,KAAKG,SAASsI,WAAW,EAAIzI,KAAKG,SAASuI,YAC/C,CACC,IAAIG,EAAY1G,SAAS4B,cAAc,KACvC8E,EAAUjC,KAAO,sBACjBiC,EAAUhF,UAAY7D,KAAKE,QAAQyI,SAASG,wBAC5CD,EAAU/D,QAAU,WAEnBtB,EAAMrD,SAASuI,aAAe,EAC9BlF,EAAMzC,QAGPf,KAAKyF,UAAUvB,YAAY2E","file":"view.map.js"}