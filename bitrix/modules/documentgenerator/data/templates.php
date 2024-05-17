<?php

use Bitrix\DocumentGenerator\Body\Docx;
use Bitrix\DocumentGenerator\Driver;
use Bitrix\DocumentGenerator\Model;
use Bitrix\Main\Localization\Loc;
use Bitrix\Main\Numerator;

Loc::loadMessages(__FILE__);

$deal = 'Bitrix\Crm\Integration\DocumentGenerator\DataProvider\Deal';
$contact = 'Bitrix\Crm\Integration\DocumentGenerator\DataProvider\Contact';
$company = 'Bitrix\Crm\Integration\DocumentGenerator\DataProvider\Company';
$invoice = 'Bitrix\Crm\Integration\DocumentGenerator\DataProvider\Invoice';
$quote = 'Bitrix\Crm\Integration\DocumentGenerator\DataProvider\Quote';
$smartInvoice = 'Bitrix\Crm\Integration\DocumentGenerator\DataProvider\SmartInvoice';
$storeDocumentStoreAdjustment = 'Bitrix\Crm\Integration\DocumentGenerator\DataProvider\StoreDocumentStoreAdjustment';
$storeDocumentArrival = 'Bitrix\Crm\Integration\DocumentGenerator\DataProvider\StoreDocumentArrival';
$storeDocumentMoving = 'Bitrix\Crm\Integration\DocumentGenerator\DataProvider\StoreDocumentMoving';
$shipmentDocumentRealization = 'Bitrix\Crm\Integration\DocumentGenerator\DataProvider\ShipmentDocumentRealization';
$invoiceAndDeal = [$deal, $invoice, $smartInvoice];
$quoteAndDeal = [$deal, $quote];

$edmNumeratorRu = [
	'CONFIG' => [
		Numerator\Numerator::getType() => [
			'code' => 'EDM_RU',
			'name' => Loc::getMessage('DOCGEN_TEMPLATE_NUMERATOR_EDM_RU_NAME'),
			'template' => '{NUMBER}',
			'type' => Driver::NUMERATOR_TYPE,
		],
		Numerator\Generator\SequentNumberGenerator::getType() => [
			'isDirectNumeration' => true,
		],
	],
];

$edmNumeratorBy = $edmNumeratorRu;
$edmNumeratorBy['CONFIG'][Numerator\Numerator::getType()]['code'] = 'EDM_BY';
$edmNumeratorBy['CONFIG'][Numerator\Numerator::getType()]['name'] = Loc::getMessage('DOCGEN_TEMPLATE_NUMERATOR_EDM_BY_NAME');

