/**
 * @module calendar/layout/sharing-empty-state
 */
jn.define('calendar/layout/sharing-empty-state', (require, exports, module) => {

	const { Loc } = require('loc');
	const { sharingDeactivated } = require('calendar/assets/common');

	/**
	 * @class SharingEmptyState
	 */
	class SharingEmptyState extends LayoutComponent
	{
		constructor(props)
		{
			super(props);

			const { stage2 } = this.props.layoutConfigDidMount().opacity

			this.opacity2 = stage2;
		}

		render()
		{
			return View(
				{
					testId: 'SharingEmptyState',
					style: {
						paddingTop: 24,
						width: '100%',
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						justifyContent: 'flex-start',
						opacity: this.opacity2,

					},
					ref: (ref) => this.props.setRefLayout1(ref),
				},
				View(
					{
						style: {
							width: '86%',
							textAlign: 'center',
							color: '#828B95',
							fontSize: 15,
							lineHeight: 18,
						}
					},
					View({
							testId: 'SharingEmptyStateTitle',
						},
						Text(
							{
							style: {
								fontWeight: '600',
								textAlign: 'center',
								color: '#828B95',
								fontSize: 15,
								lineHeight: 18,

							},
							text: Loc.getMessage('L_SD_TITLE')})
					),
					Text({
						testId: 'SharingEmptyStateDescription',
						style: {
							width: '90%',
							textAlign: 'center',
							color: '#828B95',
							fontSize: 15,
							lineHeight: 18,
						},
						text: Loc.getMessage('L_SD_DESCRIPTION')})
				),
				View(
					{
						style: {
							marginTop: 8,
							width: 264,
							height: 75,
							backgroundImageSvg: sharingDeactivated,
							backgroundSize: 'contain',
							backgroundRepeat: 'no-repeat',
						}
					}
				),
			)
		}
	}

	module.exports = { SharingEmptyState };
});