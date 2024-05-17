<?php

return [
	'extensions' => [
		'analytics-label',
		'alert',
		'haptics',
		'rest',
		'loc',
		'layout/ui/detail-card/action/check-for-changes',
		'layout/ui/detail-card/tabs/factory/type',
		'layout/ui/widget-header-button',
		'layout/ui/plan-restriction',
		'native/contacts',
		'notify',
		'notify-manager',
		'utils/prop',
		'utils/object',
		'utils/string',
		'utils/function',
		'utils/type',
		'event-emitter',
		'pull/client/events',

		'crm:assets/entity',
		'crm:category-list-view',
		'crm:storage/category',
		'crm:loc',
		'crm:required-fields',
		'crm:timeline/scheduler',
		'crm:type',
		'crm:entity-actions',
		'crm:stage-list/item',
		'crm:stage-list-view',
		'crm:stage-list',

		'crm:entity-detail/component/additional-button-provider',
		'crm:entity-detail/component/floating-button-provider',
		'crm:entity-detail/component/right-buttons-provider',
		'crm:entity-detail/component/aha-moments-manager',
		'crm:document/list',
		'crm:receive-payment/mode-selection',
		'crm:entity-document',

		'imconnector:connectors/telegram',

		'feature',
	],
	'bundle' => [
		'./ajax-error-handler',
		'./analytics-provider',
		'./custom-events',
		'./global-events',
		'./header-processor',
		'./menu-provider',
		'./on-close-handler',
		'./on-model-ready',
		'./set-available-tabs',
		'./payment-automation-menu-item',
		'./smart-activity-menu-item',
		'./timeline-push-processor',
		'./open-lines-menu-items',
	],
];