return [
	[
		'REGION' => 'ru',
		'NAME' => Loc::getMessage('DOCGEN_TEMPLATE_ACT_RU_NAME'),
		'CODE' => 'ACT_RU',
		'SORT' => 100,
		'MODULE_ID' => 'crm',
		'BODY_TYPE' => Docx::class,
		'FILE' => '/bitrix/modules/documentgenerator/data/templates/act_ru.docx',
		'PROVIDERS' => array_merge($invoiceAndDeal, [$shipmentDocumentRealization]),
		'PRODUCTS_TABLE_VARIANT' => Model\TemplateTable::PRODUCTS_TABLE_VARIANT_SERVICE
	],
	[
		'REGION' => 'ru',
		'NAME' => Loc::getMessage('DOCGEN_TEMPLATE_BILL_RU_NAME'),
		'CODE' => 'BILL_RU',
		'SORT' => 200,
		'MODULE_ID' => 'crm',
		'BODY_TYPE' => Docx::class,
		'FILE' => '/bitrix/modules/documentgenerator/data/templates/bill_ru.docx',
		'PROVIDERS' => $invoiceAndDeal,
	],
	[
		'REGION' => 'ru',
		'NAME' => Loc::getMessage('DOCGEN_TEMPLATE_INVOICE_RU_NAME'),
		'CODE' => 'INVOICE_RU',
		'SORT' => 400,
		'MODULE_ID' => 'crm',
		'BODY_TYPE' => Docx::class,
		'FILE' => '/bitrix/modules/documentgenerator/data/templates/faktura_ru.docx',
		'PROVIDERS' => $invoiceAndDeal,
	],
	[
		'REGION' => 'ru',
		'NAME' => Loc::getMessage('DOCGEN_TEMPLATE_PACKING_RU_NAME'),
		'CODE' => 'PACKING_RU',
		'SORT' => 500,
		'MODULE_ID' => 'crm',
		'BODY_TYPE' => Docx::class,
		'FILE' => '/bitrix/modules/documentgenerator/data/templates/nakl_ru.docx',
		'PROVIDERS' => $invoiceAndDeal,
		'PRODUCTS_TABLE_VARIANT' => Model\TemplateTable::PRODUCTS_TABLE_VARIANT_GOODS
	],
	[
		'REGION' => 'ru',
		'NAME' => Loc::getMessage('DOCGEN_TEMPLATE_PROXY_RU_NAME'),
		'CODE' => 'PROXY_RU',
		'SORT' => 600,
		'MODULE_ID' => 'crm',
		'BODY_TYPE' => Docx::class,
		'FILE' => '/bitrix/modules/documentgenerator/data/templates/dover_ru.docx',
		'PROVIDERS' => [$deal],
	],
	[
		'REGION' => 'ru',
		'NAME' => Loc::getMessage('DOCGEN_TEMPLATE_QUOTE_RU_NAME'),
		'CODE' => 'QUOTE_RU',
		'SORT' => 700,
		'MODULE_ID' => 'crm',
		'BODY_TYPE' => Docx::class,
		'FILE' => '/bitrix/modules/documentgenerator/data/templates/quote_ru.docx',
		'PROVIDERS' => $quoteAndDeal,
	],
	[
		'REGION' => 'ru',
		'NAME' => Loc::getMessage('DOCGEN_TEMPLATE_DOGOVOR_PODRYAD_RU_NAME'),
		'CODE' => 'DOGOVOR_PODRYAD_RU',
		'SORT' => 800,
		'MODULE_ID' => 'crm',
		'BODY_TYPE' => Docx::class,
		'FILE' => '/bitrix/modules/documentgenerator/data/templates/dog_podryad_ru.docx',
		'PROVIDERS' => [$deal],
	],
	[
		'REGION' => 'ru',
		'NAME' => Loc::getMessage('DOCGEN_TEMPLATE_DOG_POSTAVKA_RU_NAME'),
		'CODE' => 'DOG_POSTAVKA_RU',
		'SORT' => 900,
		'MODULE_ID' => 'crm',
		'BODY_TYPE' => Docx::class,
		'FILE' => '/bitrix/modules/documentgenerator/data/templates/dog_postavka_ru.docx',
		'PROVIDERS' => [$deal],
	],
	[
		'REGION' => 'ru',
		'NAME' => Loc::getMessage('DOCGEN_TEMPLATE_DOG_USLUGI_RU_NAME'),
		'CODE' => 'DOG_USLUGI_RU',
		'SORT' => 1000,
		'MODULE_ID' => 'crm',
		'BODY_TYPE' => Docx::class,
		'FILE' => '/bitrix/modules/documentgenerator/data/templates/dog_uslugi_ru.docx',
		'PROVIDERS' => [$deal],
	],
	[
		'REGION' => 'ru',
		'NAME' => Loc::getMessage('DOCGEN_TEMPLATE_UPD_RU_NAME'),
		'CODE' => 'UPD_RU',
		'SORT' => 1100,
		'MODULE_ID' => 'crm',
		'BODY_TYPE' => Docx::class,
		'FILE' => '/bitrix/modules/documentgenerator/data/templates/upd_ru.docx',
		'PROVIDERS' => [$deal],
	],
	[
		'REGION' => 'ru',
		'NAME' => Loc::getMessage('DOCGEN_TEMPLATE_STORE_DOC_STORE_ADJUSTMENT_RU_NAME'),
		'CODE' => 'STORE_DOC_STORE_ADJUSTMENT',
		'SORT' => 1200,
		'MODULE_ID' => 'crm',
		'BODY_TYPE' => Docx::class,
		'FILE' => '/bitrix/modules/documentgenerator/data/templates/store_doc_store_adjustment_ru.docx',
		'PROVIDERS' => [$storeDocumentStoreAdjustment],
		'PRODUCTS_TABLE_VARIANT' => Model\TemplateTable::PRODUCTS_TABLE_VARIANT_GOODS
	],
	[
		'REGION' => 'ru',
		'NAME' => Loc::getMessage('DOCGEN_TEMPLATE_STORE_DOC_ARRIVAL_RU_NAME'),
		'CODE' => 'STORE_DOC_ARRIVAL',
		'SORT' => 1300,
		'MODULE_ID' => 'crm',
		'BODY_TYPE' => Docx::class,
		'FILE' => '/bitrix/modules/documentgenerator/data/templates/store_doc_arrival_ru.docx',
		'PROVIDERS' => [$storeDocumentArrival],
		'PRODUCTS_TABLE_VARIANT' => Model\TemplateTable::PRODUCTS_TABLE_VARIANT_GOODS
	],
	[
		'REGION' => 'ru',
		'NAME' => Loc::getMessage('DOCGEN_TEMPLATE_STORE_DOC_MOVING_RU_NAME'),
		'CODE' => 'STORE_DOC_MOVING',
		'SORT' => 1400,
		'MODULE_ID' => 'crm',
		'BODY_TYPE' => Docx::class,
		'FILE' => '/bitrix/modules/documentgenerator/data/templates/store_doc_moving_ru.docx',
		'PROVIDERS' => [$storeDocumentMoving],
		'PRODUCTS_TABLE_VARIANT' => Model\TemplateTable::PRODUCTS_TABLE_VARIANT_GOODS
	],
	[
		'REGION' => 'ru',
		'NAME' => Loc::getMessage('DOCGEN_TEMPLATE_SHIPMENT_DOC_REALIZATION_RU_NAME'),
		'CODE' => 'STORE_SHIPMENT_DOC_REALIZATION',
		'SORT' => 1500,
		'MODULE_ID' => 'crm',
		'BODY_TYPE' => Docx::class,
		'FILE' => '/bitrix/modules/documentgenerator/data/templates/shipment_doc_realization_ru.docx',
		'PROVIDERS' => [$shipmentDocumentRealization],
		'PRODUCTS_TABLE_VARIANT' => Model\TemplateTable::PRODUCTS_TABLE_VARIANT_GOODS
	],
	[
		'REGION' => 'ru',
		'NAME' => Loc::getMessage('DOCGEN_TEMPLATE_EDM_AGREEMENT_IND_RU_NAME'),
		'CODE' => 'EDM_AGREEMENT_IND_DEAL_RU',
		'SORT' => 1600,
		'MODULE_ID' => 'crm',
		'BODY_TYPE' => Docx::class,
		'FILE' => '/bitrix/modules/documentgenerator/data/templates/edm_agreement_ind_deal_ru.docx',
		'PROVIDERS' => [$deal],
		'NUMERATOR' => $edmNumeratorRu,
	],
	[
		'REGION' => 'ru',
		'NAME' => Loc::getMessage('DOCGEN_TEMPLATE_EDM_AGREEMENT_IND_RU_NAME'),
		'CODE' => 'EDM_AGREEMENT_IND_CONTACT_RU',
		'SORT' => 1700,
		'MODULE_ID' => 'crm',
		'BODY_TYPE' => Docx::class,
		'FILE' => '/bitrix/modules/documentgenerator/data/templates/edm_agreement_ind_contact_ru.docx',
		'PROVIDERS' => [$contact],
		'NUMERATOR' => $edmNumeratorRu,
	],
	[
		'REGION' => 'ru',
		'NAME' => Loc::getMessage('DOCGEN_TEMPLATE_EDM_AGREEMENT_ORG_RU_NAME'),
		'CODE' => 'EDM_AGREEMENT_ORG_RU',
		'SORT' => 1800,
		'MODULE_ID' => 'crm',
		'BODY_TYPE' => Docx::class,
		'FILE' => '/bitrix/modules/documentgenerator/data/templates/edm_agreement_org_ru.docx',
		'PROVIDERS' => [$deal, $company],
		'NUMERATOR' => $edmNumeratorRu,
	],
	[
		'REGION' => 'ru',
		'NAME' => Loc::getMessage('DOCGEN_TEMPLATE_EDM_AGREEMENT_ORG_RU_NAME'),
		'CODE' => 'EDM_AGREEMENT_ORG_CONTACT_RU',
		'SORT' => 1900,
		'MODULE_ID' => 'crm',
		'BODY_TYPE' => Docx::class,
		'FILE' => '/bitrix/modules/documentgenerator/data/templates/edm_agreement_org_contact_ru.docx',
		'PROVIDERS' => [$contact],
		'NUMERATOR' => $edmNumeratorRu,
	],
	[
		'REGION' => 'by',
		'NAME' => Loc::getMessage('DOCGEN_TEMPLATE_ACT_BY_NAME'),
		'CODE' => 'ACT_BY',
		'SORT' => 100,
		'MODULE_ID' => 'crm',
		'BODY_TYPE' => Docx::class,
		'FILE' => '/bitrix/modules/documentgenerator/data/templates/act_by.docx',
		'PROVIDERS' => $invoiceAndDeal,
		'PRODUCTS_TABLE_VARIANT' => Model\TemplateTable::PRODUCTS_TABLE_VARIANT_SERVICE
	],
	[
		'REGION' => 'by',
		'NAME' => Loc::getMessage('DOCGEN_TEMPLATE_BILL_BY_NAME'),
		'CODE' => 'BILL_BY',
		'SORT' => 200,
		'MODULE_ID' => 'crm',
		'BODY_TYPE' => Docx::class,
		'FILE' => '/bitrix/modules/documentgenerator/data/templates/bill_by.docx',
		'PROVIDERS' => $invoiceAndDeal,
	],
	[
		'REGION' => 'by',
		'NAME' => Loc::getMessage('DOCGEN_TEMPLATE_DOVER_BY_NAME'),
		'CODE' => 'DOVER_BY',
		'SORT' => 300,
		'MODULE_ID' => 'crm',
		'BODY_TYPE' => Docx::class,
		'FILE' => '/bitrix/modules/documentgenerator/data/templates/dover_by.docx',
		'PROVIDERS' => [$deal],
	],
	[
		'REGION' => 'by',
		'NAME' => Loc::getMessage('DOCGEN_TEMPLATE_NAKL_BY_NAME'),
		'CODE' => 'NAKL_BY',
		'SORT' => 400,
		'MODULE_ID' => 'crm',
		'BODY_TYPE' => Docx::class,
		'FILE' => '/bitrix/modules/documentgenerator/data/templates/nakl_by.docx',
		'PROVIDERS' => [$deal],
		'PRODUCTS_TABLE_VARIANT' => Model\TemplateTable::PRODUCTS_TABLE_VARIANT_GOODS
	],
	[
		'REGION' => 'by',
		'NAME' => Loc::getMessage('DOCGEN_TEMPLATE_TTN_BY_NAME'),
		'CODE' => 'TTN_BY',
		'SORT' => 500,
		'MODULE_ID' => 'crm',
		'BODY_TYPE' => Docx::class,
		'FILE' => '/bitrix/modules/documentgenerator/data/templates/ttn_by.docx',
		'PROVIDERS' => [$deal],
		'PRODUCTS_TABLE_VARIANT' => Model\TemplateTable::PRODUCTS_TABLE_VARIANT_GOODS
	],
	[
		'REGION' => 'by',
		'NAME' => Loc::getMessage('DOCGEN_TEMPLATE_BILL_PROTOCOL_BY_NAME'),
		'CODE' => 'BILL_PROTOCOL_BY',
		'SORT' => 600,
		'MODULE_ID' => 'crm',
		'BODY_TYPE' => Docx::class,
		'FILE' => '/bitrix/modules/documentgenerator/data/templates/bill_protocol_by.docx',
		'PROVIDERS' => [$deal],
	],
	[
		'REGION' => 'by',
		'NAME' => Loc::getMessage('DOCGEN_TEMPLATE_DOGOVOR_PODRYAD_BY_NAME'),
		'CODE' => 'DOGOVOR_PODRYAD_BY',
		'SORT' => 700,
		'MODULE_ID' => 'crm',
		'BODY_TYPE' => Docx::class,
		'FILE' => '/bitrix/modules/documentgenerator/data/templates/dogovor_podryad_by.docx',
		'PROVIDERS' => [$deal],
	],
	[
		'REGION' => 'by',
		'NAME' => Loc::getMessage('DOCGEN_TEMPLATE_DOGOVOR_PRODAZHA_BY_NAME'),
		'CODE' => 'DOGOVOR_PRODAZHA_BY',
		'SORT' => 800,
		'MODULE_ID' => 'crm',
		'BODY_TYPE' => Docx::class,
		'FILE' => '/bitrix/modules/documentgenerator/data/templates/dogovor_prodazha_by.docx',
		'PROVIDERS' => [$deal],
	],
	[
		'REGION' => 'by',
		'NAME' => Loc::getMessage('DOCGEN_TEMPLATE_DOGOVOR_USLUGI_BY_NAME'),
		'CODE' => 'DOGOVOR_USLUGI_BY',
		'SORT' => 900,
		'MODULE_ID' => 'crm',
		'BODY_TYPE' => Docx::class,
		'FILE' => '/bitrix/modules/documentgenerator/data/templates/dogovor_uslugi_by.docx',
		'PROVIDERS' => [$deal],
	],
	[
		'REGION' => 'by',
		'NAME' => Loc::getMessage('DOCGEN_TEMPLATE_QUOTE_BY_NAME'),
		'CODE' => 'QUOTE_BY',
		'SORT' => 1000,
		'MODULE_ID' => 'crm',
		'BODY_TYPE' => Docx::class,
		'FILE' => '/bitrix/modules/documentgenerator/data/templates/quote_by.docx',
		'PROVIDERS' => $quoteAndDeal,
	],
	[
		'REGION' => 'by',
		'NAME' => Loc::getMessage('DOCGEN_TEMPLATE_EDM_AGREEMENT_IND_BY_NAME'),
		'CODE' => 'EDM_AGREEMENT_IND_DEAL_BY',
		'SORT' => 1100,
		'MODULE_ID' => 'crm',
		'BODY_TYPE' => Docx::class,
		'FILE' => '/bitrix/modules/documentgenerator/data/templates/edm_agreement_ind_deal_by.docx',
		'PROVIDERS' => [$deal],
		'NUMERATOR' => $edmNumeratorBy,
	],
	[
		'REGION' => 'by',
		'NAME' => Loc::getMessage('DOCGEN_TEMPLATE_EDM_AGREEMENT_IND_BY_NAME'),
		'CODE' => 'EDM_AGREEMENT_IND_CONTACT_BY',
		'SORT' => 1200,
		'MODULE_ID' => 'crm',
		'BODY_TYPE' => Docx::class,
		'FILE' => '/bitrix/modules/documentgenerator/data/templates/edm_agreement_ind_contact_by.docx',
		'PROVIDERS' => [$contact],
		'NUMERATOR' => $edmNumeratorBy,
	],
	[
		'REGION' => 'by',
		'NAME' => Loc::getMessage('DOCGEN_TEMPLATE_EDM_AGREEMENT_ORG_BY_NAME'),
		'CODE' => 'EDM_AGREEMENT_ORG_BY',
		'SORT' => 1300,
		'MODULE_ID' => 'crm',
		'BODY_TYPE' => Docx::class,
		'FILE' => '/bitrix/modules/documentgenerator/data/templates/edm_agreement_org_by.docx',
		'PROVIDERS' => [$deal, $company],
		'NUMERATOR' => $edmNumeratorBy,
	],
	[
		'REGION' => 'by',
		'NAME' => Loc::getMessage('DOCGEN_TEMPLATE_EDM_AGREEMENT_ORG_BY_NAME'),
		'CODE' => 'EDM_AGREEMENT_ORG_CONTACT_BY',
		'SORT' => 1400,
		'MODULE_ID' => 'crm',
		'BODY_TYPE' => Docx::class,
		'FILE' => '/bitrix/modules/documentgenerator/data/templates/edm_agreement_org_contact_by.docx',
		'PROVIDERS' => [$contact],
		'NUMERATOR' => $edmNumeratorBy,
	],
	[
		'REGION' => 'kz',
		'NAME' => Loc::getMessage('DOCGEN_TEMPLATE_ACT_KZ_NAME'),
		'CODE' => 'ACT_KZ',
		'SORT' => 100,
		'MODULE_ID' => 'crm',
		'BODY_TYPE' => Docx::class,
		'FILE' => '/bitrix/modules/documentgenerator/data/templates/act_kz.docx',
		'PROVIDERS' => $invoiceAndDeal,
		'PRODUCTS_TABLE_VARIANT' => Model\TemplateTable::PRODUCTS_TABLE_VARIANT_SERVICE
	],
	[
		'REGION' => 'kz',
		'NAME' => Loc::getMessage('DOCGEN_TEMPLATE_BILL_KZ_NAME'),
		'CODE' => 'BILL_KZ',
		'SORT' => 200,
		'MODULE_ID' => 'crm',
		'BODY_TYPE' => Docx::class,
		'FILE' => '/bitrix/modules/documentgenerator/data/templates/bill_kz.docx',
		'PROVIDERS' => $invoiceAndDeal,
	],
	[
		'REGION' => 'kz',
		'NAME' => Loc::getMessage('DOCGEN_TEMPLATE_DOVER_KZ_NAME'),
		'CODE' => 'DOVER_KZ',
		'SORT' => 300,
		'MODULE_ID' => 'crm',
		'BODY_TYPE' => Docx::class,
		'FILE' => '/bitrix/modules/documentgenerator/data/templates/dover_kz.docx',
		'PROVIDERS' => [$deal],
	],
	[
		'REGION' => 'kz',
		'NAME' => Loc::getMessage('DOCGEN_TEMPLATE_FAKTURA_KZ_NAME'),
		'CODE' => 'FAKTURA_KZ',
		'SORT' => 400,
		'MODULE_ID' => 'crm',
		'BODY_TYPE' => Docx::class,
		'FILE' => '/bitrix/modules/documentgenerator/data/templates/faktura_kz.docx',
		'PROVIDERS' => [$deal],
	],
	[
		'REGION' => 'kz',
		'NAME' => Loc::getMessage('DOCGEN_TEMPLATE_NAKL_KZ_NAME'),
		'CODE' => 'NAKL_KZ',
		'SORT' => 500,
		'MODULE_ID' => 'crm',
		'BODY_TYPE' => Docx::class,
		'FILE' => '/bitrix/modules/documentgenerator/data/templates/nakl_kz.docx',
		'PROVIDERS' => [$deal],
		'PRODUCTS_TABLE_VARIANT' => Model\TemplateTable::PRODUCTS_TABLE_VARIANT_GOODS
	],
	[
		'REGION' => 'kz',
		'NAME' => Loc::getMessage('DOCGEN_TEMPLATE_QUOTE_KZ_NAME'),
		'CODE' => 'QUOTE_KZ',
		'SORT' => 600,
		'MODULE_ID' => 'crm',
		'BODY_TYPE' => Docx::class,
		'FILE' => '/bitrix/modules/documentgenerator/data/templates/quote_kz.docx',
		'PROVIDERS' => $quoteAndDeal,
	],
	[
		'REGION' => 'ua',
		'NAME' => Loc::getMessage('DOCGEN_TEMPLATE_ACT_UA_NAME'),
		'CODE' => 'ACT_UA',
		'SORT' => 100,
		'MODULE_ID' => 'crm',
		'BODY_TYPE' => Docx::class,
		'FILE' => '/bitrix/modules/documentgenerator/data/templates/act_ua.docx',
		'PROVIDERS' => $invoiceAndDeal,
		'PRODUCTS_TABLE_VARIANT' => Model\TemplateTable::PRODUCTS_TABLE_VARIANT_SERVICE
	],
	[
		'REGION' => 'ua',
		'NAME' => Loc::getMessage('DOCGEN_TEMPLATE_BILL_UA_NAME'),
		'CODE' => 'BILL_IBAN_UA',
		'SORT' => 200,
		'MODULE_ID' => 'crm',
		'BODY_TYPE' => Docx::class,
		'FILE' => '/bitrix/modules/documentgenerator/data/templates/bill_iban_ua.docx',
		'PROVIDERS' => $invoiceAndDeal,
	],
	[
		'REGION' => 'ua',
		'NAME' => Loc::getMessage('DOCGEN_TEMPLATE_DOVER_UA_NAME'),
		'CODE' => 'DOVER_UA',
		'SORT' => 300,
		'MODULE_ID' => 'crm',
		'BODY_TYPE' => Docx::class,
		'FILE' => '/bitrix/modules/documentgenerator/data/templates/dover_ua.docx',
		'PROVIDERS' => [$deal],
	],
	[
		'REGION' => 'ua',
		'NAME' => Loc::getMessage('DOCGEN_TEMPLATE_DOG_PODRYAD_UA_NAME'),
		'CODE' => 'DOG_PODRYAD_UA',
		'SORT' => 400,
		'MODULE_ID' => 'crm',
		'BODY_TYPE' => Docx::class,
		'FILE' => '/bitrix/modules/documentgenerator/data/templates/dog_podryad_ua.docx',
		'PROVIDERS' => [$deal],
	],
	[
		'REGION' => 'ua',
		'NAME' => Loc::getMessage('DOCGEN_TEMPLATE_DOG_POSTAVKA_UA_NAME'),
		'CODE' => 'DOG_POSTAVKA_UA',
		'SORT' => 500,
		'MODULE_ID' => 'crm',
		'BODY_TYPE' => Docx::class,
		'FILE' => '/bitrix/modules/documentgenerator/data/templates/dog_postavka_ua.docx',
		'PROVIDERS' => [$deal],
	],
	[
		'REGION' => 'ua',
		'NAME' => Loc::getMessage('DOCGEN_TEMPLATE_DOG_USLUGI_UA_NAME'),
		'CODE' => 'DOG_USLUGI_UA',
		'SORT' => 600,
		'MODULE_ID' => 'crm',
		'BODY_TYPE' => Docx::class,
		'FILE' => '/bitrix/modules/documentgenerator/data/templates/dog_yslugi_ua.docx',
		'PROVIDERS' => [$deal],
	],
	[
		'REGION' => 'ua',
		'NAME' => Loc::getMessage('DOCGEN_TEMPLATE_NAKL_UA_NAME'),
		'CODE' => 'NAKL_UA',
		'SORT' => 700,
		'MODULE_ID' => 'crm',
		'BODY_TYPE' => Docx::class,
		'FILE' => '/bitrix/modules/documentgenerator/data/templates/nakl_ua.docx',
		'PROVIDERS' => [$deal],
		'PRODUCTS_TABLE_VARIANT' => Model\TemplateTable::PRODUCTS_TABLE_VARIANT_GOODS
	],
	[
		'REGION' => 'ua',
		'NAME' => Loc::getMessage('DOCGEN_TEMPLATE_QUOTE_UA_NAME'),
		'CODE' => 'QUOTE_UA',
		'SORT' => 800,
		'MODULE_ID' => 'crm',
		'BODY_TYPE' => Docx::class,
		'FILE' => '/bitrix/modules/documentgenerator/data/templates/quote_ua.docx',
		'PROVIDERS' => $quoteAndDeal,
	],
	[
		'REGION' => 'ua',
		'NAME' => Loc::getMessage('DOCGEN_TEMPLATE_BILL_UA_NAME_OLD'),
		'CODE' => 'BILL_UA',
		'SORT' => 10000,
		'MODULE_ID' => 'crm',
		'BODY_TYPE' => Docx::class,
		'FILE' => '/bitrix/modules/documentgenerator/data/templates/bill_ua.docx',
		'PROVIDERS' => $invoiceAndDeal,
	],
	[
		'REGION' => 'de',
		'NAME' => Loc::getMessage('DOCGEN_TEMPLATE_ESTIMATE_DE_NAME'),
		'CODE' => 'ESTIMATE_DE',
		'SORT' => 100,
		'MODULE_ID' => 'crm',
		'BODY_TYPE' => Docx::class,
		'FILE' => '/bitrix/modules/documentgenerator/data/templates/quote_de.docx',
		'PROVIDERS' => $quoteAndDeal,
	],
	[
		'REGION' => 'de',
		'NAME' => Loc::getMessage('DOCGEN_TEMPLATE_INVOICE_DE_NAME'),
		'CODE' => 'INVOICE_DE',
		'SORT' => 200,
		'MODULE_ID' => 'crm',
		'BODY_TYPE' => Docx::class,
		'FILE' => '/bitrix/modules/documentgenerator/data/templates/invoice_de.docx',
		'PROVIDERS' => $invoiceAndDeal,
	],
	[
		'REGION' => 'de',
		'NAME' => Loc::getMessage('DOCGEN_TEMPLATE_PACKING_SLIP_DE_NAME'),
		'CODE' => 'PACKING_SLIP_DE',
		'SORT' => 300,
		'MODULE_ID' => 'crm',
		'BODY_TYPE' => Docx::class,
		'FILE' => '/bitrix/modules/documentgenerator/data/templates/packing_slip_de.docx',
		'PROVIDERS' => [$deal],
	],
	[
		'REGION' => 'de',
		'NAME' => Loc::getMessage('DOCGEN_TEMPLATE_SALES_ORDER_DE_NAME'),
		'CODE' => 'SALES_ORDER_DE',
		'SORT' => 400,
		'MODULE_ID' => 'crm',
		'BODY_TYPE' => Docx::class,
		'FILE' => '/bitrix/modules/documentgenerator/data/templates/sales_order_de.docx',
		'PROVIDERS' => [$deal],
	],
	[
		'REGION' => 'uk',
		'NAME' => Loc::getMessage('DOCGEN_TEMPLATE_ESTIMATE_UK_NAME'),
		'CODE' => 'ESTIMATE_UK',
		'SORT' => 100,
		'MODULE_ID' => 'crm',
		'BODY_TYPE' => Docx::class,
		'FILE' => '/bitrix/modules/documentgenerator/data/templates/quote_uk.docx',
		'PROVIDERS' => $quoteAndDeal,
	],
	[
		'REGION' => 'uk',
		'NAME' => Loc::getMessage('DOCGEN_TEMPLATE_INVOICE_UK_NAME'),
		'CODE' => 'INVOICE_UK',
		'SORT' => 200,
		'MODULE_ID' => 'crm',
		'BODY_TYPE' => Docx::class,
		'FILE' => '/bitrix/modules/documentgenerator/data/templates/invoice_uk.docx',
		'PROVIDERS' => $invoiceAndDeal,
	],
	[
		'REGION' => 'uk',
		'NAME' => Loc::getMessage('DOCGEN_TEMPLATE_PACKING_SLIP_UK_NAME'),
		'CODE' => 'PACKING_SLIP_UK',
		'SORT' => 300,
		'MODULE_ID' => 'crm',
		'BODY_TYPE' => Docx::class,
		'FILE' => '/bitrix/modules/documentgenerator/data/templates/packing_slip_uk.docx',
		'PROVIDERS' => [$deal],
	],
	[
		'REGION' => 'uk',
		'NAME' => Loc::getMessage('DOCGEN_TEMPLATE_SALES_ORDER_UK_NAME'),
		'CODE' => 'SALES_ORDER_UK',
		'SORT' => 400,
		'MODULE_ID' => 'crm',
		'BODY_TYPE' => Docx::class,
		'FILE' => '/bitrix/modules/documentgenerator/data/templates/sales_order_uk.docx',
		'PROVIDERS' => [$deal],
	],
	[
		'REGION' => 'br',
		'NAME' => Loc::getMessage('DOCGEN_TEMPLATE_INVOICE_BR_NAME'),
		'CODE' => 'INVOICE_BR',
		'SORT' => 100,
		'MODULE_ID' => 'crm',
		'BODY_TYPE' => Docx::class,
		'FILE' => '/bitrix/modules/documentgenerator/data/templates/invoice_br.docx',
		'PROVIDERS' => $invoiceAndDeal,
	],
	[
		'REGION' => 'br',
		'NAME' => Loc::getMessage('DOCGEN_TEMPLATE_QUOTE_BR_NAME'),
		'CODE' => 'QUOTE_BR',
		'SORT' => 200,
		'MODULE_ID' => 'crm',
		'BODY_TYPE' => Docx::class,
		'FILE' => '/bitrix/modules/documentgenerator/data/templates/quote_br.docx',
		'PROVIDERS' => $quoteAndDeal,
	],
	[
		'REGION' => 'mx',
		'NAME' => Loc::getMessage('DOCGEN_TEMPLATE_QUOTE_MX_NAME'),
		'CODE' => 'QUOTE_MX',
		'SORT' => 100,
		'MODULE_ID' => 'crm',
		'BODY_TYPE' => Docx::class,
		'FILE' => '/bitrix/modules/documentgenerator/data/templates/quote_mx.docx',
		'PROVIDERS' => $quoteAndDeal,
	],
	[
		'REGION' => 'pl',
		'NAME' => Loc::getMessage('DOCGEN_TEMPLATE_INVOICE_PL_NAME'),
		'CODE' => 'INVOICE_PL',
		'SORT' => 100,
		'MODULE_ID' => 'crm',
		'BODY_TYPE' => Docx::class,
		'FILE' => '/bitrix/modules/documentgenerator/data/templates/invoice_pl.docx',
		'PROVIDERS' => $invoiceAndDeal,
	],
	[
		'REGION' => 'pl',
		'NAME' => Loc::getMessage('DOCGEN_TEMPLATE_SALES_ORDER_PL_NAME'),
		'CODE' => 'SALES_ORDER_PL',
		'SORT' => 200,
		'MODULE_ID' => 'crm',
		'BODY_TYPE' => Docx::class,
		'FILE' => '/bitrix/modules/documentgenerator/data/templates/sales_order_pl.docx',
		'PROVIDERS' => [$deal],
	],
	[
		'REGION' => 'fr',
		'NAME' => Loc::getMessage('DOCGEN_TEMPLATE_INVOICE_FR_NAME'),
		'CODE' => 'INVOICE_FR',
		'SORT' => 100,
		'MODULE_ID' => 'crm',
		'BODY_TYPE' => Docx::class,
		'FILE' => '/bitrix/modules/documentgenerator/data/templates/invoice_fr.docx',
		'PROVIDERS' => $invoiceAndDeal,
	],
	[
		'REGION' => 'fr',
		'NAME' => Loc::getMessage('DOCGEN_TEMPLATE_QUOTE_FR_NAME'),
		'CODE' => 'QUOTE_FR',
		'SORT' => 200,
		'MODULE_ID' => 'crm',
		'BODY_TYPE' => Docx::class,
		'FILE' => '/bitrix/modules/documentgenerator/data/templates/quote_fr.docx',
		'PROVIDERS' => $quoteAndDeal,
	],
	[
		'REGION' => 'sp',
		'NAME' => Loc::getMessage('DOCGEN_TEMPLATE_INVOICE_SP_NAME'),
		'CODE' => 'INVOICE_SP',
		'SORT' => 100,
		'MODULE_ID' => 'crm',
		'BODY_TYPE' => Docx::class,
		'FILE' => '/bitrix/modules/documentgenerator/data/templates/invoice_sp.docx',
		'PROVIDERS' => $invoiceAndDeal,
	],
	[
		'REGION' => 'sp',
		'NAME' => Loc::getMessage('DOCGEN_TEMPLATE_QUOTE_SP_NAME'),
		'CODE' => 'QUOTE_SP',
		'SORT' => 200,
		'MODULE_ID' => 'crm',
		'BODY_TYPE' => Docx::class,
		'FILE' => '/bitrix/modules/documentgenerator/data/templates/quote_sp.docx',
		'PROVIDERS' => $quoteAndDeal,
	],
];
