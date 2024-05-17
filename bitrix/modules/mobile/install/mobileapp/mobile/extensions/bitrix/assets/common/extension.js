/**
 * @module assets/common
 */
jn.define('assets/common', (require, exports, module) => {

	const dragButton = `<svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.2938 14.4008C11.4166 14.9768 10.3669 15.3119 9.23897 15.3119C6.16111 15.3119 3.66602 12.8168 3.66602 9.73897C3.66602 6.66111 6.16111 4.16602 9.23897 4.16602C12.3168 4.16602 14.8119 6.66111 14.8119 9.73897C14.8119 10.8669 14.4768 11.9166 13.9008 12.7938L16.7974 15.6904C17.1391 16.0321 17.1391 16.5862 16.7974 16.9279L16.4279 17.2974C16.0862 17.6391 15.5321 17.6391 15.1904 17.2974L12.2938 14.4008ZM13.2197 9.73897C13.2197 11.9374 11.4374 13.7197 9.23897 13.7197C7.0405 13.7197 5.25829 11.9374 5.25829 9.73897C5.25829 7.5405 7.0405 5.75829 9.23897 5.75829C11.4374 5.75829 13.2197 7.5405 13.2197 9.73897Z" fill="#A8ADB4"/></svg>`;

	const magnifier = (color = '#a8adb4') => `<svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.31573 10.6561C7.48022 11.2047 6.48055 11.5238 5.40633 11.5238C2.47504 11.5238 0.0987549 9.14756 0.0987549 6.21627C0.0987549 3.28497 2.47504 0.908691 5.40633 0.908691C8.33762 0.908691 10.7139 3.28497 10.7139 6.21627C10.7139 7.29048 10.3948 8.29016 9.84617 9.12567L12.6048 11.8843C12.9303 12.2098 12.9303 12.7374 12.6048 13.0628L12.2529 13.4148C11.9275 13.7402 11.3998 13.7402 11.0744 13.4148L8.31573 10.6561ZM9.19746 6.21627C9.19746 8.31005 7.50011 10.0074 5.40633 10.0074C3.31255 10.0074 1.61521 8.31005 1.61521 6.21627C1.61521 4.12249 3.31255 2.42514 5.40633 2.42514C7.50011 2.42514 9.19746 4.12249 9.19746 6.21627Z" fill="${color}"/></svg>`;

	const magnifierWithMenuAndDot = (magnifierColor = '#a8adb4', backgroundColor = null, dotColor = null) => {
		let rect = '';
		let dot = '';
		let magnifierSvg = null;

		if (backgroundColor)
		{
			rect = `<rect y="0.5" width="31" height="31" rx="15.5" fill="${backgroundColor}"/>`;
			magnifierColor = '#ffffff';
		}
		else if (dotColor)
		{
			dot = `<circle cx="22" cy="9" r="3" fill="${dotColor}"/>`;
			magnifierSvg = '<path fill-rule="evenodd" clip-rule="evenodd" d="M22.8866 13.9536C22.5988 14.0048 22.3025 14.0315 22 14.0315C21.5937 14.0315 21.1986 13.9833 20.8201 13.8924C20.8413 14.1012 20.8521 14.313 20.8521 14.5274C20.8521 16.8848 19.5428 18.9363 17.6118 19.9946V22.2557C18.1599 22.0435 18.6798 21.7746 19.1644 21.4564L22.7394 25.0314C23.1299 25.4219 23.7631 25.4219 24.1536 25.0314L24.996 24.189C25.3865 23.7985 25.3865 23.1653 24.996 22.7748L21.4464 19.2252C22.3671 17.8902 22.9062 16.2718 22.9062 14.5274C22.9062 14.3346 22.8996 14.1432 22.8866 13.9536ZM17.4957 6.75529C16.6005 6.42416 15.6324 6.24329 14.622 6.24329C10.3072 6.24329 6.76285 9.5421 6.37341 13.7553H8.43934C8.81962 10.6788 11.4427 8.29734 14.622 8.29734C15.4543 8.29734 16.2485 8.46055 16.9743 8.7567C17.0084 8.04007 17.1924 7.3627 17.4957 6.75529ZM4 16.5C4 15.9477 4.44772 15.5 5 15.5H15C15.5523 15.5 16 15.9477 16 16.5C16 17.0523 15.5523 17.5 15 17.5H5C4.44772 17.5 4 17.0523 4 16.5ZM4 20.5C4 19.9477 4.44772 19.5 5 19.5H15C15.5523 19.5 16 19.9477 16 20.5C16 21.0523 15.5523 21.5 15 21.5H5C4.44772 21.5 4 21.0523 4 20.5ZM5 23.5C4.44772 23.5 4 23.9477 4 24.5C4 25.0523 4.44772 25.5 5 25.5H15C15.5523 25.5 16 25.0523 16 24.5C16 23.9477 15.5523 23.5 15 23.5H5Z" fill="#A8ADB4"/>';
		}

		if (!magnifierSvg)
		{
			magnifierSvg = `<path fill-rule="evenodd" clip-rule="evenodd" d="M17.6118 21.292C17.9359 21.1366 18.248 20.9601 18.5462 20.7642L21.9831 24.2011C22.3736 24.5916 23.0067 24.5916 23.3973 24.2011L24.1669 23.4315C24.5574 23.041 24.5574 22.4078 24.1669 22.0173L20.7545 18.605C21.6456 17.3131 22.1673 15.7469 22.1673 14.0588C22.1673 9.63117 18.578 6.04187 14.1504 6.04187C9.82439 6.04187 6.29868 9.46828 6.1391 13.7552H8.12876C8.28687 10.5665 10.9224 8.02967 14.1504 8.02967C17.4801 8.02967 20.1795 10.729 20.1795 14.0588C20.1795 16.1005 19.1646 17.9051 17.6118 18.9958Z" fill="${magnifierColor}"/>`;
		}

		return `<svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">\n` +
			`${rect}\n` +
			`${dot}\n` +
			`<rect x="4" y="15.5" width="12" height="2" rx="1" fill="${magnifierColor}"/>\n` +
			`<rect x="4" y="19.5" width="12" height="2" rx="1" fill="${magnifierColor}"/>\n` +
			`<rect x="4" y="23.5" width="12" height="2" rx="1" fill="${magnifierColor}"/>\n` +
			`${magnifierSvg}\n` +
			`</svg>`
			;
	};

	const plus = (color = '#525c69') => `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.8333 5H9.16667V9.16667H5V10.8333H9.16667V15H10.8333V10.8333H15V9.16667H10.8333V5Z" fill="${color}"/></svg>`;

	const chevronRight = (color = '#d5d7db') => `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.16016 6.34368L12.6872 10.8707L13.8598 12.0001L12.6872 13.1301L8.16016 17.6572L9.75762 19.2547L17.0118 12.0005L9.75762 4.74634L8.16016 6.34368Z" fill="${color}"/></svg>`;

	const chevronDown = (color = '#a8adb4', params = {}) => {
		const { box } = params;

		if (box)
		{
			return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.6676 8.15039L13.1405 12.6774L12 13.8003L10.8811 12.6774L6.35404 8.15039L4.75657 9.74786L12.0107 17.002L19.2649 9.74786L17.6676 8.15039Z" fill="${color}"/></svg>`;
		}

		return `<svg width="7" height="5" viewBox="0 0 7 5" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.09722 0.235352L4.02232 2.31025L3.49959 2.8249L2.98676 2.31025L0.91186 0.235352L0.179688 0.967524L3.50451 4.29235L6.82933 0.967524L6.09722 0.235352Z" fill="${color}"/></svg>`;
	};

	const chevronUp = (color = '#a8adb4') => `<svg width="7" height="5" viewBox="0 0 7 5" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.732111 4.057L2.80701 1.9821L3.32974 1.46745L3.84257 1.9821L5.91747 4.057L6.64964 3.32483L3.32482 -4.76837e-07L9.53674e-07 3.32483L0.732111 4.057Z" fill="${color}"/></svg>`;

	const arrowRight = (color = '#a8adb4') => `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.1604 6.34343L14.6875 10.8705H5.00943V13.1299H14.6875L10.1604 17.6569L11.7579 19.2544L19.0121 12.0003L11.7579 4.74609L10.1604 6.34343Z" fill="${color}"/></svg>`;

	const smallCross = (color = '#828b95') => `<svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.05882 0.000222688L8 0.941373L0.941178 8L1.38837e-06 7.05885L7.05882 0.000222688Z" fill="#828B95"/><path d="M0 0.94115L0.941176 0L8 7.05863L7.05882 7.99978L0 0.94115Z" fill="${color}"/></svg>`;

	const cross = (color = '#d5d7db') => `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.1412 11.6368L17.046 15.5417L15.5412 17.0465L11.6363 13.1417L7.73145 17.0465L6.22656 15.5417L10.1314 11.6368L6.22656 7.73193L7.73145 6.22705L11.6363 10.1319L15.5412 6.22705L17.046 7.73193L13.1412 11.6368Z" fill="${color}"/></svg>`;

	const bigCross = (color = '#dfe0e3') => `<svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.6166 10.1138L10.114 11.6164L14.9976 16.5L10.114 21.3836L11.6166 22.8862L16.5002 18.0026L21.3835 22.8859L22.8861 21.3833L18.0028 16.5L22.8861 11.6167L21.3835 10.1141L16.5002 14.9974L11.6166 10.1138Z" fill="${color}"/><rect width="33" height="33" rx="16.5" fill="white" fill-opacity="0.01"/></svg>`;

	const info = (color = '#525c69') => `<svg width="5" height="9" viewBox="0 0 5 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.53727 4.05959L0.795898 4.06V4.8442H1.6189V8.17227H0.795898V8.99527H4.08791V8.17227H3.53727V4.05959ZM2.44191 2.75671C3.08126 2.75671 3.59956 2.23841 3.59956 1.59906C3.59956 0.959705 3.08126 0.441406 2.44191 0.441406C1.80255 0.441406 1.28425 0.959705 1.28425 1.59906C1.28425 2.23841 1.80255 2.75671 2.44191 2.75671Z" fill="${color}"/></svg>`;

	const pen = `<svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.4359 0.0348206L13.9865 2.61224L4.00879 12.5631L1.45822 9.98563L11.4359 0.0348206ZM0.0256074 13.6726C0.00148857 13.7639 0.0273302 13.8604 0.0927957 13.9275C0.159984 13.9947 0.256459 14.0205 0.347766 13.9947L3.19896 13.2266L0.793965 10.8223L0.0256074 13.6726Z" fill="#d5d7db"/></svg>`;

	const lock = `<svg width="28" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity="0.8"><path fill-rule="evenodd" clip-rule="evenodd" d="M14.17 18.4443V20.3019H12.6987V18.4443C12.4339 18.2285 12.2644 17.8989 12.2644 17.5293C12.2644 16.8792 12.7882 16.3522 13.4344 16.3522C14.0804 16.3522 14.6043 16.8792 14.6043 17.5293C14.6043 17.8989 14.4348 18.2285 14.17 18.4443ZM10.2313 10.8976C10.2313 9.11768 11.6653 7.67481 13.4343 7.67481C15.2033 7.67481 16.6374 9.11768 16.6374 10.8976V13.6219H10.2313V10.8976ZM18.3301 13.6219V10.8976C18.3301 8.17704 16.1382 5.97168 13.4343 5.97168C10.7305 5.97168 8.53854 8.17704 8.53854 10.8976V13.6219H7.05225V22.9508H19.8164V13.6219H18.3301Z" fill="#2FC6F6"/></g></svg>`;

	const clip = `<svg width="17" height="19" viewBox="0 0 17 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M16.1313 7.48636C16.2696 7.62472 16.2696 7.84904 16.1313 7.98739L15.2028 8.91584C15.0645 9.05419 14.8401 9.05419 14.7018 8.91584L9.2344 3.44845C7.66198 1.87603 5.08893 1.87603 3.5165 3.44845C1.94408 5.02087 1.94408 7.59393 3.5165 9.16635L10.2236 15.8735C11.2097 16.8596 12.8112 16.8596 13.7973 15.8735C14.7834 14.8874 14.7834 13.2859 13.7973 12.2998L7.80493 6.3074C7.40456 5.90703 6.77582 5.90703 6.37545 6.3074C5.97509 6.70777 5.97509 7.33651 6.37545 7.73688L11.1281 12.4895C11.2665 12.6279 11.2665 12.8522 11.1281 12.9906L10.1997 13.919C10.0613 14.0574 9.83698 14.0574 9.69863 13.919L4.94598 9.16635C3.7594 7.97977 3.7594 6.0645 4.94598 4.87793C6.13256 3.69135 8.04783 3.69135 9.2344 4.87793L15.2268 10.8703C16.9991 12.6426 16.9991 15.5307 15.2268 17.303C13.4545 19.0752 10.5664 19.0752 8.79416 17.303L2.08703 10.5958C-0.271604 8.23719 -0.271604 4.37761 2.08703 2.01898C4.44566 -0.339659 8.30525 -0.339659 10.6639 2.01898L16.1313 7.48636Z" fill="#828B95"/></svg>`;

	const location = (color = '#559be6') => `<svg width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" clip-rule="evenodd" d="M10.7778 1.5C7.57426 1.5 5 4.03472 5 7.19126C5 10.523 8.43279 15.1735 10.0064 17.1303C10.405 17.626 11.1466 17.6225 11.5417 17.124C13.1119 15.1428 16.5556 10.4287 16.5556 7.19126C16.5556 4.03472 13.9813 1.5 10.7778 1.5ZM10.7778 9.77738C9.30749 9.77738 8.15133 8.63953 8.15133 7.19027C8.15133 5.742 9.30648 4.60315 10.7778 4.60315C12.2481 4.60315 13.4042 5.741 13.4042 7.19027C13.4042 8.6395 12.2481 9.77738 10.7778 9.77738Z" fill="${color}"/> </svg>`;

	const dateTime = (color = '#d5d7db') => `<svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.84799 7.67198H8.94442C9.16525 7.67198 9.34427 7.851 9.34427 8.07183V9.16826C9.34427 9.38909 9.16525 9.56811 8.94442 9.56811H7.84799C7.62716 9.56811 7.44814 9.38909 7.44814 9.16826V8.07183C7.44814 7.851 7.62716 7.67198 7.84799 7.67198Z" fill="${color}"/><path d="M6.10108 7.67219H5.00465C4.78382 7.67219 4.6048 7.85122 4.6048 8.07205V9.16848C4.6048 9.38931 4.78382 9.56833 5.00465 9.56833H6.10108C6.32191 9.56833 6.50093 9.38931 6.50093 9.16848V8.07205C6.50093 7.85122 6.32191 7.67219 6.10108 7.67219Z" fill="${color}"/><path d="M6.10016 10.5162H5.00373C4.7829 10.5162 4.60388 10.6952 4.60388 10.916V12.0125C4.60388 12.2333 4.7829 12.4123 5.00373 12.4123H6.10016C6.32099 12.4123 6.50001 12.2333 6.50001 12.0125V10.916C6.50001 10.6952 6.32099 10.5162 6.10016 10.5162Z" fill="${color}"/><path d="M8.94442 10.5162H7.84799C7.62716 10.5162 7.44814 10.6952 7.44814 10.916V12.0125C7.44814 12.2333 7.62716 12.4123 7.84799 12.4123H8.94442C9.16525 12.4123 9.34427 12.2333 9.34427 12.0125V10.916C9.34427 10.6952 9.16525 10.5162 8.94442 10.5162Z" fill="${color}"/><path d="M10.6923 7.67198H11.7887C12.0095 7.67198 12.1885 7.851 12.1885 8.07183V9.16826C12.1885 9.38909 12.0095 9.56811 11.7887 9.56811H10.6923C10.4714 9.56811 10.2924 9.38909 10.2924 9.16826V8.07183C10.2924 7.851 10.4714 7.67198 10.6923 7.67198Z" fill="${color}"/><path fill-rule="evenodd" clip-rule="evenodd" d="M12.8856 3.12858V2.606H14.0402C15.0946 2.6729 15.9114 3.59367 15.8924 4.69631V15.1478C15.8924 15.7247 15.4444 16.193 14.8901 16.193H1.80638C1.25313 16.193 0.80411 15.7247 0.80411 15.1478V4.69631C0.800101 4.64196 0.798096 4.58866 0.798096 4.53535C0.800101 3.46721 1.63199 2.60392 2.65631 2.606H3.81093V3.12858C3.81093 3.99397 4.48345 4.69631 5.31433 4.69631C6.14522 4.69631 6.81774 3.99397 6.81774 3.12858V2.606H9.87876V3.12858C9.87876 3.99397 10.5523 4.69631 11.3822 4.69631C12.2121 4.69631 12.8856 3.99397 12.8856 3.12858ZM13.8879 14.1026H2.80868V5.80072H13.8879V14.1026Z" fill="${color}"/><path d="M6.05091 1.77197V2.92163C6.05091 3.34596 5.72115 3.68981 5.31423 3.68981C4.90731 3.68981 4.57756 3.34596 4.57756 2.92163V1.77197L4.58296 1.67215C4.62748 1.29116 4.94139 0.996613 5.31924 0.998545C5.72617 1.00169 6.05291 1.34763 6.05091 1.77197Z" fill="${color}"/><path d="M12.0778 1.80016V2.89025C12.0778 3.29054 11.7661 3.61558 11.3812 3.61558C10.9963 3.61454 10.6866 3.2895 10.6866 2.88921V1.80016C10.6866 1.39882 10.9983 1.07483 11.3822 1.07483C11.7661 1.07483 12.0778 1.39882 12.0778 1.80016Z" fill="${color}"/></svg>`;

	module.exports = {
		dragButton,
		magnifier,
		magnifierWithMenuAndDot,
		plus,
		smallCross,
		cross,
		bigCross,
		chevronRight,
		chevronDown,
		chevronUp,
		arrowRight,
		info,
		pen,
		lock,
		clip,
		location,
		dateTime,
	};
});