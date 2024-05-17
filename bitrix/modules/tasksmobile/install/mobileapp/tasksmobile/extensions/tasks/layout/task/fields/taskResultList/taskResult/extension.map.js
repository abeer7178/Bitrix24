{"version":3,"sources":["extension.js"],"names":["jn","define","require","exports","module","Loc","ProfileView","TaskResult","LayoutComponent","constructor","props","super","render","View","style","flexDirection","backgroundColor","this","isFirst","paddingHorizontal","paddingTop","paddingBottom","renderTitle","renderAuthor","renderContent","Text","fontSize","fontWeight","color","text","getMessage","toUpperCase","result","taskResult","author","userInfo","createdBy","marginTop","onClick","parentWidget","openWidget","groupStyle","backdrop","bounceEnable","swipeAllowed","showOnTop","hideNavigationBar","horizontalSwipeAllowed","then","list","open","userId","isBackdrop","Image","width","height","borderRadius","alignSelf","uri","getImageUrl","avatar","marginLeft","formattedName","paddingLeft","borderLeftWidth","borderLeftColor","renderText","renderFiles","BBCodeText","onLinkClick","link","fileMatch","url","match","fileInfo","file","fileType","UI","File","getType","getFileMimeType","type","name","openFileViewer","webMatch","openWebViewer","id","value","parsedText","Object","keys","length","images","otherFiles","values","forEach","getFileType","push","renderImages","renderOtherFiles","map","image","imageUri","files","flexWrap","filesToShowCount","filesToShow","i","shift","isInLine","alignItems","openFilesList","imageUrl","indexOf","currentDomain","encodeURI","replace","viewer","openVideo","openImage","openDocument","PageManager","openPage","env","siteDir","taskId","title","Number","useLargeTitleMode","modal","mediumPositionPercent","onReady","layoutWidget","screenWidth","device","screen","fileMeasure","imageSize","showComponent","FileAttachment","attachments","showName","styles","wrapper","marginBottom","marginRight","paddingRight","imagePreview","imageOutline","position","top","right","borderColor","borderWidth","opacity"],"mappings":"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","file":"extension.map.js"}